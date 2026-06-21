const AboutHero = () => {
  return (
    <section className="relative bg-linear-to-bl from-blue-950 to-blue-800 min-h-[60vh] md:min-h-[50vh] overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 -left-50 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-30 -right-30 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl z-0" />
      <div className="absolute w-full h-full left-0 top-0 z-10 bg-blue-900/95"></div>
      <div className="absolute w-full h-full left-0 top-0 z-0">
        <img src="/hero-bg.jpg" loading="lazy" className="w-full min-h-full" />
      </div>
      <div className="container space-y-3 z-20">
        <p className="text-(--gr-color)">عن سوداتك</p>
        <h1 className="text-2xl md:text-5xl font-bold text-white leading-snug">
          سوداتك حلول الاتصالات والشبكات المتكاملة
        </h1>
        <p className="text-xs md:text-sm text-slate-300 md:max-w-2xl">
          اكتشف مجموعة واسعة من أجهزة التوجيه، وبطاقات SIM، ومعدات الشبكات，
          وكابلات الألياف الضوئية، والخوادم المصممة لتوفير أداء قوي واتصال
          مستقر. نوفر كل ما تحتاجه لبناء شبكة حديثة وآمنة تدعم نمو أعمالك وتضمن
          استمرارية التشغيل بكفاءة عالية، مع ثقة آلاف العملاء من الأفراد
          والشركات.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
