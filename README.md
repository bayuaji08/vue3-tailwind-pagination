# Installation

```sh
npm install vue3-tailwind-pagination
```

# Getting Started

## Import component
#### main.js
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
#### App.Vue
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

## Custom Style
```sh
{
          wrapper:
            "table border-collapse text-center bg-white dark:bg-dark mx-auto shadow-sm text-xs",
          element:
            "w-8 h-8 border border-gray-200 table-cell hover:border-blue-100",
          activeElement:
            "w-8 h-8 border border-blue-500 table-cell hover:border-blue-600",
          disabledElement:
            "w-8 h-8 border border-gray-200 table-cell cursor-not-allowed",
          activeButton:
            "bg-blue-500 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
          disabledButton:
            "opacity-25 w-full h-full pointer-events-none transition duration-100 ease-in-out",
          button:
            "hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
        };

```
