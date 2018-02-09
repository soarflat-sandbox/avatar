import SliderUI from '../../modules/SliderUI';

const Slider = {
  name: 'slider',

  props: {
    options: {
      type: Object,
      default: () => ({})
    },
  },

  template: `
    <div class="slider">
      <div :class="classes.wrapperClass">
        <slot></slot>
      </div>
    </div>
  `,

  data() {
    return {
      slider: null,
      classes: {
        wrapperClass: 'slider-wrapper'
      },
    }
  },

  computed: {},

  mounted() {
    if (!this.slider) {
      this.mountInstance();
    }
  },

  methods: {
    mountInstance() {
      this.slider = new SliderUI(this.$el, this.options);
    },
    update() {
      this.slider.update();
    }
  }
};

export default Slider