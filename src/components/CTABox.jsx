import { Link } from "react-router";

const CTABox = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/40 bg-linear-to-r from-blue-900 to-blue-950 text-white py-10 md:py-20 px-5 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -top-50 -left-30 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl z-0" />
          <div className="absolute -bottom-30 right-1/2 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl z-0" />

          <div className="absolute inset-0 opacity-5">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-extrabold">
              هل تحتاج إلى مساعدة في اختيار المنتج المناسب؟
            </h3>
            <p className="mt-2 text-slate-400">
              فريقنا من الخبراء جاهز لمساعدتك في العثور على أفضل حلول الشبكات
              لاحتياجاتك. لا تتردد في التواصل معنا لأي استفسار أو دعم فني.
            </p>
          </div>
          <div className="flex-1 flex gap-4 justify-center md:justify-end z-20">
            <Link
              to="/contact"
              className="bg-white text-(--main-color) hover:bg-slate-200 font-bold py-3 px-6 rounded-xl"
            >
              تواصل معنا
            </Link>
            <Link
              to="/products"
              className="border border-white/30 text-white hover:bg-white/10 font-bold py-3 px-6 rounded-xl"
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
