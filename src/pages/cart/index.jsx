import CartItem from "../../components/CartItem";
import { CartItemSkeleton } from "../../components/Skeletons";
import useCart from "../../hooks/useCart";
import { cartStore } from "../../store/cartStore";
import { useMemo, useState } from "react";
import OrderConfirmModal from "../../components/OrderConfirmModal";
import useOrders from "../../hooks/useOrders";
import { Link, useNavigate } from "react-router";
import Breadcrumbs from "../../components/Breadcrumb";

const Cart = () => {
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();
  const cartItems = cartStore((state) => state.cartItems);
  const {
    cartItems: cartList,
    isLoading: cartLoading,
    isAdding: isAddingRemote,
  } = useCart();

  const carts = token ? cartList : cartItems;

  // بفرض أن cartItems هي مصفوفة العناصر القادمة من السلة الخاص بـ React Query
  const totalCartPrice = useMemo(() => {
    return carts?.reduce((acc, item) => {
      const price = item.price || item.product?.price || 0;
      const quantity = item.quantity || 1;
      return acc + price * quantity;
    }, 0);
  }, [carts]);

  const [showConfirm, setShowConfirm] = useState(false);
  const { createOrder } = useOrders();

  const handleConfirm = (payload) => {
    if (!payload) return;
    createOrder(payload);
    setShowConfirm(false);
  };

  return (
    <>
      <Breadcrumbs />
      <main className="container py-12">
        {carts?.length === 0 ? (
          <div className="container py-20 flex flex-col justify-center text-center gap-5">
            <div className="">
              <h2 className="text-2xl font-bold text-(--main-color)">
                السلة فارغة قم باضافة منتجات
              </h2>
            </div>
            <Link to={"/shop"} className="main-btn w-fit! mx-auto">
              انتقل للمتجر
            </Link>
          </div>
        ) : (
          <div className="mt-6 grid md:grid-cols-2 gap-6 relative">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-(--main-color)">
                سلة المشتريات
              </h2>
              {token && cartLoading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="mb-3">
                      <CartItemSkeleton />
                    </div>
                  ))
                : carts?.map((item) => (
                    <CartItem
                      item={item || item.product}
                      key={item.documentId}
                    />
                  ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-(--main-color) mb-4">
                معلومات الطلب
              </h2>
              <aside className="border border-slate-300 rounded-2xl p-6 sticky top-18 h-fit">
                <div className="mt-4 space-y-2.5">
                  <div className="flex justify-between text-sm md:text-base">
                    <h3>الدفع</h3>
                    <p>نقداً عند الاستلام</p>
                  </div>
                  <div className="flex justify-between">
                    <h3>المدة حتى الاستلام</h3>
                    <p>من 24 ساعة - حتى اسبوع</p>
                  </div>
                  <div className="flex justify-between">
                    <div>رسوم الشحن</div>
                    <div>حسب الموقع</div>
                  </div>
                </div>

                <div className="mt-5 pt-2 border-t border-t-slate-300 space-y-2">
                  <div className="flex justify-between font-bold text-xl">
                    <div>المجموع الاجمالي</div>
                    <div>${totalCartPrice.toLocaleString()}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() =>
                      token ? setShowConfirm(true) : navigate("/login")
                    }
                    className="w-full text-base md:text-xl py-3 bg-(--main-color)/80 text-white rounded-2xl cursor-pointer transition-colors duration-300 hover:bg-(--main-color)"
                  >
                    تأكيد الطلب
                  </button>
                </div>
                <OrderConfirmModal
                  isOpen={showConfirm}
                  onClose={() => setShowConfirm(false)}
                  total={totalCartPrice}
                  onConfirm={handleConfirm}
                />
              </aside>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Cart;
