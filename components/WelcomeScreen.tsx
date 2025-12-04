import React from 'react';
import { TaxpayerType } from '../types';
import { Receipt, User, Briefcase, Store, ChevronRight } from 'lucide-react';

interface WelcomeScreenProps {
  onSelectType: (type: TaxpayerType) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onSelectType }) => {
  const options = [
    {
      id: TaxpayerType.INDIVIDUAL,
      title: 'Cá nhân',
      subtitle: 'Thuế thu nhập cá nhân',
      icon: <User className="w-6 h-6" />,
    },
    {
      id: TaxpayerType.BUSINESS,
      title: 'Doanh nghiệp',
      subtitle: 'Thuế TNDN, GTGT, và các loại khác',
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      id: TaxpayerType.HOUSEHOLD,
      title: 'Hộ kinh doanh',
      subtitle: 'Thuế khoán, thuế kê khai',
      icon: <Store className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex flex-col h-full min-h-screen p-6 pt-12 animate-fade-in">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 text-primary mb-6 shadow-sm">
          <Receipt className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-3 leading-tight">
          Chào mừng đến với BCK Tax Navigator
        </h1>
        <p className="text-center text-slate-500 dark:text-slate-400 text-base max-w-xs">
          Vui lòng chọn đối tượng tính thuế của bạn để bắt đầu.
        </p>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectType(option.id)}
            className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-200 group text-left shadow-sm"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:scale-105 transition-transform">
              {option.icon}
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                {option.title}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {option.subtitle}
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors" />
          </button>
        ))}
      </div>

      <div className="pt-8 pb-4 text-center">
        <button className="text-primary hover:text-primary-dark text-sm font-semibold underline decoration-2 underline-offset-4">
          Cần trợ giúp?
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;