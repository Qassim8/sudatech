import MainTitle from "./MainTitle";

const AboutSections = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        <div className="flex-1">
          {/* 1 - نبذة عن الشركة */}
          <MainTitle
            pos="text-start"
            title="من نحن"
            subtitle="سوداتل في لمحة"
          />
          <p className="text-(--text-color)">
            سوداتل تقدم حلول اتصالات متكاملة للشركات والمؤسسات والأفراد. نمتلك
            خبرة طويلة في تصميم ونشر شبكات الاتصالات وتزويد الأجهزة والخدمات ذات
            الجودة العالية لدعم استمرارية أعمال العملاء. نحن ملتزمون بتوفير أحدث
            التقنيات وخدمات الدعم الفني لضمان رضا العملاء وتحقيق نجاحهم في عالم
            رقمي متطور. من خلال شراكاتنا مع كبار مزودي التكنولوجيا، نضمن توفير
            حلول مبتكرة تلبي احتياجات السوق السوداني وتدعم التحول الرقمي في
            البلاد. نحن هنا لنبني جسور الاتصال بين الناس والتكنولوجيا، ونساهم في
            تطوير البنية التحتية الرقمية في السودان. انضم إلينا في رحلتنا نحو
            مستقبل رقمي مشرق.
          </p>
        </div>
        <div className="flex-1 rounded-2xl overflow-hidden">
          <img
            src="https://www.centillionsolutions.com.au/wp-content/uploads/2023/10/Industrial-Telecom-Security.png"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSections;
