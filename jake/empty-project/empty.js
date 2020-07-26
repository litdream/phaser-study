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
	create: create,
	update: update
    }
};

// Phaser.Game doc:  https://photonstorm.github.io/phaser3-docs/Phaser.Game.html
var game = new Phaser.Game(config)

function preload()
{
}

function create()
{
}

function update()
{
}
