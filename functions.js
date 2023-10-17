function printStars(count) {
    console.log("*".repeat(count));
}

function sorting() {
    let words = ['Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George'];
    let sortType = function (a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }
    console.log(words.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }))
    console.log(words.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }))
    console.log(words.sort(sortType));

    let people = [
        { name: "Alice", age: 25, height: 170 },
        { name: "Bob", age: 30, height: 180 },
        { name: "Charlie", age: 28, height: 175 },
        { name: "David", age: 25, height: 165 },
        { name: "Alice", age: 15, height: 170 },
        { name: "alice", age: 25, height: 170 },
        { name: "Alice", age: 25, height: 175 },
        { name: "Eve", age: 27, height: 160 }
    ];
    let people2 = people.concat();

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

    let compareByCriteria2 = (a, b) =>
        // Сравняваме по име (лексикографски ред)
        a.name.localeCompare(b.name) ||
        // Ако имената са еднакви, сравняваме по възраст (възходящ ред)
        a.age - b.age ||
        // Ако възрастите са еднакви, сравняваме по ръст (низходящ ред)
        b.height - a.height;

    people2.sort(compareByCriteria2)
    console.log(people2)
}

// const compareNumbers = {
//     ascending: (a, b) => a - b;
//     descending: (a, b) => b - a;
//     };
//     /// сортиране с обект и функция

printStars("5")
sorting()

let blah = 0

const myArray = [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '1'],
    ['2', '3', '1', '4', '0'],
    ['9', '8', '5', '2', '4']]

const containsDuplicate = (array) => {
    for (const subArray of array) {
        const seen = new Set()
        console.log(subArray);
        for (const value of subArray) {
            console.log(value)
            console.log(seen)
            if (seen.has(value)) {
                return true;
            }
            seen.add(value)
        }
    }
    return false
}

console.log(containsDuplicate(myArray)) // true