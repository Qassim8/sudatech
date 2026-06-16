import { Link } from "react-router";
import CartItem from "./CartItem";
import { LuShoppingCart, LuX } from "react-icons/lu";
import { BsX } from "react-icons/bs";

const CartMenu = ({ show, hide }) => {
  if (show)
    return (
      <div className="absolute h-screen w-full top-0">
        <div
          className="absolute w-0 md:w-screen top-0 left-0 h-full bg-black/35"
          onClick={hide}
        ></div>
        <div
          className={`overflow-y-scroll absolute h-full w-screen md:w-[28vw] top-0 right-0 bg-white p-5`}
        >
          <div className="flex justify-between items-center pb-10">
            <h2 className="text-xl font-extrabold">عناصر السلة</h2>
            <div className="cursor-pointer group" onClick={hide}>
              <LuX className="text-2xl font-bold text-(--text-color) transition-colors duration-300 group-hover:text-slate-800" />
            </div>
          </div>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1, 1].map(() => (
              <CartItem />
            ))}
          </div>
          <div className="sticky -bottom-5 left-2 right-2 w-full h-20 bg-white flex justify-center items-center">
            <Link to="/cart" onClick={hide} className="main-btn w-full">
              <span>انتقل للسلة</span>
              <LuShoppingCart className="ms-2" />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CartMenu;
