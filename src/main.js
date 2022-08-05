import { createApp } from "vue";
import App from "./App.vue";
import VuePagination from "vue3-tailwind-pagination";
import "vue3-tailwind-pagination/dist/style.css";

const app = createApp(App);

app.use(VuePagination);
app.mount("#app");
