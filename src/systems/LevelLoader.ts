import { ObjectFactory, GameObjectData } from './ObjectFactory';

export interface LevelData {
  id: string;
  objects: GameObjectData[];
}

export class LevelLoader {
  static load(level: LevelData) {
    return level.objects.map((objectData) => {
      return ObjectFactory.create(objectData);
    });
  }
}
