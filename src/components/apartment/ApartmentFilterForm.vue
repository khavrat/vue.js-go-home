<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput
      v-model="price"
      placeholder="Цена, от"
      error-message="Не должно быть пустым"
    />
    <MainButton class="form__submit" type="submit">Подбор жилья</MainButton>
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import MainButton from "../shared/Button.vue";

export default {
  components: { CustomSelect, CustomInput, MainButton },

  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "Город", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("updateFilters", {
        city: this.city,
        price: this.price,
      });
      console.log("city, price in handleSubmit", this.city, this.price);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  position: fixed;
  top: 120px;
  z-index: 3;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
