import { GameEntity } from './GameEntity';

export class BallEntity extends GameEntity {
  constructor(config: any) {
    super({
      ...config,
      type: 'ball'
    });
  }

  update(params: any = {}) {
    this.params = {
      ...this.params,
      ...params
    };
  }
}
