import { CityState } from '../data/types';

export class PowerSystem {
  static calculate(state: CityState) {
    const ratio = state.powerSupply / Math.max(state.powerDemand, 1);

    return {
      supplyRatio: ratio,
      shortage: Math.max(state.powerDemand - state.powerSupply, 0),
      stable: ratio >= 1
    };
  }
}
