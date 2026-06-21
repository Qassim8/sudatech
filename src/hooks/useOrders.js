import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";

const useOrders = () => {
  const token = localStorage.getItem("userToken");
  const userId = localStorage.getItem("userData");
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const BASE_URL = `http://localhost:1337/api/orders`;
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: orders = [],
    isLoading,
    error: orderError,
    isError: isOrderError,
  } = useQuery({
    queryKey: ["orders", token],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/me`, headers);

      return data.data || [];
    },
    enabled: !!token,
    staleTime: 20000,
  });

  const {
    mutate: createOrder,
    isPending: orderPending,
    isError: isCreateOrderError,
    error: createOrderError,
  } = useMutation({
    mutationFn: async (orderInfo) => {
      if (!orderInfo) return;
      const { data } = await axios.post(
        `${BASE_URL}`,
        {
          data: {
            address: orderInfo.address,
            phone: orderInfo.phone,
            customer: orderInfo.name,
          },
        },
        headers,
      );
      return data.data;
    },
    onSuccess: () => {
      navigate("/orders");
      queryClient.invalidateQueries({ queryKey: ["orders", token] });
      queryClient.invalidateQueries({ queryKey: ["cartItems", token] });
    },
  });
  return {
    orders,
    isLoading,
    isOrderError,
    orderError,
    createOrder,
    orderPending,
    isCreateOrderError,
    createOrderError,
  };
};

export default useOrders;
