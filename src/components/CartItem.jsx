import { BiMinus, BiPlus, BiXCircle } from "react-icons/bi";
import { useNavigate } from "react-router";
import { cartStore } from "../store/cartStore";
import useCart from "../hooks/useCart";

const CartItem = ({ item }) => {
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();

  const addCart = cartStore((state) => state.addCart);
  const removeCart = cartStore((state) => state.removeCart);
  const removeItem = cartStore((state) => state.removeItem);

  const {
    addCart: addList,
    removeCart: removeList,
    deleteCart: deleteList,
    isAdding,
    isRemoving,
    isDeleting,
  } = useCart();

  const handleAdd = token ? addList : addCart;
  const handleRemove = token ? removeList : removeCart;
  const handleDelete = token ? deleteList : removeItem;

  const productData = item?.product ? item.product : item;
  const productId = productData?.documentId || productData?.id;
  const title = productData?.title;
  const price = productData?.price || 0;
  const thumbnailUrl = productData?.thumbnail?.url;
  const quantity = item?.quantity || 1;

  const goToDetails = () => {
    if (productId) navigate(`/product/${productId}`);
  };

  return (
    <div className="flex justify-between p-3 border border-slate-200 bg-white rounded-2xl shadow-sm hover:border-slate-300 transition duration-200">
      <div className="flex-1 flex items-center gap-4">
        <div
          onClick={goToDetails}
          className="w-20 h-20 bg-gray-50 rounded-xl flex justify-center items-center cursor-pointer overflow-hidden p-1 hover:opacity-80 transition"
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-between h-full py-1">
          <h1
            onClick={goToDetails}
            className="text-sm md:text-base font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition line-clamp-1"
          >
            {title}
          </h1>

          <div className="w-20 md:w-24 flex justify-between items-center px-2 py-1 border border-slate-200 rounded-xl bg-gray-50 mt-2">
            <button
              type="button"
              disabled={isAdding}
              className="cursor-pointer text-gray-500 hover:text-blue-600 transition disabled:opacity-60"
              onClick={() => handleAdd(item)}
            >
              <BiPlus size={16} />
            </button>
            <span className="text-sm md:text-base font-bold text-gray-700">
              {quantity}
            </span>
            <button
              type="button"
              disabled={isRemoving}
              className="cursor-pointer text-gray-500 hover:text-red-500 transition disabled:opacity-60"
              onClick={() => handleRemove(item)}
            >
              <BiMinus size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end py-1">
        <button
          type="button"
          disabled={isDeleting}
          className="cursor-pointer text-gray-400 hover:text-red-500 transition disabled:opacity-60"
          onClick={() => handleDelete(item.documentId)}
        >
          <BiXCircle className="text-xl" />
        </button>

        <div className="text-sm md:text-base font-black text-emerald-700">
          ${(price * quantity).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
