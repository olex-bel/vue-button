<template>
  <div class="selector--container" v-click-outside="close">
    <div class="selector--select" @click="open">
      <div class="selector--label">{{ label }}</div>
      <div class="selector--value">{{ displayValue }}</div>
    </div>
    <div class="options--container" v-if="isActive">
      <ul>
        <li
          class="options--item"
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
.selector--select {
  width: auto;
  border: 1px solid #000000;
  border-radius: 16px;
  -moz-border-radius: 16px;
  -webkit-border-radius: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
}

.selector--label {
  padding: 5px 15px 0px 15px;
  text-align: left;
  font-family: Mulish;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #333333;
}

.selector--value {
  padding: 0px 15px 5px 15px;
  text-align: left;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
}

.options--container {
  width: 100%;
  text-align: left;
}

.options--item {
  list-style: none;
}

.options--item:hover {
  background-color: #aeaeae;
}
</style>