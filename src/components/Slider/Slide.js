const Slide = {
  name: 'slide',

  template: `
    <div :class="slideClass">
      <slot></slot>
    </div>
  `,

  data() {
    return {
      slideClass: 'slider-slide'
    }
  },

  mounted() {
    this.update();

    // 親コンポーネントにオプションが存在し
    // このコンポーネントのクラス指定（slideClass）があればクラスを上書きする
    if (this.$parent && this.$parent.options && this.$parent.options.slideClass) {
      this.slideClass = this.$parent.options.slideClass
    }
  },

  methods: {
    update() {
      if (this.$parent && this.$parent.slider) {
        this.$parent.update();
      }
    }
  }
};

export default Slide