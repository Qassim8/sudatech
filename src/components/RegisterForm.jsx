import { useState } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { registerProcess } = useAuth();

  const submit = (e) => {
    e.preventDefault();
    registerProcess.register({ username: name, email, password });
  };

  return (
    <div className="bg-white p-3 md:p-8 mt-10">
      <h3 className="text-2xl font-semibold mb-10">انشاء حساب جديد</h3>

      <form onSubmit={submit} className="space-y-4 w-full md:w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
          <div>
            <label className="block text-sm mb-1">الاسم الكامل</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="عصام احمد عامر......"
              className="w-full p-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">البريد الالكتروني</label>
            <input
              value={email}
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">رقم الهاتف</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+249-123456789"
              className="w-full p-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">كلمة السر</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="***************"
              className="w-full p-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="text-sm my-5">
          لديك حساب؟{" "}
          <Link to="/login" className="text-(--main-color) font-semibold">
            سجّل دخول
          </Link>
        </div>
        <button className={`main-btn py-3! w-full`}>
          {registerProcess.registerPending ? "جار الحفظ...." : "انشاء حساب"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
