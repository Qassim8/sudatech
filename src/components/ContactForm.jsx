const ContactForm = () => {
  return (
    <form className="space-y-4 bg-white p-6 rounded-2xl shadow">
      <div className="grid md:grid-cols-2 gap-4">
        <input placeholder="الاسم" className="p-3 border rounded" />
        <input placeholder="الايميل" className="p-3 border rounded" />
        <input placeholder="الهاتف" className="p-3 border rounded" />
        <input placeholder="الموضوع" className="p-3 border rounded" />
      </div>

      <textarea
        placeholder="رسالتك"
        className="w-full p-3 border rounded h-32"
      />

      <div className="flex items-center justify-between">
        <div className="text-(--text-color)">موقعنا: الخرطوم</div>
        <button className="py-2 px-4 bg-(--main-color) text-white rounded">
          أرسل
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
