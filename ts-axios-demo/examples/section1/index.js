"use strict";
// let name1 :string = 'Yee'
// let age1:number = 32
// let sentence1:string = `Hello, my name is ${name1}.
// I'll be ${age1 + 1} years old next month.`
// console.log(sentence1)
// 枚举
// enum Color {
//   Red = 1,
//   Green,
//   Blue  
// }
// let c: Color = Color.Green
// console.log(c)
// let colorName: string = Color[2]
// console.log(colorName)  // 显示'Green'因为上面代码里它的值是2
// any 任何类型
// let list: any[] = [1, true, 'fee']
// list[1] = 100
// void 没有类型
// function warnUser(): void {
//   console.log('This is my Warning message')
// }
// object 表示非原始类型，
// 也就是除 number，string，boolean，symbol，null或undefined 之外的类型
// declare function create(o: object | null): void
// create({prop: 0}) // OK
// create(null) // OK
// create(42) // Error
// create('string') // Error
// create(false) // Error
// create(undefined) // Error
// 类型断言
var someValue = 'this is a string';
var strLength = someValue.length;
// or
var strLength2 = someValue.length;
console.log(strLength, strLength2);
