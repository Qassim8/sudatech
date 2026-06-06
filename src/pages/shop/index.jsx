import { useState } from "react";
import ShopFilter from "../../components/ShopFilter";
import ShopGrid from "../../components/ShopGrid";

const Shop = () => {
  const [filters, setFilters] = useState({});

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

      <div className="grid md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <ShopFilter
            onFilter={(f) => setFilters((prev) => ({ ...prev, ...(f || {}) }))}
          />
        </aside>

        <section className="md:col-span-3">
          <ShopGrid filters={filters} />
        </section>
      </div>
    </main>
  );
};

export default Shop;
