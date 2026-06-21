import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginProcess } = useAuth();

  const submit = (e) => {
    e.preventDefault();
    loginProcess.login({ identifier: email, password });
  };
  return (
    <div>
      <div className="bg-white p-3 md:p-8 mt-10">
        <h3 className="text-2xl font-semibold mb-10">تسجيل الدخول</h3>

        <form onSubmit={submit} className="space-y-4 md:max-w-2xl">
          <div className="flex flex-col gap-7">
            <div>
              <label className="block text-sm mb-1">البريد الالكتروني</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full p-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">كلمة السر</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="************"
                className="w-full p-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div className="text-sm my-5">
            لا تملك حساب؟{" "}
            <Link to="/register" className="text-(--main-color) font-semibold">
              أنشئ حساب
            </Link>
          </div>
          <button className="main-btn py-3! w-full">دخول</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
