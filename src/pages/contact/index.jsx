import ContactHero from "../../components/ContactHero";
import ContactBoxes from "../../components/ContactBoxes";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <ContactHero />

      <div className="container">
        <section className=" py-12 grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ContactBoxes />
          </div>

          <div>
            <ContactForm />
          </div>
        </section>

        <div className="mt-6">
          <div className="mt-4 w-full h-84 rounded-2xl overflow-hidden border border-slate-300">
            <iframe
              title="Khartoum Map"
              src="https://www.google.com/maps?q=Khartoum&output=embed"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
