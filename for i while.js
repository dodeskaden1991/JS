//i = i + 1 = i++ = i += 1, no i = i + 2 = i += 2
// "\n" - tova e nov red \t -tabilaciq
// return prekratqva cqlata funkciq

function cikul(){
    let a = 1;
    while (true){ //bezkraen cikul se prekusva s break
        if (a > 3){break;};
        console.log(a);
        a++;
    }
    console.log(Number.MAX_SAFE_INTEGER) //Nai golqmo sigurno chislo
    console.log(Number.MIN_SAFE_INTEGER) //Nai Malko sigurno chislo
    
    let i = 0;
    let b = 0;
    let abc = "";
    let abcMasiv = [];
    while (i < 10){
        if (i % 2 === 0){
            i++;
            continue; //preskacha vsichko i vliza pak v while
        }
        abcMasiv[b] = i;
        abc += i;
        i++;
        b++;
    }
    console.log(abc);
    console.log(...abcMasiv);

    class Dog {
        constructor(name, breed, color, sex) {
          this.name = name;
          this.breed = breed;
          this.color = color;
          this.sex = sex;
        }
        toString() {
          return `Dog ${this.name} is a ${this.sex} ${this.color} ${this.breed}`;
        }
      }
      const theDog = new Dog("Gabby", "Lab", "chocolate", "female");

      console.log(`${theDog}`); 
}

function studentGild(input){
  let a = [...input]
  let i = 1
  let level = 1;
  let average = 0;
  let errors = 0;
  while(i < a.length){
    if(a[i] >= 4){level++; average += Number(a[i]);}else{errors++}
    if(errors == 2){console.log(`${a[0]} has benn exicuted at ${level} class`); return}
    i++
  }
  console.log(`${a[0]} gradua... Average grade ${(average/level).toFixed(2)}`)
}

studentGild(["Pesho","5","6","5",3,3,6,5,6,5,6,4,5,4,4])
cikul();