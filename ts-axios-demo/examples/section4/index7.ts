// 抽象类
// abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法

// abstract class Animal {
//   abstract makeSound(): void
//   move(): void {
//     console.log('roaming the earth...')
//   }
// }

abstract class Department {
  name: string
  constructor(name: string) {
    this.name = name
  }
  printName(): void {
    console.log('Department name: ' + this.name)
  }
  abstract printMeeting(): void // 定义了签名 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }

  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}

let department: Department // 允许创建一个对抽象类型的引用
// department = new Department() // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
// department.generateReports() // 错误: 方法在声明的抽象类中不存在
