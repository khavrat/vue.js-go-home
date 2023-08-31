<template>
  <div class="content">
    <h2>{{ text }}</h2>
    <CustomInputVue v-model="text"/>
    <ApartmentsList :items="apartments">
      <template v-slot:galleryTitle>Подборка согласно выбора</template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import CustomInputVue from "./components/shared/CustomInput.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    CustomInputVue,
  },
  data() {
    return {
      text: "",
      apartments,
    };
  },
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
