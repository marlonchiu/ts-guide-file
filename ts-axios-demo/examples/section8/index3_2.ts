// typeof 类型保护

function isNumber(x: any): x is number {
  return typeof x === 'number'
}
function isString(x: any): x is string {
  return typeof x === 'string'
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value
  } else if (isString(padding)) {
    return padding + value
  } else {
    throw new Error(`Expected string or number, got '${padding}'.`)
  }
}

padLeft('Hello world', 4) // returns "    Hello world"
console.log(padLeft('Hello world', 4))

// 这些 typeof 类型保护只有两种形式能被识别：typeof v === "typename" 和 typeof v !== "typename"，
// "typename"必须是 "number"， "string"，"boolean" 或 "symbol"。
// 但是 TypeScript 并不会阻止你与其它字符串比较，
// 只是 TypeScript 不会把那些表达式识别为类型保护
