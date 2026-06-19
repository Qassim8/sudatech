import React from "react";

const Wishlist = () => {
  return (
    <main className="container py-12">
      <h2 className="text-2xl font-bold text-(--main-color)">قائمة المفضلات</h2>
      <div className="mt-6 bg-white rounded-2xl shadow p-6">
        <p className="text-(--text-color)">
          لم تقم بإضافة أي عنصر للمفضلة بعد.
        </p>
      </div>
    </main>
  );
};

export default Wishlist;
