// 可以为 null 的类型
// TypeScript 具有两种特殊的类型，null 和 undefined，它们分别具有值 null 和 undefined
// let s = 'foo'
// s = null // 错误, 'null'不能赋值给'string'
// let sn: string | null = 'bar'
// sn = null // 可以
// sn = undefined // error, 'undefined'不能赋值给'string | null'
// 编译  tsc index4.ts --strictNullChecks
function f(x, y) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
f(1, null); // error, 'null' 不能赋值给 'number | undefined'
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var c = new C();
c.a = 12;
c.a = undefined; // error, 'undefined' 不能赋值给 'number'
c.b = 13;
c.b = undefined; // ok
c.b = null; // error, 'null' 不能赋值给 'number | undefined'
