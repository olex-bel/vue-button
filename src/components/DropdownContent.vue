<template>
  <div class="dropdowncontent" v-click-outside="close">
    <div
      class="dropdowncontent__header"
      @click="toggle"
      :class="isActive ? 'dropdowncontent__header-active' : ''"
    >
      <slot name="control-content"></slot>
    </div>

    <div class="dropdowncontent__content" v-if="isActive">
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
    toggle: function () {
      this.isActive = !this.isActive;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped>
.dropdowncontent {
  position: relative;
}

.dropdowncontent__header {
  width: auto;
}

.dropdowncontent__header-active {
  border: 1px solid #000000;
  border-radius: 16px;
  -moz-border-radius: 16px;
  -webkit-border-radius: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 600px) {
  .dropdowncontent__header:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #000 transparent transparent transparent;
  }

  /* Point the arrow upwards when the select box is open (active): */
  .dropdowncontent__header.dropdowncontent__header-active:after {
    border-color: transparent transparent #000 transparent;
    top: 7px;
  }
}

.dropdowncontent__content {
  border-width: 1px;
  position: absolute;
  z-index: 99;
  width: 100%;
  text-align: left;
  background-color: #fff;
}
</style>