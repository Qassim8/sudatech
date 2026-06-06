import { useParams } from "react-router";
import { useState } from "react";
import { FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import sampleProducts from "../../../data/sampleProducts";

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
    <main className="container py-12">
      <nav className="text-sm text-slate-500 mb-6">
        Home &gt; Shop &gt; {product.name}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: images */}
        <div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[420px] object-contain rounded"
            />
          </div>

          <div className="mt-4 flex gap-3">
            {thumbs.map((t, i) => (
              <button
                key={i}
                onClick={() => setMainImage(t)}
                className="w-20 h-20 rounded-lg overflow-hidden border"
              >
                <img src={t} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: details */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded">
              NETWORKING
            </span>
            <span className="text-sm text-slate-400">
              by {product.brand || "Vendor"}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-(--main-color)">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <div className="text-emerald-600 font-semibold">4.9</div>
            <div className="text-sm text-slate-400">(132 reviews)</div>
          </div>

          <div className="mt-6">
            <div className="text-3xl font-bold">${product.price}</div>
            <p className="text-sm text-slate-400 mt-2">incl. local VAT</p>
          </div>

          <p className="mt-6 text-(--text-color)">{product.description}</p>

          <div className="mt-4 text-sm text-emerald-600">
            In stock — ships within 24h
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded-full overflow-hidden">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-2"
              >
                <FiMinus />
              </button>
              <div className="px-6">{qty}</div>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-2"
              >
                <FiPlus />
              </button>
            </div>

            <button
              onClick={addToCart}
              className="flex items-center gap-2 px-6 py-3 bg-(--main-color) text-white rounded-lg"
            >
              <FiShoppingCart /> إضافة إلى السلة
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 border rounded-lg flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                ✓
              </div>
              <div>
                <div className="font-medium">Free shipping over $200</div>
              </div>
            </div>

            <div className="p-4 border rounded-lg flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                ✓
              </div>
              <div>
                <div className="font-medium">Manufacturer warranty</div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold">Specifications</h3>
            <p className="text-sm text-slate-400">
              Key technical details for the {product.name}.
            </p>

            <div className="mt-4 bg-white rounded-2xl shadow overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-slate-600">Ports</td>
                    <td className="px-6 py-4 font-semibold">48× 1G PoE+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-slate-600">Uplinks</td>
                    <td className="px-6 py-4 font-semibold">4× 10G SFP+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-slate-600">Stacking</td>
                    <td className="px-6 py-4 font-semibold">480 Gbps</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-600">Power</td>
                    <td className="px-6 py-4 font-semibold">715W PSU</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
