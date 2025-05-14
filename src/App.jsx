import { useState } from 'react';
import Header from './components/Header.jsx';
import Choices from './components/Choices.jsx';
import Result from './components/Result.jsx';
export default function App() {
  const [activeTab, setActiveTab] = useState('choices');

  function handleSelectMove() {
    setActiveTab('result');
  }

  return (
    <main className="h-full flex flex-col p-4 sm:p-8">
      <div className="flex flex-col flex-auto w-full max-w-4xl mx-auto sm:gap-15 lg:gap-20">
        <Header />
        {activeTab === 'choices' && <Choices onSelectMove={handleSelectMove} />}
        {activeTab === 'result' && <Result />}
      </div>
      <div className="flex justify-center sm:justify-end">
        <button className="text-white font-semibold uppercase border-[#606e85] border-2 rounded-lg py-2 px-8 cursor-pointer hover:border-white">
          rules
        </button>
      </div>
    </main>
  );
}
