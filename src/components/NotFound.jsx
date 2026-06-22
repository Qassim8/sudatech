import { Link } from "react-router"; // أو "react-router" حسب طريقة التوجيه عندك

const NotFound = () => {
  return (
    <div
      className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-6 relative overflow-hidden select-none"
      style={{ direction: "rtl" }}
    >
      {/* عناصر خلفية جمالية متوهجة ونبضية */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* المحتوى الرئيسي */}
      <div className="text-center max-w-xl z-10 flex flex-col items-center">
        {/* رقم 404 مع حركة قفز خفيفة ولمعان تدريجي */}
        <div
          className="text-[10rem] md:text-[12rem] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 font-sans leading-none drop-shadow-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          404
        </div>

        {/* النص التوضيحي الرئيسي */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100 mt-6 tracking-tight">
          عذراً، الصفحة غير موجودة!
        </h1>

        {/* نص فرعي للمستخدم */}
        <p className="text-slate-400 text-base md:text-lg mb-8 max-w-md leading-relaxed">
          يبدو أن الرابط الذي حاولت الوصول إليه مكسور، أو تم نقل الصفحة إلى مكان
          آخر. لا تقلق، يمكنك العودة دائماً.
        </p>

        {/* الأزرار التفاعلية */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* زر العودة للرئيسية */}
          <Link
            to="/"
            className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 font-medium rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
          >
            العودة للرئيسية
          </Link>

          {/* زر الرجوع للخلف في تاريخ المتصفح */}
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/50 hover:border-slate-600 font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 text-center"
          >
            الصفحة السابقة
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
