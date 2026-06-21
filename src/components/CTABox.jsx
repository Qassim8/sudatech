import { Link } from "react-router";

const CTABox = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/40 bg-linear-to-r from-blue-900 to-blue-950 text-white py-10 md:py-20 px-5 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -top-50 -left-30 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl z-10" />
          <div className="absolute -bottom-30 right-1/2 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl z-10" />

          <div className="absolute w-full h-full left-0 top-0 z-10 bg-blue-900/95"></div>
          <div className="absolute w-full h-full left-0 top-0 z-0">
            <img src="/hero-bg.jpg" loading="lazy" className="w-full h-full" />
          </div>

          <div className="flex-1 z-20">
            <h3 className="text-xl md:text-3xl font-extrabold">
              هل تحتاج إلى مساعدة في اختيار المنتج المناسب؟
            </h3>
            <p className="text-sm md:text-base mt-2 text-slate-400">
              فريقنا من الخبراء جاهز لمساعدتك في العثور على أفضل حلول الشبكات
              لاحتياجاتك. لا تتردد في التواصل معنا لأي استفسار أو دعم فني.
            </p>
          </div>
          <div className="flex-1 flex gap-4 justify-center md:justify-end z-20 text-sm md:text-base">
            <Link
              to="/contact"
              className="bg-white text-(--main-color) hover:bg-slate-200 font-bold py-2 md:py-3 px-3 md:px-6 rounded-xl"
            >
              تواصل معنا
            </Link>
            <Link
              to="/shop"
              className="border border-white/30 text-white hover:bg-white/10 font-bold py-2 md:py-3 px-3 md:px-6 rounded-xl"
            >
              استعرض المنتجات
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABox;
