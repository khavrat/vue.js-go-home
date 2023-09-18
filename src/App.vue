<template>
  <div class="content">
    <Container>
      <h2>{{ text }}</h2>
      <ApartmentFilterForm @updateFilters="filter" />
      <ApartmentsList :items="filteredApartments" >
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
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      console.log('this.filterByCity(this.filterByPrice(this.apartments))',this.filterByCity(this.filterByPrice(this.apartments)))
      return this.filterByCity(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    filter({ city, price }) {
      console.log("1submit button click", city, price);

      this.filters.city = city;
      this.filters.price = price;
      console.log("2submit button click", city, price);

    },
    filterByCity(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
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
