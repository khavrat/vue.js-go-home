<template>
  <div id="app">
    <ApartmentsItemVue
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
    />
  </div>
</template>

<script>
import ApartmentsItemVue from "./components/apartment/ApartmentsItem";

export default {
  name: "App",
  components: {
    ApartmentsItemVue,
  },
  data() {
    return {
      apartment: {
        descr: "qwertyu asdfghj xcvbnm",
        price: 1010,
        rating: 3.5,
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
}
</style>
