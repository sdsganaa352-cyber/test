import React from 'react';
import { ArrowLeft, Download, FileText, MessageCircle } from 'lucide-react';

interface ResultScreenProps {
  onBack: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-background-light dark:bg-background-dark">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Kết quả & Báo cáo thuế</h2>
        <div className="w-10" />
      </div>

      <main className="flex flex-col flex-1 px-6 pt-10 items-center animate-fade-in-up">
        
        {/* Result Block */}
        <div className="flex flex-col items-center mb-12 w-full">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Tổng số thuế phải nộp</p>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3 text-center tracking-tight">
            50.000.000 VNĐ
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Cho kỳ tính thuế năm 2024</p>
        </div>

        {/* Actions */}
        <div className="w-full max-w-md space-y-4">
          <button className="flex items-center justify-center w-full h-14 bg-primary text-white rounded-xl font-bold text-base hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
            Xuất báo cáo PDF/Excel
          </button>
          
          <button className="flex items-center justify-center w-full h-14 bg-primary/10 text-primary rounded-xl font-bold text-base hover:bg-primary/20 transition-colors">
            Giải thích chi tiết
          </button>
          
          <button className="flex items-center justify-center w-full h-14 bg-transparent border border-transparent text-slate-700 dark:text-slate-300 rounded-xl font-bold text-base hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Tư vấn chuyên sâu
          </button>
        </div>
      </main>
    </div>
  );
};

export default ResultScreen;