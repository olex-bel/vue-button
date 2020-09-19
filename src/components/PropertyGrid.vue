<template>
  <div class="property-grid--container">
    <div v-for="(item, index) in items" :key="index">
      <PropertyTile :property="item" />
    </div>
  </div>
</template>

<script>
import PropertyTile from "@/components/PropertyTile";

export default {
  components: {
    PropertyTile,
  },
  props: {
    items: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
.property-grid--container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 15px 10px;
  justify-items: center;
}
</style>
