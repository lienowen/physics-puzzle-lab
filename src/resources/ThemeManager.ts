export class ThemeManager {
  private static currentTheme = "default";

  static setTheme(theme: string) {
    this.currentTheme = theme;
  }

  static getTheme() {
    return this.currentTheme;
  }
}
