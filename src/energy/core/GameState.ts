export interface CityState {
  money: number;
  population: number;
  powerDemand: number;
  powerSupply: number;
  satisfaction: number;
  pollution: number;
}

export class GameState {
  private city: CityState;

  constructor(initial: CityState) {
    this.city = { ...initial };
  }

  getCity(): CityState {
    return { ...this.city };
  }

  updateCity(update: Partial<CityState>) {
    this.city = { ...this.city, ...update };
  }
}
