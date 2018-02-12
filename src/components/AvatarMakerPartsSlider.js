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
        // swiper用
        // swiperOption: {
        //   spaceBetween: 10,
        //   slidesPerView: 3.5,
        //   slidesPerGroup: 3,
        //   // slidesOffsetBefore: 23
        //   // centeredSlides: true,
        // },
        // swiperSlides: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
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
  });
};