<template>
  <button
    v-bind:type="type"
    :class="{btn: true, 'btn--outlined': outlined}"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("customClick");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;

  &--outlined {
    background: transparent;
    color: #ff662d;
    border: 1px solid #ff662d;
  }
}
</style>
