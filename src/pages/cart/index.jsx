import CartItem from "../../components/CartItem";
import useCart from "../../hooks/useCart";
import { cartStore } from "../../store/cartStore";
import { useState } from "react";
import OrderConfirmModal from "../../components/OrderConfirmModal";

const Cart = () => {
  const token = localStorage.getItem("userToken");
  const cartItems = cartStore((state) => state.cartItems);
  const { cartItems: cartList } = useCart();

  const carts = token ? cartList : cartItems;

  const subtotal = carts?.reduce((acc, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^0-9.-]+/g, ""))
        : Number(item.price || 0);
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

  const shippingFee = subtotal > 0 ? 10000 : 0;
  const total = subtotal + shippingFee;
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirm = (payload) => {
    // For now just log and close modal. Integration with backend/checkout can be added.
    console.log("order payload:", payload);
    setShowConfirm(false);
    alert("تم إرسال الطلب، شكراً لك!");
  };

  return (
    <main className="container py-12">
      {carts?.length === 0 ? (
        <div className="mt-6 bg-white rounded-2xl shadow p-6">
          <p className="text-(--text-color)">
            السلة حاليا فارغة — أضف منتجات من المتجر.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid md:grid-cols-2 gap-6 relative">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-(--main-color)">
              سلة المشتريات
            </h2>
            {carts?.map((item) => (
              <CartItem item={item || item.product} key={item.documentId} />
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-(--main-color) mb-4">
              معلومات الطلب
            </h2>
            <aside className="border border-slate-300 rounded-2xl p-6 sticky top-18 h-fit">
              <div className="mt-4 space-y-2.5">
                <div className="flex justify-between">
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
                  <div>{total.toLocaleString()} ج.س</div>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setShowConfirm(true)}
                  className="w-full text-base md:text-xl py-3 bg-(--main-color)/80 text-white rounded-2xl cursor-pointer transition-colors duration-300 hover:bg-(--main-color)"
                >
                  تأكيد الطلب
                </button>
              </div>
              <OrderConfirmModal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                total={total}
                onConfirm={handleConfirm}
              />
            </aside>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
