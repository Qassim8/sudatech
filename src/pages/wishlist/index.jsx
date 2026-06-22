import { Link } from "react-router";
import ProductCard from "../../components/ProductCard";
import useWishlist from "../../hooks/useWishlist";
import ForShowList from "../../components/ForShowList";
import Breadcrumbs from "../../components/Breadcrumb";
import { LuHeart } from "react-icons/lu";

const Wishlist = () => {
  const token = localStorage.getItem("userToken");
  const { wishlist, wishlistLoading, wishlistError, wishlistHasError } =
    useWishlist();

  const renderContent = () => {
    if (!token) {
      return <ForShowList page={"مفضلاتك"} />;
    }

    if (wishlistLoading) {
      return (
        <main>
          <div className="container py-20 flex flex-col justify-center text-center gap-5">
            <div className="">
              <h2 className="text-2xl font-bold text-(--main-color)">
                جار التحميل
              </h2>
            </div>
          </div>
        </main>
      );
    }

    if (wishlist?.length < 1) {
      return (
        <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4">
          <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center text-2xl">
            <LuHeart />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              سلتك فارغة تماماً
            </h3>
            <p className="text-base text-gray-400 max-w-[250px] mx-auto">
              قم بالتجول في المتجر وأضف أفضل الراوترات والخوادم إلى سلتك الآن.
            </p>
          </div>
          <Link
            to="/shop"
            className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition shadow-xs"
          >
            انتقل للمتجر
          </Link>
        </div>
      );
    }
    return (
      <div className="container py-12">
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
          {wishlist?.map((item) => (
            <ProductCard key={item.product.documentId} product={item.product} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <main>
      <Breadcrumbs />
      {renderContent()}
    </main>
  );
};

export default Wishlist;
