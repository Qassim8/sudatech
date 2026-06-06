const ContactHero = () => {
  return (
    <section className="bg-(--color-background) min-h-[70vh] md:min-h-[50vh] overflow-hidden flex flex-col justify-center">
      <div className="container flex flex-col md:w-4xl gap-5 z-20">
        <p className="text-(--gr-color)">تواصل معنا</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          تواصل بأي وسيلة تفضلها وسنعاود الرد بأسرع وقت.
        </h1>
        <p className="text-xs md:text-sm text-slate-600">
          نحن هنا لمساعدتك في أي استفسار أو دعم تحتاجه. سواء كنت تفضل التواصل
          عبر الهاتف، البريد الإلكتروني، أو وسائل التواصل الاجتماعي، فإن فريقنا
          مستعد للرد على جميع أسئلتك وتقديم الدعم اللازم لضمان رضاك التام. لا
          تتردد في الاتصال بنا، فنحن نقدر تواصلك ونسعى جاهدين لتقديم أفضل خدمة
          ممكنة لك.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
