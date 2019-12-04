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

let defaults = { food: 'spicy', price: '$10', ambiance: 'noisy' }
let search = { food: 'rich', ...defaults }
console.log(search)
