<template>
    <v-layout align-center justify-center row fill-height>
      <v-card flat class="pa-4 login-card" >
        <v-card-title primary-title>
          <h2>Login</h2>
        </v-card-title>
        <v-form>
          <v-text-field
            prepend-icon="fas fa-user"
            name="Username"
            label="Username"
          ></v-text-field>
          <v-text-field
            prepend-icon="fa-lock"
            :append-icon="showPassword ? 'fa-eye-slash' : 'fa-eye'"
            @click:append="showPassword = !showPassword"
            name="Password"
            label="Password"
            :type="showPassword ? 'text': 'password'"
          ></v-text-field>
          <v-card-actions>
            <v-btn
              color="primary"
              large
              block
            >Login</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              color="red"
              large
              block
            ><v-icon dark left>fab fa-google-plus-g</v-icon>Google Login</v-btn>
            
          </v-card-actions>
        </v-form>
      </v-card>
  </v-layout>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      showPassword: false
    };
  }
};
</script>
<style>
.login-card {
  width: 400px;
}
</style>
