// 高级技巧
// 1.构造函数
var GreetM = /** @class */ (function () {
    function GreetM(message) {
        this.greeting = message;
    }
    GreetM.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return GreetM.standardGreeting;
        }
    };
    GreetM.standardGreeting = 'Hello, there';
    return GreetM;
}());
var greetm;
greetm = new GreetM();
console.log(greetm.greet());
// 2.类当做接口使用
var greeterMaker = GreetM;
greeterMaker.standardGreeting = 'Hey there';
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
