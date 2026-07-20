import { GameEntity } from './GameEntity';

export class BlockEntity extends GameEntity {
  constructor(config: any) {
    super({
      ...config,
      type: 'block'
    });
  }

  update(params: any = {}) {
    this.params = {
      ...this.params,
      ...params
    };
  }
}
