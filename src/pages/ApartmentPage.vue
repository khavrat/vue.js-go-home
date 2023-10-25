<template>
  <main class="apartment-page">
    <Container>
      <div class="apartment-page__content">
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
import apartments from "@/components/apartment/apartments";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner.vue";
import ReviewsList from "../components/reviews/ReviewsList.vue";
import reviewsData from "../components/reviews/reviews.json";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    ReviewsList,
  },
  computed: {
    reviewsData() {
      return reviewsData;
    },
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
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
