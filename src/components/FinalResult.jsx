import { useEffect, useState } from 'react';
export default function FinalResult({ result, onUpdateScore, onRematch }) {
  const [resultText, setResultText] = useState('');

  useEffect(() => {
    if (result === null) {
      setResultText('draw');
    } else if (result) {
      setResultText('you won');
      onUpdateScore(1);
    } else {
      setResultText('you lost');
      onUpdateScore(-1);
    }
  }, [onUpdateScore, result]);

  function handleRematch() {
    onRematch();
  }

  return (
    <div className={`flex flex-col items-center gap-4`}>
      <p className="uppercase text-2xl lg:text-4xl text-white font-bold">
        {resultText}!
      </p>
      <button
        onClick={handleRematch}
        className="uppercase w-full py-2 bg-white rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-110"
      >
        play again
      </button>
    </div>
  );
}
