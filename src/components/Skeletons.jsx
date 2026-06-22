import React from "react";

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

// 💡 المكون الجديد الخاص بتفاصيل المنتج الكاملة
const ProductDetailSkeleton = () => (
  <div className="container py-12 animate-pulse">
    {/* Breadcrumbs Skeleton */}
    <div className="h-4 bg-slate-200 rounded w-1/4 mb-8" />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* القسم الأيسر: الصور المجهزة */}
      <div>
        {/* الصورة الرئيسية الكبيرة */}
        <div className="bg-slate-100 h-60 md:h-96 rounded-2xl border border-slate-200" />

        {/* الصور المصغرة بالأسفل */}
        <div className="mt-5 flex gap-5">
          <div className="grow h-16 md:h-28 bg-slate-100 border border-slate-200 rounded-lg" />
          <div className="grow h-16 md:h-28 bg-slate-100 border border-slate-200 rounded-lg" />
          <div className="grow h-16 md:h-28 bg-slate-100 border border-slate-200 rounded-lg" />
        </div>
      </div>

      {/* القسم الأيمن: النصوص والأزرار */}
      <div>
        {/* الـ Brand الماركة */}
        <div className="h-6 bg-slate-100 rounded w-20 mb-3" />

        {/* العنوان الرئيسي للمنتج */}
        <div className="h-8 bg-slate-100 rounded w-3/4 mb-4" />

        {/* السعر */}
        <div className="h-8 bg-slate-100 rounded w-1/3 mb-6" />

        {/* أزرار التحكم بالكمية والـ Favorite وإضافة للسلة */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-slate-100 rounded-full" />{" "}
          {/* زر المفضلة الدائري */}
          <div className="w-32 h-14 bg-slate-100 rounded-2xl" />{" "}
          {/* صندوق التحكم بالكمية */}
          <div className="grow h-14 bg-slate-100 rounded-2xl" />{" "}
          {/* زر إضافة للسلة الكبير */}
        </div>

        {/* الوصف Text Description */}
        <div className="space-y-2 mb-6">
          <div className="h-3 bg-slate-100 rounded w-full" />
          <div className="h-3 bg-slate-100 rounded w-full" />
          <div className="h-3 bg-slate-100 rounded w-2/3" />
        </div>

        {/* حالة التوفر في المخزن */}
        <div className="h-4 bg-slate-100 rounded w-24 mb-6" />

        {/* شبكة مميزات الضمان، الإرجاع، والدفع (4 مربعات) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="h-16 bg-slate-100 border border-slate-200 rounded-2xl" />
          <div className="h-16 bg-slate-100 border border-slate-200 rounded-2xl" />
          <div className="h-16 bg-slate-100 border border-slate-200 rounded-2xl" />
          <div className="h-16 bg-slate-100 border border-slate-200 rounded-2xl" />
        </div>
      </div>
    </div>

    {/* قسم نظرة عامة التقنية (الميزات الأساسية بالأسفل) */}
    <div className="mt-10 bg-slate-50 p-5 rounded-2xl border border-slate-100">
      <div className="h-5 bg-slate-100 rounded w-1/6 mb-2" />
      <div className="h-3 bg-slate-100 rounded w-1/4 mb-5" />
      <div className="space-y-3">
        <div className="h-4 bg-slate-100 rounded w-1/2" />
        <div className="h-4 bg-slate-100 rounded w-1/3" />
        <div className="h-4 bg-slate-100 rounded w-2/5" />
      </div>
    </div>
  </div>
);

export {
  ProductSkeleton,
  OrderSkeleton,
  CartItemSkeleton,
  ProductDetailSkeleton,
};
