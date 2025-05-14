import pentagon from '../assets/images/bg-pentagon.svg';
import Choice from './Choice.jsx';

export default function Choices({ onSelectMove }) {
  return (
    <div className="flex justify-center items-center flex-auto">
      <div className="w-1/2 sm:w-2/5 relative">
        <img
          className="w-full"
          src={pentagon}
          alt="a pentagon behind the choices"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <Choice onSelectMove={onSelectMove} absolute type="scissors" />
          <Choice onSelectMove={onSelectMove} absolute type="paper" />
          <Choice onSelectMove={onSelectMove} absolute type="rock" />
          <Choice onSelectMove={onSelectMove} absolute type="lizard" />
          <Choice onSelectMove={onSelectMove} absolute type="spock" />
        </div>
      </div>
    </div>
  );
}
