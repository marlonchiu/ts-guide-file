// 高级类型 类型保护
interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet()
// 每一个成员访问都会报错
// 使用类型断言
if ((pet as Fish).swim) {
  (pet as Fish).swim()
} else if ((pet as Bird).fly) {
  (pet as Bird).fly()
}

// 用户自定义的类型保护
// 类型谓词
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

// pet is Fish 就是类型谓词。
// 谓词为 parameterName is Type 这种形式， parameterName 必须是来自于当前函数签名里的一个参数名。

// 每当使用一些变量调用 isFish 时，TypeScript 会将变量缩减为那个具体的类型
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}
