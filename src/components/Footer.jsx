import { Link } from "react-router";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { TiWiFi } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-(--color-background) border-t border-slate-200 mt-12">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="flex justify-center items-center text-white bg-linear-to-bl from-(--main-color) to-(--gr-color) h-9 w-9 rounded-2xl shadow-lg shadow-(--main-color)">
              <TiWiFi className="text-lg" />
            </div>
            <div>
              <h1 className="font-bold text-base md:text-xl text-slate-800 tracking-widest grow">
                سوداتك
              </h1>
              <p className="text-xs font-bold text-(--text-color) leading-tight">
                منتجات التقنية
              </p>
            </div>
          </div>
          <p className="text-sm text-(--text-color) pb-4">
            نحن ملتزمون بتقديم أفضل خدمات ومعدات الشبكات لعملائنا الكرام. سواء
            كنت تبحث عن حلول للشبكات المنزلية أو التجارية، فنحن هنا لمساعدتك في
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-300 hover:bg-slate-100 transition-colors duration-300">
              <FiFacebook className="text-(--text-color)" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-300 hover:bg-slate-100 transition-colors duration-300">
              <FiTwitter className="text-(--text-color)" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-300 hover:bg-slate-100 transition-colors duration-300">
              <FiInstagram className="text-(--text-color)" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-300 hover:bg-slate-100 transition-colors duration-300">
              <FiLinkedin className="text-(--text-color)" />
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-5">روابط</h5>
          <ul className="text-sm text-(--text-color) space-y-2">
            <li>
              <Link to="/" className="hover:text-(--gr-color)">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-(--gr-color)">
                المتجر
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-(--gr-color)">
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-5">المتجر</h5>
          <ul className="text-sm text-(--text-color) space-y-2">
            <li>
              <Link to="/shop/routers" className="hover:text-(--gr-color)">
                الراوترات
              </Link>
            </li>
            <li>
              <Link to="/shop/switches" className="hover:text-(--gr-color)">
                السويتشات
              </Link>
            </li>
            <li>
              <Link
                to="/shop/access-points"
                className="hover:text-(--gr-color)"
              >
                نقاط الوصول
              </Link>
            </li>
            <li>
              <Link to="/shop/cables" className="hover:text-(--gr-color)">
                الكابلات
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-5">تواصل</h5>
          <ul className=" text-sm text-(--text-color) space-y-2">
            <li className="flex items-center gap-2">
              <FiPhone className="text-(--gr-color)" /> +249 1X XXX XXXX
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-(--gr-color)" /> info@example.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-(--gr-color)" />
              الخرطوم - السودان
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-5 text-sm text-(--text-color)">
        © {new Date().getFullYear()} سوداتك. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
