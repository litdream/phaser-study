# What is 'this' pointer?

In Phaser examples, we add images into 'this' pointer,  but what is this pointer?

1. Set breakpoint on any function with this.
2. reload the page, and inspect.

typeof this is 'object'.
I guess 'Phaser' library sets this methods dynamically.
( From kindle book, 'this' is 'Scene' class! 
  - preload() / create() are also Scene member.  Just don't know how main module 
    becomes Scene. )

Documentation:
  - https://photonstorm.github.io/phaser3-docs/Phaser.Scene.html

stepping into is hard with importing min.js.
For this case, import main source.
