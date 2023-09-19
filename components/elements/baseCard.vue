<template>
  <v-card class="mx-auto" max-width="344" style="height: 400px; ">
    <v-img :src="image" height="200px"></v-img>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle> {{ describe }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> read more </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon> </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      requierd: true
    },
    describe: {
      type: String,
      requierd: true
    },
    image: {
      type: String,
      requierd: true
    }
  }
}
</script>