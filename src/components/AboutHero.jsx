const AboutHero = () => {
  return (
    <section className="relative bg-linear-to-bl from-blue-950 to-blue-800 min-h-[70vh] md:min-h-[50vh] overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 -left-50 w-96 h-96 bg-cyan-400/40 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-30 -right-30 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl z-0" />
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
      <div className="container flex flex-col md:w-4xl gap-5 z-20">
        <p className="text-(--gr-color)">عن سوداتل</p>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
          سوداتل حلول الاتصالات والشبكات المتكاملة
        </h1>
        <p className="text-xs md:text-sm text-slate-300">
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
