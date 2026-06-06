const ContactHero = () => {
  return (
    <section
      className="relative min-h-[40vh] flex items-center"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-(--main-color)">
          تواصل معنا
        </h1>
        <p className="mt-4 text-(--text-color)">
          نحن هنا للمساعدة والإجابة عن استفساراتك.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
