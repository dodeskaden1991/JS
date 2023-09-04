//динамично вкарване на нещо в обект
function objTest(property,value){
    let test = {}
    for(let i in property){ // обхождаме индексите на първия масив
        let key = property[i]; // взимаме ключа от първия масив
        let currentValue = value[i]; // взимаме стойността от втория масив
        test[key] = currentValue; // присвояваме ги на обекта
        }
    console.log(test)
    console.log(Object.keys(test))
    console.log(Object.values(test))
    console.log(Object.entries(test))
    console.log(Object.assign(test))

    const person = {
        isHuman: false,
        printIntroduction: function() {
          console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
      };
      
      const me = Object.create(person);
      
      me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
      me.isHuman = true; // Inherited properties can be overwritten
      
      me.printIntroduction();
      // Expected output: "My name is Matthew. Am I human? true"


      //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. 
      const target = { a: 1, b: 2 };
      const source = { b: 4, c: 5 };
      
      const returnedTarget = Object.assign(target, source);
      
      console.log(target);
      // Expected output: Object { a: 1, b: 4, c: 5 }
      
      console.log(returnedTarget === target);
      // Expected output: true
      //For deep cloning, we need to use alternatives like structuredClone(), because Object.assign() copies property values. 
        const obj1 = { a: 0, b: { c: 0 } };
        const obj2 = Object.assign({}, obj1);
        obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }

//Object.defineProperty(o, "a", {
//     value: 37,
//     writable: true,
//     enumerable: true,
//     configurable: true,
//   });
// В твоя пример, ти дефинираш свойството "a" на обекта o със следните атрибути:

// •  value: 37 - това е стойността, асоциирана със свойството.

// •  writable: true - това означава, че стойността на свойството може да се променя с оператор за присвояване.

// •  enumerable: true - това означава, че свойството ще се появява при изброяването на свойствата на обекта (например с for...in или Object.keys()).

// •  configurable: true - това означава, че типът на свойството може да се променя между данни и аксесори, и че свойството може да бъде изтрито или другите атрибути на дескриптора могат да бъдат променени.

      console.log("================================");
      for(key of Object.keys(test)){
        console.log(`${key} - ${test[key]}`)
      }
      for([key, value] of Object.entries(test)){
        console.log(`${key} - ${value}`)
      }

      let jsonTest = {
        string : 'asdf',
        number : 123,
        arr : [1, "2"],
        sum : function(){return console.log(this.string, this.number)}
      }
      console.log(jsonTest)
      let a = JSON.stringify(jsonTest);
      let b = Object.assign({},jsonTest);
      console.log(a[0])
      console.log(a)
      let jsonTest2 = JSON.parse(a)
      console.log(jsonTest2)
      console.log(b)

      const adventurer = {
        name: 'Alice',
        cat: {
          name: 'Dinah'
        }
      };
      
      const dogName = adventurer.dog?.name  ?? "asd";
      console.log(dogName);
      // Expected output: undefined
      
      console.log(adventurer.someNonExistentMethod?.());
      // Expected output: undefined

      let mapTest = new Map();
      let mapTest2 = ["one 1", "two 2", "three 3", "four 4", "five 5"];
      for (let value of mapTest2){
        let [key, currentValue] = value.split(" ")
        if(mapTest.has(key)){console.log("Error")}
        else{ mapTest.set(key,currentValue)}
      }
      for(let [key,result] of mapTest.entries()){
        console.log(key, " -> ", result)
      }

      //обект се сортира, като се вземе стойност в променлива - подрежда се тя и все викат стойностите
      let sortObj = {
        1 : "One",
        2 : "Two",
        3 : "Three",
        4 : "Four",
        5 : "Five"
      }
      let sortedObj = Object.entries(sortObj).sort(([key1, value1], [key2 , value2]) => value1.localeCompare(value2))
      console.log(sortedObj)

      let newSet = new Set();
      newSet.add(5)
      newSet.add(6)
      newSet.add(5)
      newSet.add("aSD")
      newSet.add({"a" : 1})
      for(let i of newSet){
        console.log(i)
      }
      let testobj = {
        "softuni" : [12345,23456,12345],
        "aMSN" : [11111]
      }
      let sortObject = Object.entries(testobj);
      sortObject.sort((x,y) => x[0].localeCompare(y[0]))
      console.log(sortObject)
      for(xxx of sortObject){
        console.log(xxx[0])
        console.log(xxx[1])
        let set = new Set(xxx[1])
        console.log(set)
      }

}

objTest(['petur','ivan','hristo'],[15,25,27])