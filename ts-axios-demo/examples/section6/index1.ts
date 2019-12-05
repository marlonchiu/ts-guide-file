// 泛型函数

// 使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity<T>(arg: T): T {
  return arg
}

let output1 = identity<string>('myString')
let output3 = identity<number>(234)

// 利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定 T 的类型：

let output2 = identity('myString')
console.log(output1, output2, output3)
