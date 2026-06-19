import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { productStore } from "../store/productsStore";

const useProducts = ({ productId } = {}) => {
  const { activeCategories } = productStore((state) => state.activeCategories);
  const queryClient = useQueryClient();

  const BASE_URL = `http://localhost:1337/api`;

  const { data: products, isLoading: productsLoad } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      // const endpoint = activeCategories ? activeCategories : "all";

      // const res = await axios.get(`${BASE_URL}/category=${endpoint}`);

      const { data } = await axios.get(`${BASE_URL}/products?populate=*`);

      return data.data;
    },
    staleTime: Infinity,
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

  return { products, productsLoad, singleProduct, singleProductLoading };
};

export default useProducts;
