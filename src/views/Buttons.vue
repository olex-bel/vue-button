<template>
  <div>
    <div>
      <h2>Default</h2>
      <ButtonElement>Default</ButtonElement>
    </div>
    <div>
      <h2>Variant</h2>
      <ButtonElement variant="outline">Default</ButtonElement>
      <ButtonElement variant="text">Default</ButtonElement>
    </div>
    <div>
      <h2>Disable shadow</h2>
      <ButtonElement disableShadow>Default</ButtonElement>
    </div>
    <div>
      <h2>Disabled button</h2>
      <ButtonElement disabled="disabled">Default</ButtonElement>
      <ButtonElement disabled="disabled" variant="text">Default</ButtonElement>
    </div>
    <div>
      <h2>Icons</h2>
      <ButtonElement startIcon="local_grocery_store">Default</ButtonElement>
      <ButtonElement endIcon="local_grocery_store">Default</ButtonElement>
    </div>
    <div>
      <h2>Size</h2>
      <ButtonElement size="sm">Default</ButtonElement>
      <ButtonElement size="md">Default</ButtonElement>
      <ButtonElement size="lg">Default</ButtonElement>
    </div>
    <div>
      <h2>Color</h2>
      <ButtonElement color="primary">Default</ButtonElement>
      <ButtonElement color="secandory">Default</ButtonElement>
      <ButtonElement color="danger">Default</ButtonElement>
    </div>
  </div>
</template>

<script>
import ButtonElement from "@/components/ButtonElement.vue";
export default {
  components: {
    ButtonElement
  },
  name: "DemoButtons",
  props: {
    msg: String
  }
};
</script>