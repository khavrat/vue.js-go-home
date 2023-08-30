<template>
  <PageContainer>
    <div class="apartments-list">
      <ApartmentsItemVue
        v-for="{ id, descr, rating, price } in items"
        :key="id"
        :descr="descr"
        :rating="rating"
        :price="price"
      />
    </div>
  </PageContainer>
</template>

<script>
import PageContainer from "../shared/Container.vue";
import ApartmentsItemVue from "./ApartmentsItem";

export default {
  name: "ApartmentsList",
  components: {
    ApartmentsItemVue,
    PageContainer,
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
}
</style>
