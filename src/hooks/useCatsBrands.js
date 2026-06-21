import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../config";
import toast from "react-hot-toast";

const useCatsBrands = () => {
  const { data: brands = [] } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/brands`);
      return data.data;
    },
    staleTime: Infinity,
    onError: (err) => {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "فشل جلب العلامات التجارية";
      toast.error(msg);
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/categories?populate=*`);
      return data.data;
    },
    staleTime: Infinity,
    onError: (err) => {
      const msg =
        err?.response?.data?.message || err?.message || "فشل جلب التصنيفات";
      toast.error(msg);
    },
  });

  return { brands, categories };
};

export default useCatsBrands;
