const AboutSections = () => {
  return (
    <section className="container py-20 space-y-12">
      {/* 1 - نبذة عن الشركة */}
      <div>
        <h2 className="text-2xl font-bold text-(--main-color)">
          نبذة عن الشركة
        </h2>
        <p className="mt-4 text-(--text-color)">
          سوداتل تقدم حلول اتصالات متكاملة للشركات والمؤسسات والأفراد. نمتلك
          خبرة طويلة في تصميم ونشر شبكات الاتصالات وتزويد الأجهزة والخدمات ذات
          الجودة العالية لدعم استمرارية أعمال العملاء.
        </p>
      </div>

      {/* 2 - الرؤية والرسالة */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="font-semibold text-(--main-color)">الرؤية</h3>
          <p className="mt-2 text-(--text-color)">
            أن نكون الشريك الرقمي الأول في السودان ومزود حلول اتصالات موثوق به
            يدعم التحول الرقمي والابتكار.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="font-semibold text-(--main-color)">الرسالة</h3>
          <p className="mt-2 text-(--text-color)">
            تقديم حلول اتصال متقدمة، دعم فني محترف وخدمات مخصصة تساعد عملائنا
            على النمو والتطور بأعلى معايير الجودة.
          </p>
        </div>
      </div>

      {/* 3 - الاحصائيات */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="p-6 bg-linear-to-bl from-(--main-color) to-(--gr-color) text-white rounded-2xl">
          <p className="text-3xl font-bold">1200+</p>
          <p className="mt-2">عميل راضٍ</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <p className="text-3xl font-bold">15</p>
          <p className="mt-2">سنوات خبرة</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <p className="text-3xl font-bold">98%</p>
          <p className="mt-2">متوسط توافر الشبكة</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <p className="text-3xl font-bold">20+</p>
          <p className="mt-2">موزع في البلاد</p>
        </div>
      </div>

      {/* 5 - لماذا نحن موجود (اضفته فقط) */}
      <div className="p-6 bg-white rounded-2xl shadow">
        <h3 className="font-semibold text-(--main-color)">لماذا نحن موجود</h3>
        <p className="mt-2 text-(--text-color)">
          لأن الاتصالات هي قلب الاقتصاد الرقمي، ونحن هنا لنوفر البنية التحتية
          والدعم الذي تحتاجه الشركات والمؤسسات لتستمر وتنمو بثقة.
        </p>
      </div>
    </section>
  );
};

export default AboutSections;
