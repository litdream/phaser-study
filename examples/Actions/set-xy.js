var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
	//create: create2
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('phaser', 'images/phaser2.png');
}

function create ()
{
    var group = this.add.group();

    //  Add an existing Image into the group:

    var image = this.add.image(0, 0, 'phaser');

    group.add(image);

    //  Any action done to the group is now reflected by the Image
    //  For example this will set the position of the image to 400 x 300

    Phaser.Actions.SetXY(group.getChildren(), 400, 300);
}


// If there is only one child, why are we using group?
// Can image directly shown?
//
// Result:  It doesn't.
//   It only shows the lower-right corner piece.
//   Then, why?
//     1. What does exactly group do?
//     2. Why image only shows partial?

function create2()
{
    var image = this.add.image(0,0,'phaser');
    Phaser.Actions.SetXY(image[0], 0,0);
}
