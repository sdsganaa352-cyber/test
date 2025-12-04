import React, { useState } from 'react';
import { AppScreen, TaxData, TaxpayerType } from './types';
import WelcomeScreen from './components/WelcomeScreen';
import InputScreen from './components/InputScreen';
import ReviewScreen from './components/ReviewScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.WELCOME);
  const [taxData, setTaxData] = useState<TaxData>({
    type: null,
    totalIncome: '',
    insurance: '',
    dependents: ''
  });

  const handleSelectType = (type: TaxpayerType) => {
    setTaxData(prev => ({ ...prev, type }));
    setCurrentScreen(AppScreen.INPUT);
  };

  const handleInputNext = (data: TaxData) => {
    setTaxData(data);
    setCurrentScreen(AppScreen.REVIEW);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.WELCOME:
        return <WelcomeScreen onSelectType={handleSelectType} />;
      case AppScreen.INPUT:
        return (
          <InputScreen 
            onBack={() => setCurrentScreen(AppScreen.WELCOME)}
            onNext={handleInputNext}
            initialData={taxData}
          />
        );
      case AppScreen.REVIEW:
        return (
          <ReviewScreen 
            onBack={() => setCurrentScreen(AppScreen.INPUT)}
            onConfirm={() => setCurrentScreen(AppScreen.RESULT)}
          />
        );
      case AppScreen.RESULT:
        return <ResultScreen onBack={() => setCurrentScreen(AppScreen.REVIEW)} />;
      default:
        return <WelcomeScreen onSelectType={handleSelectType} />;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen shadow-xl overflow-hidden relative sm:border-x sm:border-slate-200 dark:sm:border-slate-800">
      {renderScreen()}
    </div>
  );
};

export default App;