import Vue from 'vue'
import Vuex from 'vuex'
import properties from "@/data/stays.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: 'Finland',
    city: null,
    guests: null,
    properties: properties
  },
  getters: {
    country: function (state) {
      return state.country;
    },
    getCities: function (state) {
      const cities = state.properties.filter((item) => {
        return item.country === state.country;
      }).map((item) => {
        return item.city;
      });

      const citiesSet = new Set(cities);

      return [...citiesSet];
    },

    getFilteredProperties: function (state) {
      return state.properties.filter((item) => {
        return (item.country === state.country) && (!state.city || item.city === state.city) && (!state.guests || state.guests <= item.maxGuests);
      });
    },

    selectedNumberOfGuests: function (state) {
      return state.guests;
    },

  },
  mutations: {
    updateFilterCity: (state, city) => {
      state.city = city;
    },
    updateFilterNumberOfGuests: (state, { guests }) => {
      state.guests = guests;
    }
  },
  actions: {
    updateFilters: ({ commit }, { city, guests }) => {
      if (city) {
        commit('updateFilterCity', city);
      }

      if (guests) {
        commit('updateFilterNumberOfGuests', { guests: guests });
      }
    }
  },
  modules: {
  }
})
