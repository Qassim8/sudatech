import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router";
import { productStore } from "../store/productsStore";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // سحب قيمة البحث ودالة التحديث من زوستاند
  const search = productStore((state) => state.filters.search);
  const setFilter = productStore((state) => state.setFilter);

  // حالة محلية للتحكم في النص المكتوب قبل الانتقال (خارج صفحة المتجر)
  const [localSearch, setLocalSearch] = useState(search);

  const isShopPage = location.pathname === "/shop";

  // مزامنة النص المحلي إذا تغير النص في زوستاند (عند عمل Reset مثلاً)
  useEffect(() => {
    setLocalSearch(search);
  }, [search]);

  // دالة معالجة البحث والتحويل
  const handleSearchSubmit = () => {
    if (isShopPage) {
      // أ. إذا كان في صفحة المتجر: نحدث زوستاند مباشرة ليفلتر حياً
      setFilter("search", localSearch);
    } else {
      // ب. إذا كان خارج صفحة المتجر: ننقله للمتجر ونمرر النص كـ Query Parameter
      if (localSearch.trim() !== "") {
        navigate(`/shop?search=${encodeURIComponent(localSearch)}`);
      } else {
        navigate(`/shop`);
      }
    }
  };

  // الفلترة الحية أثناء الكتابة فقط إذا كان المستخدم داخل صفحة المتجر
  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    if (isShopPage) {
      setFilter("search", value); // فلترة فورية حية داخل المتجر
    }
  };

  return (
    <div className="flex items-center px-4 py-1 transition duration-200 w-full max-w-md">
      {/* زر البحث القابل للنقر */}
      <button
        type="button"
        onClick={handleSearchSubmit}
        className="cursor-pointer p-1 text-slate-400 hover:text-blue-600 transition"
      >
        <BsSearch className="text-lg" />
      </button>

      <input
        type="text"
        value={localSearch}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()} // البحث عند ضغط Enter
        placeholder="البحث عن راوتـرات، مودمات، أجهزة ذكية والمزيد..."
        className="w-full py-2 px-3 placeholder:text-slate-400 focus:outline-none bg-transparent text-sm"
      />
    </div>
  );
};

export default SearchBar;
