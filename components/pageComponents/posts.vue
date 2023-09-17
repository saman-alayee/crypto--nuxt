<template>
  <v-container class="bottom">
    <v-row>
      <v-col v-for="(post, index) in pagedPosts" :key="index" cols="12" md="3" sm="6">
        <BaseCardBlog
          :image="post.thumbnailImage"
          :date="post.category"
          :describe="post.shortDescription"
          :subtitle="post.price"
          :title="post.name"
          :category="post.category"
          :link="post._id"
        />
      </v-col>
    </v-row>
    <div class="text-center mt-5 p-2">
      <v-pagination
        v-model="page"
        color="blue"
        :length="Math.ceil(posts.length / perPage)"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
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
      page: 1,
      perPage: 12,
    };
  },
  computed: {
    posts() {
      return this.$store.getters["post/loadedPosts"];
    },
    pagedPosts() {
      const start = (this.page - 1) * this.perPage;
      const end = start + this.perPage;
      return this.posts.slice(start, end);
    },
  },
  mounted() {
    // Dispatch the action to fetch posts
    this.$store.dispatch("post/getPosts").then(() => {
      // Posts have been loaded
      console.log("Posts loaded");
    });
  },
};
</script>

<style scoped>
.bottom {
  margin-bottom: 20rem;
}
</style>
