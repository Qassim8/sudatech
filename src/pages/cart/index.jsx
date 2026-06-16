import { useEffect, useState } from "react";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import CartItem from "../../components/CartItem";

const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const onUpdate = () => setItems(readCart());
    window.addEventListener("cart:updated", onUpdate);
    return () => window.removeEventListener("cart:updated", onUpdate);
  }, []);

  const updateQty = (id, next) => {
    const nextItems = items.map((it) =>
      String(it.id) === String(id) ? { ...it, qty: Math.max(1, next) } : it,
    );
    setItems(nextItems);
    saveCart(nextItems);
    window.dispatchEvent(new Event("cart:updated"));
  };

  const remove = (id) => {
    const nextItems = items.filter((it) => String(it.id) !== String(id));
    setItems(nextItems);
    saveCart(nextItems);
    window.dispatchEvent(new Event("cart:updated"));
  };

  const subtotal = items.reduce(
    (s, it) =>
      s +
      (Number(String(it.price).replace(/[^0-9.]/g, "")) || 0) * (it.qty || 1),
    0,
  );

  return (
    <main className="container py-12">
      <h2 className="text-2xl font-bold text-(--main-color)">سلة المشتريات</h2>

      {items.length === 1 ? (
        <div className="mt-6 bg-white rounded-2xl shadow p-6">
          <p className="text-(--text-color)">
            السلة حاليا فارغة — أضف منتجات من المتجر.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid md:grid-cols-2 gap-6 relative">
          <div className="space-y-4">
            {[1, 1, 1, 1, 1, 1].map(() => (
              <CartItem />
            ))}
          </div>

          <aside className="border border-slate-300 rounded-2xl p-6 sticky top-18 h-fit">
            <div className="text-2xl font-bold">ملخص الطلب</div>

            <div className="mt-4 space-y-2.5">
              <h2 className="my-2 text-lg font-bold">معلومات الشحن</h2>
              <div className="flex justify-between">
                <h3 className="">الولاية</h3>
                <select
                  name=""
                  id=""
                  className="border border-slate-500 p-2 rounded-xl"
                >
                  <option value="">الخرطوم</option>
                  <option value="">بحري</option>
                  <option value="">امدرمان</option>
                  <option value="">الجزيرة</option>
                  <option value="">مدني</option>
                  <option value="">الحصاحيصا</option>
                  <option value="">بورتسودان</option>
                </select>
              </div>
              <div className="flex justify-between">
                <h3>المدة حتى الاستلام</h3>
                <p>24 ساعة</p>
              </div>
              <div className="flex justify-between">
                <h3>رسوم الشحن</h3>
                <p>10000 ج.س</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="text-lg font-bold">المجموع الفرعي</div>
              <div className="font-semibold">{subtotal.toFixed(2)} ج.س</div>
            </div>

            <div className="mt-5 pt-2 border-t border-t-slate-300 flex justify-between">
              <div className="text-xl font-bold">المجموع الاجمالي</div>
              <div className="font-bold">7000 ج.س</div>
            </div>

            <div className="mt-6">
              <button className="w-full text-base md:text-xl py-3 bg-(--main-color)/80 text-white rounded-2xl cursor-pointer transition-colors duration-300 hover:bg-(--main-color)">
                تأكيد الطلب
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Cart;
