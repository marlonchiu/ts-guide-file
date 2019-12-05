// 继承

// class Animal {
//   move(distance: number = 0) {
//     console.log(`Animal moved ${distance}m.`)
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log('Woof! Woof!')
//   }
// }

// const dog = new Dog()
// dog.bark()
// dog.move(10)

class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 5) {
    console.log('Slithering...')
    super.move(distance)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 5) {
    console.log('Galloping...')
    super.move(distance)
  }
}

let sam = new Snake('Sammy')
let tom:Animal = new Snake('Sammy')

sam.move()
tom.move(45)
