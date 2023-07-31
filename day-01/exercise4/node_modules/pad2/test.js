'use strict';
const pad2 = require('./');

function testPad2(n) {
    console.log('Input: ' + JSON.stringify(n));
    console.log('Result: ' + JSON.stringify(pad2(n)));
    console.log('=============');
}

testPad2(0.0001);
testPad2(2.35);
testPad2(4);
testPad2(10);
testPad2(15);
testPad2(15.35);
testPad2('5');
testPad2('55');
testPad2('55.55');
testPad2({
    test: 3,
});
testPad2({
    test: 3,
    toString: function () {
        return this.test;
    },
});
testPad2(true);
testPad2(false);
testPad2(Number.NaN);
testPad2(Infinity);
