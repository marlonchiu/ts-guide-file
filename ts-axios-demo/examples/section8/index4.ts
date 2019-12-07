// 可以为 null 的类型
// TypeScript 具有两种特殊的类型，null 和 undefined，它们分别具有值 null 和 undefined

// let s = 'foo'
// s = null // 错误, 'null'不能赋值给'string'
// let sn: string | null = 'bar'
// sn = null // 可以

// sn = undefined // error, 'undefined'不能赋值给'string | null'

// 编译  tsc index4.ts --strictNullChecks
// function f(x: number, y?: number) {
//   return x + (y || 0)
// }
// f(1, 2)
// f(1)
// f(1, undefined)
// f(1, null) // error, 'null' 不能赋值给 'number | undefined'

// class C {
//   a: number
//   b?: number
// }
// let c = new C()
// c.a = 12
// c.a = undefined // error, 'undefined' 不能赋值给 'number'
// c.b = 13
// c.b = undefined // ok
// c.b = null // error, 'null' 不能赋值给 'number | undefined'

// 类型保护和类型断言
// 可以为 null 的类型能和其它类型定义为联合类型，那么你需要使用类型保护来去除 null
// 如果编译器不能够去除 null 或 undefined，你可以使用类型断言手动去除。语法是添加 ! 后缀： identifier!
// 从 identifier 的类型里去除了 null 和 undefined
function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '.  the ' + epithet // ok
  }
  name = name || 'Bob'
  return postfix('great')
}

broken(null)
