export interface GameConfig {
  width: number;
  height: number;
  gravity: number;
}

export const defaultGameConfig: GameConfig = {
  width: 1280,
  height: 720,
  gravity: 1
};
