import { defineStore } from "pinia";

export const LoadingStore = defineStore("LoadingStore", {
  state: () => ({
    loading: false,
    loadingText: "",
  }),
  getters: {
    loadingStatus(state) {
      return state.loading;
    },
  },
  actions: {
    show(val: boolean = true,text:string = "加载中...") {
      this.loading = val;
      this.loadingText = text
    },
    hide(val: boolean = false) {
      this.loading = val;
    },
  },
});
