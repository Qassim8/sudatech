import { create } from "zustand";
import { persist } from "zustand/middleware";

export const cartStore = create(
  persist((set) => ({
    cartItems: [],
    addCart: (product) =>
      set((state) => {
        const inCart = state.cartItems?.find((c) => c.id === product.id);
        if (inCart) {
          return {
            cartItems: state.cartItems?.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          };
        } else {
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          };
        }
      }),
    removeCart: (product) =>
      set((state) => {
        const inCart = state.cartItems?.find((c) => c.id === product.id);

        if (inCart) {
          return {
            cartItems: state.cartItems?.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p,
            ),
          };
        } else {
          return {
            cartItems: state.cartItems?.filter((p) => p.id !== product.id),
          };
        }
      }),
    clearCart: () => set({ cartItems: [] }),
  })),
  { name: "cartList" },
);
