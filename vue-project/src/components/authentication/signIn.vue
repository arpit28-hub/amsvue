<template>
  <v-app>
    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 100vh; background: #f3f4f6"
    >
      <v-card elevation="6" width="400" class="pa-6 rounded-lg">
        <h2 class="text-h5 text-center mb-6">SignIn</h2>

        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="email"
            label="Email"
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="mdi-email"
            class="mb-4"
            required
          />

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

          <v-btn  @submit.prevent="handleLogin" block color="primary" class="mt-2" size="large" @click="handleLogin">
            Login
          </v-btn>
        </v-form>

        <p class="text-caption text-center mt-4">
          Don't have an account?
          <a href="#" class="text-primary font-medium" @click="gotoReg">Register</a>
        </p>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { useRouter } from 'vue-router';
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'signInPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions('authStore',['login']),
    async handleLogin() {
      try {
        const credentials = {
          "email": this.email,
          "password": this.password,
        }
        const result = await this.login(credentials)
        console.log('Login successful:', result)
      }catch (error) {
        console.error('Login failed:', error)
        alert('Invalid credentials!')
      }
    },

    gotoReg(){
      // alert('hello')
      this.$router.push({name:'signup'})
    }
  },
}
</script>
