import Choice from './Choice.jsx';
export default function Result() {
  return (
    <div className="flex justify-center items-center flex-auto gap-12">
      {/* player */}
      <div className="flex flex-col items-center gap-8">
        <p className="uppercase text-xl sm:text-2xl lg:text-3xl text-white font-semibold tracking-wider">
          you picked
        </p>
        <Choice type="scissors" />
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="uppercase text-4xl text-white font-bold">you lose!</p>
        <button className="uppercase w-full py-2 bg-white rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-110">
          play again
        </button>
      </div>
      {/* computer */}
      <div className="flex flex-col items-center gap-8 ">
        <p className="uppercase text-xl sm:text-2xl lg:text-3xl text-white font-semibold tracking-wider self-start">
          Computer picked
        </p>
        <div className="bg-[#1415394e] rounded-full w-35 h-35 lg:w-40 lg:h-40 m-5"></div>

        {/* <Choice type="paper" /> */}
      </div>
    </div>
  );
}
