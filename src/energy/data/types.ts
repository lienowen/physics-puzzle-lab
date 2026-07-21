export interface CityState {
  money: number;
  population: number;
  powerDemand: number;
  powerSupply: number;
  satisfaction: number;
  pollution: number;
}

export interface BuildingConfig {
  id: string;
  type: string;
  powerOutput: number;
  cost: number;
  pollution: number;
}
