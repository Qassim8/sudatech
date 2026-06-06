import { useParams } from "react-router";
import sampleProducts from "../../../data/sampleProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const product =
    sampleProducts.find((p) => String(p.id) === String(id)) ||
    sampleProducts[0];

  return (
    <main className="container py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-(--main-color)">
            {product.name}
          </h1>
          <p className="mt-4 text-(--text-color)">{product.description}</p>

          <div className="mt-6 flex items-center gap-6">
            <div className="text-2xl font-semibold text-emerald-700">
              {product.price} ج.س
            </div>
            <button className="py-2 px-4 bg-(--main-color) text-white rounded">
              أضف للسلة
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
