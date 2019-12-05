// 泛型约束
interface Lengthwise {
  length: number
}

// 给泛型函数定义约束
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length) // OK
  return arg
}

// loggingIdentity(3)  // Error
// T 是被接口约束着的
loggingIdentity({ length: 10, value: 3 }) // OK

// 在泛型约束中使用类型参数
// K 是被 T 中的 key 约束着的
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, 'a') // okay
getProperty(x, 'm') // error
