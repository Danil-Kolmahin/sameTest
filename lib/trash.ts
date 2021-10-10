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

// 'use strict';
//
// const CSI = '\x1b['; // Control Sequence Introducer
//
// const _wrap = (esc: string) => (...args: Array<number>) =>
//   CSI + args.join(';') + esc;
//
// // movement
// const _CUU = (pos: number): string => _wrap('A')(pos); // Cursor Up
// const _CUD = (pos: number): string => _wrap('B')(pos); // Cursor Down
// const _CUF = (pos: number): string => _wrap('C')(pos); // Cursor Forward
// const _CUB = (pos: number): string => _wrap('D')(pos); // Cursor Back
//
// const moveRelX = (dx: number): string => {
//   if (dx > 0) return _CUF(dx);
//   if (dx < 0) return _CUB(Math.abs(dx));
//   return '';
// };
//
// const moveRelY = (dy: number): string => {
//   if (dy > 0) return _CUU(dy);
//   if (dy < 0) return _CUD(Math.abs(dy));
//   return '';
// };
//
// const moveRel = (dx: number, dy: number): string => moveRelX(dx) + moveRelY(dy);
//
// console.log(moveRel(5, null));
