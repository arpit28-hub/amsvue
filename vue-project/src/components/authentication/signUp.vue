<template>
  <v-app>
    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 100vh; background: #f3f4f6"
    >
      <v-card elevation="6" width="400" class="pa-6 rounded-lg">
        <h2 class="text-h5 text-center mb-6">SignUp</h2>

        <v-form @submit.prevent="handleRegister">
          <v-text-field
            v-model="email"
            label="Email"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="mdi-email"
            class="mb-4"
            required
          />
          <!-- <p>{{password}}</p> -->
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="mdi-lock"
            class="mb-4"
            required
          />

          <v-btn type="submit" block color="primary" class="mt-2" size="large"> Register </v-btn>
        </v-form>

        <!-- <p class="text-caption text-center mt-4">
          <a href="#" class="text-primary font-medium">back to</a>
        </p> -->
        <router-link :to="{ name: 'signin' }" class="text-decoration-none ">
          <v-icon size="15">mdi-arrow-left</v-icon> back to the login</router-link
        >
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions('authStore', ['register']),
    async handleRegister() {
      // console.log("Email:", this.email, "Password:", this.password);
      try {
        const regInfo = {
          email: this.email,
          password: this.password,
        }
        // alert("hi from the signup"+regInfo.password)
        const result = await this.register(regInfo)
        console.log('register succesfull:', result)
      } catch (error) {
        console.error('reg failed:', error)
        alert('Invalid reg data!')
      }
    },
  },
}
</script>
