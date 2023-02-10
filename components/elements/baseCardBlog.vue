<template>
  <v-card class="mx-auto" max-width="400" max-height="600" min-height="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="image"
    >
      <v-card-title>{{ subtitle }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> {{ date }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ title }}</div>

      <div>{{ describe }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text> More </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      requierd: true,
    },
    title: {
      type: String,
      requierd: true,
    },
    date: {
      type: String,
      requierd: true,
    },
    describe: {
      type: String,
      requierd: true,
    },
    image: {
      type: String,
      requierd: true,
    },
  },
};
</script>

<style>
</style>