# Installation

```sh
npm install vue3-tailwind-pagination
```

# Getting Started

## Import component
main.js
```sh
import { createApp } from "vue";
import App from "./App.vue";
import VuePagination from "vue3-tailwind-pagination";
import "vue3-tailwind-pagination/dist/style.css";

const app = createApp(App);

app.use(VuePagination);
app.mount("#app");

```

## How to use

```sh
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
export default {
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
```
