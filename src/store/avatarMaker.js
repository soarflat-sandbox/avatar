import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './avatarMakerMutationTypes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allParts: [
      {
        category: 'head',
        src: 'are'
      },
      {
        category: 'hair',
        src: 'are'
      },
      {
        category: 'eye',
        src: 'are'
      },
      {
        category: 'head',
        src: 'are'
      },
      {
        category: 'hair',
        src: 'are'
      },
      {
        category: 'eye',
        src: 'are'
      },
      {
        category: 'head',
        src: 'are'
      },
      {
        category: 'hair',
        src: 'are'
      },
      {
        category: 'eye',
        src: 'are'
      },
      {
        category: 'head',
        src: 'are'
      },
      {
        category: 'hair',
        src: 'are'
      },
      {
        category: 'eye',
        src: 'are'
      },
      {
        category: 'head',
        src: 'are'
      }
    ],
    partsCategory: [],
    step: 1,
    currentParts: {
      head: 12,
      hair: 2,
      eye: 5
    }
  },

  strict: process.env.NODE_ENV !== 'production',

  getters: {},

  mutations: {
    [types.SAMPLE](state, { parts }) {
      state.allParts.push(parts);
    }
  },

  actions: {
    addParts({ commit }, parts) {
      commit(types.SAMPLE, {
        parts
      });
    },
  },
});