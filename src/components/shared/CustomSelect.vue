<template>
  <select
    class="custom-select"
    id="searchCity"
    v-bind="$attrs"
    v-model="inputValue"
  >
    <option v-for="item in formatedItems" :key="item.value" :value="item.value" :selected="item.selected">
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  inheritAttrs: false,

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    console.log('data in customselect')
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue(newValue) {
          console.log('watch inputValue in customselect', newValue)

      this.$emit("input", newValue);
    },
  },
  computed: {
    formatedItems() {
                console.log('computed formatedItems in customselect')

      return this.items.map((item) => {
        return typeof item === "object"
          ? item
          : {
              value: item,
              label: item,
            };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>
