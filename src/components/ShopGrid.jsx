import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi";
import useProducts from "../hooks/useProducts";
import { productStore } from "../store/productsStore";
import { ProductSkeleton } from "./Skeletons";

const ShopGrid = () => {
  const [page, setPage] = useState(1);
  const perPage = 9;

  const filters = productStore((state) => state.filters);
  const resetFilters = productStore((state) => state.resetFilters);

  // جلب البيانات بناءً على الصفحة الحالية
  const { products, paginationMeta, productsLoad } = useProducts({
    page,
    pageSize: perPage,
  });

  useEffect(() => {
    setPage(1);
  }, [filters]);

  if (productsLoad) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        {Array.from({ length: perPage }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  // 💡 حل النقطة الثانية: واجهة "لا توجد نتائج" احترافية
  if (!products || products?.items?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-gray-50 rounded-3xl border border-dashed border-slate-300">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4 text-2xl">
          <FiSearch />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          لم نجد أي نتائج!
        </h3>
        <p className="text-sm text-gray-400 max-w-xs mb-6">
          جرّب تعديل كلمات البحث أو تصفير فلاتر الأسعار والأصناف للعثور على ما
          تبحث عنه.
        </p>
        <button
          onClick={resetFilters}
          className="px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
        >
          تصفير كل الفلاتر
        </button>
      </div>
    );
  }

  const totalPages = paginationMeta?.pageCount || 1;
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div>
      {/* شبكة المنتجات */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        {products?.items?.map((p) => (
          <ProductCard key={p.documentId || p.id} product={p} />
        ))}
      </div>

      {/* الـ Pagination الرقمي المتطور */}
      <div className="flex items-center justify-center gap-2 mt-12 select-none">
        {/* زر الصفحة السابقة */}
        <button
          disabled={page === 1}
          onClick={() => setPage((s) => Math.max(1, s - 1))}
          className="p-2.5 bg-white border border-slate-300 rounded-xl cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition"
        >
          <FiArrowRight />
        </button>

        {/* أزرار أرقام الصفحات المتتالية */}
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`w-10 h-10 rounded-xl font-bold border transition text-sm cursor-pointer ${
              page === num
                ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100"
                : "bg-white text-gray-600 border-slate-300 hover:bg-slate-50"
            }`}
          >
            {num}
          </button>
        ))}

        {/* زر الصفحة التالية */}
        <button
          disabled={page === totalPages}
          onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
          className="p-2.5 bg-white border border-slate-300 rounded-xl cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition"
        >
          <FiArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default ShopGrid;
