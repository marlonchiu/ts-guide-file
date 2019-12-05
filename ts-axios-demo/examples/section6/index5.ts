// 在泛型中使用类类型，通过泛型去构造工厂函数
function create<T>(c: { new(): T }): T {
  return new c()
}


class BeeKeeper {
  hasMask: boolean
}
class LionKeeper {
  nameTag: string
}
class Animal {
  numLength: number
}
class Bee extends Animal {
  keeper: BeeKeeper
}
class Lion extends Animal {
  keeper: LionKeeper
}

function createInstance<T extends Animal>(c: new () => T): T {
  return new c()
}

createInstance(Lion).keeper.nameTag
createInstance(Bee).keeper.hasMask
