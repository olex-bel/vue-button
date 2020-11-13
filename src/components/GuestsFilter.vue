<template>
  <div class="guestsfilter--container" v-click-outside="close">
    <div class="guestsfilter--select" @click="open">
      <div class="guestsfilter--label">Guests</div>
      <div class="guestsfilter--value">{{ guests }}</div>
    </div>

    <div class="options--container" v-if="isActive">
      <SpinnerInput
        :defaultValue="adults"
        v-on:ValueChanged="updateNumberOfAdults"
      />
      <SpinnerInput
        :defaultValue="children"
        v-on:ValueChanged="updateNumberOfChildren"
      />
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import SpinnerInput from "@/components/SpinnerInput";

export default {
  components: { SpinnerInput },
  data() {
    return {
      adults: 0,
      children: 0,
      isActive: false,
    };
  },
  computed: {
    guests: () => this.adults + this.children,
  },
  methods: {
    open: function () {
      this.isActive = true;
    },
    close: function () {
      this.isActive = false;
    },
    updateNumberOfAdults: function (value) {
      this.adults = value;
    },
    updateNumberOfChildren: function (value) {
      this.children = value;
    },
  },
  directives: {
    ClickOutside,
  },
  watch: {
    adults: function (val) {
      this.$emit("ChangedNumberOfGuests", val);
    },
  },
};
</script>

<style scoped>
.guestsfilter--container {
  position: relative;
}

.guestsfilter--select {
  width: auto;
  border: 1px solid #000000;
  border-radius: 16px;
  -moz-border-radius: 16px;
  -webkit-border-radius: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
}

.guestsfilter--label {
  padding: 5px 15px 0px 15px;
  text-align: left;
  font-family: Mulish;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #333333;
}

.guestsfilter--value {
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
  border-width: 1px;
  position: absolute;
  z-index: 99;
  width: 100%;
  text-align: left;
}
</style>