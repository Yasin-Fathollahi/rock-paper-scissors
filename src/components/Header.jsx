import logo from '../assets/images/logo-bonus.svg';

export default function Header({ score }) {
  return (
    <header className="flex justify-between p-4 border-2 border-solid border-[#606e85] rounded-xl mb-8">
      <div className="max-w-1/3">
        <img src={logo} alt="game logo" className="w-full" />
      </div>
      <div className="w-full max-w-32  flex flex-col text-center bg-white rounded-xl p-2">
        <span className="text-2xl font-semibold text-[#2a46c0] uppercase">
          score
        </span>
        <span className="text-6xl font-semibold text-[#3b4363]">{score}</span>
      </div>
    </header>
  );
}
