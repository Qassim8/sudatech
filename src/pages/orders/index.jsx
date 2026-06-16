import React from "react";
import OrderCard from "../../components/OrderCard";
import sampleOrders from "../../data/sampleOrders";

const Orders = () => {
  return (
    <div className="container py-6">
      <main className="lg:col-span-3 grid md:grid-cols-2 gap-3">
        {sampleOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </main>
    </div>
  );
};

export default Orders;
