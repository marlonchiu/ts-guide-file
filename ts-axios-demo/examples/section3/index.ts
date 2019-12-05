// 接口
// interface labelledValue {
//   label: string
// }

// function printLabel(labelledObj: labelledValue) {
//   console.log(labelledObj.label)
// }

// let myObj = { size: 10, label: 'Size 10 Object' }
// printLabel(myObj)

// 可选属性
interface Square {
  color: string
  area: number
}
interface SquareConfig {
  color?: string
  width?: number
  [propName:string]: any // 额外属性
}
function createSquare(config: SquareConfig): Square {
  let newSquare = { color: 'red', area: 100 }
  if (config.color) {
    // Error: 属性 'clor' 不存在于类型 'SquareConfig' 中
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
let mySquare = createSquare({ colour: 'black',width: 10 })

// 只读属性 readonly
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = { x: 10, y: 20 }
// p1.x = 30 // error

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12 // error!
ro.push(5) // error!
ro.length = 100 // error!
a = ro // error!

// 要修改只能使用类型断言
a = ro as number[]

// 额外属性
