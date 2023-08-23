<template>
  <v-container>
    <v-row class="bottom">

      <v-col class="mt-3" md="12" sm="12">
        <v-card elevation="11" color="dark" outlined shaped>
          <v-card-title>write infomation of your products</v-card-title>
          <v-card-text>
            <v-form ref="form" @submit.prevent="submitForm">
              <v-text-field v-model="name" :rules="rules" label="Name of Product" prepend-icon="mdi mdi-account"
                variant="underlined" clearable></v-text-field>
              <v-text-field v-model="category" :rules="rules" label="Category of Product" variant="underlined"
                prepend-icon="mdi mdi-shopping" clearable></v-text-field>
              <v-text-field v-model="price" :rules="rules" label="Price" variant="underlined"
                prepend-icon="mdi mdi-currency-usd" clearable></v-text-field>
              <v-text-field v-model="shortDescription" :rules="rules" label="Write a short Description"
                variant="underlined" prepend-icon="mdi mdi-note-text" clearable></v-text-field>
              <v-textarea prepend-icon="mdi-comment" :rules="rules" v-model="description" label="Write Description"
                rows="1"></v-textarea>
              <!-- Thumbnail Image -->
              <label class="white--text" for="file input">Thumbnail Image</label>
              <v-file-input ref="thumbnailImageInput" label="File input" prepend-icon="mdi-camera" :rules="rules"
                accept="image/*"></v-file-input>

              <img v-if="thumbnailImage" :src="thumbnailImage" alt="Thumbnail Image" class="uploaded-image">

              <!-- All Images -->
              <label class="white--text" for="file input">All Images</label>
              <v-file-input ref="allImageInput" multiple label="File input" :rules="rules"
                accept="image/*"></v-file-input>

              <div v-for="(image, index) in allImages" :key="index">
                <img :src="image" alt="Uploaded Image" class="uploaded-image">
              </div>

              <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import axios from 'axios';
export default {
  data: () => ({
    name: '',
    category: '',
    price: '',
    shortDescription: '',
    description: '',
    thumbnailImage: '',
    allImages: [],
    rules: [
      value => !!value || 'This field is required',
    ],
  }),

  methods: {
    async submitForm() {
      console.log(localStorage.getItem('adminToken'))
      const isValid = await this.$refs.form.validate();

      if (isValid) {

        try {
          const response = await axios.post(`${this.$axios.defaults.baseURL}/api/products`, {
            headers: {
              Authorization
                :
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0YjVjNzlkMDQ5NWVhNGY1YzYwNzAiLCJpYXQiOjE2OTI3OTkxMjV9.vaLi7cTIFqcWxuGgNp9P8YNHxR29z6Ou4hT2dWVWTig" // Include the token in the header
            },
          })
          console.log(response)
        } catch (error) {
          console.log(error)

        }
        console.log('Form submitted');
      } else {
        console.log('Form validation failed');
      }
    },

  },

}
</script>
  
<style scoped>
.text-field {
  text-align: justify;
}

.image-container img {
  width: 100%;
}

.address-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.city-container {
  padding: 8px;
}

label {
  display: block;
  color: #21243e;
  font-weight: bolder;
  font-size: 16px;
  margin-top: 0.7rem;
}

input {
  padding: 0.7rem;
  border-radius: 10px;
  width: 100%;
  margin-top: 0.7rem;
  border: 1px solid #dfdee1;
  transition: border-color 0.15s, box-shadow 0.15;
}

input:focus {
  border-color: #7db0fb;
  outline: 0;
  box-shadow: 0 0 0 4px rgba(24, 117, 255, 0.25);
}

textarea {
  padding: 0.7rem;
  border-radius: 10px;
  width: 100%;
  margin-top: 0.7rem;
  border: 1px solid #dfdee1;
  transition: border-color 0.15s, box-shadow 0.15;
}

textarea:focus {
  border-color: #7db0fb;
  outline: 0;
  box-shadow: 0 0 0 4px rgba(24, 117, 255, 0.25);
}

.form-group {
  padding: 8px;
}

.bottom {
  margin-bottom: 20rem;
}
</style>