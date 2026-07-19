export class AssetManager {
  static getAssetKey(theme: string, id: string) {
    return `${theme}_${id}`;
  }
}
