export enum KeyState {
  BYSTANDER = "BYSTANDER",
  ASSASSIN = "ASSASSIN",
  SPY = "SPY",
  RED = "RED",
  BLUE = "BLUE",
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

const countKeyCards = (keyCard: KeyState[], type: string) => {
  let count = 0;
  keyCard.forEach((key: any) => {
    if (key === type) count++;
  });
  return count;
};

const randomPosition = () => Math.floor(Math.random() * 25) + 1;

const createRandomDuetKeys = () => {
  const [a, b] = [
    Array(25).fill(KeyState.BYSTANDER),
    Array(25).fill(KeyState.BYSTANDER),
  ];
  const settings = {
    counts: {
      spy: 9,
      spyOverlap: 3,
      bystander: 9,
      assasin: 3,
    },
  };
  /* KEYCARD A */
  // Create spies
  while (countKeyCards(a, KeyState.SPY) < settings.counts.spy) {
    const randomPos = randomPosition();
    if (a[randomPos] === KeyState.BYSTANDER) {
      a[randomPos] = KeyState.SPY;
    }
  }

  // Create assasins
  while (countKeyCards(a, KeyState.ASSASSIN) < settings.counts.assasin) {
    const randomPos = randomPosition();
    if (a[randomPos] === KeyState.BYSTANDER) {
      a[randomPos] = KeyState.ASSASSIN;
    }
  }

  /* KEYCARD B */
  // Create non-overlapping spies
  while (
    countKeyCards(b, KeyState.SPY) <
    settings.counts.spy - settings.counts.spyOverlap
  ) {
    const randomPos = randomPosition();
    if (
      b[randomPos] === KeyState.BYSTANDER &&
      a[randomPos] !== KeyState.SPY &&
      a[randomPos] !== KeyState.ASSASSIN
    ) {
      b[randomPos] = KeyState.SPY;
    }
  }

  // Create overlapping spies
  while (countKeyCards(b, KeyState.SPY) < settings.counts.spy) {
    const randomPos = randomPosition();
    if (
      b[randomPos] === KeyState.BYSTANDER &&
      a[randomPos] === KeyState.SPY &&
      a[randomPos] !== KeyState.ASSASSIN
    ) {
      b[randomPos] = KeyState.SPY;
    }
  }

  // Create assasins (non-overlapping)
  while (countKeyCards(b, KeyState.ASSASSIN) < settings.counts.assasin) {
    const randomPos = randomPosition();
    if (
      b[randomPos] === KeyState.BYSTANDER &&
      a[randomPos] !== KeyState.ASSASSIN &&
      a[randomPos] !== KeyState.SPY
    ) {
      b[randomPos] = KeyState.ASSASSIN;
    }
  }

  checkSpyOverlap(a, b);
  printKeyCard(a);
  printKeyCard(b);

  return [
    a,
    b.reverse(), // Player b sits on the opposite side of the table
  ];
};

const createRandomStandardKeys = () => {
  const [redCount, blueCount] = shuffle([8, 9]);
  const bystanderCount = 25 - 8 - 9 - 1; // 7
  const assasinCount = 1;
  const keys = [
    ...Array(redCount).fill(KeyState.RED),
    ...Array(blueCount).fill(KeyState.BLUE),
    ...Array(bystanderCount).fill(KeyState.BYSTANDER),
    ...Array(assasinCount).fill(KeyState.ASSASSIN),
  ];
  return shuffle(keys);
};

export const getKeys = (gameId: string, version: string): any => {
  if (version === "standard") {
    const keys = createRandomStandardKeys()
    let url = window.location.href + "/";
    url = url.split("/").slice(0, url.split("/").length - 5).join("/") + "/keycard/standard/"
    url += btoa(JSON.stringify(keys));
    return [keys, url];
    
  } else if (version === "duet") {
    const [a, b] = createRandomDuetKeys();
    let url = window.location.href + "/";
    url += btoa(JSON.stringify(b));
    return [a, url];
  } else {
    return null;
  }
};

// export const validateKeys = () => {
//   const keys = data["duet"];
//   Object.keys(keys).forEach((key) => {
//     const game = keys[key];
//     let spies = 0;
//     let bystanders = 0;
//     let assasins = 0;
//     game.forEach((cell: any) => {
//       switch (cell) {
//         case KeyState.SPY:
//           spies++;
//           break;
//         case KeyState.BYSTANDER:
//           bystanders++;
//           break;
//         case KeyState.ASSASSIN:
//           assasins++;
//           break;
//         default:
//           break;
//       }
//     });
//     if (spies === 9 && assasins === 3 && bystanders === 13) {
//       // Everything OK!
//     } else {
//       alert(`Error in game ${key}. Check console output.`);
//       console.log(`Game ${key} is invalid`);
//       console.log(`Spies: ${spies}`);
//       console.log(`Bystanders: ${bystanders}`);
//       console.log(`Assasins: ${assasins}\n`);
//     }
//   });
// };

const checkSpyOverlap = (a: any, b: any) => {
  a.forEach((key: KeyState, index: number) => {
    if (key === KeyState.ASSASSIN && b[index] === KeyState.SPY) {
      alert("Overlap");
      console.log(index + " Assasin on A while spy on B ");
    }
    if (key === KeyState.SPY && b[index] === KeyState.ASSASSIN) {
      alert("Overlap");
      console.log(index + " Assasin on B while spy on A");
    }
  });
};

const printKeyCard = (keys: KeyState[]) => {
  let temp = "";
  for (let i = 0; i < 25; i++) {
    if (i % 5 === 0) {
      console.log(temp);
      temp = "";
    }
    temp += KeyState[keys[i]].substr(0, 3) + "\t";
  }
  console.log(temp);
};

// const printCommonSpies = (a: KeyState[], b: KeyState[]) => {
//   let count = 0;
//   a.forEach((key) => {
//     if (key === KeyState.SPY) count++;
//   });
//   b.forEach((key, index) => {
//     if (key === KeyState.SPY && a[index] !== KeyState.SPY) {
//       count++;
//     }
//   });
//   console.log(count);
// };

// const printOverlappingSpies = (a: KeyState[], b: KeyState[]) => {
//   let count = 0;
//   a.forEach((key, index) => {
//     if (key === KeyState.SPY && b[index] === KeyState.SPY) count++;
//   });
//   console.log(count);
// };
