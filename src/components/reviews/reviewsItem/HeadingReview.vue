<template>
  <div class="reviews-heading">
    <AvatarReview class="reviews-heading__avatar" />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
      <StarRating :rating="rating" />
    </div>
  </div>
</template>

<script>
import AvatarReview from "./AvatarReview.vue";
import StarRating from "@/components/StarRating.vue";

export default {
  name: "HeadingReview",
  components: {
    StarRating,
    AvatarReview,
  },
  props: {
    author: {
      type: String,
      requared: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  align-items: center;

  &__avatar {
    margin-right: 18px;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
