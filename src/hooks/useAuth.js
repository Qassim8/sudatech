import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { cartStore } from "../store/cartStore";
import { BASE_URL } from "../config";
import toast from "react-hot-toast";

const useAuth = () => {
  const authBase = `${BASE_URL}/auth/local`;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const clearCart = cartStore((state) => state.clearCart);

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
      const msg =
        err?.response?.error?.message || err?.message || "فشل تسجيل الدخول";
      toast.error(msg);
    },
  });

  const {
    mutate: register,
    isPending: registerPending,
    isSuccess: registerSuccess,
    isError: registerError,
  } = useMutation({
    mutationFn: async (userData) => {
      const res = await axios.post(`${authBase}/register`, userData, {
        headers: "",
      });
      if (!res.ok) throw new Error("مشكلة في بيانات المستخدم");
      return res.data;
    },
    onSuccess: () => {
      toast.success("تم إنشاء الحساب بنجاح");
    },
    onError: (err) => {
      const msg =
        err?.response?.data?.message || err?.message || "فشل إنشاء الحساب";
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
