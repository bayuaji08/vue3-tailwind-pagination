# Installation

```sh
npm install vue3-tailwind-pagination
```

# Getting Started

## Import component

```sh
import Pagination from "vue3-tailwind-pagination.vue";
export default {
  components: { Pagination }
  ...
}
```

## How to use

```sh
<template>
    <Pagination
      :total="total"
      v-model:value="currentPage"
      :perPage="perPage"
      @set="changePage"
    />
</template>
```
