<template>
    <v-navigation-drawer v-model="rightDrawer" right temporary absolute>
      <v-list>
        <v-list-item>
          <v-list-item-action> </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
  name: "TheHeader",
 data() {
    return {
      rightDrawer: false,
    };
  },
};
</script>


