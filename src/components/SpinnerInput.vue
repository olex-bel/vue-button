<template>
  <div class="spinnerinput">
    <div class="spinnerinput__button disable-select" @click="decrement">
      <span class="spinnerinput__decrement">-</span>
    </div>
    <input
      class="spinnerinput__input"
      type="number"
      v-model.number="value"
      min="0"
    />
    <div class="spinnerinput__button disable-select" @click="increment">
      <span class="spinnerinput__increment">+</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultValue: Number,
  },
  data() {
    return {
      value: this.defaultValue || 0,
    };
  },
  methods: {
    increment: function () {
      ++this.value;
    },
    decrement: function () {
      if (this.value > 0) {
        --this.value;
      }
    },
  },
  watch: {
    value: function (val) {
      this.$emit("ValueChanged", val);
    },
  },
};
</script>

<style scoped>
.spinnerinput {
  display: flex;
  height: 20px;
}

.spinnerinput__button {
  line-height: calc(40px / 2 - 5px);
  width: 24px;
  border: black;
  border-style: solid;
  border-width: 1px;
  text-align: center;
}

.spinnerinput__input {
  -webkit-appearance: none;
  -moz-appearance: textfield;
  width: 40px;
  padding: 0 12px;
  text-align: center;
  outline: none;
  display: block;
  margin: 0;
  font-size: 11px;
  border: none;
}

.spinnerinput__decrement,
.spinnerinput__increment {
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  font-size: 11px;
  font-weight: 400;
}
</style>