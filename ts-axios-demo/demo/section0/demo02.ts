// 定义接口
interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person):string {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "Yee" };

console.log(greeter(user))