<template>
  <v-card class="mx-auto rounded-lg" max-width="280" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-1">{{name}}</div>
        <div class="text-overline mb-4">{{shortName}}</div>
      </v-list-item-content>

      <v-list-item-content
        ><div class="text-overline mb-4">{{price}}</div></v-list-item-content
      >
    </v-list-item>

    <v-card-actions>
      <v-sparkline
        :value="value"
        color="error"
        height="100"
        padding="24"
        stroke-linecap="round"
        smooth
      >
        <template v-slot:label="item"> ${{ item.value }} </template>
      </v-sparkline>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      
     props:{
        name: {
            type:String,
            required: true
        },
        price: {
            required: true
        },
        
        shortName: {
            type:String,
            required: false
        },
    },
      value: [423, 446, 675, 510, 590, 610, 760],
    };
  },
};
</script>