<template>
  <div class="content">
    <Container>
      <h2>{{ text }}</h2>
      <ApartmentFilterForm @submit="logger"/>
      <ApartmentsList :items="apartments">
        <template v-slot:galleryTitle>Подборка согласно выбора</template>
      </ApartmentsList>
    </Container>
  </div>
</template>

<script>
import Container from "./components/shared/Container.vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import ApartmentFilterForm from "./components/apartment/ApartmentFilterForm.vue";

export default {
  name: "App",
  components: {
    Container,
    ApartmentsList,
    ApartmentFilterForm,
  },
  data() {
    return {
      text: "",
      apartments,
    };
  },
  methods: {
    logger(value) {
      console.log('submit button click', value)
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
