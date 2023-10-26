<template>
  <Container>
    <slot name="galleryTitle"></slot>
    <ul class="apartments-list">
      <ApartmentsItemVue
        v-for="{ id, imgUrl, descr, rating, price } in items"
        :key="id"
        :id="id"
        :imgUrl="imgUrl"
        :descr="descr"
        :rating="rating"
        :price="price"
      />
    </ul>
  </Container>
</template>

<script>
import Container from "../shared/Container.vue";
import ApartmentsItemVue from "./ApartmentsItem";

export default {
  name: "ApartmentsList",
  components: {
    ApartmentsItemVue,
    Container,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  padding-top: 247px;
}
</style>
