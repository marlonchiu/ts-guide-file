// 定义接口
interface Person {
  firstName: string,
  lastName: string
}

function greeterB(person: Person): string {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let userB = { firstName: 'Jane', lastName: 'Yee' }

console.log(greeterB(userB))
