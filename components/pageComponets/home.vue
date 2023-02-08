<template>
  <v-container fluid>
    <div class="input-field">
      <v-text-field placeholder="جستجو" filled rounded dense></v-text-field>
    </div>
    <div class="link-container">
      <nuxt-link to="wallet">کیف پول</nuxt-link>
    </div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="12" md="4" v-for="card in cards" :key="card.name">
        <baseCard
          :name="card.name"
          :city="card.city"
          :dateGetting="card.get_shift_date"
          :date="card.shift_date"
          :time="card.shift_hour"
          :condition="card.status"
        />
      </v-col> </v-row
  ></v-container>
</template>

<script>
import BaseCard from "../elements/baseCard.vue";
import axios from "axios";
export default {
  name: "IndexPage",
  components: { BaseCard },

  data() {
    return {
      cards: [],
    };
  },
  created() {
    axios
      .get(
        "https://63d3de42c1ba499e54cad952.mockapi.io/api/v1/shifts/list/",
        {}
      )
      .then((response) => {
        
        this.$store.commit("setCards", response.data);
        this.cards = this.$store.state.loadedCards
        console.log(this.$store.state)
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang="scss" scoped>
.link-container {
  text-align: center;
  font-size: 24px;
  margin-bottom: 1rem;
  a {
    text-decoration: none;
  }
}
</style>
