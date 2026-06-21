import { Link, useLocation } from "react-router";
import { FiHome, FiChevronLeft } from "react-icons/fi";

const Breadcrumbs = ({ productName }) => {
  const location = useLocation();

  const routeLabels = {
    shop: "المتجر",
    cart: "سلة المشتريات",
    wishlist: "المفضلة",
    orders: "طلباتي",
    product: "المتجر", // 💡 جعلنا كلمة product تترجم كـ "المتجر" لتكون هي حلقة الوصل
    profile: "الحساب الشخصي",
    checkout: "إتمام الدفع",
  };

  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50/70 border-b border-slate-100 py-4 mb-6"
    >
      <div className="container flex items-center gap-2 text-sm font-medium text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-none px-4">
        {/* الرئيسية */}
        <Link
          to="/"
          className="flex items-center gap-1.5 text-gray-400 hover:text-blue-600 transition duration-200"
        >
          <FiHome className="text-base" />
          <span className="hidden sm:inline">الرئيسية</span>
        </Link>

        {/* رسم بقية المسارات */}
        {pathnames.map((value, index) => {
          let to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          // 💡 تخصيص: إذا كان المسار هو /product نوجهه مباشرة إلى صفحة المتجر /shop
          if (value === "product") {
            to = "/shop";
          }

          // 💡 تخصيص: إذا كان العنصر الأخير وهو الـ ID الخاص بالمنتج، نعرض الاسم الحقيقي الممرر
          let label = routeLabels[value] || value;
          if (isLast && productName) {
            label = productName;
          } else if (label.length > 20) {
            label = "تفاصيل المنتج";
          }

          return (
            <div key={to} className="flex items-center gap-2">
              <FiChevronLeft className="text-gray-300 text-xs flex-shrink-0" />

              {isLast ? (
                <span className="text-gray-800 font-bold truncate max-w-[180px] sm:max-w-[300px]">
                  {label}
                </span>
              ) : (
                <Link
                  to={to}
                  className="hover:text-blue-600 text-gray-400 transition duration-200"
                >
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
