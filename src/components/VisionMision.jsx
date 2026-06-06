import { FiEye, FiTarget } from "react-icons/fi";

const VisionMision = () => {
  return (
    <section className="py-12">
      <div className="container grid md:grid-cols-2 gap-6">
        <div className="p-6 md:p-12 border border-slate-200 rounded-2xl flex flex-col gap-3">
          <div className="h-10 w-10 bg-linear-to-br from-(--main-color) to-(--gr-color) rounded-2xl flex justify-center items-center">
            <FiEye className="text-white text-lg" />
          </div>
          <h3 className="text-xl font-semibold">الرؤية</h3>
          <p className="text-(--text-color)">
            أن نكون الشريك الرقمي الأول في السودان ومزود حلول اتصالات موثوق به
            يدعم التحول الرقمي والابتكار.
          </p>
        </div>

        <div className="p-6 md:p-12 border border-slate-200 rounded-2xl flex flex-col gap-3">
          <div className="h-10 w-10 bg-linear-to-br from-(--main-color) to-(--gr-color) rounded-2xl flex justify-center items-center">
            <FiTarget className="text-white text-lg" />
          </div>
          <h3 className="text-xl font-semibold">الرسالة</h3>
          <p className="text-(--text-color)">
            تقديم حلول اتصال متقدمة، دعم فني محترف وخدمات مخصصة تساعد عملائنا
            على النمو والتطور بأعلى معايير الجودة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMision;
