export enum CardState {
  default = "default",
  guessedGreen = "guessed spy green",
  guessedRed = "guessed spy red",
  guessedBlue = "guessed spy blue",
  guessedBystander = "guessed bystander",
  guessedAssasin = "guessed assasin",
  bystanderNorth = "bystander north",
  bystanderSouth = "bystander south",
  bystanderBoth = "bystander both",
}

export interface Card {
  word: string;
  state: CardState;
}

function shuffle(a: any[]) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export const createCards = (
  language: string,
  words: string[],
  data: string
): Card[] => {
  let selectedWords: any[];
  if (data) {
    selectedWords = JSON.parse(atob(data));
  } else {
    selectedWords = words;
  }
  console.log(selectedWords)
  if (selectedWords.length < 25) {alert("Less than 25 cards!!!"); return []}
  const shuffledWords = shuffle(selectedWords);
  console.log(shuffledWords)
  const cards = new Array(25).fill({}).map((card, index) => ({
    word: shuffledWords[index][language],
    state: CardState.default,
  }));
  return cards;
};

export const getNextCardState = {
  standard: (currentState: CardState) => {
    switch (currentState) {
      case CardState.default:
        return CardState.guessedBlue;

      case CardState.guessedBlue:
        return CardState.guessedRed;

      case CardState.guessedRed:
        return CardState.guessedBystander;

      case CardState.guessedBystander:
        return CardState.default;

      default:
        return CardState.default;
    }
  },
  duet: (currentState: CardState) => {
    switch (currentState) {
      case CardState.default:
        return CardState.guessedGreen;

      case CardState.guessedGreen:
        return CardState.bystanderNorth;

      case CardState.bystanderNorth:
        return CardState.bystanderSouth;

      case CardState.bystanderSouth:
        return CardState.bystanderBoth;

      case CardState.bystanderBoth:
        return CardState.default;

      default:
        return CardState.default;
    }
  },
};
