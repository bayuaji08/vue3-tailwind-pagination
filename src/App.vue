<template>
  <div class="mt-10">
    <VuePagination
      :total="total"
      v-model:value="currentPage"
      :perPage="perPage"
      @set="changePage"
    />
  </div>
</template>

<script>
// import Pagination from "./components/VuePagination.vue";
export default {
  // components: { Pagination },
  data() {
    return {
      total: 30,
      perPage: 10,
      currentPage: 1,
    };
  },
  methods: {
    changePage(page) {
      console.log(page);
    },
  },
};
</script>
