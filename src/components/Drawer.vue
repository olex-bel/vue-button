<template>
  <div
    v-click-outside="hide"
    v-bind:class="['drawer--container', isActive ? 'active' : '']"
  >
    <slot></slot>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  props: {
    isActive: {
      type: Boolean,
    },
  },
  methods: {
    hide: function () {},
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped>
.drawer--container {
  -webkit-transform: translate3d(0, -131px, 0);
  -moz-transform: translate3d(0, -131px, 0);
  -o-transform: translate3d(0, -131px, 0);
  transform: translate3d(0, -131px, 0);
  -webkit-transition: -webkit-transform 0.25s linear;
  -moz-transition: -moz-transform 0.25s linear;
  -o-transition: -o-transform 0.25s linear;
  transition: transform 0.25s linear;
}
.drawer--container.active {
  -webkit-transform: translate3d(0, 129px, 0);
  -moz-transform: translate3d(0, 129px, 0);
  -o-transform: translate3d(0, 129px, 0);
  transform: translate3d(0, 129px, 0);
}
</style>