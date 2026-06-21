import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router";
import { cartStore } from "../store/cartStore";

const useAuth = () => {
  const BASE_URL = `http://localhost:1337/api/auth/local`;
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
      const { data } = await axios.post(`${BASE_URL}`, userData);
      return data;
    },
    onSuccess: ({ jwt, user }) => {
      localStorage.setItem("userToken", jwt);
      localStorage.setItem("userData", user.documentId);
      console.log(user);
      clearCart();
      navigate("/");
    },
  });

  const {
    mutate: register,
    isPending: registerPending,
    isSuccess: registerSuccess,
    isError: registerError,
  } = useMutation({
    mutationFn: async (userData) => {
      const res = await axios.post(`${BASE_URL}/register`, userData, {
        headers: "",
      });
      if (!res.ok) throw new Error("مشكلة في بيانات المستخدم");
      return res.data;
    },
    onSuccess: () => {
      console.log();
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
