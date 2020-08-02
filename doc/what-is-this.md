# What is 'this' pointer?

In Phaser examples, we add images into 'this' pointer,  but what is this pointer?

1. Set breakpoint on any function with this.
2. reload the page, and inspect.

typeof this is 'object'.
I guess 'Phaser' library sets this methods dynamically.
( But, I don't know the answer, yet. )
( Maybe, it's related to config, we are passing. )

The list of methods:

add:
anims:
cache:
cameras:
children:
create:
data:
events:
game:
input:
lights:
load:
make:
plugins:
preload:
registry:
scale:
scene:
sound:
sys:
textures:
time:
tweens:

stepping into is hard with importing min.js.
For this case, import main source.
