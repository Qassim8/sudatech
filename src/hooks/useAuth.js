import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { cartStore } from "../store/cartStore";
import { BASE_URL } from "../config";
import toast from "react-hot-toast";

const useAuth = () => {
  const authBase = `${BASE_URL}/auth/local`;
  const navigate = useNavigate();
  const clearCart = cartStore((state) => state.clearCart);

  // ==================== [ تسجيل الدخول ] ====================
  const {
    mutate: login,
    isPending: loginPending,
    isSuccess: loginSuccess,
    isError: loginError,
  } = useMutation({
    mutationFn: async (userData) => {
      const { data } = await axios.post(`${authBase}`, userData);
      return data;
    },
    onSuccess: ({ jwt, user }) => {
      localStorage.setItem("userToken", jwt);
      localStorage.setItem("userData", user.documentId);
      console.log(user);
      clearCart();
      navigate("/");
      toast.success("تم تسجيل الدخول بنجاح");
    },
    onError: (err) => {
      // الوصول الصحيح لرسالة خطأ سترابي من خلال Axios
      const msg =
        err?.response?.data?.error?.message ||
        err?.message ||
        "فشل تسجيل الدخول";
      toast.error(msg);
    },
  });

  // ==================== [ إنشاء حساب جديد ] ====================
  const {
    mutate: register,
    isPending: registerPending,
    isSuccess: registerSuccess,
    isError: registerError,
  } = useMutation({
    mutationFn: async (userData) => {
      // تم إزالة التحقق من res.ok لأن Axios يتكفل بها تلقائياً عند حدوث خطأ 400
      const { data } = await axios.post(`${authBase}/register`, userData);
      return data;
    },
    onSuccess: () => {
      toast.success("تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.");
    },
    onError: (err) => {
      // الوصول الصحيح لرسالة خطأ سترابي مثل: Email or Username are already taken
      const msg =
        err?.response?.data?.error?.message ||
        err?.message ||
        "فشل إنشاء الحساب";
      toast.error(msg);
    },
  });

  const loginProcess = { login, loginPending, loginSuccess, loginError };

  const registerProcess = {
    register,
    registerPending,
    registerSuccess,
    registerError,
  };

  return {
    loginProcess,
    registerProcess,
  };
};

export default useAuth;
