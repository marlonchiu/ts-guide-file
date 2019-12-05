// interface ClockInterface{
//   currentTime: Date
//   setTime(d:Date)
// }

// class Clock implements ClockInterface{
//   currentTime: Date
//   constructor(h: number, m: number) {

//   }
//   setTime(d: Date) {
//     this.currentTime = d
//   }
// }

// 类静态部分与实例部分的区别
interface ClockInterface {
  tick():any
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('tick tick')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)
