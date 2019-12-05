// 泛型类型
function identity<T>(arg: T): T {
  return arg
}

// 使用泛型变量
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

// 泛型类型
let myIdentityA: <T>(arg: T) => T = identity
// 等价于
let myIdentityB: { <T>(arg: T): T } = identity
// // 等价于
// interface GenericIdentityFn {
//   <T>(arg: T): T
// }
// let myIdentityC: GenericIdentityFn = identity
// 等价于(实现泛型接口)
interface GenericIdentityFn<T> {
  (arg: T): T
}
let myIdentityC: GenericIdentityFn<number> = identity
