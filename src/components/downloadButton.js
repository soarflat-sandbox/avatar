import Vue from 'vue';

export const createVM = (options) => {
  const downloadButton = new Vue({
    el: '#downloadButton',

    store: options.store,

    methods: {
      addParts() {
        this.$store.dispatch('addParts', {
          category: 'head',
          src: 'are'
        });
      }
    }
  });
};