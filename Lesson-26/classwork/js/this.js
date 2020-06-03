/**
 * 'This' in javascript refers to an object it belongs to
 * 
 * It has different values depending on where it is used:
    - In a method, this refers to the owner object.
    - Alone, this refers to the global object.
    - In a function, this refers to the global object.
    - In a function, in strict mode, this is undefined.
    - In an event, this refers to the element that received the event.
    - Methods like call(), and apply() can refer this to any object.
 */

 /** 1. Global object */

 function showMeThis() {
    console.log(arguments)
    console.log(this)
}


const fruit = {
    type: 'Banana'
}


const person = {
    name: 'John',
    lastName: 'Doe',
    showFullName: function() {
       console.log(`Person fullName: ${this.name} ${this.lastName}`)
    }
}

const person1 = {
   name: 'Mike',
   lastName: 'Doqe',
}
const person2 = {
   name: 'Joqhn',
   lastName: 'Smithg',
}

const person3 = {
    name: 'John',
    lastName: 'Snow',
 }

function showFullName() {
    return this.name + ' - ' + this.lastName
}

console.log(showFullName.call(person1))
console.log(showFullName.apply(person2))


let boundFunction = showFullName.bind(person3)
console.log(boundFunction());



function handleClick(callback) {
    console.log('User Clicked button', this);
    callback()
}



//

let user = {
    name: 'John',
    age: 30,
    sayHi() {
        alert(this.name);
    }
}

// user.sayHi();

let admin = user;

user = null;

// admin.sayHi();