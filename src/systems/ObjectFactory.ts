export interface GameObjectData {
  type: string;
  x: number;
  y: number;
  assetId?: string;
  params?: Record<string, any>;
}

export type ObjectCreator = (data: GameObjectData) => any;

export class ObjectFactory {
  private static registry: Record<string, ObjectCreator> = {};

  static register(type: string, creator: ObjectCreator) {
    this.registry[type] = creator;
  }

  static create(data: GameObjectData) {
    const creator = this.registry[data.type];

    if (!creator) {
      throw new Error(`Unknown object type: ${data.type}`);
    }

    return creator(data);
  }
}
