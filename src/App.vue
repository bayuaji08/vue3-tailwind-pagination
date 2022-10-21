<template>
  <div class="mt-10">
    <VuePagination
      :total="total"
      v-model:value="currentPage"
      :perPage="perPage"
      @set="changePage"
      :classes="classes"
    />
  </div>
</template>

<script>
// import Pagination from "./components/VuePagination.vue";
import { VuePagination } from "vue3-tailwind-pagination";

export default {
  components: { VuePagination },
  data() {
    return {
      total: 30,
      perPage: 10,
      currentPage: 1,
      classes: {
        wrapper:
          "table border-collapse text-center bg-white dark:bg-dark mx-auto shadow-sm text-xs",
        element:
          "w-8 h-8 border border-gray-200 table-cell hover:border-red-100",
        activeElement:
          "w-8 h-8 border border-red-500 table-cell hover:border-red-600",
        disabledElement:
          "w-8 h-8 border border-gray-200 table-cell cursor-not-allowed",
        activeButton:
          "bg-red-500 w-full h-full text-white hover:bg-red-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-red-500 focus:outline-none focus:ring-opacity-50",
        disabledButton:
          "opacity-25 w-full h-full pointer-events-none transition duration-100 ease-in-out",
        button:
          "hover:bg-red-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-red-500 focus:outline-none focus:ring-opacity-50",
      },
    };
  },
  methods: {
    changePage(page) {
      console.log(page);
    },
  },
};
</script>
