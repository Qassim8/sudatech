import ContactHero from "../../components/ContactHero";
import ContactBoxes from "../../components/ContactBoxes";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <ContactHero />

      <section className="container py-12 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-(--main-color)">تواصل معنا</h2>
          <p className="text-(--text-color)">
            تواصل بأي وسيلة تفضلها وسنعاود الرد بأسرع وقت.
          </p>

          <ContactBoxes />

          <div className="mt-6">
            <h3 className="font-semibold text-(--main-color)">موقعنا</h3>
            <div className="mt-4 w-full h-64 rounded overflow-hidden border">
              <iframe
                title="Khartoum Map"
                src="https://www.google.com/maps?q=Khartoum&output=embed"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
