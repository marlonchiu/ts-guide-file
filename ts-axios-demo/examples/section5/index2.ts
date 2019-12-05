// 可选参数和默认参数
// function buildName(firstName: string, lastName = 'Smith'): string {
//   return firstName + ' ' + lastName;
// }

// let result1 = buildName('Bob')                  // Error, 参数过少
// // let result2 = buildName('Bob', 'Adams', 'Sr.')  // Error, 参数过多
// let result3 = buildName('Bob', 'Adams');         // OK
// // 传入 undefined 值来获得默认值

// 剩余参数
function buildName(firstName: string, ...restOfName: string[]): string {
  return firstName + ' ' + restOfName.join(' ')
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName
let result2 = buildName('Bob', 'Adams', 'Sr.')
console.log(result2)
