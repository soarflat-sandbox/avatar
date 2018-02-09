import Vue from 'vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from '../store/avatarMaker';
import * as partsSlider from '../components/AvatarMakerPartsSlider';
import * as downloadButton from '../components/downloadButton';

// Vue.use(VueAwesomeSwiper);

partsSlider.createVM({ store });
downloadButton.createVM({ store });

