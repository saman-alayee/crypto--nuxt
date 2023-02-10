<template>
  <v-container class="bottom">
    <v-row>
      <v-col v-for="post in posts" :key="post.title" cols="12" md="3" sm="6"
        ><BaseCardBlog
          :image="post.image"
          :date="post.date"
          :describe="post.describe"
          :subtitle="post.subtitle"
          :title="post.title"
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
      posts: [
        {
          date: "2019",
          subtitle: "it is image ",
          title: "there is a title",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
        {
          date: "2019",
          subtitle: "it is image ",
          title: "there is a title",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
        {
          date: "2019",
          subtitle: "it is image ",
          title: "there is a title",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
        {
          date: "2019",
          subtitle: "it is image ",
          title: "there is a title",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
        {
          date: "2019",
          subtitle: "it is image ",
          title: "there is a title",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
        {
          date: "2019",
          subtitle: "it is image ",
          title: "there is a title",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
        {
          date: "2019",
          subtitle: "it is image ",
          title: "there is a title",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
        {
          date: "2019",
          subtitle: "it is image ",
          title: "there is a title",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.analyticsinsight.net/wp-content/uploads/2021/08/cp2.jpg",
        },
      ],
    };
  },
};
</script>
<style scoped>
.bottom {
  margin-bottom: 20rem;
}
</style>