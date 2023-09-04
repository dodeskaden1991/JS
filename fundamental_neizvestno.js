function school(input){
    class Student{
        constructor(name,grade,score){
            this.name = name;
            this.grade = grade + 1;
            this.score = score;
        }
    }
    let students = [];
    let nexStudents = [];
    for(row of input){
        let name = row.split(", ")[0].split("Student name: ")[1];
        let grade = Number(row.split(", ")[1].split("Grade: ")[1]);
        let score = Number(row.split(", ")[2].split("Graduated with an average score: ")[1]);
        students.push(new Student(name, grade, score));        
    }
    students = students.filter((a) => (a.score >= 3) || (a.grade > 12))
        .sort((a, b) => a.grade - b.grade)
    let first = 0
    let i = -1;
    students.forEach((student) => {
        if(student.grade > first){
            nexStudents.push(student);
            first = student.grade;
            i ++;
        }else{
            nexStudents[i].name += `, ${student.name}`
            nexStudents[i].score += student.score;
        }
    });
    for(let student of nexStudents){
        console.log(`${student.grade} Grade
List of students: ${student.name}
Average annual score from last year: ${(student.score / student.name.split(", ").length).toFixed(2)}\n`);
    }
}

function one(){
    class Storage {
        constructor(capacity) {
            this.capacity = capacity
            this.storage = [];
            this.totalCost = 0;
        }
        addProduct(product) {
            this.storage.push(product);
            this.totalCost += product.price * product.quantity
            this.capacity -= product.quantity
        }
        getProducts(){
            let test = ""
            for(this.products of this.storage){
                test += JSON.stringify(this.products)
            }
            while(test.includes("}{")){test = test.replace("}{","}\n{")}
            return test
        }
    }

    let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);
}

function stringSubstring(word,text){
    if(text.toUpperCase().search(word.toUpperCase()) != -1){
        min = text.toUpperCase().indexOf(word.toUpperCase()) -1
        max = text.toUpperCase().indexOf(word.toUpperCase()) + word.length
        if((text[min] == undefined || text[min] == " ") && (text[max] == undefined || text[max] == " ")){
        console.log(word);
        return;
        }
    }
    console.log(`${word} not found!`)
}

stringSubstring('javascript',
'JavaScript2 is the best programming language');