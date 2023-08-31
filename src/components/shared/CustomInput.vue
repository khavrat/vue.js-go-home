<template>
  <div class="wrapper-input">
    <input
      class="custom-input"
      id="searchPrice"
      v-bind="$attrs"
      v-model="inputValue"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  inheritAttrs: false,

  props: {
    placeholder: {
      type: String,
      default: "",
    }
  },

  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue(newValue) {
      this.$emit("input", newValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.wrapper-input {
  position: relative;
  display: inline-flex;
}

.custom-input {
  height: 40px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }

  &--error {
    border-color: $error-color;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: $error-color;
    line-height: 1.3;
  }
}
</style>
