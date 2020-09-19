<template>
  <PropertyGrid :items="properties" />
</template>

<script>
import sourceData from "@/data/stays.json";
import PropertyGrid from "@/components/PropertyGrid";
export default {
  components: {
    PropertyGrid,
  },
  data() {
    return {
      properties: sourceData,
    };
  },
};
</script>

<style scoped>
</style>