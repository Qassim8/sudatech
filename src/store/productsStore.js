import { create } from "zustand";

export const productStore = create((set) => ({
  products: [],
  activeCategories: [],
  setCategories: () => (state) => ({
    activeCategories: state.activeCategories.map((cat) => cat),
  }),
  activeFilters: [],
}));
