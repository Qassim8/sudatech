import { useState, useEffect } from "react";
import useOrders from "../hooks/useOrders";

const OrderConfirmModal = ({ isOpen, onClose, total, onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const { createOrder } = useOrders();

  const handleOrder = () => createOrder({ name, phone, address });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrder();
  };

  useEffect(() => {
    if (isOpen) {
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!name || !phone || !address) {
      setError("الرجاء تعبئة جميع الحقول");
      return;
    }

    const payload = { name, phone, address, total };
    onConfirm(payload);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">بيانات العميل</h3>
          <button onClick={onClose} className="text-2xl cursor-pointer">
            ×
          </button>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1">الاسم</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="الاسم الكامل"
              className="w-full border border-slate-300 p-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-1">الهاتف</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="09xxxxxxxx"
              className="w-full border border-slate-300 p-2 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block mb-1">العنوان</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="العنوان الكامل (الشارع، الحي، المدينة)"
              className="w-full border border-slate-300 p-2 rounded-lg resize-none"
              required
            />
          </div>

          {error && <div className="text-red-500">{error}</div>}

          <div className="pt-2 border-t border-t-slate-200">
            <div className="flex justify-between items-center mb-3">
              <div className="text-lg font-bold">المجموع الاجمالي</div>
              <div className="font-bold">${Number(total).toLocaleString()}</div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 py-3 bg-(--main-color) text-white rounded-2xl cursor-pointer hover:bg-(--main-color)/80 transition-colors duration-300"
              >
                تأكيد الطلب
              </button>
              <button
                onClick={onClose}
                className="py-3 px-4 border border-slate-300 rounded-2xl cursor-pointer transition-colors duration-300 hover:text-white hover:bg-red-500 hover:border-transparent"
              >
                إلغاء
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderConfirmModal;
