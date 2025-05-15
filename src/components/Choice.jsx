import scissors from '../assets/images/icon-scissors.svg';
import paper from '../assets/images/icon-paper.svg';
import rock from '../assets/images/icon-rock.svg';
import lizard from '../assets/images/icon-lizard.svg';
import spock from '../assets/images/icon-spock.svg';

const CommonStyles = 'rounded-full flex items-center justify-center';

const buttonInnerDivClasses =
  'bg-stone-100 p-3 rounded-full w-3/4 h-3/4 inset-shadow-sm inset-shadow-stone-500';

const buttonInfo = {
  scissors: {
    gradient: 'bg-linear-[#ec9e0e,#eca922]',
    position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/3',
    path: scissors,
  },
  paper: {
    gradient: 'bg-linear-[#4865f4,#5671f5]',
    position: 'top-1/5 right-0 translate-x-1/4 lg:translate-y-0',
    path: paper,
  },
  rock: {
    gradient: 'bg-linear-[#dc2e4e,#dd405d]',
    position:
      'bottom-0 right-0 translate-y-1/3 md:-translate-x-1/4 lg:-translate-x-1/5',
    path: rock,
  },
  lizard: {
    gradient: 'bg-linear-[#834fe3,#8c5de5]',
    position:
      'bottom-0 left-0 translate-y-1/3 md:translate-x-1/4 lg:translate-x-1/5',
    path: lizard,
  },
  spock: {
    gradient: 'bg-linear-[#40b9ce,#52bed1]',
    position: 'top-1/5 left-0 -translate-x-1/4 lg:translate-y-0',
    path: spock,
  },
};

export default function Choice({ type, absolute, onSelectMove }) {
  const coditionedStyles = absolute
    ? `absolute w-15 h-15 sm:w-20 sm:h-20 lg:w-30 lg:h-30 cursor-pointer transition-all duration-300 hover:scale-110 ${buttonInfo[type].position}`
    : 'w-35 h-35 lg:w-50 lg:h-50';

  const btnClasses = `${CommonStyles} ${coditionedStyles} ${buttonInfo[type].gradient}`;
  const imgClasses = `w-full ${
    type === 'spock' ? 'p-0.5 pt-0 lg:p-2 lg:pt-0' : 'lg:p-2'
  } ${absolute ? '' : 'p-2 lg:p-5'}`;

  return (
    <button
      className={btnClasses}
      onClick={absolute && onSelectMove.bind(null, type)}
    >
      {/* <div className='translate-'></div> */}
      <div className={buttonInnerDivClasses}>
        <img className={imgClasses} src={buttonInfo[type].path} alt={type} />
      </div>
    </button>
  );
}
