import { useMemo } from "react";
import { Link } from "react-router";
import CartItem from "./CartItem";
import { LuShoppingCart, LuX } from "react-icons/lu";
import { cartStore } from "../store/cartStore";
import useCart from "../hooks/useCart";

const CartMenu = ({ show, hide }) => {
  const cartItems = cartStore((state) => state.cartItems);
  const token = localStorage.getItem("userToken");
  const { cartItems: cartList } = useCart();
  const carts = token ? cartList : cartItems;

  // حساب المجموع الإجمالي لعرضه داخل المنيو الجانبي لتجربة مستخدم أفضل
  const totalPrice = useMemo(() => {
    return (
      carts?.reduce((acc, item) => {
        const price = item?.product?.price || item?.price || 0;
        const qty = item?.quantity || 1;
        return acc + price * qty;
      }, 0) || 0
    );
  }, [carts]);

  return (
    // استخدام fixed لضمان قفل الشاشة بالكامل، مع التحكم في الرؤية عبر الـ opacity و pointer-events للأنيميشن
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        show
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* الخلفية المظلمة (Overlay) */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs"
        onClick={hide}
      ></div>

      {/* لوحة السلة الجانبية */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out transform ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* الهيدر الثابت في الأعلى */}
        <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-black text-gray-800">عناصر السلة</h2>
            <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full font-bold">
              {carts?.length || 0}
            </span>
          </div>
          <button
            onClick={hide}
            className="p-1 rounded-lg hover:bg-slate-100 text-gray-400 hover:text-gray-700 transition cursor-pointer"
          >
            <LuX className="text-2xl" />
          </button>
        </div>

        {/* جسم السلة القابل للتمرير (Scrollable Content) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {carts?.length >= 1 ? (
            carts.map((item) => (
              <CartItem item={item} key={item.id || item.documentId} />
            ))
          ) : (
            // واجهة السلة الفارغة
            <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center text-2xl">
                <LuShoppingCart />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  سلتك فارغة تماماً
                </h3>
                <p className="text-sm text-gray-400 max-w-[250px] mx-auto">
                  قم بالتجول في المتجر وأضف أفضل الراوترات والخوادم إلى سلتك
                  الآن.
                </p>
              </div>
              <Link
                to="/shop"
                onClick={hide}
                className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition shadow-xs"
              >
                انتقل للمتجر
              </Link>
            </div>
          )}
        </div>

        {/* الفوتر الثابت أسفل السلة (Sticky Footer) - يظهر فقط إذا كان هناك عناصر */}
        {carts?.length >= 1 && (
          <div className="p-5 border-t border-slate-100 bg-gray-50 space-y-4 pb-safe">
            {/* عرض المجموع الفرعي */}
            <div className="flex justify-between items-center text-gray-800">
              <span className="text-sm font-medium text-gray-500">
                المجموع الكلي:
              </span>
              <span className="text-lg font-black text-emerald-600">
                {totalPrice.toLocaleString()}{" "}
                <span className="text-xs font-normal text-gray-400">ج.س</span>
              </span>
            </div>

            {/* زر الذهاب لصفحة السلة الكاملة */}
            <Link
              to="/cart"
              onClick={hide}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-md shadow-blue-100 cursor-pointer"
            >
              <span>معاينة وتأكيد السلة</span>
              <LuShoppingCart className="text-lg" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartMenu;
