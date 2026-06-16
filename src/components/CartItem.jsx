import { BiMinus, BiPlus, BiXCircle } from "react-icons/bi";

const CartItem = () => {
  return (
    <div className="flex justify-between p-2 border border-slate-200 rounded-2xl">
      <div className="flex-1 flex items-center gap-5">
        <div className="w-20 h-20 bg-black/20 rounded-2xl ">
          <img src="" alt="" srcset="" />
        </div>
        <div className="flex flex-col justify-around h-full">
          <h1 className="font-semibold">سيرفر ديل</h1>
          <div className="w-24 flex justify-between items-center p-1 border border-slate-300 rounded-2xl">
            <div className="cursor-pointer px-1">
              <BiPlus className="text-(--text-color)" />
            </div>
            <span className="">10</span>
            <div className="cursor-pointer px-1">
              <BiMinus className="text-(--text-color)" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <div className="cursor-pointer">
          <BiXCircle className="text-red-500 text-xl" />
        </div>
        <h2 className="text-sm md:text-base font-bold">
          5000 <span className="text-sm font-light"> ج.س</span>
        </h2>
      </div>
    </div>
  );
};

export default CartItem;
