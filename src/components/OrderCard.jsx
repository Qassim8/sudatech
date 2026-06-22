const OrderCard = ({ order }) => {
  const formatDate = (isoString) => {
    if (!isoString) return "";

    const date = new Date(isoString);

    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold">رقم الطلب : #{order.documentId}</h3>
          <div className="flex items-center gap-1 text-sm text-(--text-color)">
            <p>تم بواسطة: {order?.customer}</p>
            <p>|</p>
            <p> {order?.items?.length} منتجات</p>
            <p>|</p>
            <p>التاريخ: {formatDate(order?.createdAt)} </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-col gap-1 text-(--text-color) mb-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">الحالة:</span>{" "}
            <span
              className={`${order?.order_status === "Shipped" ? "text-green-600" : "text-amber-600"}`}
            >
              {order?.order_status}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">تاريخ الطلب:</span>{" "}
            {formatDate(order?.createdAt)}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">العنوان: </span> {order?.address}
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg text-slate-800 font-bold">الاجمالي:</span>{" "}
            <p className="font-semibold text-emerald-600">
              ${order?.total_price}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 py-3 border-t border-t-slate-300">
        {order.items?.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-3 items-center bg-(--color-background) p-3 rounded-md"
          >
            <div className="w-20 h-16 rounded-xl flex justify-center items-center bg-white">
              <img
                src={item?.thumbnail}
                alt={item?.title}
                className="w-full max-h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold">{item?.title}</h4>
              <p className="text-xs text-(--text-color)">
                الكمية: {item?.quantity} * {item?.price} ج.س
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
