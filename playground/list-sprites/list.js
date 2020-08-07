class ListSprite extends Phaser.Scene {
    constructor() {
	super("listSprite");
    }

    preload() {
	this.load.spritesheet("tileset", "nes-mario-bros-tileset.png", {
	    frameWidth: 16,
	    frameHeight: 16
	});
    }

    create() {
	
    }
}
