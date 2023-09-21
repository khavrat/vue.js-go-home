<template>
  <div class="logo">
    <img src="../assets/svg/logo.svg" alt="logo" />
    <p class="naming"><span class="partnaming">Go</span>Home</p>
  </div>
</template>

<script>
export default {
  name: "LogoCompany",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 0;
}
.naming {
  color: $main-color;
  font-weight: 800;
  font-size: 18px;
  font-family: Montserrat;
}
.partnaming {
  color: $wight-color;
}
</style>
