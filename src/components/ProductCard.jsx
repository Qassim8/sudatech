import { BsHeart } from "react-icons/bs";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";
import { cartStore } from "../store/cartStore";

const ProductCard = ({ product }) => {
  const addCart = cartStore((state) => state.addCart);

  return (
    <div className="group relative p-3 bg-white rounded-2xl overflow-hidden md:shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 md:border-slate-100">
      <div className="absolute top-2 left-2 w-fit p-2 rounded-full bg-slate-100 text-(--text-color) cursor-pointer hover:bg-slate-200 transition-colors duration-300 z-10">
        <BsHeart />
      </div>

      {/* Image Section */}
      <div className="relative h-32 md:h-60">
        {/* Image */}
        <img
          src={`http://localhost:1337${product?.thumbnail?.url}`}
          alt={product?.title}
          className="max-h-full w-full group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <div className="w-fit py-1 px-2 rounded-lg bg-slate-100">
            {/* Brand */}
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              {product?.brand?.name}
            </p>
          </div>

          <Link
            to={`/product/${product.documentId}`}
            className="w-fit p-2 rounded-full bg-slate-100 text-(--text-color) hover:bg-slate-200 transition-colors duration-300"
          >
            <FiEye className="text-xs md:text-base" />
          </Link>
        </div>

        {/* Title */}
        <h3 className="text-sm md:text-base font-semibold text-slate-800 line-clamp-2 mt-2">
          {product?.title}
        </h3>

        <p className="text-sm text-(--text-color) py-2 hidden md:block">
          {product?.description?.slice(0, 65)}....
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5">
        {/* Price */}
        <div className="grow flex items-center gap-2 pt-1">
          <span className="text-base md:text-xl font-medium text-emerald-700">
            {product?.price} <span className="text-xs"> ج.س</span>
          </span>

          {product?.oldPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${product?.oldPrice}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <button
          className="text-xs md:text-sm flex items-center justify-center py-2 px-4
         gap-2 text-white bg-(--main-color) rounded-xl transition-colors duration-300 cursor-pointer"
          onClick={() => addCart(product)}
        >
          اضف للسلة
          <FiShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
