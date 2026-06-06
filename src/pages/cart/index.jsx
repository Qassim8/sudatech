const Cart = () => {
  return (
    <main className="container py-12">
      <h2 className="text-2xl font-bold text-(--main-color)">سلة المشتريات</h2>

      <div className="mt-6 bg-white rounded-2xl shadow p-6">
        <p className="text-(--text-color)">
          السلة حاليا فارغة — أضف منتجات من المتجر.
        </p>
      </div>
    </main>
  );
};

export default Cart;
