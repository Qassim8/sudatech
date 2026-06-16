import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold">رقم الطلب #: {order.number}</h3>
          <p className="text-sm text-(--text-color)"> {order.summary} </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="col-span-2">
          <div className="text-sm text-(--text-color) mb-2">
            <div>
              <span className="font-semibold">الحالة:</span>{" "}
              <span
                className={`${order.status === "Shipped" ? "text-green-600" : "text-amber-600"}`}
              >
                {order.statusText}
              </span>
            </div>
            <div>
              <span className="font-semibold">تاريخ الطلب:</span>{" "}
              {order.deliveryDate}
            </div>
            <div>
              <span className="font-semibold">عنوان التسليم:</span>{" "}
              {order.address}
            </div>
            <div>
              <span className="font-semibold">الاجمالي:</span> {order.total}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {order.items.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-3 items-start bg-(--color-background) p-3 rounded-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h4 className="text-sm font-semibold">{item.name}</h4>
              <p className="text-xs text-(--text-color)">
                Quantity: {item.quantity} • {item.price}
              </p>
              <p className="text-xs text-(--text-color)">
                {item.color ? `Color: ${item.color}` : ""}
              </p>
              <p className="text-xs text-(--text-color)">
                {item.size ? `Size: ${item.size}` : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
