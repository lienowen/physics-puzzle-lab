import { CityState } from '../data/types';

export class EconomySystem {
  static calculate(state: CityState, pricePerUnit: number) {
    const income = state.powerSupply * pricePerUnit;
    return {
      income,
      nextMoney: state.money + income
    };
  }
}
