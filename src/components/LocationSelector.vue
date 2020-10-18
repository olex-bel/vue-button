<template>
  <div class="location-selector--container">
    <div class="location-selector--select">
      <div class="location-selector--label">Location</div>
      <div class="location-selector--value">{{ selectedLocation }}</div>
    </div>
    <div class="hidden">
      <ul>
        <li
          v-for="(location, index) in locations"
          v-bind:value="location"
          :key="index"
        >
          {{ location }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: this.$store.getters.getLocations,
      selectedLocation: this.$store.getters.selectedLocation || "Add location",
    };
  },
};
</script>

<style scoped>
.location-selector--select {
  width: auto;
  position: absolute;
  border: 1px solid #000000;
  border-radius: 16px;
  -moz-border-radius: 16px;
  -webkit-border-radius: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
}

.location-selector--label {
  padding: 5px 15px 0px 15px;
  text-align: left;
  font-family: Mulish;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #333333;
}

.location-selector--value {
  padding: 0px 15px 5px 15px;
  text-align: left;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
}
</style>