import { create } from "zustand";

export const productStore = create((set) => ({
  // الحالة الابتدائية للفلاتر
  filters: {
    search: "",
    categories: [], // سنخزن هنا مصفوفة الـ documentId للتصنيفات المختارة
    brands: [], // سنخزن هنا مصفوفة الـ documentId للبراندات المختارة
    maxPrice: 5000, // حد أقصى افتراضي للسعر
    sort: "newest", // الترتيب الافتراضي
  },

  // دالة لتحديث أي فلتر بشكل ديناميكي
  setFilter: (filterName, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [filterName]: value,
      },
    })),

  // دالة مريحة لتبديل اختيار تصنيف أو براند (إضافة/إزالة من المصفوفة)
  toggleMultiFilter: (filterName, id) =>
    set((state) => {
      const currentList = state.filters[filterName];
      const isExist = currentList.includes(id);
      const updatedList = isExist
        ? currentList.filter((item) => item !== id) // إزالة إذا كان موجوداً
        : [...currentList, id]; // إضافة إذا لم يكن موجوداً

      return {
        filters: {
          ...state.filters,
          [filterName]: updatedList,
        },
      };
    }),

  // دالة لإعادة تعيين كل الفلاتر للافتراضي (Reset)
  resetFilters: () =>
    set(() => ({
      filters: {
        search: "",
        categories: [],
        brands: [],
        maxPrice: 5000,
        sort: "newest",
      },
    })),
}));
