<template>
  <div class="property-tile--container">
    <img
      class="property-tile--image"
      :src="property.photo"
      :alt="property.title"
    />
    <div class="property-tile--info">
      <div class="property-tile--badge" v-if="property.superHost">
        Super Host
      </div>
      <div class="property-tile--type">{{ type }}</div>
      <div class="property-tile--raiting">
        <i class="material-icons orange600">star</i>
        <span class="property-tile--ratingnumber">{{ rating }}</span>
      </div>
    </div>
    <div class="property-tile--title">{{ property.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      require: true,
    },
  },
  computed: {
    rating: function () {
      return this.property.rating.toFixed(2);
    },
    type: function () {
      let details = "";

      if (this.property.beds) {
        let bedText = this.property.beds > 1 ? " beds" : " bed";

        details = ". " + +this.property.beds + bedText;
      }
      return this.property.type + details;
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .property-tile--container {
    width: 300px;
  }
}

@media only screen and (min-width: 600px) {
  .property-tile--container {
    width: 400px;
  }
}

.property-tile--image {
  width: 100%;
  height: 270px;
  border-radius: 30px;
  padding-bottom: 10px;
  object-fit: cover;
}
.property-tile--badge {
  font-size: 12px;
  text-transform: uppercase;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  font-weight: bold;
}
.property-tile--info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.property-tile--type {
  color: grey;
}
.property-tile--title {
  text-align: left;
  padding-top: 5px;
}
.property-tile--raiting {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.property-tile--ratingnumber {
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
}
.material-icons.orange600 {
  color: #fb8c00;
}
</style>