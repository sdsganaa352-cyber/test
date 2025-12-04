import React, { useState } from 'react';
import { InputTab, TaxData } from '../types';
import { ArrowLeft, Upload, FileDown, Mic, Send } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface InputScreenProps {
  onBack: () => void;
  onNext: (data: TaxData) => void;
  initialData: TaxData;
}

const InputScreen: React.FC<InputScreenProps> = ({ onBack, onNext, initialData }) => {
  const [activeTab, setActiveTab] = useState<InputTab>(InputTab.FORM);
  const [formData, setFormData] = useState<TaxData>(initialData);
  const [chatInput, setChatInput] = useState("");

  const handleChange = (field: keyof TaxData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Basic Gemini chat implementation placeholder
  const handleChatSend = async () => {
    if (!chatInput.trim()) return;
    
    // In a real app, this would call the Gemini API
    // const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: chatInput });
    
    console.log("Sending to Gemini:", chatInput);
    setChatInput(""); 
    // Logic to display chat would go here
  };

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 bg-background-light dark:bg-background-dark z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Nhập liệu dữ liệu thuế</h2>
        <div className="w-10" />
      </div>

      {/* Tabs */}
      <div className="px-4 bg-background-light dark:bg-background-dark z-10 shadow-sm">
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab(InputTab.CHAT)}
            className={`flex-1 py-4 text-sm font-bold border-b-[3px] transition-colors ${
              activeTab === InputTab.CHAT
                ? 'border-primary text-slate-900 dark:text-white'
                : 'border-transparent text-slate-500 dark:text-slate-400'
            }`}
          >
            Chat/Voice
          </button>
          <button
            onClick={() => setActiveTab(InputTab.FORM)}
            className={`flex-1 py-4 text-sm font-bold border-b-[3px] transition-colors ${
              activeTab === InputTab.FORM
                ? 'border-primary text-slate-900 dark:text-white'
                : 'border-transparent text-slate-500 dark:text-slate-400'
            }`}
          >
            Form/Upload file
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {activeTab === InputTab.FORM ? (
          <div className="p-4 flex flex-col gap-6 pb-24">
            {/* Form Section */}
            <section>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Thông tin Thu nhập</h3>
              <div className="space-y-4">
                <label className="block">
                  <span className="block text-base font-medium text-slate-900 dark:text-slate-200 mb-2">Tổng thu nhập (VND)</span>
                  <input
                    type="text"
                    value={formData.totalIncome}
                    onChange={(e) => handleChange('totalIncome', e.target.value)}
                    placeholder="Nhập tổng thu nhập của bạn"
                    className="w-full h-14 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400"
                  />
                </label>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Các khoản giảm trừ</h3>
              <div className="space-y-4">
                <label className="block">
                  <span className="block text-base font-medium text-slate-900 dark:text-slate-200 mb-2">Bảo hiểm bắt buộc (VND)</span>
                  <input
                    type="text"
                    value={formData.insurance}
                    onChange={(e) => handleChange('insurance', e.target.value)}
                    placeholder="Nhập số tiền bảo hiểm"
                    className="w-full h-14 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400"
                  />
                </label>
                <label className="block">
                  <span className="block text-base font-medium text-slate-900 dark:text-slate-200 mb-2">Số người phụ thuộc</span>
                  <input
                    type="number"
                    value={formData.dependents}
                    onChange={(e) => handleChange('dependents', e.target.value)}
                    placeholder="Nhập số người phụ thuộc"
                    className="w-full h-14 px-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-primary focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400"
                  />
                </label>
              </div>
            </section>

            {/* Upload Section */}
            <div className="mt-2 flex flex-col gap-4">
              <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400">
                Hoặc, upload file Excel chứa dữ liệu của bạn.
              </p>
              
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-base font-semibold text-slate-900 dark:text-white">Chọn file để upload</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Hỗ trợ file .XLSX, .XLS</p>
              </div>

              <button className="flex w-full items-center justify-center gap-2 h-12 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary/20 transition-colors">
                <FileDown className="w-5 h-5" />
                <span>Tải file mẫu Excel</span>
              </button>
            </div>
          </div>
        ) : (
          // Chat View (Placeholder/Simulation)
          <div className="flex flex-col h-full items-center justify-center text-center p-8 opacity-70">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
               <Mic className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Trợ lý ảo AI</h3>
            <p className="text-slate-500 mb-8">Hãy nói hoặc chat về thu nhập của bạn để tôi tự động điền vào biểu mẫu.</p>
            
            <div className="absolute bottom-24 left-4 right-4 flex gap-2">
                <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ví dụ: Lương tháng này của tôi là 20 triệu..."
                    className="flex-1 h-12 px-4 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:border-primary focus:ring-0"
                />
                <button onClick={handleChatSend} className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                    <Send className="w-5 h-5" />
                </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Button */}
      {activeTab === InputTab.FORM && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
          <button
            onClick={() => onNext(formData)}
            className="w-full h-12 rounded-xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark transition-colors"
          >
            Tính toán thuế
          </button>
        </div>
      )}
    </div>
  );
};

export default InputScreen;