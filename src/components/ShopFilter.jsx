import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const ShopFilter = ({ onFilter }) => {
  const [selectedCats, setSelectedCats] = useState(new Set());
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [maxPrice, setMaxPrice] = useState(6000);
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = [
    { key: "Routers", label: "الراوترات", count: 24 },
    { key: "SIM", label: "الشرائحات", count: 18 },
    { key: "Servers", label: "الخوادم", count: 12 },
    { key: "Cables", label: "الكابلات", count: 36 },
  ];

  const brands = [
    "Cisco",
    "Huawei",
    "Ubiquiti",
    "TP-Link",
    "Dell",
    "HPE",
    "MikroTik",
    "Sudatel",
  ];

  const toggleSet = (setFn, value) => {
    setFn((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const reset = () => {
    setSelectedCats(new Set());
    setSelectedBrands(new Set());
    setMaxPrice(6000);
    setInStockOnly(false);
    onFilter?.({
      categories: [],
      brands: [],
      maxPrice: 6000,
      inStockOnly: false,
    });
  };

  const apply = () => {
    onFilter?.({
      categories: Array.from(selectedCats),
      brands: Array.from(selectedBrands),
      maxPrice,
      inStockOnly,
    });
  };

  return (
    <aside className="p-4 bg-white rounded-2xl border border-slate-300 sticky top-6">
      <div className="mt-4 space-y-4 text-(--text-color)">
        {/* Categories */}
        <div>
          <div className="text-sm font-medium text-slate-500 mb-3">الاصناف</div>
          <div className="space-y-2">
            {categories.map((c) => (
              <label key={c.key} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedCats.has(c.key)}
                    onChange={() => toggleSet(setSelectedCats, c.key)}
                    className="w-4 h-4"
                  />
                  <span>{c.label}</span>
                </div>
                <span className="text-sm text-slate-400">{c.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div>
          <div className="text-sm font-medium text-slate-500 mb-3">الماركة</div>
          <div className="space-y-2">
            {brands.map((b) => (
              <label key={b} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => toggleSet(setSelectedBrands, b)}
                  className={`w-6 h-6 rounded-sm flex items-center justify-center border ${
                    selectedBrands.has(b)
                      ? "bg-(--main-color) text-white"
                      : "bg-white"
                  }`}
                >
                  {selectedBrands.has(b) ? <FiCheck /> : null}
                </button>
                <span>{b}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <div className="text-sm font-medium text-slate-500 mb-3">
            نطاق السعر
          </div>
          <div className="px-2">
            <input
              type="range"
              min={0}
              max={6000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex items-center justify-between text-xs text-slate-400 mt-2">
              <span>$0</span>
              <span className="font-semibold">
                Up to ${maxPrice.toLocaleString()}
              </span>
              <span>$6,000</span>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div>
          <div className="text-sm font-medium text-slate-500 mb-3">التوافر</div>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => setInStockOnly((s) => !s)}
            />
            <span>متوفر في المخزن</span>
          </label>
        </div>

        {/* Actions */}
        <div className="pt-2">
          <button
            onClick={reset}
            className="w-full py-2 rounded-full border bg-white"
          >
            الغاء الكل
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ShopFilter;
