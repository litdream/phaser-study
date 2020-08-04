var config = {
    width: 256,
    height: 272,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
	default: "arcade",   // very light physics out of different physics system in phaser3.
	arcade: {
	    debug: false
	}
    }
}

var game = new Phaser.Game(config);
