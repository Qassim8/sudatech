import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../config";
import toast from "react-hot-toast";

const useCart = () => {
  const resourceBase = `${BASE_URL}/carts`;
  const token = localStorage.getItem("userToken");
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const queryClient = useQueryClient();

  // ?populate[product][populate]=thumbnail&sort=createdAt:asc

  // 1. جلب البيانات مع فلترة المنتج والصورة بشكل صحيح ومتوافق مع v5
  const { data: cartItems = [], isLoading } = useQuery({
    queryKey: ["cartItems", token],
    queryFn: async () => {
      // ✅ تعديل الـ Populate والـ الفلترة لضمان عودة المنتج وصورته وسلة المستخدم الحالي فقط
      const { data } = await axios.get(`${resourceBase}/me`, headers);
      return data.data || [];
    },
    enabled: !!token,
    staleTime: 10000,
    onError: (err) => {
      const msg =
        err?.response?.data?.message || err?.message || "فشل جلب محتويات السلة";
      toast.error(msg);
    },
  });

  // 2. إضافة منتج أو زيادة الكمية
  const addMutation = useMutation({
    mutationFn: async (itemData) => {
      if (!itemData || !itemData.documentId)
        throw new Error("خطأ في تفاصيل المنتج");

      const cartList = queryClient.getQueryData(["cartItems", token]) || [];

      // الفحص هيشتغل الآن لأن المنتج وصورته هيرجعوا فوراً
      const existingItem = cartList.find(
        (item) =>
          item.documentId === itemData.documentId ||
          item.product?.documentId === itemData.documentId,
      );

      console.log("العنصر المعثور عليه في السلة:", existingItem);

      if (existingItem) {
        // تحديث الكمية (PUT)
        const { data } = await axios.put(
          `${resourceBase}/${existingItem.documentId}`,
          {
            data: {
              quantity: (existingItem.quantity || 1) + 1,
            },
          },
          headers,
        );
        return data;
      } else {
        // إضافة جديد (POST)
        const { data } = await axios.post(
          `${resourceBase}`,
          {
            data: {
              product: itemData.documentId,
              quantity: 1,
            },
          },
          headers,
        );
        return data;
      }
    },
    onSuccess: () => {
      toast.success("تمت إضافة المنتج أو زيادة الكمية في السلة");
      return queryClient.invalidateQueries({ queryKey: ["cartItems", token] });
    },
    onError: (err) => {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "فشل إضافة المنتج إلى السلة";
      toast.error(msg);
    },
  });

  // 3. إنقاص الكمية أو الحذف التلقائي لو الكمية وصلت 1
  const removeMutation = useMutation({
    mutationFn: async (itemData) => {
      if (!itemData || !itemData.documentId)
        throw new Error("خطأ في تفاصيل المنتج");

      const cartList = queryClient.getQueryData(["cartItems", token]) || [];

      // هنا بنبحث عن سطر السلة نفسه اللي جوه الكاش اللي بيطابق الـ product id القادم من الزر
      const isCart = cartList.find(
        (c) =>
          c.product?.documentId === itemData.documentId ||
          c.documentId === itemData.documentId,
      );

      if (isCart && isCart.quantity > 1) {
        const { data } = await axios.put(
          `${resourceBase}/${isCart.documentId}`,
          {
            data: { quantity: isCart.quantity - 1 },
          },
          headers,
        );
        return data;
      } else if (isCart) {
        return await axios.delete(
          `${resourceBase}/${isCart.documentId}`,
          headers,
        );
      }
    },
    onSuccess: () => {
      toast.success("تم تحديث كمية المنتج في السلة");
      return queryClient.invalidateQueries({ queryKey: ["cartItems", token] });
    },
    onError: (err) => {
      const msg =
        err?.response?.data?.message || err?.message || "فشل تعديل كمية المنتج";
      toast.error(msg);
    },
  });

  // 4. حذف السطر بالكامل (Delete button)
  const deleteMutation = useMutation({
    mutationFn: async (docId) => {
      return await axios.delete(`${resourceBase}/${docId}`, headers);
    },
    onSuccess: () => {
      toast.success("تم حذف المنتج من السلة");
      return queryClient.invalidateQueries({ queryKey: ["cartItems", token] });
    },
    onError: (err) => {
      const msg =
        err?.response?.data?.message || err?.message || "فشل حذف المنتج";
      toast.error(msg);
    },
  });

  return {
    cartItems,
    isLoading,
    addCart: addMutation.mutate,
    removeCart: removeMutation.mutate,
    deleteCart: deleteMutation.mutate,
    isAdding: addMutation.isLoading,
    isRemoving: removeMutation.isLoading,
    isDeleting: deleteMutation.isLoading,
  };
};

export default useCart;
