<template>
  <v-container>
    <v-row class="bottom">
      <v-col class="mt-3" md="12" sm="12">
        <v-card elevation="11" color="dark" outlined shaped>
          <v-card-title>Write information of your products</v-card-title>
          <v-card-text>
            <v-form ref="form" @submit.prevent="createTicket">
              <v-text-field v-model="formData.name" :rules="rules" label="Name of Product" prepend-icon="mdi mdi-account"
                variant="underlined" clearable></v-text-field>
              <v-text-field v-model="formData.category" :rules="rules" label="Category of Product" variant="underlined"
                prepend-icon="mdi mdi-shopping" clearable></v-text-field>
              <v-text-field v-model="formData.price" :rules="rules" label="Price" variant="underlined"
                prepend-icon="mdi mdi-currency-usd" clearable></v-text-field>
              <v-text-field v-model="formData.shortDescription" :rules="rules" label="Write a short Description"
                variant="underlined" prepend-icon="mdi mdi-note-text" clearable></v-text-field>
              <v-textarea prepend-icon="mdi-comment" :rules="rules" v-model="formData.description"
                label="Write Description" rows="1"></v-textarea>
              <!-- Thumbnail Image -->
              <label class="white--text" for="image">Thumbnail Image</label>
              <div class="form-group">
                <label for="image">Upload Image:</label>
                <input style="color: black;" type="file" id="attachmentFile" @change="handleImageUpload" required>
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
import Swal from "sweetalert2";

export default {
  data() {
    return {
      formData: {
        name: "",
        category: "",
        price: 0,
        shortDescription: "",
        description: "",
        attachmentFile: null, // To store the selected image file
      },
      rules: [
        value => !!value || 'This field is required',
      ],
    };
  },
  methods: {
  async createTicket() {
    const formData = new FormData();
    formData.append("attachmentFile", this.formData.attachmentFile);
    formData.append('name', this.formData.name);
    formData.append('category', this.formData.category);
    formData.append('price', this.formData.price);
    formData.append('shortDescription', this.formData.shortDescription);
    formData.append('description', this.formData.description);

    try {
      const response = await axios.post(`${this.$axios.defaults.baseURL}/api/products`, formData, {
        headers: {
          Authorization: `${localStorage.getItem("adminToken")}`,
        },
      });

      Swal.fire({
        icon: "product",
        title: "Your work has been saved",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        this.$router.push({ path: "products" });
      }, 1600);
    } catch (error) {
      Swal.fire({
        title: "An error occurred",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  },
  handleImageUpload(event) {
    // Get the selected image file from the input field
    this.formData.attachmentFile = event.target.files[0];
    console.log(this.formData.attachmentFile);
  },
},
};
</script>

<style scoped>
input {
  color: aliceblue;
}
</style>
