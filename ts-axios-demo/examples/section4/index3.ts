// 公共，私有与受保护的修饰符
// 默认为 public
class Animal {
  private name: string

  public constructor(name: string) {
    this.name = name
  }

  // public move(distance: number = 0) {
  //   console.log(`${this.name} moved ${distance}m.`)
  // }
}

// error TS2341: Property 'name' is private and only accessible within class 'Animal'.
// new Animal('Cat').name // 错误: 'name' 是私有的


// class Rhino extends Animal {
//   constructor() {
//     super('Rhino')
//   }
// }

// class Employee {
//   private name: string
//   constructor(name: string) {
//     this.name = name
//   }
// }

// let animal = new Animal('Goat')
// let rhino = new Rhino()
// let employee = new Employee('Bob')

// animal = rhino
// animal = employee // 错误: Animal 与 Employee 不兼容.

// 参数属性（简化书写  但不建议）
class Person {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}
// class Person {
//   constructor(readonly name: string) {
//   }
// }
let john = new Person('John')
console.log(john.name)
