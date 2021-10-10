// const str = `
// ┌─┐┬  ┬       ┌─┐┌─┐┌─┐┌┬┐┬ ┬┬─┐┌─┐┌─┐
// │  │  │  ───  ├┤ ├┤ ├─┤ │ │ │├┬┘├┤ └─┐
// └─┘┴─┘┴       └  └─┘┴ ┴ ┴ └─┘┴└─└─┘└─┘
// `;
//
// console.log(
//   str.replace('   ', '&emsp; ').replace('  ', '&ensp; ').replace(' ', '&nbsp; ')
// );
// 'use strict';
//
// const Questioner = require('./questioner/questioner');
//
// (async () => {
//   const { alternativeQuestion } = new Questioner({
//     input: process.stdin,
//     output: process.stdout,
//   });
//
//   const result = {};
//   console.clear();
//
//   const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//   console.log(numbers * 3);
//   result.colors = await alternativeQuestion(
//     'What is your favorite numbers?',
//     numbers,
//     { maxLength: 9, startWith: 2, isRounded: true }
//   );
//   result.colors = await alternativeQuestion(
//     'What is your favorite numbers?',
//     numbers,
//     { maxLength: 10, startWith: 2, isRounded: true }
//   );
//   result.colors = await alternativeQuestion(
//     'What is your favorite numbers?',
//     numbers,
//     { maxLength: 11, startWith: 2, isRounded: true }
//   );
//
//   console.log(result);
// })();
'use strict';
var CSI = '\x1b['; // Control Sequence Introducer
var _wrap = function (esc) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return CSI + args.join(';') + esc;
}; };
// movement
var _CUU = function (pos) { return _wrap('A')(pos); }; // Cursor Up
var _CUD = function (pos) { return _wrap('B')(pos); }; // Cursor Down
var _CUF = function (pos) { return _wrap('C')(pos); }; // Cursor Forward
var _CUB = function (pos) { return _wrap('D')(pos); }; // Cursor Back
var moveRelX = function (dx) {
    if (dx > 0)
        return _CUF(dx);
    if (dx < 0)
        return _CUB(Math.abs(dx));
    return '';
};
var moveRelY = function (dy) {
    if (dy > 0)
        return _CUU(dy);
    if (dy < 0)
        return _CUD(Math.abs(dy));
    return '';
};
var moveRel = function (dx, dy) { return moveRelX(dx) + moveRelY(dy); };
console.log(moveRel(5, null));
