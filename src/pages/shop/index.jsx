import { useEffect, useState } from "react";
import ShopFilter from "../../components/ShopFilter";
import ShopGrid from "../../components/ShopGrid";
import { FiFilter } from "react-icons/fi";
import { shallow } from "zustand/shallow";
import { productStore } from "../../store/productsStore";
import { useSearchParams } from "react-router";
import Breadcrumbs from "../../components/Breadcrumb";

const Shop = () => {
  const { filters, setFilter } = productStore((state) => state, shallow);
  const search = productStore((state) => state.filters.search);
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // قراءة الـ category من الرابط إن وُجد
    const catId = searchParams.get("category");

    if (catId) {
      // حقن المعرّف مباشرة داخل مصفوفة الأصناف لـ Zustand ليعمل الفلتر فوراً
      setFilter("categories", [catId]);
    }
  }, [searchParams, setFilter]);

  return (
    <section>
      <Breadcrumbs />
      <main className="container py-6">
        {/* top search + sort bar */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <input
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setFilter("search", e.target.value)}
              className="flex-1 py-2 px-3 border border-slate-300 rounded-2xl shadow-sm"
            />

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilterMobile(true)}
                className="md:hidden inline-flex items-center gap-2 py-2 px-3 border border-slate-300 rounded-2xl"
              >
                <FiFilter />
                فلاتر
              </button>

              <div className="flex items-center gap-2">
                <p>الترتيب حسب: </p>
                <select
                  value={filters.sort}
                  onChange={(e) => setFilter("sort", e.target.value)}
                  className="p-2 border border-slate-300 rounded-2xl"
                >
                  <option value="newest">الأحدث</option>
                  <option value="price-asc">الأقل سعراً</option>
                  <option value="price-desc">الأعلى سعراً</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <aside className="md:col-span-1 hidden md:block">
            <ShopFilter
              onFilter={(f) => setFilter((prev) => ({ ...prev, ...(f || {}) }))}
            />
          </aside>

          {/* Mobile filter drawer */}
          {showFilterMobile && (
            <div className="fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setShowFilterMobile(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-4 overflow-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">الفلاتر</h3>
                  <button
                    onClick={() => setShowFilterMobile(false)}
                    className="text-xl"
                  >
                    ×
                  </button>
                </div>
                <ShopFilter
                  onFilter={(f) => {
                    setFilter((prev) => ({ ...prev, ...(f || {}) }));
                    setShowFilterMobile(false);
                  }}
                />
              </div>
            </div>
          )}

          <section className="md:col-span-3">
            <ShopGrid filters={filters} />
          </section>
        </div>
      </main>
    </section>
  );
};

export default Shop;
