<template>
  <v-btn
    :color="color"
    v-bind="$attrs"
    v-on="$listeners"
    class="base-button"
    :style="`width: ${width}%`"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type:String,
      required: true,
    },
    width : {
      type:String,

    }
  },
};
</script>

<style scoped>
.base-button {
  color: black;
  transform: skew(-20deg);
  border-radius: 4px;
}

</style>