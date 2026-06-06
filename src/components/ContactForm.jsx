import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  return (
    <form className="space-y-4 bg-white p-6 md:p-10 rounded-2xl border border-slate-300">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">أرسل لنا رسالة</h2>
        <p className="text-(--text-color)">
          لديك سؤال أو استفسار؟ املأ النموذج وسنعاود الاتصال بك.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="">
          <label
            className="block mb-1 font-medium text-(--text-color)"
            htmlFor="name"
          >
            الاسم
          </label>
          <input
            id="name"
            placeholder="الاسم الكامل"
            className="w-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-400 border border-slate-200 rounded-2xl"
          />
        </div>
        <div className="">
          <label
            className="block mb-1 font-medium text-(--text-color)"
            htmlFor="email"
          >
            البريد الإلكتروني
          </label>
          <input
            id="email"
            placeholder="الايميل"
            className="w-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-400 border border-slate-200 rounded-2xl"
          />
        </div>
        <div className="">
          <label
            className="block mb-1 font-medium text-(--text-color)"
            htmlFor="phone"
          >
            الهاتف
          </label>
          <input
            id="phone"
            placeholder="رقم الهاتف"
            className="w-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-400 border border-slate-200 rounded-2xl"
          />
        </div>
        <div className="">
          <label
            className="block mb-1 font-medium text-(--text-color)"
            htmlFor="subject"
          >
            الموضوع
          </label>
          <input
            id="subject"
            placeholder="الموضوع"
            className="w-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-400 border border-slate-200 rounded-2xl"
          />
        </div>
      </div>

      <div>
        <label
          className="block mb-1 font-medium text-(--text-color)"
          htmlFor="message"
        >
          الرسالة
        </label>
        <textarea
          id="message"
          placeholder="اكتب رسالتك هنا..."
          className="w-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-400 border border-slate-200 rounded-2xl h-32 resize-none"
        />
      </div>

      <button className="w-full py-3 px-4 bg-(--main-color) text-white rounded-2xl hover:bg-(--main-color)/90 cursor-pointer flex items-center justify-center gap-2">
        <span>ارسال الرسالة</span>
        <FiSend />
      </button>
    </form>
  );
};

export default ContactForm;
