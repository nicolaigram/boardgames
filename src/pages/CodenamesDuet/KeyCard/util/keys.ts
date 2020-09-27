import KeyCard from "..";
import { blue } from "../../util/colors";

export enum KeyState {
  BYSTANDER = "bystander",
  ASSASSIN = "assasin",
  SPY = "spy",
  RED = "red",
  BLUE = "blue",
}

const data: any = {
  duet: {
    "1a": [
      /* ROW 1 */
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,

      /* ROW 2 */
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,

      /* ROW 3 */
      KeyState.SPY,
      KeyState.SPY,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 4 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 5 */
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
    ],
    "1b": [
      /* ROW 1 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,
      KeyState.SPY,
      KeyState.SPY,

      /* ROW 2 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 3 */
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,

      /* ROW 4 */
      KeyState.SPY,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 5 */
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.ASSASSIN,
    ],
    "2a": [
      /* ROW 1 */
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,

      /* ROW 2 */
      KeyState.SPY,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,

      /* ROW 3 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,

      /* ROW 4 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.BYSTANDER,

      /* ROW 5 */
      KeyState.SPY,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,
    ],
    "2b": [
      /* ROW 1 */
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,

      /* ROW 2 */
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,

      /* ROW 3 */
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,

      /* ROW 4 */
      KeyState.SPY,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 5 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
    ],
    "3a": [
      /* ROW 1 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,

      /* ROW 2 */
      KeyState.ASSASSIN,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,

      /* ROW 3 */
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,

      /* ROW 4 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 5 */
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.SPY,
    ],
    "3b": [
      /* ROW 1 */
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,

      /* ROW 2 */
      KeyState.SPY,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,

      /* ROW 3 */
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.ASSASSIN,

      /* ROW 4 */
      KeyState.ASSASSIN,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,

      /* ROW 5 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
    ],
    "4a": [
      /* ROW 1 */
      KeyState.SPY,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 2 */
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 3 */
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.ASSASSIN,
      KeyState.SPY,

      /* ROW 4 */
      KeyState.SPY,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.SPY,

      /* ROW 5 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
    ],
    "4b": [
      /* ROW 1 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.SPY,

      /* ROW 2 */
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,

      /* ROW 3 */
      KeyState.SPY,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,

      /* ROW 4 */
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 5 */
      KeyState.ASSASSIN,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
    ],
    "5a": [
      /* ROW 1 */
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 2 */
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 3 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.SPY,

      /* ROW 4 */
      KeyState.ASSASSIN,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,

      /* ROW 5 */
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.SPY,
    ],
    "5b": [
      /* ROW 1 */
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,

      /* ROW 2 */
      KeyState.ASSASSIN,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,
      KeyState.SPY,

      /* ROW 3 */
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,

      /* ROW 4 */
      KeyState.BYSTANDER,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.BYSTANDER,
      KeyState.SPY,

      /* ROW 5 */
      KeyState.SPY,
      KeyState.SPY,
      KeyState.BYSTANDER,
      KeyState.ASSASSIN,
      KeyState.BYSTANDER,
    ],
  },
};

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

const createRandomStandardKeys = () => {
  const [redCount, blueCount] = shuffle([8, 9]);
  const bystanderCount = 25 - 8 - 9 - 1; // 7
  const assasinCount = 1;
  if (redCount > blueCount) {
    alert("Red goes first");
  } else {
    alert("Blue goes first");
  }
  const keys = [
    ...Array(redCount).fill(KeyState.RED),
    ...Array(blueCount).fill(KeyState.BLUE),
    ...Array(bystanderCount).fill(KeyState.BYSTANDER),
    ...Array(assasinCount).fill(KeyState.ASSASSIN),
  ];
  return shuffle(keys);
};

export const getKeys = (gameId: string, version: string) => {
  if (version === "standard") return createRandomStandardKeys();
  const keys = data[version];
  const chars = Array.from(gameId);
  let temp = "";
  let modifier = "";
  chars.forEach((c: any) => {
    if (!isNaN(c)) {
      temp += String(c);
    } else {
      modifier = c;
      return;
    }
  });
  const limit = Object.keys(keys).length / 2;
  let number = Number(temp) < limit ? Number(temp) : (Number(temp) % limit) + 1;
  let newModifier = modifier.charCodeAt(0) % 2 !== 0 ? "a" : "b";
  const newGameId = String(number) + newModifier;
  const key = keys[newGameId];
  if (newModifier === "b") {
    // Flip upside down
    return key.reverse();
  }
  return key;
};

export const validateKeys = () => {
  const keys = data["duet"];
  Object.keys(keys).forEach((key) => {
    const game = keys[key];
    let spies = 0;
    let bystanders = 0;
    let assasins = 0;
    game.forEach((cell: any) => {
      switch (cell) {
        case KeyState.SPY:
          spies++;
          break;
        case KeyState.BYSTANDER:
          bystanders++;
          break;
        case KeyState.ASSASSIN:
          assasins++;
          break;
        default:
          break;
      }
    });
    if (spies === 9 && assasins === 3 && bystanders === 13) {
      // Everything OK!
    } else {
      alert(`Error in game ${key}. Check console output.`);
      console.log(`Game ${key} is invalid`);
      console.log(`Spies: ${spies}`);
      console.log(`Bystanders: ${bystanders}`);
      console.log(`Assasins: ${assasins}\n`);
    }
  });
};
