import { Link, useParams } from "react-router";
import { useState } from "react";
import { FiArrowLeft, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import sampleProducts from "../../../data/sampleProducts";
import { BsHeart } from "react-icons/bs";
import ProductCard from "../../../components/ProductCard";

const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));
const readCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch {
    return [];
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product =
    sampleProducts.find((p) => String(p.id) === String(id)) ||
    sampleProducts[0];
  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);

  const addToCart = () => {
    const cart = readCart();
    const existing = cart.find((c) => String(c.id) === String(product.id));
    if (existing) {
      existing.qty = (existing.qty || 0) + qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty,
      });
    }
    saveCart(cart);
    window.dispatchEvent(new Event("cart:updated"));
    alert("تمت الإضافة إلى السلة");
  };

  // sample thumbnails (reusing same image)
  const thumbs = [product.image, product.image, product.image, product.image];

  return (
    <main>
      <section className="py-12 bg-(--color-background)">
        <div className="container flex items-center justify-start gap-2">
          <Link to="/" className="">
            الرئيسية
          </Link>
          <FiArrowLeft />
          <Link to="/shop" className="">
            المنتجات
          </Link>
          <FiArrowLeft />
          <span>{product.name}</span>
        </div>
      </section>
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: images */}
          <div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-84 object-contain rounded"
              />
            </div>

            <div className="mt-5 flex gap-5">
              {thumbs.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(t)}
                  className="flex-1 h-32 rounded-lg overflow-hidden border border-slate-300"
                >
                  <img src={t} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: details */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs bg-sky-100 text-(--gr-color) px-2 py-1 rounded">
                NETWORKING
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-(--main-color)">
              {product.name}
            </h1>

            <div className="mt-6">
              <div className="text-3xl font-bold text-emerald-700">
                {product.price}
                <span className="text-sm"> ج.س </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="w-fit p-4 rounded-full bg-slate-100 text-(--text-color) cursor-pointer hover:bg-slate-200 transition-colors duration-300 z-10">
                <BsHeart className="text-xl" />
              </div>

              <div className="flex items-center border border-slate-300 rounded-full overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-4 cursor-pointer"
                >
                  <FiMinus className="text-(--text-color)" />
                </button>
                <div className="px-6">{qty}</div>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="p-4 cursor-pointer"
                >
                  <FiPlus className="text-(--text-color)" />
                </button>
              </div>

              <button
                onClick={addToCart}
                className="flex items-center gap-2 px-6 py-3 bg-(--main-color) text-white rounded-2xl"
              >
                <FiShoppingCart /> إضافة إلى السلة
              </button>
            </div>

            <p className="mt-6 text-(--text-color)">{product.description}</p>

            <div className="mt-4 text-sm text-(--gr-color)">
              متوفر في المخزن
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
                  <div className="font-medium">الشحن: 50 ج.س</div>
                </div>
              </div>

              <div className="p-4 border border-slate-300 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <div className="font-medium">Manufacturer warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="my-10 bg-(--color-background) p-3 rounded-2xl">
          <h3 className="text-xl font-semibold">نظرة عامة</h3>
          <p className="text-sm text-slate-400">
            الميزات التقنية الاساسية للمنتج
          </p>
        </section>
        <section className="py-10">
          <h2 className="text-xl font-bold mb-10">منتجات ذات صلة</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {sampleProducts.slice(0, 4).map((p) => (
              <ProductCard product={p} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default ProductDetail;
