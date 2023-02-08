<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" class="ma-2" color="primary">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        افزایش اعتبار
      </v-card-title>

      <v-card-text class="mt-5">
        <div class="input-field">
          <v-text-field  :value="value" placeholder="مبلغ درخواستی خود را وارد کنید" filled rounded dense></v-text-field>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="white--text" block color="light-blue lighten-1" @click="dialog = false">
          افزایش اعتبار
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    props:{
        value:{
            type:Number
        }
    }
};
</script>

<style>
</style>