const words = [
  {
    en: "Christmas",
    da: "Jul",
  },
  {
    en: "Steam",
    da: "Damp",
  },
  {
    en: "Ear",
    da: "Øre",
  },
  {
    en: "Ant",
    da: "Myre",
  },
  {
    en: "Bacon",
    da: "Bacon",
  },
  {
    en: "Sherwood",
    da: "Birketræ", // TODO: Oversæt korrekt,
  },
  {
    en: "Shell",
    da: "Muslingeskal",
  },
  {
    en: "Cave",
    da: "Grotte",
  },
  {
    en: "Big Ben",
    da: "Big Ben",
  },
  {
    en: "Boss",
    da: "Boss",
  },
  {
    en: "Scroll",
    da: "Rulle", // TODO: Oversæt korrekt,
  },
  {
    en: "Valentine",
    da: "Valentin",
  },
  {
    en: "Wonderland",
    da: "Wonderland",
  },
  {
    en: "Ink",
    da: "Blæk",
  },
  {
    en: "Anchor",
    da: "Anker",
  },
  {
    en: "Beer",
    da: "Øl",
  },
  {
    en: "Step",
    da: "Trin",
  },
  {
    en: "Mother",
    da: "Mor",
  },
  {
    en: "Flood",
    da: "Oversvømmelse",
  },
  {
    en: "Salt",
    da: "Salt",
  },
  {
    en: "Boil",
    da: "At koge",
  },
  {
    en: "Country",
    da: "Land",
  },
  {
    en: "Sweat",
    da: "Sved",
  },
  {
    en: "Dust",
    da: "Støv",
  },
  {
    en: "Hercules",
    da: "Herkules",
  },
  {
    en: "Sled",
    da: "Kælk",
  },
  {
    en: "Musketeer",
    da: "Musketer",
  },
  {
    en: "Paddle",
    da: "Paddel",
  },
  {
    en: "Genie",
    da: "Ånd",
  },
  {
    en: "Virus",
    da: "Virus",
  },
  {
    en: "Curry",
    da: "Karry",
  },
  {
    en: "Texas",
    da: "Texas",
  },
  {
    en: "Mill",
    da: "Mølle",
  },
  {
    en: "University",
    da: "Universitet",
  },
  {
    en: "Ladder",
    da: "Stige",
  },
  {
    en: "Battle",
    da: "Kamp",
  },
  {
    en: "Meter",
    da: "Meter",
  },
  {
    en: "Spurs",
    da: "Sporer", // TODO: Oversæt korrekt
  },
  {
    en: "Minute",
    da: "Minut",
  },
  {
    en: "Gear",
    da: "Gear",
  },
  {
    en: "Cane",
    da: "Sukkerrør",
  },
  {
    en: "Coach",
    da: "Træner",
  },
  {
    en: "Farm",
    da: "Gård",
  },
  {
    en: "King Arthur",
    da: "Kong Arthur",
  },
  {
    en: "Potter",
    da: "Pottemager",
  },
  {
    en: "Cone",
    da: "Kegle",
  },
  {
    en: "Stethoscope",
    da: "Stetoskop",
  },
  {
    en: "Lightning",
    da: "Lyn",
  },
  {
    en: "Onion",
    da: "Løg",
  },
  {
    en: "Rice",
    da: "Ris",
  },
  {
    en: "Dressing",
    da: "Dressing",
  },
  {
    en: "Stamp",
    da: "Frimærke",
  },
  {
    en: "Collar",
    da: "Krave",
  },
  {
    en: "Baby",
    da: "Baby",
  },
  {
    en: "Squash",
    da: "Squash",
  },
  {
    en: "Scratch",
    da: "Kradse",
  },
  {
    en: "Potato",
    da: "Kartoffel",
  },
  {
    en: "Bee",
    da: "Bi",
  },
  {
    en: "Moses",
    da: "Moses",
  },
  {
    en: "Sticker",
    da: "Klistermærke",
  },
  {
    en: "Santa",
    da: "Julemanden",
  },
  {
    en: "Leather",
    da: "Læder",
  },
  {
    en: "Marathon",
    da: "Maraton",
  },
  {
    en: "Oasis",
    da: "Oase",
  },
  {
    en: "Door",
    da: "Dør",
  },
  {
    en: "Bench",
    da: "Bænk",
  },
  {
    en: "Polo",
    da: "Polo",
  },
  {
    en: "Volcano",
    da: "Vulkan",
  },
  {
    en: "Nerve",
    da: "Nerve",
  },
  {
    en: "Saddle",
    da: "Saddel",
  },
  {
    en: "Magician",
    da: "Tryllekunstner",
  },
  {
    en: "Glacier",
    da: "Glacier",
  },
  {
    en: "Coffee",
    da: "Kaffe",
  },
  {
    en: "Castle",
    da: "Borg",
  },
  {
    en: "Sail",
    da: "Sejl",
  },
  {
    en: "Leaf",
    da: "Blad",
  },
  {
    en: "Hair",
    da: "Hår",
  },
  {
    en: "Ash",
    da: "Aske",
  },
  {
    en: "Foam",
    da: "Skum",
  },
  {
    en: "Bath",
    da: "Bad",
  },
  {
    en: "Sleep",
    da: "Søvn",
  },
  {
    en: "Crystal",
    da: "Krystal",
  },
  {
    en: "Coast",
    da: "Kyst",
  },
  {
    en: "Kitchen",
    da: "Køkken",
  },
  {
    en: "Salsa",
    da: "Salsa",
  },
  {
    en: "Medic",
    da: "Militærlæge",
  },
  {
    en: "Mud",
    da: "Mudder",
  },
  {
    en: "Pepper",
    da: "Peber",
  },
  {
    en: "Captain",
    da: "Kaptajn",
  },
  {
    en: "Brother",
    da: "Bror",
  },
  {
    en: "Chip",
    da: "Computerchip",
  },
  {
    en: "Golf",
    da: "Golf",
  },
  {
    en: "Blade",
    da: "Klinge",
  },
  {
    en: "Paint",
    da: "Maling",
  },
  {
    en: "Silk",
    da: "Silke",
  },
  {
    en: "Halloween",
    da: "Halloween",
  },
  {
    en: "Pillow",
    da: "Pude",
  },
  {
    en: "Blind",
    da: "Blind",
  },
  {
    en: "Egg",
    da: "Æg",
  },
  {
    en: "Brazil",
    da: "Brasilien",
  },
  {
    en: "Groom",
    da: "Brudgom",
  },
  {
    en: "Clock",
    da: "Ur",
  },
  {
    en: "Wing",
    da: "Vinge",
  },
  {
    en: "Sand",
    da: "Sand",
  },
  {
    en: "Sahara",
    da: "Sahara",
  },
  {
    en: "Ram",
    da: "Vædder",
  },
  {
    en: "Rip",
    da: "Flå",
  },
  {
    en: "Tattoo",
    da: "Tattoo",
  },
  {
    en: "Street",
    da: "Gade",
  },
  {
    en: "Ranch",
    da: "Ranch", // TODO: Kan oversættes?
  },
  {
    en: "Storm",
    da: "Storm",
  },
  {
    en: "Fuel",
    da: "Brændstof",
  },
  {
    en: "Easter",
    da: "Påske",
  },
  {
    en: "Blues",
    da: "Blues",
  },
  {
    en: "Mona Lisa",
    da: "Mona Lisa",
  },
  {
    en: "Crab",
    da: "Krabbe",
  },
  {
    en: "Troll",
    da: "Trold",
  },
  {
    en: "Spray",
    da: "Spray",
  },
  {
    en: "Battleship",
    da: "Krigsskib",
  },
  {
    en: "Armor",
    da: "Rustning",
  },
  {
    en: "Notre Dame",
    da: "Notre Dame",
  },
  {
    en: "Jockey",
    da: "Jockey",
  },
  {
    en: "Waitress",
    da: "Tjenerinde",
  },
  {
    en: "Mountie",
    da: "Livgarder", // Erstattet med dansk version
  },
  {
    en: "Sheet",
    da: "Lagen",
  },
  {
    en: "Soap",
    da: "Sæbe",
  },
  {
    en: "Tiger",
    da: "Tiger",
  },
  {
    en: "Computer",
    da: "Computer",
  },
  {
    en: "Window",
    da: "Vindue",
  },
  {
    en: "Mummy",
    da: "Mumie",
  },
  {
    en: "Bread",
    da: "Brød",
  },
  {
    en: "Drawing",
    da: "Tegning",
  },
  {
    en: "Einstein",
    da: "Einstein",
  },
  {
    en: "Cheese",
    da: "Ost",
  },
  {
    en: "Thunder",
    da: "Torden",
  },
  {
    en: "Trick",
    da: "Trick",
  },
  {
    en: "Bowl",
    da: "Skål",
  },
  {
    en: "Brass",
    da: "Messing",
  },
  {
    en: "Pea",
    da: "Ært",
  },
  {
    en: "Pig",
    da: "Gris",
  },
  {
    en: "Miss",
    da: "Frue",
  },
  {
    en: "Greenhouse",
    da: "Drivhus",
  },
  {
    en: "Tip",
    da: "Drikkepenge",
  },
  {
    en: "Wood",
    da: "Tømmer",
  },
  {
    en: "Story",
    da: "Historie",
  },
  {
    en: "Wheel",
    da: "Hjul",
  },
  {
    en: "Sword",
    da: "Sværd",
  },
  {
    en: "Apron",
    da: "Forklæde",
  },
  {
    en: "Stable",
    da: "Stald",
  },
  {
    en: "Pacific",
    da: "Stillehavet",
  },
  {
    en: "Penny",
    da: "Øre (kr.)",
  },
  {
    en: "Black Hole",
    da: "Sort hul",
  },
  {
    en: "Jumper",
    da: "Springer",
  },
  {
    en: "Whistle",
    da: "Fløjte",
  },
  {
    en: "Fog",
    da: "Tåge",
  },
  {
    en: "Wish",
    da: "Ønske",
  },
  {
    en: "Earth",
    da: "Jorden",
  },
  {
    en: "Sun",
    da: "Sol",
  },
  {
    en: "Tin",
    da: "Tin",
  },
  {
    en: "Powder",
    da: "Pulver",
  },
  {
    en: "Popcorn",
    da: "Popcorn",
  },
  {
    en: "Eden",
    da: "Paradis",
  },
  {
    en: "Slipper",
    da: "Tøffel",
  },
  {
    en: "Columbus",
    da: "Columbus",
  },
  {
    en: "Pen",
    da: "Kuglepen",
  },
  {
    en: "Minotaur",
    da: "Minotaur",
  },
  {
    en: "Ski",
    da: "Ski",
  },
  {
    en: "Cuckoo",
    da: "Gøg",
  },
  {
    en: "Blizzard",
    da: "Snestorm",
  },
  {
    en: "Caesar",
    da: "Cæsar",
  },
  {
    en: "Cake",
    da: "Kage",
  },
  {
    en: "Frog",
    da: "Frø",
  },
  {
    en: "Sugar",
    da: "Sukker",
  },
  {
    en: "Cloud",
    da: "Sky",
  },
  {
    en: "Mosquito",
    da: "Myg",
  },
  {
    en: "Chalk",
    da: "Kalk",
  },
  {
    en: "Spirit",
    da: "Ånd",
  },
  {
    en: "Shoulder",
    da: "Skulder",
  },
  {
    en: "Bowler",
    da: "Bowlerhat",
  },
  {
    en: "Drum",
    da: "Tromme",
  },
  {
    en: "Buttefly",
    da: "Sommerfugl",
  },
  {
    en: "Sphinx",
    da: "Sphinx",
  },
  {
    en: "Manicure",
    da: "Manicure",
  },
  {
    en: "Patient",
    da: "Patient",
  },
  {
    en: "Astronaut",
    da: "Astranaut",
  },
  {
    en: "Igloo",
    da: "Iglo",
  },
  {
    en: "Balloon",
    da: "Ballon",
  },
  {
    en: "Snake",
    da: "Slange",
  },
  {
    en: "Hose",
    da: "Haveslange",
  },
  {
    en: "Beard",
    da: "Skæg",
  },
  {
    en: "Hamburger",
    da: "Burger",
  },
  {
    en: "Polish",
    da: "Polere",
  },
  {
    en: "Tea",
    da: "Te",
  },
  {
    en: "Makeup",
    da: "Makeup",
  },
  {
    en: "Delta",
    da: "Delta",
  },
  {
    en: "Werewolf",
    da: "Vareulv",
  },
  {
    en: "Pizza",
    da: "Pizza",
  },
  {
    en: "Dollar",
    da: "Dollar",
  },
  {
    en: "Book",
    da: "Bog",
  },
];

export enum CardState {
  default = "default",
  guessedNorth = "guessed north",
  guessedSouth = "guessed south",
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

export const createCards = (): Card[] => {
  const language = "da";
  const shuffledWords = shuffle([...words]);
  const cards = new Array(25).fill({}).map((card, index) => ({
    word: shuffledWords[index][language],
    state: CardState.default,
  }));
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
      return CardState.bystanderBoth;

    case CardState.bystanderBoth:
      return CardState.default;

    default:
      return CardState.default;
  }
};
