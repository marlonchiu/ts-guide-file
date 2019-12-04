function greeterB(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var userB = { firstName: 'Jane', lastName: 'Yee' };
console.log(greeterB(userB));
