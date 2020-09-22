export enum KeyState {
  BYSTANDER = "bystander",
  ASSASSIN = "assasin",
  SPY = "spy",
}

const keys: any = {
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
    KeyState.SPY,
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
};

export const getKeys = (gameId: string) => {
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
  let number = (Number(temp) % 3) + 1;
  let newModifier = modifier.charCodeAt(0) % 2 === 0 ? "a" : "b";
  const newGameId = String(number) + newModifier;
  return keys[newGameId];
};
