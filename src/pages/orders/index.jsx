import React from "react";
import OrderCard from "../../components/OrderCard";
import sampleOrders from "../../data/sampleOrders";
import useOrders from "../../hooks/useOrders";

const Orders = () => {
  const { orders, isLoading, isOrderError, orderError } = useOrders();

  console.log(orders);
  return (
    <div className="container py-6">
      <main className="lg:col-span-3 grid md:grid-cols-2 gap-5">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </main>
    </div>
  );
};

export default Orders;
