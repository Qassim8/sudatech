import { TiWiFi } from "react-icons/ti";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <main className="min-h-screen md:flex">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: image / brand */}
        <div className="hidden md:block">
          <div
            className="relative h-full w-full max-w-md overflow-hidden flex items-center"
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
              <h2 className="text-3xl font-bold">مرحباً بكم في سوداشوب</h2>
              <p className="mt-4 text-slate-100">
                حلول الاتصالات والشبكات المتكاملة للشركات والمؤسسات.
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
