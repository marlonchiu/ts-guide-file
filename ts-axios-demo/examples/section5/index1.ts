// 函数类型

function add(x: number, y: number): number {
  return x + y
}

// let myAdd = function(x: number, y: number): number {
//   return x + y
// }

// 完整函数类型
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

// 类型推断
