<template>
  <v-card class="mx-auto" max-width="400" max-height="600" min-height="400">
    <v-img class="white--text align-end" height="200px" :src="image">
      <v-card-title>
        <v-btn style="color: black; background-color: aliceblue;" class="dark--text" variant="outlined" text>
          <b>{{ subtitle }}$</b>
        </v-btn>
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{ date }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ title }}</div>
      <div>{{ category }}</div>
      <div>{{ describe }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn class="button-like" color="orange" text @click="redirectToProduct">
       See More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    describe: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
      default: null, // or any default value you prefer
    },
  },
  methods: {
    redirectToProduct() {
      if (this.link) {
        // Redirect to the specified URL
        window.location.href = `/products/${this.link}`;
      }
    },
  },
};
</script>

<style scoped>

</style>
