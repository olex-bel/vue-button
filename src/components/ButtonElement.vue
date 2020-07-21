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
  padding: 8px 16px;
}

.c-button--default {
  background-color: #e0e0e0;
}

.c-button--default:hover:enabled,
.c-button--default:focus:enabled {
  background-color: #aeaeae;
}

.c-button--outline {
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
}

.c-button--outline:hover:enabled,
.c-button--outline:focus:enabled {
  background-color: #2962ff1a;
}

.c-button--text {
  border: none;
  background-color: white;
  cursor: pointer;
}

.c-button--text:hover:enabled,
.c-button--text:focus:enabled {
  background-color: #2962ff1a;
}

.c-button--disbale-shadow {
  border: none;
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
  background-color: #2962ff;
}

.c-button--color-primary:hover:enabled,
.c-button--color-primary:focus:enabled {
  background-color: #0039cb;
}

.c-button--color-secandory {
  background-color: #455a64;
}

.c-button--color-secandory:hover:enabled,
.c-button--color-secandory:focus:enabled {
  background-color: #1c313a;
}

.c-button--color-danger {
  background-color: #d33131;
}

.c-button--color-danger:hover:enabled,
.c-button--color-danger:focus:enabled {
  background-color: #990008;
}
</style>