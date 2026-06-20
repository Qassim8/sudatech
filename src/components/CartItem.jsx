import { BiMinus, BiPlus, BiXCircle } from "react-icons/bi";
import { cartStore } from "../store/cartStore";
import useCart from "../hooks/useCart";

const CartItem = ({ item }) => {
  const token = localStorage.getItem("userToken");
  const addCart = cartStore((state) => state.addCart);
  const removeCart = cartStore((state) => state.removeCart);
  const removeItem = cartStore((state) => state.removeItem);
  const {
    addCart: addList,
    removeCart: removeList,
    deleteCart: deleteList,
  } = useCart();

  const handleAdd = token ? addList : addCart;
  const handleRemove = token ? removeList : removeCart;
  const handleDelete = token ? deleteList : removeItem;

  return (
    <div className="flex justify-between p-2 border border-slate-200 rounded-2xl">
      <div className="flex-1 flex items-center gap-5">
        <div className="w-20 h-20 rounded-2xl flex justify-center items-center">
          <img
            src={`http://localhost:1337${item?.thumbnail?.url || item?.product?.thumbnail?.url}`}
            alt={item?.title}
            className="max-h-full max-w-full"
          />
        </div>
        <div className="flex flex-col justify-between md:justify-around gap-2 md:gap-0 h-full">
          <h1 className="text-sm md:text-base font-semibold">
            {item?.title || item?.product?.title}
          </h1>
          <div className="w-20 md:w-24 flex justify-between items-center p-1 border border-slate-300 rounded-2xl">
            <div
              className="cursor-pointer px-1"
              onClick={() => handleAdd(item)}
            >
              <BiPlus className="text-(--text-color)" />
            </div>
            <span className="text-sm md:text-base">{item?.quantity}</span>
            <div
              className="cursor-pointer px-1"
              onClick={() => handleRemove(item)}
            >
              <BiMinus className="text-(--text-color)" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <div
          className="cursor-pointer"
          onClick={() => handleDelete(item.documentId)}
        >
          <BiXCircle className="text-red-500 text-xl" />
        </div>
        <h2 className="text-sm md:text-base font-bold">
          {item?.price || item?.product?.price}{" "}
          <span className="text-sm font-light"> ج.س</span>
        </h2>
      </div>
    </div>
  );
};

export default CartItem;
