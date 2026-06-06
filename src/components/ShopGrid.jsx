import { useState, useMemo, useEffect } from "react";
import ProductCard from "./ProductCard";
import sampleProducts from "../data/sampleProducts";

const ShopGrid = ({ filters = {} }) => {
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
    const q = (filters.search || "").toLowerCase();
    if (
      q &&
      !p.name.toLowerCase().includes(q) &&
      !p.description.toLowerCase().includes(q)
    )
      return false;

    if (filters.categories && filters.categories.length > 0) {
      const cats = filters.categories.map((c) => c.toLowerCase());
      const matchCat = cats.some(
        (c) =>
          p.name.toLowerCase().includes(c) ||
          p.brand?.toLowerCase().includes(c),
      );
      if (!matchCat) return false;
    }

    if (filters.brands && filters.brands.length > 0) {
      const brands = filters.brands.map((b) => b.toLowerCase());
      if (!brands.includes((p.brand || "").toLowerCase())) return false;
    }

    if (typeof filters.maxPrice === "number") {
      const priceNum = Number(String(p.price).replace(/[^0-9.]/g, "")) || 0;
      if (priceNum > filters.maxPrice) return false;
    }

    if (filters.inStockOnly) {
      // sample data doesn't have stock; assume all in stock
    }

    return true;
  });

  // sorting
  let sorted = filtered.slice();
  if (filters.sort) {
    if (filters.sort === "newest") {
      sorted.sort((a, b) => Number(b.id) - Number(a.id));
    } else if (filters.sort === "price-asc") {
      sorted.sort(
        (a, b) =>
          (Number(String(a.price).replace(/[^0-9.]/g, "")) || 0) -
          (Number(String(b.price).replace(/[^0-9.]/g, "")) || 0),
      );
    } else if (filters.sort === "price-desc") {
      sorted.sort(
        (a, b) =>
          (Number(String(b.price).replace(/[^0-9.]/g, "")) || 0) -
          (Number(String(a.price).replace(/[^0-9.]/g, "")) || 0),
      );
    }
  }

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const pageItems = sorted.slice(start, start + perPage);

  useEffect(() => {
    setPage(1);
  }, [
    filters.search,
    filters.categories,
    filters.brands,
    filters.maxPrice,
    filters.inStockOnly,
    filters.sort,
  ]);

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
