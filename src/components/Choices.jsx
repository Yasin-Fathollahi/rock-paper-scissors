import pentagon from '../assets/images/bg-pentagon.svg';
import Choice from './Choice.jsx';

export default function Choices() {
  return (
    <div className="flex justify-center items-center flex-auto">
      <div className="w-1/2 sm:w-2/5 relative">
        <img
          className="w-full"
          src={pentagon}
          alt="a pentagon behind the choices"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <Choice absolute type="scissors" />
          <Choice absolute type="paper" />
          <Choice absolute type="rock" />
          <Choice absolute type="lizard" />
          <Choice absolute type="spock" />
        </div>
      </div>
    </div>
  );
}
