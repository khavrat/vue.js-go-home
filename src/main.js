import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/index.scss'
import router from './router'

const app= createApp(App);

app.use(router);
// router.isReady().then(() => app.mount("#app"));

try {
  await router.isReady();
    app.mount("#app");
} catch (err) {
  console.log(err)
}