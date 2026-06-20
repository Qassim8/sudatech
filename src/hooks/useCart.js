import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useCart = () => {
  const BASE_URL = `http://localhost:1337/api/carts`;
  const token = localStorage.getItem("userToken");
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const queryClient = useQueryClient();

  // ?populate[product][populate]=thumbnail&sort=createdAt:asc

  // 1. جلب البيانات مع فلترة المنتج والصورة بشكل صحيح ومتوافق مع v5
  const { data: cartItems = [], isLoading } = useQuery({
    queryKey: ["cartItems", token],
    queryFn: async () => {
      // ✅ تعديل الـ Populate والـ الفلترة لضمان عودة المنتج وصورته وسلة المستخدم الحالي فقط
      const { data } = await axios.get(`${BASE_URL}/me`, headers);
      return data.data || [];
    },
    enabled: !!token,
    staleTime: 10000,
  });

  // 2. إضافة منتج أو زيادة الكمية
  const { mutate: addCart } = useMutation({
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
          `${BASE_URL}/${existingItem.documentId}`,
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
          `${BASE_URL}`,
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
      return queryClient.invalidateQueries({ queryKey: ["cartItems", token] });
    },
  });

  // 3. إنقاص الكمية أو الحذف التلقائي لو الكمية وصلت 1
  const { mutate: removeCart } = useMutation({
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
          `${BASE_URL}/${isCart.documentId}`,
          {
            data: { quantity: isCart.quantity - 1 },
          },
          headers,
        );
        return data;
      } else if (isCart) {
        return await axios.delete(`${BASE_URL}/${isCart.documentId}`, headers);
      }
    },
    onSuccess: () => {
      // ✅ تصحيح كتابة الـ Object للـ key عشان ما يضربش الكاش
      return queryClient.invalidateQueries({ queryKey: ["cartItems", token] });
    },
  });

  // 4. حذف السطر بالكامل (Delete button)
  const { mutate: deleteCart } = useMutation({
    mutationFn: async (docId) => {
      return await axios.delete(`${BASE_URL}/${docId}`, headers);
    },
    onSuccess: () => {
      // ✅ تصحيح كتابة الـ Object للـ key
      return queryClient.invalidateQueries({ queryKey: ["cartItems", token] });
    },
  });

  return {
    cartItems,
    isLoading,
    addCart,
    removeCart,
    deleteCart,
  };
};

export default useCart;
