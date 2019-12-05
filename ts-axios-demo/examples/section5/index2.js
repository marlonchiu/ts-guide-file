// 可选参数和默认参数
// function buildName(firstName: string, lastName = 'Smith'): string {
//   return firstName + ' ' + lastName;
// }
// let result1 = buildName('Bob')                  // Error, 参数过少
// // let result2 = buildName('Bob', 'Adams', 'Sr.')  // Error, 参数过多
// let result3 = buildName('Bob', 'Adams');         // OK
// // 传入 undefined 值来获得默认值
// 剩余参数
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var buildNameFun = buildName;
var result2 = buildName('Bob', 'Adams', 'Sr.');
console.log(result2);
