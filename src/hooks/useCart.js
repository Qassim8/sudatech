import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useCart = () => {
  const BASE_URL = ``;
  const queryClient = useQueryClient();

  const { data: cartItems, isLoading } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/carts`);
      return data;
    },
  });

  const { mutate: addCart } = useMutation({
    mutationFn: async (itemData) => {
      if (!itemData || !itemData.id) throw new Error("خطأ في تفاصيل المنتج");
      const cartList = queryClient.getQueryData(["cartItems"]);
      const isCart = cartList?.find((c) => c.id === itemData.id);

      if (isCart) {
        const { data } = await axios.put(`${BASE_URL}/cart/${itemData.id}`, {
          id: itemData.id,
          quantity: itemData.quantity + 1,
        });
        return data;
      } else {
        const { data } = await axios.post(`${BASE_URL}/cart`, {
          id: itemData.id,
          quantity: 1,
        });

        return data;
      }
    },
    onSuccess: () => {
      return queryClient.invalidateQueries(["cartItems"]);
    },
  });

  const { mutate: removeCart } = useMutation({
    mutationFn: async (itemData) => {
      if (!itemData || !itemData.id) throw new Error("خطأ في تفاصيل المنتج");
      const cartList = queryClient.getQueryData(["cartItems"]);
      const isCart = cartList?.find((c) => c.id === itemData.id);

      if (isCart && itemData.quantity > 1) {
        const { data } = await axios.put(`${BASE_URL}/cart/${itemData.id}`, {
          id: itemData.id,
          quantity: itemData.quantity - 1,
        });
        return data;
      } else {
        return await axios.delete(`${BASE_URL}/cart/${itemData.id}`);
      }
    },
    onSuccess: () => {
      return queryClient.invalidateQueries(["cartItems"]);
    },
  });

  return {
    cartItems,
    isLoading,
  };
};

export default useCart;
