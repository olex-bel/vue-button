<template>
  <div>
    <PropertyFilterBar />
    <PropertyGrid :items="properties" />
  </div>
</template>

<script>
import PropertyGrid from "@/components/PropertyGrid";
import PropertyFilterBar from "@/components/PropertyFilterBar";
export default {
  components: {
    PropertyGrid,
    PropertyFilterBar,
  },
  data() {
    return {
      properties: this.$store.state.properties,
    };
  },
};
</script>

<style scoped>
</style>