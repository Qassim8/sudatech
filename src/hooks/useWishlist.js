import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useWishlist = () => {
  const BASE_URL = `http://localhost:1337/api/favorites`;
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
      const { data } = await axios.get(`${BASE_URL}/me`, headers);

      return data.data || [];
    },
    staleTime: 12000,
    enabled: !!token,
  });

  const { mutate: handleWishlist } = useMutation({
    mutationFn: async (itemDocumentId) => {
      const myList = queryClient.getQueryData(["wishlist", token]) || [];
      const isFav = myList?.find(
        (item) => item.product.documentId === itemDocumentId,
      );

      if (isFav) {
        return await axios.delete(`${BASE_URL}/${isFav.documentId}`, headers);
      } else {
        const { data } = await axios.post(
          `${BASE_URL}`,
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
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["wishlist", token] });
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
