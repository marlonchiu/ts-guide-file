function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
function padLeft(value, padding) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value;
    }
    else if (isString(padding)) {
        return padding + value;
    }
    else {
        throw new Error("Expected string or number, got '" + padding + "'.");
    }
}
padLeft('Hello world', 4); // returns "    Hello world"
console.log(padLeft('Hello world', 4));
