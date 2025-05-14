const combinations = [
  ['scissors', 'paper'],
  ['scissors', 'lizard'],
  ['paper', 'rock'],
  ['paper', 'spock'],
  ['rock', 'lizard'],
  ['rock', 'scissors'],
  ['lizard', 'spock'],
  ['lizard', 'paper'],
  ['spock', 'scissors'],
  ['spock', 'rock'],
];

export default function checkResult(playerMove, computerMove) {
  if (playerMove === computerMove) return null;
  const isWinner = combinations.find((comb) => {
    return comb[0] === playerMove && comb[1] === computerMove;
  });

  return isWinner ? true : false;
}
