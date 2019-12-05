// 最佳通用类型
class Animal {
  numLegs: number
}

class Bee extends Animal {
}

class Lion extends Animal {
}

let zoo: Animal[] = [new Bee(), new Lion()]


// 上下文类型
window.onmousedown = function (mouseEvent: any) {
  console.log(mouseEvent.clickTime)  // OK
}
// 上下文类型会在很多情况下使用到。
// 通常包含函数的参数，赋值表达式的右边，类型断言，对象成员，数组字面量和返回值语句。
// 上下文类型也会做为最佳通用类型的候选类型

function createZoo(): Animal[] {
  return [new Bee(), new Lion()]
}

let zooB = createZoo()
