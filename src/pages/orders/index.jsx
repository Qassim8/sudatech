import OrderCard from "../../components/OrderCard";
import useOrders from "../../hooks/useOrders";
import ForShowList from "../../components/ForShowList";

const Orders = () => {
  const { orders, isLoading, isOrderError, orderError } = useOrders();
  const token = localStorage.getItem("userToken");

  if (!token) return <ForShowList page={"طلباتك"} />;

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
