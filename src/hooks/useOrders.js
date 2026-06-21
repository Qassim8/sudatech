import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { BASE_URL } from "../config";
import toast from "react-hot-toast";

const useOrders = () => {
  const token = localStorage.getItem("userToken");
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const resourceBase = `${BASE_URL}/orders`;
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
      const { data } = await axios.get(`${resourceBase}/me`, headers);

      return data.data || [];
    },
    enabled: !!token,
    staleTime: 20000,
    onError: (err) => {
      const msg =
        err?.response?.data?.message || err?.message || "فشل جلب الطلبات";
      toast.error(msg);
    },
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
        `${resourceBase}`,
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
      toast.success("تم إنشاء الطلب بنجاح");
    },
    onError: (err) => {
      const msg =
        err?.response?.data?.message || err?.message || "فشل إنشاء الطلب";
      toast.error(msg);
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
