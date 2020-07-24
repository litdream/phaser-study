// Phaser 3 documents are here:
//    https://photonstorm.github.io/phaser3-docs/index.html

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
	preload: preload,
	create: create
    }
};

// Phaser.Game doc:  https://photonstorm.github.io/phaser3-docs/Phaser.Game.html
var game = new Phaser.Game(config)

function preload()
{
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.spritesheet('diamonds', 'assets/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
}

function create()
{
    var group = this.add.group( {
	key: 'diamonds',
	frame: [0,1,2,3,4],
	frameQuantity:20
    });

    // GridAlign doc:  https://photonstorm.github.io/phaser3-docs/Phaser.Actions.html#.GridAlign__anchor
    Phaser.Actions.GridAlign(group.getChildren(), {
	width: 10,
	height: 10,
	cellWidth: 32,
	cellHeight: 32,
	x:100,
	y:100
    });
}
