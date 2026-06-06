import { FiHeadphones, FiPhone, FiMail, FiBriefcase } from "react-icons/fi";

const ContactBoxes = () => {
  const boxes = [
    {
      title: "الدعم الفني",
      desc: "تكوين، استكشاف الأخطاء والمساعدة في الموقع.",
      contact: "+249 183 777 100",
      icon: <FiHeadphones />,
    },
    {
      title: "استفسارات المبيعات",
      desc: "عروض خاصة، طلبات بالجملة وتسعير المشاريع.",
      contact: "sales@sudatel.com",
      icon: <FiPhone />,
    },
    {
      title: "شراكات الشركات",
      desc: "اتفاقيات إطار، تصاريح شراكة وتسويق مشترك.",
      contact: "partners@sudatel.com",
      icon: <FiBriefcase />,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {boxes.map((b, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-2xl shadow flex flex-col gap-3"
        >
          <div className="text-(--main-color) text-2xl">{b.icon}</div>
          <h4 className="font-semibold">{b.title}</h4>
          <p className="text-(--text-color)">{b.desc}</p>
          <p className="mt-2 font-medium">{b.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactBoxes;
