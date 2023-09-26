<template>
  <div id="app">
    <div class="content">
      <HeaderOfPage />
      <router-view></router-view>
    </div>
    <FooterOfPage />
  </div>
</template>

<script>
import HeaderOfPage from "./components/HeaderOfPage.vue";
import FooterOfPage from "./components/FooterOfPage.vue";

export default {
  name: "App",
  components: {
    FooterOfPage,
    HeaderOfPage,
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/variables.scss";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
