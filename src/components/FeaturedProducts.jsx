import MainTitle from "./MainTitle";
import ProductCard from "./ProductCard";
import sampleProducts from "../data/sampleProducts";
import { Link } from "react-router";
import { GoArrowLeft } from "react-icons/go";

const FeaturedProducts = () => {
  const products = sampleProducts.slice(0, 4);

  return (
    <section className="py-16 bg-(--color-background)">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <MainTitle
            pos="text-start"
            title="منتجات مميزة"
            subtitle="اختياراتنا لك"
            description="أفضل المنتجات المختارة بعناية لتضمن جودة وأداء متميزين."
          />
          <Link
            to="/shop"
            className="flex items-center gap-2 text-(--main-color) hover:bg-slate-100 font-bold"
          >
            <span> عرض الكل</span>
            <GoArrowLeft />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
