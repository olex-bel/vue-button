<template>
  <div class="property-filter-bar--container" @click="openModal">
    <div
      class="property-filter-bar--location property-filter--right-vertical-line"
      :class="isLocationSelected ? '' : 'guestsfilter__label--grey'"
    >
      {{ locationText }}
    </div>
    <div
      class="property-filter-bar--guests property-filter--right-vertical-line"
      :class="isNumberOfGuestsSelected ? '' : 'guestsfilter__label--grey'"
    >
      {{ guestsText }}
    </div>
    <span class="material-icons guestsfilter--search-icon">search</span>
    <Modal v-if="showModal" v-on:close="closeModal">
      <div class="property-filter-modal--container">
        <div class="property-filter--right-vertical-line">
          <Selector
            :items="locations"
            :defaultValue="this.$store.state.city"
            label="Location"
            placeholder="Add location"
            itemIcon="location_on"
            v-on:SelectorChange="updateLocation"
          />
        </div>

        <div class="property-filter--right-vertical-line">
          <DropdownContent>
            <template v-slot:control-content>
              <div class="guestsfilter--label">Guests</div>
              <div class="guestsfilter--value">{{ 0 }}</div>
            </template>

            <div class="guestsfilter--spinner-container">
              <label>Adults</label>
              <label class="guestsfilter__label--grey">Ages 13 or above</label>
              <SpinnerInput
                :defaultValue="0"
                v-on:ValueChanged="updateNumberOfAdults"
              />
            </div>

            <div class="guestsfilter--spinner-container">
              <label>Children</label>
              <label class="guestsfilter__label--grey">Ages 2-12</label>
              <SpinnerInput
                :defaultValue="0"
                v-on:ValueChanged="updateNumberOfChildren"
              />
            </div>
          </DropdownContent>
        </div>

        <div>
          <button class="guestsfilter--search-button" v-on:click.stop="filter">
            <span class="material-icons">search</span>Search
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Selector from "@/components/Selector";
import DropdownContent from "@/components/DropdownContent";
import SpinnerInput from "@/components/SpinnerInput";

export default {
  components: { Modal, Selector, DropdownContent, SpinnerInput },
  data() {
    return {
      showModal: false,
      adults: null,
      children: null,
      guests: null,
    };
  },
  computed: {
    isLocationSelected: function () {
      return this.$store.state.city;
    },
    isNumberOfGuestsSelected: function () {
      return this.$store.getters.selectedNumberOfGuests;
    },
    locationText: function () {
      return this.$store.state.city || "Add Location";
    },
    guestsText: function () {
      return this.$store.getters.selectedNumberOfGuests || "Add guests";
    },
    locations: function () {
      return this.$store.getters.getCities.map((city) => {
        return {
          value: city,
          label: this.$store.state.country + ", " + city,
        };
      });
    },
  },
  methods: {
    openModal: function () {
      this.showModal = true;
    },
    closeModal: function () {
      this.showModal = false;
    },
    updateLocation: function (value) {
      this.location = value;
    },
    updateNumberOfAdults: function (value) {
      this.adults = value;
    },
    updateNumberOfChildren: function (value) {
      this.children = value;
    },
    filter: function () {
      this.closeModal();

      this.$store.dispatch("updateFilters", {
        city: this.location,
        guests: this.guests,
      });
    },
  },
};
</script>

<style scoped>
.property-filter-bar--container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.property-filter-bar--location {
  padding: 1rem;
}

.property-filter-bar--guests {
  padding: 1rem;
}

.property-filter--right-vertical-line {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.property-filter-modal--container {
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-left: 50px;
  margin-right: 50px;
}

.guestsfilter--label {
  padding: 5px 15px 0px 15px;
  text-align: left;
  font-family: Mulish;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #333333;
}

.guestsfilter--value {
  padding: 0px 15px 5px 15px;
  text-align: left;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
}

.guestsfilter--spinner-container {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
  margin-top: 2rem;
  padding-left: 40px;
}

.property-filter-bar-empty {
  color: #bdbdbd;
}

.guestsfilter--search-icon {
  padding: 1rem;
}

.guestsfilter--search-button {
  width: 127px;
  height: 48px;
  background: #eb5757;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.guestsfilter__label--grey {
  color: #bdbdbd;
}
</style>