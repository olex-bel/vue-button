<template>
  <div class="windbnb--container">
    <div class="windbnb--header">
      <img
        class="windbnb--logo"
        src="../assets/windbnb_logo.png"
        alt="Windbnd"
      />
      <PropertyFilters />
    </div>
    <div class="windbnb--info">
      <div class="windbnb--info-country">
        Stays in {{ $store.getters.country }}
      </div>
      <div class="windbnb--info-resultCount">
        {{ $store.getters.getFilteredProperties.length }} stays
      </div>
    </div>
    <PropertyGrid :items="$store.getters.getFilteredProperties" />
  </div>
</template>

<script>
import PropertyGrid from "@/components/PropertyGrid";
import PropertyFilters from "@/components/PropertyFilters";
export default {
  components: {
    PropertyGrid,
    PropertyFilters,
  },
  data() {
    return {
      properties: this.$store.getters.getFilteredProperties,
    };
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .windbnb--container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

@media only screen and (min-width: 600px) {
  .windbnb--container {
    margin-left: 5rem;
    margin-right: 5rem;
  }
}

.windbnb--logo {
  max-width: 69px;
  height: 14px;
}

.windbnb--header {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.windbnb--info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.windbnb--info-country {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}

.windbnb--info-resultCount {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
</style>