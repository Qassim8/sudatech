import { FiPhone, FiMail, FiClock } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const ContactBoxes = () => {
  const boxes = [
    {
      title: "العنوان",
      contact: "الخرطوم، السودان",
      desc: "شارع النيل، مبنى سوداتل الرئيسي",
      icon: <SlLocationPin />,
    },
    {
      title: "الهاتف",
      contact: "+249 183 777 100",
      icon: <FiPhone />,
    },
    {
      title: "البريد الإلكتروني",
      contact: "info@sudatel.com",
      icon: <FiMail />,
    },
    {
      title: "ساعات العمل",
      contact: "من الأحد إلى الخميس: 8 صباحًا - 5 مساءً",
      icon: <FiClock />,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {boxes.map((b, i) => (
        <div
          key={i}
          className="p-3 bg-white rounded-2xl flex gap-3 border border-slate-300"
        >
          <div className="text-(--gr-color) text-xl h-11 w-11 flex items-center justify-center bg-(--gr-color)/10 rounded-2xl">
            {b.icon}
          </div>
          <div>
            <h4 className="font-semibold text-(--text-color)">{b.title}</h4>
            <p className="text-(--text-color)">{b.desc}</p>
            <p className="mt-2 font-normal">{b.contact}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactBoxes;
