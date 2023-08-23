<template>
  <v-container class="bottom">
    <v-row>
      <v-col v-for="post in posts" :key="post.title" cols="12" md="3" sm="6"
        ><BaseCardBlog
          :image="post.thumbnailImage"
          :date="post.category"
          :describe="post.shortDescription"
          :subtitle="post.price"
          :title="post.name"
      /></v-col>
    </v-row>
  </v-container>
</template>
<script>
import BaseCardBlog from "../elements/baseCardBlog.vue";
export default {
  components: {
    BaseCardBlog,
  },
  data() {
    return {
     
    };
  },
  computed:{
    posts(){
      return this.$store.getters['post/loadedPosts']
    }
  },
  mounted(){
    return this.$store.dispatch("post/stroePosts");
  }
};
</script>
<style scoped>
.bottom {
  margin-bottom: 20rem;
}
</style>