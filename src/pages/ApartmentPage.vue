<template>
  <Container>
    <h1 class="page">ApartmentPage</h1>
    <p>Apartment ID: {{ $route.params.id }}</p>
  </Container>
</template>

<script>
import Container from "../components/shared/Container.vue";

export default {
  name: "ApartmentPage",
  components: {
    Container,
  },
  mounted() {
    console.log(" this.$router:>> ", this.$router);
    console.log(" this.$route:>> ", this.$route);
  },
};
</script>

<style lang="scss" scoped>
.page {
  font-size: 100px;
  color: blue;
}
</style>
