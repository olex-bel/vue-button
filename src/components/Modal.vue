<template>
  <div class="modal">
    <div class="modal__header">
      <span class="material-icons modal__closebutton" v-on:click.stop="close">
        close
      </span>
    </div>
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close: function () {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal__closebutton {
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.modal__header {
  display: flex;
  justify-content: right;
  background-color: #fefefe;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 20px;
}

.modal__content {
  background-color: #fefefe;
  width: 100%; /* Full width */
  height: 400px;
}
</style>