<template>
  <div class="selector" v-click-outside="close">
    <div
      class="selector__header"
      @click="toggle"
      :class="isActive ? 'selector__header-active' : ''"
    >
      <div class="selector__label">{{ label }}</div>
      <div class="selector__value">{{ displayValue }}</div>
    </div>
    <div class="selector__options" v-if="isActive">
      <ul>
        <li
          class="selector__optionitem"
          v-for="(item, index) in items"
          v-bind:value="item.value"
          :key="index"
          @click="select(index)"
        >
          <i v-if="itemIcon" class="material-icons left">{{ itemIcon }}</i>
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    defaultValue: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    itemIcon: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
      value: this.defaultValue,
    };
  },
  computed: {
    displayValue: function () {
      const selectedItem = this.items.filter((item) => {
        return item.value === this.value;
      })[0];

      return selectedItem ? selectedItem.label : this.placeholder;
    },
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
    select: function (index) {
      const selectedItem = this.items[index];

      this.value = selectedItem.value;
      this.$emit("SelectorChange", this.value);
      this.close();
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped>
.selector {
  position: relative;
}

.selector__header {
  width: auto;
}

.selector__header-active {
  border: 1px solid #000000;
  border-radius: 16px;
  -moz-border-radius: 16px;
  -webkit-border-radius: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 600px) {
  .selector__header:after {
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
  .selector__header.selector__header-active:after {
    border-color: transparent transparent #000 transparent;
    top: 7px;
  }
}

.selector__label {
  padding: 5px 15px 0px 15px;
  text-align: left;
  font-family: Mulish;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #333333;
}

.selector__value {
  padding: 0px 15px 5px 15px;
  text-align: left;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
}

.selector__options {
  position: absolute;
  z-index: 99;
  border-width: 1px;
  width: 100%;
  text-align: left;
  background-color: #ffffff;
}

.selector__optionitem {
  list-style: none;
}

.selector__optionitem:hover {
  background-color: #aeaeae;
}
</style>