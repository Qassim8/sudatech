import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import sampleProducts from "../data/sampleProducts";

const ShopGrid = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  // create a larger dataset by repeating sample products
  const products = useMemo(() => {
    const list = [];
    for (let i = 0; i < 6; i++) {
      sampleProducts.forEach((p) => list.push({ ...p, id: p.id + i * 10 }));
    }
    return list;
  }, []);

  const filtered = products.filter((p) => {
    if (query && !p.name.includes(query) && !p.description.includes(query))
      return false;
    if (category && !p.brand?.includes(category) && !p.name?.includes(category))
      return false;
    return true;
  });

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageItems.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((s) => Math.max(1, s - 1))}
          className="px-3 py-2 bg-white border rounded"
        >
          السابق
        </button>

        <div className="px-4 py-2 bg-white border rounded">
          {page} / {pages}
        </div>

        <button
          disabled={page === pages}
          onClick={() => setPage((s) => Math.min(pages, s + 1))}
          className="px-3 py-2 bg-white border rounded"
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default ShopGrid;
