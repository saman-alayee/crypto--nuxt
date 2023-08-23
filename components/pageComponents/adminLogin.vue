<template>
    <v-card class="mx-auto px-6 mt-8 py-8" max-width="500" color="#263238">
        <v-card-title>Admin Login</v-card-title>
        <v-form v-model="form" @submit.prevent="onSubmit">
            <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" clearable
                label="Email"></v-text-field>

            <v-text-field :readonly="loading" :rules="[required]" v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            @click:append="show1 = !show1"></v-text-field>

            <br>

            <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit" variant="elevated">
                Sign In
            </v-btn>
        </v-form>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        form: false,
        email: null,
        password: null,
        loading: false,
        show1: false,
        show2: true,
    }),

    methods: {
        onSubmit() {
            if (!this.form) return
            this.loading = true;
            this.$store.dispatch("loginAdmin/storeToken", {
                email: this.email,
                password: this.password
            })
            
            this.loading = false




        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
}
</script>