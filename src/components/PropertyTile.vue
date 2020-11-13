<template>
  <div class="propertytile">
    <img
      class="propertytile__image"
      :src="property.photo"
      :alt="property.title"
    />
    <div class="propertytile__info">
      <div class="propertytile__badge" v-if="property.superHost">
        Super Host
      </div>
      <div class="propertytile__type">{{ type }}</div>
      <div class="propertytile__raiting">
        <i class="material-icons orange600">star</i>
        <span class="propertytile__ratingnumber">{{ rating }}</span>
      </div>
    </div>
    <div class="propertytile__title">{{ property.title }}</div>
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
.propertytile {
  width: 300px;
}

@media only screen and (min-width: 601px) {
  .propertytile {
    width: 400px;
  }
}

.propertytile__image {
  width: 100%;
  height: 270px;
  border-radius: 30px;
  padding-bottom: 10px;
  object-fit: cover;
}

.propertytile__badge {
  font-size: 12px;
  text-transform: uppercase;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
  font-weight: bold;
}

.propertytile__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.propertytile__type {
  color: grey;
}
.propertytile__title {
  text-align: left;
  padding-top: 5px;
}
.propertytile__raiting {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.propertytile__ratingnumber {
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