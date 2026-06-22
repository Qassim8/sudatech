import MainTitle from "./MainTitle";
import ProductCard from "./ProductCard";
import { Link } from "react-router";
import { GoArrowLeft } from "react-icons/go";
import useProducts from "../hooks/useProducts";
import { ProductSkeleton } from "./Skeletons";

const FeaturedProducts = () => {
  const { products, productsLoad } = useProducts();

  return (
    <section className="py-16 bg-(--color-background)">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <MainTitle
              pos="text-start"
              title="منتجات مميزة"
              subtitle="اختياراتنا لك"
              description="أفضل المنتجات المختارة بعناية لتضمن جودة وأداء متميزين."
            />
          </div>
          <Link
            to="/shop"
            className="flex justify-end items-center gap-1 md:gap-2 text-(--main-color) hover:bg-slate-100 font-bold"
          >
            <span> عرض الكل</span>
            <GoArrowLeft />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 mt-5">
          {productsLoad &&
            Array.from("pppp").map((_, i) => <ProductSkeleton key={i} />)}
          {products?.items?.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
