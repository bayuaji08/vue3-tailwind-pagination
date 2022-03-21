import { createApp } from "vue";
import Test from "./Test.vue";
import Pagination from "./components/pagination.vue";
import "./main.css";

export default Pagination;

export { Pagination };

createApp(Test).mount("#app");
