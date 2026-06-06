import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";

const ShopNowBtn = ({ color, bgColor }) => {
  return (
    <Link
      to="/shop"
      className={`flex items-center justify-center gap-2 font-semibold text-sm text-${color} bg-${bgColor} px-6 py-2`}
    >
      <p>SHOP NOW</p> <BsArrowRight />
    </Link>
  );
};

export default ShopNowBtn;
