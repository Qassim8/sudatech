import { Link } from "react-router";
import ProductCard from "../../components/ProductCard";
import useWishlist from "../../hooks/useWishlist";
import ForShowList from "../../components/ForShowList";
import Breadcrumbs from "../../components/Breadcrumb";

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
        <main>
          <div className="container py-12">
            <div>
              <h2 className="text-2xl font-bold text-(--main-color)">
                قائمة المفضلات
              </h2>
              <div className="mt-6 bg-white rounded-2xl shadow p-6">
                <p className="text-(--text-color)">
                  لم تقم بإضافة أي عنصر للمفضلة بعد.
                </p>
              </div>
            </div>
          </div>
        </main>
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
