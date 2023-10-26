<template>
  <main class="apartment-page">
    <Container>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner :owner="apartment.owner" />
          <ReviewsList :reviews="reviewsData" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner.vue";
import ReviewsList from "../components/reviews/ReviewsList.vue";
import reviewsData from "../components/reviews/reviews.json";
import { getApartmentById } from "../services/apartments.service";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    ReviewsList,
  },
  data() {
    return {
      apartment: null,
    }
  },
  computed: {
    reviewsData() {
      return reviewsData;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const {data} = await getApartmentById(id);
      console.log("data in id page", data);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
  },
  mounted() {
    console.log("this.apartment", this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-top: 120px;
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
