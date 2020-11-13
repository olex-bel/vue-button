<template>
  <div class="selectedfilters" @click="openModal">
    <div
      class="selectedfilters__label selectedfilters__label--rightborder"
      :class="isLocationSelected ? '' : 'selectedfilters__label--grey'"
    >
      {{ location }}
    </div>
    <div
      class="selectedfilters__label selectedfilters__label--rightborder"
      :class="guests ? '' : 'selectedfilters__label--grey'"
    >
      {{ numberOfGuests }}
    </div>
    <span class="material-icons selectedfilters__searchicon">search</span>
    <Modal v-if="showModal" v-on:close="closeModal">
      <PropertyFilters v-on:filtersUpdated="closeModal" />
    </Modal>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Modal from "@/components/Modal";
import PropertyFilters from "@/components/PropertyFilters";

export default {
  components: { Modal, PropertyFilters },
  computed: {
    ...mapState(["city", "country"]),
    ...mapGetters(["guests"]),
    isLocationSelected: function () {
      return this.country && this.city;
    },
    location: function () {
      if (this.isLocationSelected) {
        return this.country + ", " + this.city;
      }

      return "Add Location";
    },
    numberOfGuests: function () {
      if (!this.guests || this.guests === 0) {
        return "Add guests";
      }

      return this.guests + " guest" + (this.guests > 1 ? "s" : "");
    },
  },
  data() {
    return {
      showModal: false,
    };
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
.selectedfilters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.selectedfilters__label {
  padding: 1rem;
}

.selectedfilters__searchicon {
  padding: 1rem;
}

.selectedfilters__label--rightborder {
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

.selectedfilters__label--grey {
  color: #bdbdbd;
}
</style>