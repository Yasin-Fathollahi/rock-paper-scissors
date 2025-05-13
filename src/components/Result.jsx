import Choice from './Choice.jsx';
export default function Result() {
  return (
    <div className="flex justify-center items-center flex-auto gap-12">
      <div className="flex flex-col items-center gap-8">
        <p className="uppercase text-xl sm:text-2xl lg:text-3xl text-white font-semibold tracking-wider">
          you picked
        </p>
        <Choice type="scissors" />
      </div>
      <div className="flex flex-col items-center gap-8">
        <p className="uppercase text-xl sm:text-2xl lg:text-3xl text-white font-semibold tracking-wider">
          Computer picked
        </p>
        <Choice type="paper" />
      </div>
    </div>
  );
}
