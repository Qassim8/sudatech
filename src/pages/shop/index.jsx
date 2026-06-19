import { useState } from "react";
import ShopFilter from "../../components/ShopFilter";
import ShopGrid from "../../components/ShopGrid";

import { FiFilter } from "react-icons/fi";

const Shop = () => {
  const [filters, setFilters] = useState({});
  const [showFilterMobile, setShowFilterMobile] = useState(false);

  return (
    <main className="container py-6">
      {/* top search + sort bar */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <input
            placeholder="ابحث عن منتج..."
            onChange={(e) =>
              setFilters((p) => ({ ...p, search: e.target.value }))
            }
            className="flex-1 py-2 px-3 border border-slate-300 rounded-2xl shadow-sm"
          />

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFilterMobile(true)}
              className="md:hidden inline-flex items-center gap-2 py-2 px-3 border rounded-2xl"
            >
              <FiFilter />
              فلاتر
            </button>

            <select
              onChange={(e) =>
                setFilters((p) => ({ ...p, sort: e.target.value }))
              }
              className="w-48 py-1 px-3 border border-slate-300 rounded-2xl shadow-sm"
            >
              <option value="">ترتيب افتراضي</option>
              <option value="newest">الأحدث</option>
              <option value="price-asc">السعر: الأقل</option>
              <option value="price-desc">السعر: الأعلى</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 hidden md:block">
          <ShopFilter
            onFilter={(f) => setFilters((prev) => ({ ...prev, ...(f || {}) }))}
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
                  setFilters((prev) => ({ ...prev, ...(f || {}) }));
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
  );
};

export default Shop;
