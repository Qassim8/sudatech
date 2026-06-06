import { useEffect, useState } from "react";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

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
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl shadow p-6 space-y-4">
            {items.map((it) => (
              <div
                key={it.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <img
                  src={it.image}
                  alt={it.name}
                  className="w-24 h-24 object-contain bg-white rounded"
                />
                <div className="grow">
                  <div className="font-semibold">{it.name}</div>
                  <div className="text-sm text-slate-500">{it.price} USD</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(it.id, (it.qty || 1) - 1)}
                    className="p-2 border rounded"
                  >
                    <FiMinus />
                  </button>
                  <div className="px-4">{it.qty}</div>
                  <button
                    onClick={() => updateQty(it.id, (it.qty || 1) + 1)}
                    className="p-2 border rounded"
                  >
                    <FiPlus />
                  </button>
                </div>

                <div className="w-28 text-right font-semibold">
                  $
                  {(
                    (Number(String(it.price).replace(/[^0-9.]/g, "")) || 0) *
                    (it.qty || 1)
                  ).toFixed(2)}
                </div>

                <button
                  onClick={() => remove(it.id)}
                  className="p-2 text-red-600"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>

          <aside className="bg-white rounded-2xl shadow p-6">
            <div className="text-sm text-slate-500">ملخص الطلب</div>
            <div className="mt-4 flex justify-between">
              <div>المجموع الفرعي</div>
              <div className="font-semibold">${subtotal.toFixed(2)}</div>
            </div>

            <div className="mt-6">
              <button className="w-full py-3 bg-(--main-color) text-white rounded">
                متابعة الدفع
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
};

export default Cart;
