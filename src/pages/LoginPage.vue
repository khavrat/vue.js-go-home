<template>
  <main class="login-page">
    <LoginForm @updateForm="getFormData" />
  </main>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";

export default {
  name: "LoginPage",
  components: {
    LoginForm,
  },
  methods: {
    getFormData({ email, password }) {
      console.log("email, password", email, password);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  padding-top: 120px;
  padding-bottom: 55px;
}
</style>
