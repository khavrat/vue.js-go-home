<template>
  <FormUser @submit.prevent="handleSubmit">
    <InputUser v-model="formData.email" name="email" />
    <InputUser v-model="formData.password" name="password" />
    <Button type="submit">Click me</Button>
  </FormUser>
</template>

<script>
import FormUser from "../shared/form/FormUser.vue";
import InputUser from "../shared/form/InputUser.vue";
import Button from "../shared/Button.vue";

export default {
  name: "LoginForm",
  components: {
    FormUser,
    InputUser,
    Button,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("updateForm", {
        email: this.formData.email,
        password: this.formData.password,
      });

      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
