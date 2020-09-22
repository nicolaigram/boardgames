const words = [
  "Wizard",
  "Noah",
  "Sign",
  "Hamburger",
  "Parrot",
  "Bicycle",
  "Tornado",
  "Virus",
  "Map",
  "Battle",
  "Battleship",
  "Snake",
  "Sticker",
  "Valentine",
  "Cloud",
  "Steam",
  "Beard",
  "Bunk",
  "Second",
  "Chain",
  "Werewolf",
  "Roll",
  "Powder",
  "Glacier",
  "Musketeer",
];

export enum CardState {
  default = "default",
  guessedNorth = "guessed north",
  guessedSouth = "guessed south",
  bystanderNorth = "bystander north",
  bystanderSouth = "bystander south",
}

export interface Card {
  word: string;
  state: CardState;
}

export const createCards = (): Card[] => {
  const cards = new Array(25)
    .fill({})
    .map((card, index) => ({ word: words[index], state: CardState.default }));
  return cards;
};

export const getNextCardState = (currentState: CardState) => {
  switch (currentState) {
    case CardState.default:
      return CardState.guessedNorth;

    case CardState.guessedNorth:
      return CardState.guessedSouth;

    case CardState.guessedSouth:
      return CardState.bystanderNorth;

    case CardState.bystanderNorth:
      return CardState.bystanderSouth;

    case CardState.bystanderSouth:
      return CardState.default;

    default:
      return CardState.default;
  }
};
