import ShopFilter from "../../components/ShopFilter";
import ShopGrid from "../../components/ShopGrid";

const Shop = () => {
  return (
    <main className="container py-12">
      <div className="grid md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <ShopFilter />
        </aside>

        <section className="md:col-span-3">
          <ShopGrid />
        </section>
      </div>
    </main>
  );
};

export default Shop;
