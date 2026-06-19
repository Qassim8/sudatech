const OrderCard = ({ order }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold">رقم الطلب #: {order.number}</h3>
          <div className="flex items-center gap-1 text-sm text-(--text-color)">
            <p> {order.summary.quantity} منتجات</p>
            <p>|</p>
            <p>التاريخ: {order.summary.date} </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-col gap-1 text-(--text-color) mb-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">الحالة:</span>{" "}
            <span
              className={`${order.status === "Shipped" ? "text-green-600" : "text-amber-600"}`}
            >
              {order.statusText}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">تاريخ الطلب:</span>{" "}
            {order.deliveryDate}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">الولاية: </span> {order.address}
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-lg text-slate-800 font-bold">الاجمالي:</span>{" "}
            <p className="text-lg">{order.total}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-3 border-t border-t-slate-300">
        {order.items.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-3 items-center bg-(--color-background) p-3 rounded-md"
          >
            <div className="w-20 h-20 rounded-2xl bg-black/50">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold">{item.name}</h4>
              <p className="text-xs text-(--text-color)">
                الكمية: {item.quantity} • {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
