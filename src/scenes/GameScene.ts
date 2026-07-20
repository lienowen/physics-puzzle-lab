import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor(){
    super('GameScene');
  }

  create(){
    this.add.text(40,40,'Physics Puzzle Lab');
  }
}
