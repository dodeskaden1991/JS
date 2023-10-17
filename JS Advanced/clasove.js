// class Person {
//     constructor(firstName, lastName, age, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     }
//     toString(){
//         return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
//     }
// }


// let p = new Person("SoftUni");
// let str = p.toString();

// function f() {
//     class Person {
//         constructor(firstName, lastName, age, email) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.age = age;
//             this.email = email;
//         }
//         toString(){
//             return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
//         }
//     }
//     a = new Person("Anna","Simpson",22,"anna@yahoo.com");
//     b = new Person("SoftUni");
//     c = new Person("Stephan","Johnson",25);
//     d = new Person("Gabriel","Peterson",24,"g.p@gmail.com");
//     let arr = [];
//     function f2() {
//               arr.push(...arguments)        
//     }
//     f2(a);
//     f2(b);
//     f2(c);
//     f2(d);
//     return arr
//   }
//   let persons = f();
//   console.log(persons);

function forXristoz() {
    let arr = [];
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    function isJSON(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
    for (let i = 0; i < arguments.length; i++) {
        if (isJSON(arguments[i])) { arr.push(JSON.parse(arguments[i])) }
        if (typeof arguments[i] === "string") { f2(arguments[i].split(" ")) }
        if (typeof arguments[i] === "object") {
            if (Array.isArray(arguments[i])) { f2(arguments[i]) }
            else { arr.push(arguments[i]) }
        }
    }
    function f2(x) {
        y = new Person(...x);
        arr.push(y)
    }
    console.log(arr)
    return arr
}

forXristoz(
    ["Anna", "Simpson", 22, "anna@yahoo.com"],
    "Gabriel Peterson 24 g.p@gmail.com",
    { firstName: 'Stephan', lastName: 'Johnson', age: 25, email: undefined },
    { "firstName": "SoftUni", "age": 22 }
)