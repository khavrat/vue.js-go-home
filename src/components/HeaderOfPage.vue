<template>
  <header class="header">
    <Container>
      <Logo/>
       </Container>
  </header>
</template>

<script>
import Container from "./shared/Container.vue";
import Logo from "./LogoCompany.vue";

export default {
  name: "HeaderOfPage",
  components: {
    Container,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.header {
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  background: $secondary-color;
}
</style>
