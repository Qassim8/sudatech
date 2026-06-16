import { FiShield, FiClock, FiStar, FiTruck } from "react-icons/fi";
import MainTitle from "./MainTitle";

const features = [
  {
    id: 1,
    icon: <FiShield />,
    title: "معدات معتمدة",
    desc: "جميع الأجهزة أصلية، ومصدرها مباشرة من الموزعين المعتمدين مع ضمان كامل",
  },
  {
    id: 2,
    icon: <FiTruck />,
    title: "توصيل على مستوى الدولة",
    desc: "شحن مجاني في اليوم التالي للطلبات التي تزيد قيمتها عن 200 دولار، مع دعم التركيب في جميع أنحاء المنطقة",
  },
  {
    id: 3,
    icon: <FiClock />,
    title: "دعم فني على مدار الساعة",
    desc: "تحدث إلى مهندسي شبكات معتمدين في أي وقت - قبل البيع، أو أثناء التكوين، أو بعد البيع",
  },
  {
    id: 4,
    icon: <FiStar />,
    title: "أسعار تنافسية",
    desc: "نقدم أفضل الأسعار على معدات الشبكات عالية الجودة، مع خصومات خاصة للشركات والعملاء المتكررين",
  },
];

const WhyUs = () => {
  return (
    <section className="py-12">
      <div className="container">
        <MainTitle
          title="لماذا نحن"
          subtitle="ثقتنا وخبرتنا في كل منتج"
          description="نحن نقدم أفضل الخدمة والمنتجات في مجال الشبكات"
          pos="text-center"
          margin="mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          {features.map((f) => (
            <div
              key={f.id}
              className="flex flex-col gap-4 items-start p-6 bg-white rounded-2xl border border-slate-200"
            >
              <div className="p-3 rounded-lg bg-linear-to-bl from-(--main-color) to-(--gr-color) text-white text-2xl">
                {f.icon}
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900">
                  {f.title}
                </h4>
                <p className="text-sm text-(--text-color) mt-2">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
