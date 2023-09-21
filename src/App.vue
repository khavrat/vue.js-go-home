<template>
  <HeaderOfPage />
  <Container>
      <ApartmentFilterForm @updateFilters="filter" />

      <div class="content">
        <ApartmentsList :items="filteredApartments">
          <template v-slot:galleryTitle>
            <p class="title">Подборка согласно выбора</p></template
          >
        </ApartmentsList>
      </div>
  </Container>
  <FooterOfPage />
</template>

<script>
import Container from "./components/shared/Container.vue";
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import ApartmentFilterForm from "./components/apartment/ApartmentFilterForm.vue";
import HeaderOfPage from "./components/HeaderOfPage.vue";
import FooterOfPage from "./components/FooterOfPage.vue";

export default {
  name: "App",
  components: {
    Container,
    ApartmentsList,
    ApartmentFilterForm,
    FooterOfPage,
    HeaderOfPage,
  },
  data() {
    return {
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      console.log(
        "this.filterByCity(this.filterByPrice(this.apartments))",
        this.filterByCity(this.filterByPrice(this.apartments))
      );
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

<style lang="scss" scoped>
@import "./assets/scss/variables.scss";

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

.title {
  position: fixed;
  padding-top: 203px;
  padding-bottom: 20px;
  background-color: $wight-color;
  z-index: 2;
  width: 100%;
  color: $black-color;
  font-size: 20px;
  font-weight: 700;
  font-family: Montserrat;
}
</style>
