import OrderCard from "../../components/OrderCard";
import useOrders from "../../hooks/useOrders";
import ForShowList from "../../components/ForShowList";
import Breadcrumbs from "../../components/Breadcrumb";
import { OrderSkeleton } from "../../components/Skeletons";

const Orders = () => {
  const { orders, isLoading, isOrderError, orderError } = useOrders();
  const token = localStorage.getItem("userToken");

  const renderContent = () => {
    if (!token) return <ForShowList page={"طلباتك"} />;
    if (isLoading) {
      return (
        <div className="container py-6">
          <main className="lg:col-span-3 grid md:grid-cols-2 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <OrderSkeleton key={i} />
            ))}
          </main>
        </div>
      );
    }

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

  return (
    <>
      <Breadcrumbs />
      {renderContent()}
    </>
  );
};

export default Orders;
