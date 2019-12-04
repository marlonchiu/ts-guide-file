// function sumMatrix(matrix: number[][]) {
//   let sum = 0
//   for (let i = 0; i < matrix.length; i++) {
//     let currentRow = matrix[i]
//     for (let j = 0; j < currentRow.length; j++) {
//       sum += currentRow[j]
//     }
//   }
//   return sum
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6]
// ]
// console.log(sumMatrix(matrix))
// for (let i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 100 * i)
// }
// let input: [number, number] = [1, 2]
// function f([first, second]: [number, number]) {
//   console.log(first)
//   console.log(second)
// }
// f(input)
// let first = [1, 2]
// let second = [3, 4]
// let bothPlus = [0, ...first, ...second, 5]
// console.log(bothPlus)
var defaults = { food: 'spicy', price: '$10', ambiance: 'noisy' };
var search = __assign({ food: 'rich' }, defaults);
console.log(search);
