import { TiWiFi } from "react-icons/ti";

import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <main className="min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: image / brand */}
        <div className="hidden md:block h-screen">
          <div
            className="relative w-full h-full overflow-hidden flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg,var(--main-color),var(--gr-color))",
            }}
          >
            <div className="absolute inset-0 opacity-20 bg-[url('/filter.jpeg')] bg-cover bg-center mix-blend-overlay" />
            <div className="z-10 text-center text-white p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center text-white text-2xl">
                  <TiWiFi />
                </div>
              </div>
              <h2 className="text-3xl font-bold">انضم إلى سوداشوب</h2>
              <p className="mt-4 text-slate-100">
                سجّل حساباً للوصول إلى العروض وخيارات الشراء الخاصة.
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
