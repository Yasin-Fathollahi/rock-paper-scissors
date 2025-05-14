import { useEffect, useState, useRef } from 'react';
import Choice from './Choice.jsx';
import FinalResult from './FinalResult.jsx';
import checkResult from '../assets/check_winner.js';

const moves = ['scissors', 'paper', 'rock', 'lizard', 'spock'];
export default function Result({ playerMove, onUpdateScore, onRematch }) {
  const [result, setResult] = useState('');
  const computerMove = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      const computerMoveIndex = Math.floor(Math.random() * 5);
      computerMove.current = moves[computerMoveIndex];
      setResult(() => {
        return checkResult(playerMove, computerMove.current);
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [playerMove, onUpdateScore]);

  return (
    <div className="flex justify-center items-center flex-auto gap-12">
      <div className="flex flex-col items-center gap-8">
        <p className="uppercase text-lg sm:text-2xl lg:text-3xl text-white font-semibold tracking-wider">
          you picked
        </p>
        <Choice type={playerMove} />
      </div>
      {result !== '' ? (
        <FinalResult
          result={result}
          onUpdateScore={onUpdateScore}
          onRematch={onRematch}
        />
      ) : undefined}

      <div className="flex flex-col items-center gap-8">
        <p className="uppercase text-lg sm:text-2xl lg:text-3xl text-white font-semibold tracking-wider self-start">
          Computer picked
        </p>
        {computerMove.current ? (
          <Choice type={computerMove.current} />
        ) : (
          <div className="bg-[#1415394e] rounded-full w-35 h-35 lg:w-40 lg:h-40 lg:m-5"></div>
        )}
      </div>
    </div>
  );
}
