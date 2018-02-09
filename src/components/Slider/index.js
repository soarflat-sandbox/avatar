import Vue from 'vue';
import SliderComponent from './Slider';
import SlideComponent from './Slide';

const slider = SliderComponent;
const slide = SlideComponent;
const install = () => {
  if (globalOptions) {
    SwiperComponent.props.globalOptions.default = () => globalOptions;
  }
  Vue.component(SliderComponent.name, SliderComponent);
  Vue.component(SliderComponent.name, SliderComponent);
};

const Slider = { slider, slide, install };

export default Slider
export { slider, slide, install }