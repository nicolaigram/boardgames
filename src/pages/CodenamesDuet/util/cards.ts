const words: any = {
  standard: require("./data/standard.json"),
  deep: require("./data/deep.json"),
};

export enum CardState {
  default = "default",
  guessed = "guessed",
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

export const getNextCardState = (currentState: CardState) => {
  switch (currentState) {
    case CardState.default:
      return CardState.guessed;

    case CardState.guessed:
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
};
