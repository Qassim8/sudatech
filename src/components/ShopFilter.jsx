const ShopFilter = ({ onSearch, onCategory }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h4 className="font-semibold text-(--main-color)">فلتر المنتجات</h4>
      <div className="mt-4 space-y-3">
        <input
          placeholder="ابحث عن منتج..."
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <select
          onChange={(e) => onCategory?.(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">الكل</option>
          <option value="Routers">راوتر</option>
          <option value="Modems">مودم</option>
          <option value="Cables">كابلات</option>
        </select>
      </div>
    </div>
  );
};

export default ShopFilter;
