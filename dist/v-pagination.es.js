import { openBlock, createElementBlock, normalizeClass, createElementVNode, Fragment, renderList, toDisplayString } from "vue";
var VuePagination_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  props: {
    value: {
      type: Number,
      default: null
    },
    total: {
      type: Number,
      default: null
    },
    perPage: {
      type: Number,
      default: 10
    },
    limit: {
      type: Number,
      default: 5
    },
    classes: {
      type: Object,
      default() {
        return {
          wrapper: "table border-collapse text-center bg-white dark:bg-dark mx-auto shadow-sm text-xs",
          element: "w-8 h-8 border border-gray-200 table-cell hover:border-blue-100",
          activeElement: "w-8 h-8 border border-blue-500 table-cell hover:border-blue-600",
          disabledElement: "w-8 h-8 border border-gray-200 table-cell cursor-not-allowed",
          activeButton: "bg-blue-500 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50",
          disabledButton: "opacity-25 w-full h-full pointer-events-none transition duration-100 ease-in-out",
          button: "hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50"
        };
      }
    }
  },
  data() {
    var _a;
    return {
      currentPage: (_a = this.value) != null ? _a : 1
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
      return this.currentPage === null || this.currentPage <= 1 ? this.classes.disabledElement : "";
    },
    nextElementIsDisabled() {
      return this.currentPage === null || this.currentPage >= this.totalPagination ? this.classes.disabledElement : "";
    },
    prevButtonIsDisabled() {
      return this.currentPage === null || this.currentPage <= 1 ? this.classes.disabledButton : "";
    },
    nextButtonIsDisabled() {
      return this.currentPage === null || this.currentPage >= this.totalPagination ? this.classes.disabledButton : "";
    }
  },
  watch: {
    value(val) {
      this.currentPage = val;
    }
  },
  methods: {
    setCurrent(page) {
      this.currentPage = page;
      this.$emit("set", page);
    },
    previousPage() {
      this.currentPage === null ? 1 : this.setCurrent(Math.max(this.currentPage - 1, 1));
    },
    nextPage() {
      this.currentPage === null ? this.totalPagination : this.setCurrent(Math.min(this.currentPage + 1, this.totalPagination));
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
    }
  }
};
const _hoisted_1 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", {
    class: normalizeClass($props.classes.wrapper)
  }, [
    createElementVNode("li", {
      class: normalizeClass([$options.element(false), $options.prevElementIsDisabled])
    }, [
      createElementVNode("button", {
        class: normalizeClass([$options.button(false), $options.prevButtonIsDisabled]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.firstPage())
      }, " \xAB ", 2)
    ], 2),
    createElementVNode("li", {
      class: normalizeClass([$options.element(false), $options.prevElementIsDisabled])
    }, [
      createElementVNode("button", {
        class: normalizeClass([$options.button(false), $options.prevButtonIsDisabled]),
        onClick: _cache[1] || (_cache[1] = ($event) => $options.previousPage())
      }, " \u2039 ", 2)
    ], 2),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.pages, (page) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass([$options.element(page == $data.currentPage)])
      }, [
        createElementVNode("button", {
          class: normalizeClass([$options.button(page == $data.currentPage)]),
          onClick: ($event) => $options.setCurrent(page)
        }, toDisplayString(page), 11, _hoisted_1)
      ], 2);
    }), 256)),
    createElementVNode("li", {
      class: normalizeClass([$options.element(false), $options.nextElementIsDisabled])
    }, [
      createElementVNode("button", {
        class: normalizeClass([$options.button(false), $options.nextButtonIsDisabled]),
        onClick: _cache[2] || (_cache[2] = ($event) => $options.nextPage())
      }, " \u203A ", 2)
    ], 2),
    createElementVNode("li", {
      class: normalizeClass([$options.element(false), $options.nextElementIsDisabled])
    }, [
      createElementVNode("button", {
        class: normalizeClass([$options.button(false), $options.nextButtonIsDisabled]),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.lastPage())
      }, " \xBB ", 2)
    ], 2)
  ], 2);
}
var VuePagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-26c436ba"]]);
var index = {
  install: (app, options) => {
    app.component("VuePagination", VuePagination);
  }
};
export { index as default };
