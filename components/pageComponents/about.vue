<template>
  <v-container>
    <v-row class="bottom">
      <v-col cols="12" md="6" sm="12">
        <div class="item-container">
          <div class="text-field">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate fugiat pariatur modi dolor distinctio enim eos minus
              dolorum quod ullam!
            </p>
          </div>
          <div class="image-container">
            <img
              src="@/assets/images/vectors/businesImage.jpg"
              alt="busines image"
            />
          </div>
          <div class="text-field">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            adipisci vitae odit quas eaque exercitationem. Magni quos quam, nisi
            sit expedita ullam deserunt aperiam exercitationem.
          </div>
          <div class="address-container">
            <div class="city-container">
              <v-icon aria-hidden="false"> mdi-map </v-icon>
              <p>iran,semnan,semnan university</p>
              <v-icon aria-hidden="false"> mdi-phone </v-icon>
              <p class="mt-2">09378156704</p>
            </div>
            <div class="city-container">
              <v-icon aria-hidden="false"> mdi-map </v-icon>
              <p>iran,semnan,semnan university</p>
              <div class="icon-container">
                <v-icon aria-hidden="false"> mdi-phone </v-icon>
                <p class="mt-2">09378156704</p>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col md="6" sm="12">
        <v-card elevation="11" color="white" outlined shaped>
          <v-card-text>
            <form class="form-group" action="">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
              <label for="lastname">Last Name</label>
              <input type="text" name="lastname" id="lastname" />
              <label for="email">Email Address</label>
              <input type="email" name="email" id="email" />
              <label for="tel">Phone Number</label>
              <input type="tel" name="tel" id="tel" />
              <label for="companyname">Company Name</label>
              <input type="text" name="companyname" id="companyname" />
              <label for="message">Message</label>
              <textarea cols="12">Message</textarea>
              <base-button class="mt-4" text="send" color="primary" width="100" />
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import baseButton from "../elements/baseButton.vue";
export default {
  components: { baseButton },
};
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