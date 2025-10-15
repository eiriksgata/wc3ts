import { bj_MAX_PLAYER_SLOTS } from "./globals/define";
import { MapPlayer } from "./handles/player";

export * from "./handles/index";
export * from "./system/index";
export * from "./utils/index";
export * from "./globals/index";

export const Players: MapPlayer[] = [];

for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
  const pl = MapPlayer.fromHandle(Player(i));
  if (pl) {
    Players[i] = pl;
  }
}
