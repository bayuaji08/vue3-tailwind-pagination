import VuePagination from "./components/VuePagination.vue";

export default {
  install: (app, options) => {
    app.component("VuePagination", VuePagination);
  },
};

export { VuePagination };
