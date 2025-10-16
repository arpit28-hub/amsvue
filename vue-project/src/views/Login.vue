<template>
  <v-app>
    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 100vh; background: #f3f4f6"
    >
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script>
import signUp from '@/components/authentication/signUp.vue'
import signIn from '@/components/authentication/signIn.vue'
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleLogin() {
      console.log('Email:', this.email, 'Password:', this.password)
      alert('Login clicked! You can connect API here.')
    },
  },
}
</script>
