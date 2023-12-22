<template>
  <v-container class="bottom">
    <v-row>
      <baseSingleCard
        :category="product.category"
        :describe="product.description"
        :image="product.attachmentFile"
        :price="product.price"
        :shortDescribe="product.shortDescription"
        :title="product.name"
      />    
    </v-row>
  </v-container>
</template>

<script>
import baseSingleCard from "../elements/baseSingleCard.vue";
import axios from "axios"; // Import Axios

export default {
  components: {
    baseSingleCard,
  },
  data() {
    return {
      product: {
        category: "",
        describe: "",
        image: "",
        price: "",
        shortDescribe: "",
        title: "",
      },
    };
  },

  mounted() {
    // Get the product ID from the route params
    const productId = this.$route.params.id;

    axios
      .get(`${this.$axios.defaults.baseURL}/api/products/${productId}`) // Replace with your API endpoint
      .then((response) => {
        this.product = response.data;
        console.log("Product loaded", this.product); 
      })
      .catch((error) => {
        console.error("Error loading product", error);
      });
  },
};
</script>

<style scoped>
.bottom {
  margin-bottom: 20rem;
}
</style>
