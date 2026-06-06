import { FiEye, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";

const ProductCard = ({ product = {} }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden">
        {/* Badge */}
        {product?.badge && (
          <span className="absolute top-3 left-3 z-10 bg-slate-900 text-white text-xs px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}

        {/* Image */}
        <img
          src={product?.image}
          alt={product?.title}
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <div className="w-fit py-1 px-2 rounded-lg bg-slate-100">
            {/* Brand */}
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              {product?.brand}
            </p>
          </div>
          <Link className="w-fit p-2 rounded-full bg-slate-100 text-(--text-color) hover:bg-slate-200 transition-colors duration-300">
            <FiEye />
          </Link>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-slate-800 line-clamp-2 mt-3">
          {product?.name}
        </h3>

        <p className="text-sm text-(--text-color) py-4">
          {product?.description}
        </p>

        <div className="flex items-center gap-5">
          {/* Price */}
          <div className="grow flex items-center gap-2 pt-1">
            <span className="text-lg font-medium text-emerald-700">
              {product?.price} ج.س
            </span>

            {product?.oldPrice && (
              <span className="text-sm text-slate-400 line-through">
                ${product?.oldPrice}
              </span>
            )}
          </div>

          {/* Add to cart */}
          <button className="flex items-center justify-center py-2 px-4 gap-2 text-white bg-(--main-color) rounded-xl transition-colors duration-300 cursor-pointer">
            اضف للسلة
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
