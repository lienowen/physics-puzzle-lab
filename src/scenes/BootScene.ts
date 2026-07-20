import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor(){
    super('BootScene');
  }

  preload(){
    // Global assets will be loaded here later.
  }

  create(){
    this.scene.start('GameScene');
  }
}
