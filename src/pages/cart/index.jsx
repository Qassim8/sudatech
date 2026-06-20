import CartItem from "../../components/CartItem";
import useCart from "../../hooks/useCart";
import { cartStore } from "../../store/cartStore";

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

  return (
    <main className="container py-12">
      <h2 className="text-2xl font-bold text-(--main-color)">سلة المشتريات</h2>

      {carts?.length === 0 ? (
        <div className="mt-6 bg-white rounded-2xl shadow p-6">
          <p className="text-(--text-color)">
            السلة حاليا فارغة — أضف منتجات من المتجر.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid md:grid-cols-2 gap-6 relative">
          <div className="space-y-4">
            {carts?.map((item) => (
              <CartItem item={item || item.product} key={item.documentId} />
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
              <div className="font-semibold">
                {subtotal?.toLocaleString()} ج.س
              </div>
            </div>

            <div className="mt-5 pt-2 border-t border-t-slate-300 space-y-2">
              <div className="flex justify-between">
                <div>رسوم الشحن</div>
                <div>{shippingFee.toLocaleString()} ج.س</div>
              </div>
              <div className="flex justify-between font-bold text-xl">
                <div>المجموع الاجمالي</div>
                <div>{total.toLocaleString()} ج.س</div>
              </div>
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
