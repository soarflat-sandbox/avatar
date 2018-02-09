import Vue from 'vue';
import Slider from './Slider';

export const createVM = (options) => {
  console.log(Slider.slider);
  new Vue({
    el: '#parts-slider',

    name: 'avatarMakerPartsSlider',

    store: options.store,

    components: {
      'slider': Slider.slider,
      'slider-slide': Slider.slide
    },

    computed: {
      parts() {
        return this.$store.state.allParts;
      }
    },

    data() {
      return {
        sliderOptions: {
          slidesPerView: 3.5,
          slidesPerGroup: 3
        }
      }
    },

    methods: {
      setCurrentParts() {
        console.log('setCurrentParts');
      },
    }

    // computed: {
    //   allParts() {
    //     return this.$store.state.allParts;
    //   },
    //   perSlideWidth() {
    //     return this.$el.offsetWidth / 3.5;
    //   },
    //   slidesCount() {
    //     return this.$store.state.allParts.length;
    //   }
    // },
    //
    // data() {
    //   return {
    //     // swiper用
    //     // swiperOption: {
    //     //   spaceBetween: 10,
    //     //   slidesPerView: 3.5,
    //     //   slidesPerGroup: 3,
    //     //   // slidesOffsetBefore: 23
    //     //   // centeredSlides: true,
    //     // },
    //     // swiperSlides: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
    //
    //     index: 0,
    //     translateX: 0,
    //     startX: 0,
    //     startY: 0,
    //     currentX: 0,
    //     currentY: 0,
    //     clientX: 0,
    //     lastClientX: 0,
    //     lastTranslateX: 0,
    //     lastDiff: 0,
    //     offset: 0,
    //     touched: false,
    //     scrolling: false,
    //     swiping: false,
    //
    //     slidesPerView: 3.5,
    //     slidesPerGroup: 3,
    //   }
    // },
    //
    // methods: {
    //   setCurrentParts() {
    //     console.log('set');
    //   },
    //
    //   handleTouchStart(event) {
    //     let touches;
    //
    //     this.touched = true;
    //     this.lastTranslateX = this.translateX;
    //     this.offset = 0;
    //     this.lastClientX = event.touches[0].clientX;
    //     this.lastDiff = 0;
    //
    //     if (event !== undefined && event.touches !== undefined) {
    //       touches = event.touches[0];
    //     }
    //
    //     this.startX = this.currentX = (touches !== undefined) ? touches.pageX : event.clientX;
    //     this.startY = this.currentY = (touches !== undefined) ? touches.pageY : event.clientY;
    //   },
    //
    //   handleTouchMove(event) {
    //     if (!this.touched) return;
    //
    //     let touches;
    //
    //     touches = event !== undefined ? event.touches : null;
    //
    //     if (this.scrolling || touches && touches.length !== 1) {
    //       return;
    //     }
    //
    //     this.currentX = touches !== undefined ? touches[0].pageX : e.clientX;
    //     this.currentY = touches !== undefined ? touches[0].pageY : e.clientY;
    //
    //     let swipeLength;
    //     swipeLength = Math.round(Math.sqrt(
    //       Math.pow(this.currentX - this.startX, 2)));
    //
    //     let verticalSwipeLength;
    //     verticalSwipeLength = Math.round(Math.sqrt(
    //       Math.pow(this.currentY - this.startY, 2)));
    //
    //     if (!this.swiping && verticalSwipeLength > 10) {
    //       this.scrolling = true;
    //       return;
    //     }
    //
    //     if (event !== undefined && swipeLength > 4) {
    //       this.swiping = true;
    //       event.preventDefault();
    //     }
    //
    //     this.clientX = event.touches[0].clientX;
    //     this.lastDiff = this.clientX - this.lastClientX;
    //     this.offset += this.lastDiff;
    //
    //     this.translateX = this.lastTranslateX + this.offset;
    //     this.lastClientX = this.clientX;
    //   },
    //
    //   handleToucheEnd() {
    //     if (this.touched) {
    //       this.touched = false;
    //       this.swiping = false;
    //
    //       if (this.scrolling) {
    //         this.scrolling = false;
    //         return;
    //       }
    //
    //       if (this.lastDiff < -20 || this.offset < -100) {
    //         this.next();
    //       } else if (this.lastDiff > 20 || this.offset > 100) {
    //         this.prev();
    //       } else {
    //         this.slide();
    //       }
    //     }
    //   },
    //
    //   next() {
    //     console.log('next');
    //
    //     if (this.index < (this.slidesCount / this.slidesPerGroup) - 1) {
    //       this.index += 1;
    //     }
    //
    //     this.slide();
    //   },
    //
    //   prev() {
    //     console.log('prev');
    //
    //     if (this.index > 0) {
    //       this.index -= 1;
    //     }
    //
    //     this.slide();
    //   },
    //
    //   slide() {
    //     this.translateX = -this.perSlideWidth * this.slidesPerGroup * this.index;
    //   },
    // },
    //
    // mounted() {
    //   // setInterval(() => {
    //   //   console.log(this.swiper);
    //   //   console.log('simulate async data');
    //   //   if (this.swiperSlides.length < 10) {
    //   //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   //   }
    //   // }, 3000)
    // }
    // name: 'carrousel',
    //
    // el: '#parts-slider',
    //
    // store: options.store,
    //
    // computed: {
    //   allParts() {
    //     return this.$store.state.allParts;
    //   }
    // },
    //
    // methods: {
    //   onUpdatedAllParts(parts) {
    //     console.log(parts);
    //   }
    // },
    //
    // created() {
    //   this.$store.watch(state => state.allParts, this.onUpdatedAllParts, { deep: true });
    //   // const mySwiper = new Swiper('.swiper-container', {
    //   //   // Optional parameters
    //   //   loop: true,
    //   //
    //   //   slidesPerGroup: 3,
    //   //   // Navigation arrows
    //   //   navigation: {
    //   //     nextEl: '.swiper-button-next',
    //   //     prevEl: '.swiper-button-prev',
    //   //   },
    //   // });
    // }
  });
};