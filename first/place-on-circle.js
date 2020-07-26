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

var group;
var tween;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('http://labs.phaser.io');
    this.load.image('ball', 'assets/sprites/shinyball.png');
}

function create ()
{
    // https://photonstorm.github.io/phaser3-docs/Phaser.Geom.Circle.html
    var circle = new Phaser.Geom.Circle(400, 300, 260);

    group = this.add.group({ key: 'ball', frameQuantity: 32 });

    // https://photonstorm.github.io/phaser3-docs/Phaser.Actions.html#.PlaceOnCircle__anchor
    Phaser.Actions.PlaceOnCircle(group.getChildren(), circle);

    tween = this.tweens.addCounter({
        from: 260,
        to: 0,
        duration: 3000,
        delay: 2000,
        ease: 'Sine.easeInOut',
        repeat: -1,
        yoyo: true
    });
}

function update ()
{
    Phaser.Actions.RotateAroundDistance(group.getChildren(), { x: 400, y: 300 }, 0.02, tween.getValue());
}
