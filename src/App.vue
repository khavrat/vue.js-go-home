<template>
  <div class="content">
    <h2>{{ text }}</h2>
    <CustomSelectVue :items="['name', 'label', 'salary']" />
    <CustomInputVue v-model="text" placeholder="Цена, от"/>
    <ApartmentsList :items="apartments">
      <template v-slot:galleryTitle>Подборка согласно выбора</template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import CustomInputVue from "./components/shared/CustomInput.vue";
import CustomSelectVue from "./components/shared/CustomSelect.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    CustomInputVue,
    CustomSelectVue,
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
