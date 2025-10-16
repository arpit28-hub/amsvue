<template>
  <v-app>
    <v-main class="d-flex align-center justify-center" style="min-height: 100vh; background: #f3f4f6;">
      <v-card elevation="6" width="400" class="pa-6 rounded-lg">
        <h2 class="text-h5 text-center mb-6">SignUp</h2>

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

          <v-btn
            type="submit"
            block
            color="primary"
            class="mt-2"
            size="large"
          >
            Login
          </v-btn>
        </v-form>

        <p class="text-caption text-center mt-4">
          Don't have an account?
          <a href="#" class="text-primary font-medium">Register</a>
        </p>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      console.log("Email:", this.email, "Password:", this.password);
      alert("Login clicked! You can connect API here.");
    }
  }
};
</script>
