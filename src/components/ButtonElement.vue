<template>
  <button v-bind:class="buttonClasses">
    <md-icon v-if="this.startIcon">{{this.startIcon}}</md-icon>
    <slot />
    <md-icon v-if="this.endIcon">{{this.endIcon}}</md-icon>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    buttonTypeClass() {
      let cssClass;

      switch (this.variant) {
        case "outline":
          cssClass = "c-button--outline";
          break;
        case "text":
          cssClass = "c-button--text";
          break;
        default:
          cssClass = "c-button--default";
      }

      return cssClass;
    },
    buttonSizeClass() {
      let cssClass;

      switch (this.size) {
        case "sm":
          cssClass = "c-button--small-size";
          break;
        case "lg":
          cssClass = "c-button--large-size";
          break;
        default:
          cssClass = "c-button--middle-size";
      }

      return cssClass;
    },
    buttonColorClass() {
      let cssClass;

      switch (this.color) {
        case "primary":
          cssClass = "c-button--color-primary";
          break;
        case "secandory":
          cssClass = "c-button--color-secandory";
          break;
        case "danger":
          cssClass = "c-button--color-danger";
          break;
        default:
          cssClass = "c-button--color-default";
      }

      return cssClass;
    },
    buttonClasses() {
      let classes = this.class ? this.class.split(" ") : [];

      classes.push("c-button");
      classes.push(this.buttonTypeClass);
      classes.push(this.buttonSizeClass);
      classes.push(this.buttonColorClass);

      if (this.disableShadow) {
        classes.push("c-button--disbale-shadow");
      }

      return classes;
    }
  },
  props: {
    variant: String,
    disableShadow: {
      type: Boolean,
      default: false
    },
    color: String,
    size: String,
    startIcon: String,
    endIcon: String
  }
};
</script>

<style>
.c-button {
  border-radius: 6px;
  border: 0;
}

.c-button--outline {
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
}

.c-button:hover:enabled,
.c-button:focus:enabled {
  opacity: 0.6;
}

.c-button--text {
  border: none;
  background-color: white;
  cursor: pointer;
}

.c-button--disbale-shadow {
  border: none;
  background-color: blue;
}

.c-button--primary {
  background-color: white;
}

.c-button--small-size {
  font-size: 16px;
}

.c-button--middle-size {
  font-size: 19px;
}

.c-button--large-size {
  font-size: 22px;
}

.c-button--color-primary {
  background-color: blue;
}

.c-button--color-secandory {
  background-color: slategray;
}

.c-button--color-danger {
  background-color: red;
}
</style>