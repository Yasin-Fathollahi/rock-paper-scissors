import { useState, useCallback } from 'react';
import Header from './components/Header.jsx';
import Choices from './components/Choices.jsx';
import Result from './components/Result.jsx';
import Modal from './components/Modal.jsx';
import Context from './store/Context.jsx';
export default function App() {
  const [playerMove, setPlayerMove] = useState('');
  const [score, setScore] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelectMove(type) {
    setPlayerMove(type);
  }

  const handleSetScore = useCallback(function (result) {
    setScore((prevScore) => {
      if (prevScore === 0 && result === -1) {
        return prevScore;
      } else {
        return prevScore + result;
      }
    });
  }, []);

  function handleRematch() {
    setPlayerMove('');
  }

  const handleShowModal = useCallback(function (modalState) {
    setIsOpen(modalState);
  }, []);

  const ctxValue = {
    onSelectMove: handleSelectMove,
    onRematch: handleRematch,
  };

  return (
    <main className="h-full flex flex-col p-4 sm:p-8">
      <div className="flex flex-col flex-auto w-full max-w-4xl mx-auto sm:gap-15 lg:gap-20">
        <Context value={ctxValue}>
          <Header score={score} />
          {playerMove === '' && <Choices />}
          {playerMove && (
            <Result
              playerMove={playerMove}
              onUpdateScore={handleSetScore}
              score={score}
            />
          )}
        </Context>
      </div>
      <div className="flex justify-center sm:justify-end">
        <button
          onClick={handleShowModal}
          className="text-white font-semibold uppercase border-[#606e85] border-2 rounded-lg py-2 px-8 cursor-pointer hover:border-white"
        >
          rules
        </button>
      </div>
      <Modal isOpen={isOpen} onSetIsOpen={handleShowModal} />
    </main>
  );
}
