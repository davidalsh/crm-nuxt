export const useIsLoadingStore = defineStore("isLoading", {
  state: () => ({ isLoading: true }),
  actions: {
    set(data: boolean) {
      this.isLoading = data;
    },
  },
});
