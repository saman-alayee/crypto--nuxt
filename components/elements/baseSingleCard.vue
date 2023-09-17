<template>
  <div class="card-container bottom">
    <div class="img-container">
      <img :src="image" alt="image" />
    </div>
    <div class="info_container">
      <p class="title_text">{{ title }}</p>
      <p class="small_text">{{ price }}$</p>
      <p class="small_text">{{ category }}</p>
      <p class="explain_text">{{ shortDescribe }}</p>
      <p class="explain_text">{{ describe }}</p>
      <v-btn class="mt-9 text-center text-none" color="green" prepend-icon="mdi mdi-shopping" variant="flat">
        Add to cart
      </v-btn>

    </div>

  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,

  }),
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    shortDescribe: {
      type: String,
      required: true,
    },
    describe: {
      type: String,
      required: true,
    }
  },
  methods: {

  },
};
</script>
<style scoped>
.img-container {
  display: flex;
  justify-content: start;
}

.img-container img {
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.card-container {
  display: flex;
  justify-content: center;
  height: 35rem;
  background-color: #18162c;
  border-radius: 16px;
  width: 100%;
}

.info_container {
  justify-content: end;
  align-items: flex-end;
  padding: 24px;
  width: 60%;
}

.title_text {
  font-size: 36px;
  font-weight: bold;
}

.small_text {
  font-size: 24px;
}

.explain_text {
  color: aliceblue;
  margin-top: 3rem;
  font-size: 16px;
}

@media only screen and (max-width: 1100px) {
  .card-container {
    width: 95vw;
  }
}
</style>