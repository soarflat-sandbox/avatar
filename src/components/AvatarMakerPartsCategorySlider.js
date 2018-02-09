import Vue from 'vue';
import lory from 'lory.js';

export const createVM = (options) => {
  const parts = new Vue({
    el: '#parts',

    store: options.store,

    computed: {
      allParts() {
        return this.$store.state.allParts;
      }
    },

    created() {
      // console.log(this.$refs);
    }
  });
};