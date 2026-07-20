export interface EntityConfig {
  id: string;
  type: string;
  x: number;
  y: number;
  assetId?: string;
  params?: Record<string, unknown>;
}

export abstract class GameEntity {
  public readonly id: string;
  public readonly type: string;
  public x: number;
  public y: number;
  public readonly assetId?: string;
  public readonly params: Record<string, unknown>;

  constructor(config: EntityConfig) {
    this.id = config.id;
    this.type = config.type;
    this.x = config.x;
    this.y = config.y;
    this.assetId = config.assetId;
    this.params = config.params ?? {};
  }

  abstract create(): void;
}
