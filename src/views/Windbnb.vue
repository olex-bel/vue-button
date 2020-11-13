<template>
  <div class="windbnb">
    <div class="windbnb__header">
      <img
        class="windbnb__logo"
        src="../assets/windbnb_logo.png"
        alt="Windbnd"
      />
      <SelectedFilters />
    </div>
    <div class="windbnb__info">
      <div class="windbnb__selectedcountry">
        Stays in {{ $store.getters.country }}
      </div>
      <div class="windbnb__resultсount">
        {{ filteredProperties.length }} stays
      </div>
    </div>
    <PropertyGrid :items="filteredProperties" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PropertyGrid from "@/components/PropertyGrid";
import SelectedFilters from "@/components/SelectedFilters";
export default {
  components: {
    PropertyGrid,
    SelectedFilters,
  },
  computed: {
    ...mapGetters(["filteredProperties"]),
  },
};
</script>

<style scoped>
.windbnb {
  margin-left: 1rem;
  margin-right: 1rem;
}

@media only screen and (max-width: 600px) {
  .windbnb__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media only screen and (min-width: 601px) {
  .windbnb {
    margin-left: 5rem;
    margin-right: 5rem;
  }

  .windbnb__header {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
}

.windbnb__logo {
  max-width: 69px;
  height: 14px;
}

.windbnb__info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.windbnb__selectedcountry {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
}

.windbnb__resultсount {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
</style>