import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { productStore } from "../store/productsStore";

const useProducts = ({ productId }) => {
  const { activeCategories } = productStore((set) => set.activeCategories);
  const queryClient = useQueryClient();

  const BASE_URL = ``;

  const { data: products, isLoading: productsLoad } = useQuery({
    queryKey: ["products", activeCategories],
    queryFn: async () => {
      // const endpoint = activeCategories ? activeCategories : "all";

      // const res = await axios.get(`${BASE_URL}/category=${endpoint}`);

      const res = await axios.get(`${BASE_URL}/products`);

      return res.data;
    },
  });

  const { data: singleProduct, isLoading: singleProductLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/products/${productId}`);
      return data;
    },
    enabled: !!productId,
    initialData: () => {
      return queryClient
        .getQueryData(["products"])
        ?.find((p) => p.id === productId);
    },
  });

  return { products, productsLoad, singleProduct, singleProductLoading };
};

export default useProducts;
