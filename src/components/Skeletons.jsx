const ProductSkeleton = () => (
  <div className="p-3 bg-white rounded-2xl border border-slate-200 animate-pulse">
    <div className="h-36 bg-slate-100 rounded-md mb-3" />
    <div className="h-4 bg-slate-100 rounded w-3/4 mb-2" />
    <div className="h-3 bg-slate-100 rounded w-1/2 mb-4" />
    <div className="flex items-center gap-2">
      <div className="h-8 bg-slate-100 rounded w-24" />
      <div className="flex-1 h-8 bg-slate-100 rounded" />
    </div>
  </div>
);

const OrderSkeleton = () => (
  <div className="bg-white border border-slate-200 rounded-xl p-5 animate-pulse">
    <div className="h-4 bg-slate-100 rounded w-1/3 mb-3" />
    <div className="h-3 bg-slate-100 rounded w-1/2 mb-4" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="h-20 bg-slate-100 rounded" />
      <div className="h-20 bg-slate-100 rounded" />
    </div>
  </div>
);

const CartItemSkeleton = () => (
  <div className="flex justify-between p-3 border border-slate-200 bg-white rounded-2xl shadow-sm animate-pulse">
    <div className="flex-1 flex items-center gap-4">
      <div className="w-20 h-20 bg-slate-100 rounded-xl" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-slate-100 rounded w-3/4" />
        <div className="h-3 bg-slate-100 rounded w-1/3" />
      </div>
    </div>
    <div className="flex flex-col justify-between items-end py-1">
      <div className="h-6 bg-slate-100 rounded w-16" />
      <div className="h-4 bg-slate-100 rounded w-20 mt-2" />
    </div>
  </div>
);

export { ProductSkeleton, OrderSkeleton, CartItemSkeleton };
