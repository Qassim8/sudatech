import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { productStore } from "../store/productsStore";
import QueryString from "qs";

const useProducts = ({ productId, page = 1, pageSize = 9 } = {}) => {
  const filters = productStore((state) => state.filters);
  const queryClient = useQueryClient();

  const BASE_URL = `http://localhost:1337/api`;

  const { data: products = [], isLoading: productsLoad } = useQuery({
    // تأخذ التحديثات تلقائياً عند تغير الصفحة أو أي فلتر في Zustand
    queryKey: ["products", page, filters],
    queryFn: async () => {
      const queryParams = {
        pagination: { page, pageSize },
        populate: "*",
      };

      // 1. الترتيب
      if (filters.sort) {
        if (filters.sort === "newest") queryParams.sort = ["createdAt:desc"];
        if (filters.sort === "price-asc") queryParams.sort = ["price:asc"];
        if (filters.sort === "price-desc") queryParams.sort = ["price:desc"];
      }

      // 2. الفلاتر
      queryParams.filters = {};

      if (filters.search) {
        queryParams.filters.$or = [
          { title: { $containsi: filters.search } },
          { description: { $containsi: filters.search } },
        ];
      }

      if (filters.categories.length > 0) {
        queryParams.filters.category = {
          documentId: { $in: filters.categories },
        };
      }

      if (filters.brands.length > 0) {
        queryParams.filters.brand = { documentId: { $in: filters.brands } };
      }

      if (filters.maxPrice) {
        queryParams.filters.price = { $lte: filters.maxPrice };
      }

      const queryString = QueryString.stringify(queryParams, {
        encodeValuesOnly: true,
      });
      const { data } = await axios.get(`${BASE_URL}/products?${queryString}`);

      return {
        items: data.data || [],
        meta: data.meta?.pagination || { page: 1, pageCount: 1 },
      };
    },
    placeholderData: (previousData) => previousData,
    staleTime: 20000,
  });

  const { data: singleProduct, isLoading: singleProductLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${BASE_URL}/products/${productId}?populate=*`,
      );
      return data.data;
    },
    enabled: !!productId,

    initialData: () => {
      return queryClient
        .getQueryData(["products"])
        ?.find((p) => p.documentId === productId);
    },
  });

  return {
    products,
    productsLoad,
    paginationMeta: products?.meta || { page: 1, pageCount: 1 },
    singleProduct,
    singleProductLoading,
  };
};

export default useProducts;
