import React from "react";
import { Link, useNavigate } from "react-router";

const ForShowList = ({ page }) => {
  const navigate = useNavigate();

  return (
    <div className="container py-20 flex flex-col justify-center text-center gap-5">
      <div className="">
        <h2 className="text-2xl font-bold text-(--main-color)">
          قم بتسجيل الدخول لرؤية قائمة {page}
        </h2>
      </div>
      <Link to={"/login"} className="main-btn w-fit! mx-auto">
        الدخول
      </Link>
    </div>
  );
};

export default ForShowList;
