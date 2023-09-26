<template>
    <div class="cart-component mt-4">
        <v-form style="padding: 2rem;" ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :rules="nameRules" label="name" required class="mt-8"></v-text-field>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required class=""></v-text-field>
            <v-text-field v-model="password" type="password" :rules="passwordRules" label="password"
                required></v-text-field>
            <v-text-field v-model="re_password" type="password" :rules="passwordRules" label="re_password"
                required></v-text-field>
                <div class="form-group">
                <label for="image">Upload Image:</label>
                <input style="color: black;" type="file" id="thumbnailImage" @change="handleImageUpload" required>
              </div>
            <v-btn class="mt-5" min-width="100%" color="blue darken-4" dark @click="editUser">
                Apply changes
            </v-btn>
            <v-spacer></v-spacer>
        </v-form>
    </div>
</template>
  
<script>

export default {
    data: () => ({
        formData: {
        valid: true,
        password: "",
        name: "",
        email: "",
        bio:"",
        image:null,
        },
        passwordRules: [
            (v) => !!v || "password is required",
        ],
        
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        nameRules: [
            (v) => !!v || "name is required",
        ]
    }),


    computed: {
        posts() {
            return this.$store.getters["post/loadedPosts"];
        },
    },
    methods: {
     editUser() {
        const formData = new FormData();

      // Append form fields to the FormData object
      for (const key in this.formData) {
        if (this.formData.hasOwnProperty(key)) {
          formData.append(key, this.formData[key]);
        }
      }
      this.$store.dispatch("register/editUser", {
        formData
        });
    },
    handleImageUpload(event) {
      // Get the selected image file from the input field
      this.formData.thumbnailImage = event.target.files[0];
      console.log(this.formData.thumbnailImage);
    },
  },
    mounted() {
        // Dispatch the action to fetch posts
        this.$store.dispatch("post/getPosts").then(() => {
            // Posts have been loaded
            console.log("Posts loaded");
        });
    },
}
</script>
  
<style>
.cart-component {
    background-color: #2a2d3e;
    border-radius: 8px;
    padding: 16px;
}
</style>