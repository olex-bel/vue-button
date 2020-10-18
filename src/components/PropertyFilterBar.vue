<template>
  <div class="property-filter-bar--container" @click="openModal">
    <div class="property-filter-bar--location">Add Location</div>
    <div class="property-filter-bar--guests">Add guests</div>
    <span class="material-icons">search</span>
    <Modal v-if="showModal">
      <div class="property-filter-modal--container">
        <Selector
          :items="locations"
          :defaultValue="selectedLocation"
          label="Location"
          placeholder="Add location"
          itemIcon="location_on"
        />
        <Selector
          :items="guests"
          :defaultValue="selectedGuests"
          label="Guests"
          placeholder="Add guests"
        />
        <SpinnerInput />
        <button><span class="material-icons">search</span>Search</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Selector from "@/components/Selector";
import SpinnerInput from "@/components/SpinnerInput";

export default {
  components: { Modal, Selector, SpinnerInput },
  data() {
    return {
      showModal: false,
      selectedLocation: this.$store.state.city,
      guests: [],
      selectedGuests: null,
    };
  },
  computed: {
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
  },
};
</script>

<style scoped>
.property-filter-bar--container {
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
}

.property-filter-bar--location {
  display: inline-block;
}

.property-filter-bar--guests {
  display: inline-block;
}

.property-filter-modal--container {
  display: grid;
  grid-template-columns: auto auto 100px;
  padding-left: 50px;
  padding-right: 50px;
  width: 1200px;
}
</style>