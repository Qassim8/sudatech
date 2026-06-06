import MainTitle from "./MainTitle";
import { BsQuote } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    text: "خدمة ممتازة ومنتجات عالية الجودة. أنصح بالتعامل معهم.",
    pos: "بنك النيل, قسم تكنولوجيا المعلومات",
  },
  {
    id: 2,
    name: "فاطمة علي",
    text: "وصل الطلب بسرعة والدعم الفني متعاون للغاية. سأعود للشراء مرة أخرى.",
    pos: "شركة الاتصالات, قسم الشبكات",
  },
  {
    id: 3,
    name: "خالد يوسف",
    text: "تعاون محترف وأسعار تنافسية، سنكرر الطلب بالتأكيد. ",
    pos: "مؤسسة التقنية الحديثة, مدير الشبكات",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <MainTitle
          title="آراء العملاء"
          subtitle="تجارب عملائنا معنا"
          description="نحن فخورون بثقة عملائنا الكرام، إليك بعض من آرائهم وتجاربهم معنا في تقديم أفضل خدمات ومعدات الشبكات."
          pos="center"
          margin="auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-5 md:p-10 rounded-2xl border border-slate-200 flex flex-col items-start gap-3"
            >
              <BsQuote className="text-(--gr-color) text-3xl" />
              <p className="text-slate-800">"{t.text}"</p>
              <div className="w-full mt-2 pt-4 flex items-center gap-2 border-t border-slate-300">
                <div className="w-10 h-10 rounded-full bg-linear-to-r from-(--main-color) to-(--gr-color) text-white flex items-center justify-center">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-(--text-color)">{t.pos}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
