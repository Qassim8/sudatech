import { FiCheck } from "react-icons/fi";
import { productStore } from "../store/productsStore";
import { shallow } from "zustand/shallow";
import useCatsBrands from "../hooks/useCatsBrands";

const ShopFilter = () => {
  // سحب الفلاتر والدوال بشكل مباشر ونظيف من المتجر
  const { filters, setFilter, toggleMultiFilter, resetFilters } = productStore(
    (state) => state,
    shallow,
  );
  const { brands, categories } = useCatsBrands();

  console.log(categories);

  return (
    <aside className="p-4 bg-white rounded-2xl border border-slate-300 sticky top-16">
      <div className="mt-4 space-y-4 text-(--text-color)">
        {/* الأصناف - فلاتر حية ومتصلة بـ Zustand */}
        <div>
          <div className="text-base font-semibold mb-2 text-slate-800">
            الاصناف
          </div>
          <div className="space-y-1">
            {categories.map((c) => (
              <label
                key={c.documentId}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(c.documentId)}
                    onChange={() =>
                      toggleMultiFilter("categories", c.documentId)
                    }
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span>{c.title}</span>
                </div>
                <span className="text-sm text-slate-400">{c?.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* الماركة - أزرار مخصصة متصلة بـ Zustand */}
        <div>
          <div className="text-base font-semibold mb-2 text-slate-800">
            الماركة
          </div>
          <div className="space-y-1">
            {brands.map((b) => (
              <label
                key={b.documentId}
                className="flex items-center gap-3 cursor-pointer"
              >
                <button
                  type="button"
                  onClick={() => toggleMultiFilter("brands", b.documentId)}
                  className={`w-4 h-4 rounded-sm flex items-center justify-center border transition ${
                    filters.brands.includes(b.documentId)
                      ? "bg-(--main-color) text-white border-blue-600"
                      : "bg-white border-slate-300"
                  }`}
                >
                  {filters.brands.includes(b.documentId) ? <FiCheck /> : null}
                </button>
                <span>{b.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* نطاق السعر - تحديث فوري */}
        <div>
          <div className="text-base font-semibold mb-2 text-slate-800">
            نطاق السعر
          </div>
          <div className="px-2">
            <input
              type="range"
              min={0}
              max={6000}
              value={filters.maxPrice || 6000}
              onChange={(e) => setFilter("maxPrice", Number(e.target.value))}
              className="w-full cursor-pointer"
            />
            <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
              <span>$0</span>
              <span className="font-semibold text-blue-600">
                حتى ${(filters.maxPrice || 6000).toLocaleString()}
              </span>
              <span>$6,000</span>
            </div>
          </div>
        </div>

        {/* إجراءات - تصفير المتجر بالكامل بضغطة زر */}
        <div className="pt-2">
          <button
            onClick={resetFilters}
            className="w-full py-2 rounded-2xl text-white bg-red-500 hover:bg-red-600/80 font-medium transition"
          >
            إلغاء الكل
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ShopFilter;
