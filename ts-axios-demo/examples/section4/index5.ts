// 存取器

let password = 'secret password2'
class Employee {
  private _fullName: string

  get fullName(): string{
    return this._fullName
  }
  set fullName (newName: string){
    if (password && password === 'secret password') {
      this._fullName = newName
    } else {
      console.error('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}
