function printStars(count) {
    console.log("*".repeat(count));
    }

function sorting(){
    let words = ['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'];
    let sortType = function(a, b) {
        if(a.length !== b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }
    console.log(words.sort((a,b) => {
        if(a.length !== b.length){
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }))
    console.log(words.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    }))
    console.log(words.sort(sortType));

    let people = [
        {name: "Alice", age: 25, height: 170},
        {name: "Bob", age: 30, height: 180},
        {name: "Charlie", age: 28, height: 175},
        {name: "David", age: 25, height: 165},
        {name: "Alice", age: 15, height: 170},
        {name: "alice", age: 25, height: 170},
        {name: "Alice", age: 25, height: 175},
        {name: "Eve", age: 27, height: 160}
        ];
        
        // Функция за сравнение по три критерия
        function compareByCriteria(a, b) {
        // Първо сравняваме по име (лексикографски ред)
        if (a.name < b.name) {
        return -1;
        }
        if (a.name > b.name) {
        return 1;
        }
        // Ако имената са еднакви, сравняваме по възраст (възходящ ред)
        if (a.age < b.age) {
        return -1;
        }
        if (a.age > b.age) {
        return 1;
        }
        // Ако възрастите са еднакви, сравняваме по ръст (низходящ ред)
        if (a.height > b.height) {
        return -1;
        }
        if (a.height < b.height) {
        return 1;
        }
        // Ако всички критерии са еднакви, връщаме нула
        return 0;
        }
        
        // Сортиране на масива по три критерия
        people.sort(compareByCriteria);
        
        // Отпечатване на резултата
        console.log(people);
}

printStars("5")
sorting()