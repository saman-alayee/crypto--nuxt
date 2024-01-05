<template>
    <v-card class="mx-auto" :max-width=width >
      <v-card-title>num_1</v-card-title>
      <v-card-text>
        <p>testttt</p>
      </v-card-text>
      <v-card-actions>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" prepend-inner-icon="mdi-email-outline"
            required class="space-form">
            <!-- <v-messages :value="emailErrors"></v-messages> -->
          </v-text-field><v-btn block color="success" size="large" type="submit" variant="elevated">
                Next
            </v-btn>
      </v-card-actions>
      
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      width: {
        type: String,
        requierd: true
      },
     
    }
  }
  </script>