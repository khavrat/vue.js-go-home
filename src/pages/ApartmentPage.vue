<template>
  <Container>
    <h1 class="page">ApartmentPage</h1>
  </Container>
</template>

<script>
import Container from "../components/shared/Container.vue";

export default {
  name: "ApartmentPage",
  components: Container,
};
</script>

<style lang="scss" scoped>
.page {
  font-size: 100px;
  color: blue;
}
</style>
