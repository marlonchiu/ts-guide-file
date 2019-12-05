// 高级技巧
// 1.构造函数
class GreetM {
  static standardGreeting = 'Hello, there'
  greeting: string
  constructor(message?: string) {
    this.greeting = message
  }
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return GreetM.standardGreeting
    }
  }
}

let greetm: GreetM
greetm = new GreetM()
console.log(greetm.greet())

let greeterMaker: typeof GreetM = GreetM
greeterMaker.standardGreeting = 'Hey there'

let greeter2: GreetM = new greeterMaker()
console.log(greeter2.greet())

// 2.类当做接口使用
class Point {  // 标准 还是使用接口 interface
  x: number
  y: number
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}
