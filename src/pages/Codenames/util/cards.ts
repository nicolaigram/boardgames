const words: any = {
  default: require("./data/default.json"),
  deep: require("./data/deep.json"),
};

export enum CardState {
  default = "default",
  guessedGreen = "guessed spy green",
  guessedRed = "guessed spy red",
  guessedBlue = "guessed spy blue",
  guessedBystander = "guessed bystander",
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

export const createCards = (language: string, version: string): Card[] => {
  const selectedWords = words[version];
  const shuffledWords = shuffle(selectedWords);
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
