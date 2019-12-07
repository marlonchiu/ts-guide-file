// instanceof 类型保护
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log('bird fly');
    };
    Bird.prototype.layEggs = function () {
        console.log('bird lay eggs');
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log('fish swim');
    };
    Fish.prototype.layEggs = function () {
        console.log('fish lay eggs');
    };
    return Fish;
}());
function getRandomPet() {
    return Math.random() > 0.5 ? new Bird() : new Fish();
}
var pet = getRandomPet();
if (pet instanceof Bird) {
    pet.fly();
}
if (pet instanceof Fish) {
    pet.swim();
}
