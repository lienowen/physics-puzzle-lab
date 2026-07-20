import { GameEntity } from './GameEntity';

export class GoalEntity extends GameEntity {
  constructor(config: any) {
    super({
      ...config,
      type: 'goal'
    });
  }

  reached(target: any) {
    return !!target;
  }
}
