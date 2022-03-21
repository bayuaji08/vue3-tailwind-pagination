<template>
  <ul :class="classes.wrapper">
    <li :class="[element(false), prevElementIsDisabled]">
      <button
        :class="[button(false), prevButtonIsDisabled]"
        @click="firstPage()"
      >
        &laquo;
      </button>
    </li>
    <li :class="[element(false), prevElementIsDisabled]">
      <button
        :class="[button(false), prevButtonIsDisabled]"
        @click="previousPage()"
      >
        &lsaquo;
      </button>
    </li>
    <template v-for="page in pages">
      <li :class="[element(page == currentPage)]">
        <button
          :class="[button(page == currentPage)]"
          @click="setCurrent(page)"
        >
          {{ page }}
        </button>
      </li>
    </template>
    <li :class="[element(false), nextElementIsDisabled]">
      <button
        :class="[button(false), nextButtonIsDisabled]"
        @click="nextPage()"
      >
        &rsaquo;
      </button>
    </li>
    <li :class="[element(false), nextElementIsDisabled]">
      <button
        :class="[button(false), nextButtonIsDisabled]"
        @click="lastPage()"
      >
        &raquo;
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: null,
    },
    total: {
      type: Number,
      default: null,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    limit: {
      type: Number,
      default: 5,
    },
    classes: {
      type: Object,
      default() {
        return {
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
      },
    },
  },
  data() {
    return {
      currentPage: this.value ?? 1,
    };
  },
  computed: {
    totalPagination() {
      if (this.perPage <= 0) {
        return 0;
      }

      return Math.ceil(this.total / this.perPage);
    },
    pages() {
      const numShown = Math.min(this.limit, this.totalPagination);
      let first = this.currentPage - Math.floor(numShown / 2);
      first = Math.max(first, 1);
      first = Math.min(first, this.totalPagination - numShown + 1);
      return [...Array(numShown)].map((k, i) => i + first);
    },
    prevElementIsDisabled() {
      return this.currentPage === null || this.currentPage <= 1
        ? this.classes.disabledElement
        : "";
    },
    nextElementIsDisabled() {
      return this.currentPage === null ||
        this.currentPage >= this.totalPagination
        ? this.classes.disabledElement
        : "";
    },
    prevButtonIsDisabled() {
      return this.currentPage === null || this.currentPage <= 1
        ? this.classes.disabledButton
        : "";
    },
    nextButtonIsDisabled() {
      return this.currentPage === null ||
        this.currentPage >= this.totalPagination
        ? this.classes.disabledButton
        : "";
    },
  },
  watch: {
    value(val) {
      this.currentPage = val;
    },
  },
  methods: {
    setCurrent(page) {
      this.currentPage = page;
      this.$emit("set", page);
    },
    previousPage() {
      this.currentPage === null
        ? 1
        : this.setCurrent(Math.max(this.currentPage - 1, 1));
    },
    nextPage() {
      this.currentPage === null
        ? this.totalPagination
        : this.setCurrent(Math.min(this.currentPage + 1, this.totalPagination));
    },
    firstPage() {
      this.setCurrent(1);
    },
    lastPage() {
      this.setCurrent(this.totalPagination);
    },
    element(condition) {
      return condition ? this.classes.activeElement : this.classes.element;
    },
    button(condition) {
      return condition ? this.classes.activeButton : this.classes.button;
    },
  },
};
</script>
