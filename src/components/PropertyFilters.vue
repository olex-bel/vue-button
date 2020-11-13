<template>
  <div class="propertyfilter">
    <div class="propertyfilter__filteritems">
      <div class="propertyfilter__item propertyfilter__itemborder">
        <Selector
          :items="locations"
          :defaultValue="this.$store.state.city"
          label="Location"
          placeholder="Add location"
          itemIcon="location_on"
          v-on:SelectorChange="updateLocation"
        />
      </div>

      <div class="propertyfilter__item propertyfilter__itemborder">
        <DropdownContent>
          <template v-slot:control-content>
            <div class="guestsfilter__label">Guests</div>
            <div class="guestsfilter__value">{{ guests }}</div>
          </template>

          <div class="guestsfilter__spinner">
            <label>Adults</label>
            <label class="guestsfilter__label--grey">Ages 13 or above</label>
            <SpinnerInput
              :defaultValue="adults"
              v-on:ValueChanged="updateNumberOfAdults"
            />
          </div>

          <div class="guestsfilter__spinner">
            <label>Children</label>
            <label class="guestsfilter__label--grey">Ages 2-12</label>
            <SpinnerInput
              :defaultValue="children"
              v-on:ValueChanged="updateNumberOfChildren"
            />
          </div>
        </DropdownContent>
      </div>

      <div class="propertyfilter__item propertyfilter__filteritem">
        <button class="propertyfilter__filterbutton" v-on:click.stop="filter">
          <md-icon>search</md-icon>
          Search
        </button>
      </div>
    </div>

    <div class="propertyfilter__footer">
      <button class="propertyfilter__filterbutton" v-on:click.stop="filter">
        <md-icon>search</md-icon>
        Search
      </button>
    </div>
  </div>
</template>

<script>
import Selector from "@/components/Selector";
import DropdownContent from "@/components/DropdownContent";
import SpinnerInput from "@/components/SpinnerInput";

export default {
  components: { Selector, DropdownContent, SpinnerInput },
  data() {
    return {
      adults: null,
      children: null,
    };
  },
  computed: {
    locations: function () {
      return this.$store.getters.cities.map((city) => {
        return {
          value: city,
          label: this.$store.state.country + ", " + city,
        };
      });
    },
    guests: function () {
      return this.adults + this.children;
    },
  },
  methods: {
    updateLocation: function (value) {
      this.location = value;
    },
    updateNumberOfAdults: function (value) {
      this.adults = value;
    },
    updateNumberOfChildren: function (value) {
      this.children = value;
    },
    filter: function () {
      this.$store.dispatch("updateFilters", {
        city: this.location,
        adults: this.adults,
        children: this.children,
      });
      this.$emit("filtersUpdated");
    },
  },

  mounted() {
    this.adults = this.$store.state.adults || 0;
    this.children = this.$store.state.children || 0;
  },
};
</script>

<style scoped>
.propertyfilter {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  .propertyfilter__filteritems {
    display: grid;
    grid-template-columns: auto;
    background: #ffffff;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    justify-items: stretch;
    margin-left: 25px;
    margin-right: 25px;
  }

  .propertyfilter__itemborder:first-of-type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .propertyfilter__filteritem {
    display: none;
  }

  .propertyfilter__footer {
    display: block;
    padding-bottom: 1rem;
  }
}

@media only screen and (min-width: 601px) {
  .propertyfilter__filteritems {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .propertyfilter__itemborder {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .propertyfilter__filteritem {
    display: block;
  }

  .propertyfilter__footer {
    display: none;
  }
}

.guestsfilter__label {
  padding: 5px 15px 0px 15px;
  text-align: left;
  font-family: Mulish;
  font-size: 9px;
  line-height: 11px;
  text-transform: uppercase;
  color: #333333;
}

.guestsfilter__value {
  padding: 0px 15px 5px 15px;
  text-align: left;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
}

.guestsfilter__spinner {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
  margin-top: 2rem;
  padding-left: 40px;
}

.propertyfilter__filterbutton {
  width: 127px;
  height: 48px;
  background: #eb5757;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.guestsfilter__label--grey {
  color: #bdbdbd;
}
</style>