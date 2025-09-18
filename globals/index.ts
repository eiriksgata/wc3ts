import { MapPlayer } from "../handles/player";
import { bj_MAX_PLAYER_SLOTS } from "./define";

export * from "./order";
export const Players: MapPlayer[] = [];

for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
  const pl = MapPlayer.fromHandle(Player(i));
  if (pl) {
    Players[i] = pl;
  }
}
