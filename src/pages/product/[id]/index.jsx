import { Link, useNavigate, useParams } from "react-router";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import ProductCard from "../../../components/ProductCard";
import useProducts from "../../../hooks/useProducts";
import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import useWishlist from "../../../hooks/useWishlist";
import useCart from "../../../hooks/useCart";
import { cartStore } from "../../../store/cartStore";
import Breadcrumbs from "../../../components/Breadcrumb";

const ProductDetail = () => {
  const { id } = useParams();
  const { singleProduct: product, products } = useProducts({ productId: id });
  const [imageUrl, setImageUrl] = useState(null);
  const token = localStorage.getItem("userToken");
  const { wishlist, handleWishlist } = useWishlist();
  const navigate = useNavigate();
  const addCart = cartStore((state) => state.addCart);
  const { addCart: addItem } = useCart();
  // 💡 1. إضافة الـ State المحلي للتحكم في كمية الطلب الحالية
  const [quantity, setQuantity] = useState(1);

  // 💡 2. دالتين الزيادة والنقصان
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const onAddToCart = () => {
    if (!product) return;
    // نرسل المنتج والكمية التي حددها المستخدم
    handleCart({ product, quantity });
  };

  const handleCart = token ? addItem : addCart;

  const addToFavorite = () =>
    token ? handleWishlist(product.documentId) : navigate("/login");

  const isWishlistItem = wishlist?.some(
    (p) => p.product.documentId === product.documentId,
  );

  return (
    <main>
      <Breadcrumbs productName={product?.title} />
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: images */}
          <div>
            <div className="bg-white h-60 md:h-96 rounded-2xl shadow">
              <img
                src={`http://localhost:1337${imageUrl ? imageUrl : product?.thumbnail?.url}`}
                alt={product?.title}
                className="w-full max-h-full object-contain"
              />
            </div>

            <div className="mt-5 flex gap-5">
              {product?.images?.map(({ documentId, url, name }) => (
                <div
                  className={`grow flex justify-center items-center h-16 md:h-28 border border-slate-300 rounded-lg cursor-pointer ${imageUrl === url ? "ring ring-(--gr-color) shadow" : ""}`}
                  onClick={() => setImageUrl(url)}
                  key={documentId}
                >
                  <img
                    src={`http://localhost:1337${url}`}
                    alt={name}
                    className="max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: details */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm md:text-lg bg-sky-100 text-(--gr-color) px-2 py-1 rounded">
                {product?.brand?.name}
              </span>
            </div>

            <h1 className="text-xl md:text-4xl font-bold text-(--main-color)">
              {product?.title}
            </h1>

            <div className="mt-4">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700">
                {product?.price}
                <span className="text-sm"> ج.س </span>
              </div>
            </div>

            {/* 💡 أزرار التحكم بالكمية للموبايل (Mobile Quantity Selector) */}
            <div className="md:hidden flex justify-between items-center border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={handleDecrement}
                className="p-4 hover:bg-gray-50 transition"
              >
                <FiMinus className="text-gray-600" />
              </button>
              <div className="px-6 font-bold text-gray-800 text-lg">
                {quantity}
              </div>
              <button
                onClick={handleIncrement}
                className="p-4 hover:bg-gray-50 transition"
              >
                <FiPlus className="text-gray-600" />
              </button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div
                onClick={addToFavorite}
                className="w-fit p-4 rounded-full bg-slate-100 text-(--text-color) cursor-pointer hover:bg-slate-200 transition-colors duration-300 z-10"
              >
                {isWishlistItem ? (
                  <BsHeartFill className="text-red-500 text-xl" />
                ) : (
                  <BsHeart className="text-xl" />
                )}
              </div>

              {/* 💡 أزرار التحكم بالكمية للشاشات الكبيرة (Desktop Quantity Selector) */}
              <div className="hidden md:flex items-center border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={handleDecrement}
                  className="p-4 hover:bg-gray-50 transition"
                >
                  <FiMinus className="text-gray-600" />
                </button>
                <div className="px-6 font-bold text-gray-800 text-lg w-14 text-center">
                  {quantity}
                </div>
                <button
                  onClick={handleIncrement}
                  className="p-4 hover:bg-gray-50 transition"
                >
                  <FiPlus className="text-gray-600" />
                </button>
              </div>

              <button
                onClick={onAddToCart}
                className="grow md:grow-0 flex items-center justify-center gap-2 px-6 py-3 bg-(--main-color) text-white rounded-2xl"
              >
                <FiShoppingCart /> إضافة إلى السلة
              </button>
            </div>

            <p className="mt-6 text-(--text-color)">{product?.description}</p>

            <div
              className={`mt-4 text-sm font-semibold ${product?.inStock ? "text-emerald-500" : "text-red-500"}`}
            >
              {product?.inStock ? " متوفر في المخزن" : "نفذت الكمية"}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 border border-slate-300 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <div className="font-medium">الضمان: سنة</div>
                </div>
              </div>

              <div className="p-4 border border-slate-300 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <div className="font-medium">الارجاع: 7 يوم</div>
                </div>
              </div>

              <div className="p-4 border border-slate-300 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <div className="font-medium">الشحن: حسب المنطقة والكمية</div>
                </div>
              </div>
              <div className="p-4 border border-slate-300 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <div className="font-medium">
                    الدفع: بنكك او نقداً عند الاستلام
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="my-10 bg-(--color-background) p-3 rounded-2xl">
          <h3 className="text-xl font-semibold">نظرة عامة</h3>
          <p className=" text-slate-400">الميزات التقنية الاساسية للمنتج</p>
          <div className="flex flex-col gap-2 my-5">
            {product?.features?.map(({ id, name, value }) => (
              <div key={id} className="flex items-center gap-3">
                <h3 className="font-bold">{name}:</h3>
                <p className="text-(--text-color)">{value}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-10">
          <h2 className="text-xl font-bold mb-10">منتجات ذات صلة</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
            {products?.items
              ?.filter(
                (p) =>
                  p?.category?.documentId === product?.category?.documentId,
              )
              .map((p) => (
                <ProductCard key={p.documentId} product={p} />
              ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default ProductDetail;
