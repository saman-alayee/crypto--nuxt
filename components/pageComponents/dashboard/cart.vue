<template>
  <div class="cart-component">
    <v-col v-for="(post,index) in posts" :key="index" cols="12">
   <BaseCart :describe=post.description :image=post.thumbnailImage :price=post.price :title=post.name /></v-col>
  </div>
</template>

<script>
import BaseCart from '../../elements/basecart.vue';

export default {
    components: { BaseCart },

computed: {
    posts() {
      return this.$store.getters["post/loadedPosts"];
    },
  },
  mounted() {
    // Dispatch the action to fetch posts
    this.$store.dispatch("post/getPosts").then(() => {
      // Posts have been loaded
      console.log("Posts loaded");
    });
  },
}
</script>

<style>
.cart-component{
  background-color: #2a2d3e;
  border-radius: 8px;
  padding: 16px;
}
</style>