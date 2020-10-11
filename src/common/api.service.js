import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  },
  get(resource, slug = "") {
    try {
      return Vue.axios.get(`${resource}/${slug}`);
    } catch (e) {
      throw Error(`Error in API Service ${e.message}`);
    }
  },
  delete(resource) {
    try {
      return Vue.axios.delete(`${resource}/`);
    } catch (e) {
      throw Error(`Error in API Service ${e.message}`);
    }
  },
  post(resource, payload) {
    try {
      return Vue.axios.post(`${resource}/`, payload);
    } catch (e) {
      throw Error(`Error in API Service ${e.message}`);
    }
  },
  put(resource, slug, params) {
    try {
      return Vue.axios.put(`${resource}/${slug}/`, params);
    } catch (e) {
      throw Error(`Error in API Service ${e.message}`);
    }
  }
};

export const TodosService = {
  get() {
    return ApiService.get("todos");
  },
  delete(slug) {
    return ApiService.delete(`todos/${slug}`);
  },
  post(payload) {
    return ApiService.post("todos", payload);
  },
  put(slug, payload) {
    return ApiService.put("todos", slug, payload);
  }
};

export default ApiService;
