// 继承接口
interface Shape {
  color: string
}
interface PenStroke {
  penWidth: number
}

// 一个接口可以继承多个接口，创建出多个接口的合成接口。
interface Square extends Shape, PenStroke {
  sideLength: 10
}

let square = {} as Square
square.color = 'red'
square.sideLength = 10
square.penWidth = 5.0
