#!/bin/bash

root=${HOME}/github/phaser3/src/

rm -rf /tmp/rychung/phaser3-dep
mkdir -p /tmp/rychung/phaser3-dep
cd /tmp/rychung/phaser3-dep
for f in `find $root -type f`; do
    fn=`basename $f`
    grep 'require' $f >> $fn
done
    
