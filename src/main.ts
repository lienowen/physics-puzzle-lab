import Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'app',
  backgroundColor: '#111827',
  scene: {
    create() {
      this.add.text(300, 280, 'Physics Puzzle Lab', {
        fontSize: '32px'
      });
    }
  }
};

new Phaser.Game(config);
