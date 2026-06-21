import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../config";
import toast from "react-hot-toast";

const useWishlist = () => {
  const resourceBase = `${BASE_URL}/favorites`;
  const token = localStorage.getItem("userToken");
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const queryClient = useQueryClient();

  const {
    data: wishlist = [],
    isLoading: wishlistLoading,
    error: wishlistError,
    isError: wishlistHasError,
  } = useQuery({
    queryKey: ["wishlist", token],
    queryFn: async () => {
      const { data } = await axios.get(`${resourceBase}/me`, headers);

      return data.data || [];
    },
    staleTime: 12000,
    enabled: !!token,
    onError: (err) => {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "فشل جلب قائمة المفضلات";
      toast.error(msg);
    },
  });

  const { mutate: handleWishlist } = useMutation({
    mutationFn: async (itemDocumentId) => {
      const myList = queryClient.getQueryData(["wishlist", token]) || [];
      const isFav = myList?.find(
        (item) => item.product.documentId === itemDocumentId,
      );

      if (isFav) {
        return await axios.delete(
          `${resourceBase}/${isFav.documentId}`,
          headers,
        );
      } else {
        const { data } = await axios.post(
          `${resourceBase}`,
          {
            data: {
              product: itemDocumentId,
            },
          },
          headers,
        );
        return data;
      }
    },
    onSuccess: (_, vars, ctx) => {
      toast.success("تم تحديث المفضلات بنجاح");
      return queryClient.invalidateQueries({ queryKey: ["wishlist", token] });
    },
    onError: (err) => {
      const msg =
        err?.response?.data?.message || err?.message || "فشل تحديث المفضلات";
      toast.error(msg);
    },
  });

  return {
    wishlist,
    wishlistLoading,
    wishlistError,
    wishlistHasError,
    handleWishlist,
  };
};

export default useWishlist;
