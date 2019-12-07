// 字符串字面量类型
// 字符串字面量类型允许你指定字符串必须具有的确切值。
// 在实际应用中，字符串字面量类型可以与联合类型，类型保护很好的配合。
// 通过结合使用这些特性，你可以实现类似枚举类型的字符串
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === 'ease-in') {
            // ...
        }
        else if (easing === 'ease-out') {
            // ...
        }
        else if (easing === 'ease-in-out') {
            // ...
        }
        else {
            // error! 不能传入 null 或者 undefined.
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, 'ease-in');
button.animate(0, 0, 'uneasy'); // error
