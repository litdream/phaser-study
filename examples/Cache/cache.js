// This does not create anything.
// Simply loading data from outside, and showing how to use it.
//
var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.json('jsonData', 'atlas/megaset-0.json');
}

function create() {
    console.log(this.cache.json.get('jsonData'));
}
