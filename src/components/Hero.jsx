import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative bg-blue-900/70 h-screen flex items-center justify-center overflow-hidden z-10">
      <div className="absolute top-0 -left-50 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl z-5" />
      <div className="absolute -bottom-30 -right-30 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl z-5" />
      <div className="absolute w-full h-full left-0 top-0 z-10 bg-blue-900/95"></div>
      <div className="absolute w-full h-full left-0 top-0 z-0">
        <img src="/hero-bg.jpg" loading="lazy" className="w-full min-h-full" />
      </div>
      <div className="container flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 z-20">
        <div className="grow">
          <h1 className="text-2xl md:text-6xl font-bold text-white mb-6">
            حلول الاتصالات والشبكات المتكاملة
          </h1>
          <p className="text-sm md:text-base text-slate-300 mb-8">
            اكتشف مجموعة واسعة من أجهزة التوجيه، وبطاقات SIM، ومعدات الشبكات，
            وكابلات الألياف الضوئية، والخوادم المصممة لتوفير أداء قوي واتصال
            مستقر. نوفر كل ما تحتاجه لبناء شبكة حديثة وآمنة تدعم نمو أعمالك
            وتضمن استمرارية التشغيل بكفاءة عالية، مع ثقة آلاف العملاء من الأفراد
            والشركات.
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/shop"
              className="bg-white text-(--main-color) hover:bg-slate-200 font-bold py-3 px-6 rounded-xl transition duration-300 flex items-center gap-2 group"
            >
              <span>تسوق الآن</span>
              <FiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="border border-white/50 text-white bg-white/5 hover:bg-white/10 font-bold py-3 px-6 rounded-xl transition duration-300"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
        <div className="relative grow max-w-2xl rounded-lg overflow-hidden shadow-[0_20px_80px_rgba(255,255,255,0.3)]">
          <div className="w-full h-52 md:h-80">
            <img
              src="./hero.jpg"
              alt="Hero Image"
              className="w-full min-h-full scale-105 hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="z-20 absolute backdrop-blur-md bottom-3 left-3 right-3 flex items-center justify-between p-4 border border-white/20 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center text-white bg-(--gr-color) h-9 w-9 rounded-xl shadow-lg shadow-(--main-color)">
                <MdOutlineElectricBolt className="text-lg" />
              </div>
              <div>
                <p className="font-bold text-xs text-slate-400 tracking-widest grow">
                  اليك
                </p>
                <p className="text-xs md:text-lg text-white leading-tight">
                  احدث العروض
                </p>
              </div>
            </div>
            <Link
              to="/products"
              className="text-white font-bold transition-colors duration-300 text-xs py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg"
            >
              اكتشف الان
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
