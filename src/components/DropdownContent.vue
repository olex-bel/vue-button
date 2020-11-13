<template>
  <div class="dropdowncontent--container" v-click-outside="close">
    <div
      class="dropdowncontent--select"
      @click="open"
      :class="isActive ? 'dropdowncontent--select-active' : ''"
    >
      <slot name="control-content"></slot>
    </div>

    <div class="dropdowncontent--content" v-if="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    open: function () {
      this.isActive = true;
    },
    close: function () {
      this.isActive = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped>
.dropdowncontent--container {
  position: relative;
}

.dropdowncontent--select {
  width: auto;
}

.dropdowncontent--select-active {
  border: 1px solid #000000;
  border-radius: 16px;
  -moz-border-radius: 16px;
  -webkit-border-radius: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
}

.dropdowncontent--content {
  border-width: 1px;
  position: absolute;
  z-index: 99;
  width: 100%;
  text-align: left;
}
</style>