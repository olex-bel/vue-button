import Vue from 'vue'
import Vuex from 'vuex'
import properties from "@/data/stays.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: 'Finland',
    city: null,
    adults: null,
    children: null,
    properties: properties
  },
  getters: {
    country: function (state) {
      return state.country;
    },

    guests: function (state) {
      let adults = state.adults || 0;
      let children = state.children || 0;

      return adults + children;
    },

    cities: function (state) {
      const cities = state.properties.filter((item) => {
        return item.country === state.country;
      }).map((item) => {
        return item.city;
      });

      const citiesSet = new Set(cities);

      return [...citiesSet];
    },

    filteredProperties: function (state, { guests }) {
      return state.properties.filter((item) => {
        return (item.country === state.country) && (!state.city || item.city === state.city) && (!guests || guests <= item.maxGuests);
      });
    },

    numberOfGuests: function (state) {
      return state.guests;
    },

    location: function (state) {
      return (state.country && state.city) ? state.country + ', ' + state.city : null;
    },
  },
  mutations: {
    updateFilterCity: (state, city) => {
      state.city = city;
    },
    updateFilterNumberOfGuests: (state, { adults, children }) => {
      state.adults = adults;
      state.children = children;
    }
  },
  actions: {
    updateFilters: ({ commit }, { city, adults, children }) => {
      if (city) {
        commit('updateFilterCity', city);
      }

      if (adults) {
        commit('updateFilterNumberOfGuests', { adults: adults, children: children });
      }
    }
  },
})
