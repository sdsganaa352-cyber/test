import React from 'react';
import { ArrowLeft, AlertTriangle, XCircle, Check, Info } from 'lucide-react';

interface ReviewScreenProps {
  onBack: () => void;
  onConfirm: () => void;
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({ onBack, onConfirm }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-slate-900 dark:text-white">Rà soát & Xác nhận dữ liệu</h1>
        <div className="w-10" />
      </header>

      <main className="flex-grow pb-28 px-4">
        <p className="text-slate-600 dark:text-slate-400 text-base mb-4 pt-2">
          Vui lòng xem lại các khoản mục dưới đây và xác nhận.
        </p>

        {/* Section: Needs Review */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Mục Cần Rà Soát</h2>
          
          <div className="space-y-4">
            {/* Warning Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border-l-4 border-amber-400 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-2 text-amber-500 font-medium mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="text-sm">Cảnh báo</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Chi phí tiếp khách</h3>
                <div className="mb-3">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Lý do: Vượt ngưỡng cho phép</p>
                  <p className="text-slate-900 dark:text-slate-100 font-medium mt-1">5.000.000 VND</p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-end">
                  <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary-dark transition-colors">
                    Giải trình thêm
                  </button>
                </div>
              </div>
            </div>

            {/* Error Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border-l-4 border-red-500 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center gap-2 text-red-600 font-medium mb-1">
                  <XCircle className="w-4 h-4" />
                  <span className="text-sm">Đề nghị loại bỏ</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Chi phí không hợp lệ</h3>
                <div className="mb-3">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Lý do: Dữ liệu không khớp</p>
                  <p className="text-slate-900 dark:text-slate-100 font-medium mt-1">1.250.000 VND</p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-2">
                  <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Giải trình
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors">
                    Đồng ý loại bỏ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Valid Items */}
        <section>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 pt-2">Mục Hợp Lệ</h2>
          <div className="space-y-3">
            {[
              { title: 'Chi phí văn phòng phẩm', amount: '750.000 VND' },
              { title: 'Tiền lương tháng 11', amount: '15.000.000 VND' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                    <p className="text-xs text-slate-500">Đã xác thực</p>
                  </div>
                </div>
                <p className="font-bold text-slate-900 dark:text-slate-100">{item.amount}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-t border-slate-200 dark:border-slate-800 z-20">
        <button 
          onClick={onConfirm}
          className="w-full h-12 rounded-xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark transition-colors"
        >
          Xác nhận & Tiếp tục
        </button>
      </footer>
    </div>
  );
};

export default ReviewScreen;