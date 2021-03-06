import * as dom from '../utils/dom';

export default class SliderUI {
  constructor(el, options) {
    this.el = el;
    this.wrapperEl = this.el.querySelectorAll('.slider-wrapper')[0];
    this.slideEl = this.el.querySelectorAll('.slider-slide');

    // スライドのインデックス
    this.index = 0;

    // スライド数
    this.slidesCount = this.slideEl.length;

    // wrapperのtranslateX
    this.translateX = 0;

    // タッチ開始時点
    this.startX = 0;
    this.startY = 0;

    // 現在のタッチ地点
    this.currentX = 0;
    this.currentY = 0;
    this.currentClientX = 0;

    // タッチ終了地点
    this.lastClientX = 0;
    this.lastTranslateX = 0;

    // currentClientXとlastClientXのdiff
    this.lastDiff = 0;

    //
    this.offset = 0;

    this.touched = false;
    this.scrolling = false;
    this.swiping = false;

    // 画面上に表示するスライド数
    this.slidesPerView = options.slidesPerView;

    // 1回のスライドでスライドする数
    this.slidesPerGroup = options.slidesPerGroup;

    // 1つのスライドのwidth
    this.widthPerSlide = 0;

    this.maxIndex = Math.ceil(this.slidesCount / this.slidesPerGroup - 1);

    // イベントハンドラ
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);

    this.init();
  }

  init() {
    this.updateSlideWidth();
    this.addEvent();
  }

  update() {
    this.slideEl = this.el.querySelectorAll('.slider-slide');
    this.slidesCount = this.slideEl.length;
    this.maxIndex = Math.ceil(this.slidesCount / this.slidesPerGroup - 1);
    this.updateSlideWidth();
  }

  /**
   * スライダー全体のwidthに基づいてスライドのwidthを更新する
   */
  updateSlideWidth() {
    this.widthPerSlide = this.el.offsetWidth / this.slidesPerView;

    Array.prototype.forEach.call(this.slideEl, el => {
      el.style.width = `${this.widthPerSlide}px`;
    });
  }

  /**
   * イベントリスナを追加する
   */
  addEvent() {
    this.wrapperEl.addEventListener('touchstart', this.handleTouchStart);
    this.wrapperEl.addEventListener('touchmove', this.handleTouchMove);
    this.wrapperEl.addEventListener('touchend', this.handleTouchEnd);

    window.addEventListener('resize', () => {
      this.updateSlideWidth();
    });
  }

  next() {
    if (this.index < this.maxIndex) {
      this.index += 1;
    }

    this.slide();
  }

  prev() {
    if (this.index > 0) {
      this.index -= 1;
    }

    this.slide();
  }

  slide() {
    // スライドのwidthが100で、一回スライドでスライドする数が3でindexが1の場合
    // -100 * 3 * 1 = -300
    // -300pxスライドする
    const translateX = -this.widthPerSlide * this.slidesPerGroup * this.index;

    if (this.index === 0) {
      this.translateX = 0;
    }

    // 両隣のスライドをはみ出して表示させたいため少しずらす
    if (this.index > 0 && this.index < this.maxIndex) {
      this.translateX = translateX + (this.widthPerSlide / 4);
    }

    // スライドが最後の場合、最後のスライドを右端表示させたいため、位置をずらす
    if (this.index === this.maxIndex) {
      const slideCountDiff = (this.slidesPerGroup * (this.maxIndex + 1)) % this.slidesCount;

      if (slideCountDiff === 0) {
        this.translateX = translateX + (this.widthPerSlide / 2);
      } else {
        this.translateX = translateX + (this.widthPerSlide * slideCountDiff) + (this.widthPerSlide / 2);
      }
    }

    this.toTranslateX();
  }

  toTranslateX() {
    this.wrapperEl.style.webkitTransform = `translateX(${ this.translateX }px)`;
    this.wrapperEl.style.transform = `translateX(${ this.translateX }px)`;
  }

  handleTouchStart(event) {
    dom.addClass(this.wrapperEl, 'swiping');

    let touches;

    this.touched = true;
    this.lastTranslateX = this.translateX;
    this.offset = 0;
    this.lastClientX = event.touches[0].clientX;
    this.lastDiff = 0;

    if (event !== undefined && event.touches !== undefined) {
      touches = event.touches[0];
    }

    this.startX = this.currentX = (touches !== undefined)
      ? touches.pageX
      : event.clientX;
    this.startY = this.currentY = (touches !== undefined)
      ? touches.pageY
      : event.clientY;
  }

  handleTouchMove(event) {
    if (!this.touched) return;

    let touches;

    touches = event !== undefined
      ? event.touches
      : null;

    if (this.scrolling || touches && touches.length !== 1) {
      return;
    }

    this.currentX = touches !== undefined
      ? touches[0].pageX
      : e.clientX;
    this.currentY = touches !== undefined
      ? touches[0].pageY
      : e.clientY;

    let swipeLength;
    swipeLength = Math.round(Math.sqrt(
      Math.pow(this.currentX - this.startX, 2)));

    let verticalSwipeLength;
    verticalSwipeLength = Math.round(Math.sqrt(
      Math.pow(this.currentY - this.startY, 2)));

    if (!this.swiping && verticalSwipeLength > 10) {
      this.scrolling = true;
      return;
    }

    if (event !== undefined && swipeLength > 4) {
      this.swiping = true;
      event.preventDefault();
    }

    this.currentClientX = event.touches[0].clientX;
    this.lastDiff = this.currentClientX - this.lastClientX;
    this.offset += this.lastDiff;

    this.translateX = this.lastTranslateX + this.offset;
    this.lastClientX = this.currentClientX;

    this.toTranslateX();
  }

  handleTouchEnd() {
    if (this.touched) {
      dom.removeClass(this.wrapperEl, 'swiping');

      this.touched = false;
      this.swiping = false;

      if (this.scrolling) {
        this.scrolling = false;
        return;
      }

      if (this.lastDiff < -20 || this.offset < -100) {
        this.next();
      } else if (this.lastDiff > 20 || this.offset > 100) {
        this.prev();
      } else {
        this.slide();
      }
    }
  }
}