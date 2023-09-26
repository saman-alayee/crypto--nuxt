<template>
    <v-card class="mx-auto" max-width="1000" outlined>
      <v-list-item three-line>
        <v-list-item-avatar tile size="160" color="grey">
            <img
              :src="image"
              alt="product"
            />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{title}}
          </v-list-item-title>
          <v-list-item-subtitle>{{describe}}</v-list-item-subtitle>
          <h2>{{price}}$</h2>
        </v-list-item-content>
        <!-- <v-list-item-action>
            <div class="d-flex">
          <v-btn class="icon" @click="removeFromCart">-</v-btn>
          <div class="quantity ">{{ quantity }}</div>
          <v-btn class="icon" @click="addToCart">+</v-btn></div>
        </v-list-item-action> -->
      </v-list-item>
    </v-card>
  </template>
  
  <script>
export default {
    props: {
    image: {
      type: String,
    },
    describe: {
      type: String,
    },
    title: {
      type: String,
    },
    price:{
        type:Number,
        default:0
    }

  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    addToCart() {
      this.quantity++;
    },
    removeFromCart() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
  },
};
</script>
<style scoped>
.quantity {
    padding: 8px;
}
.icon{
    font-size: 20px;
}
</style>