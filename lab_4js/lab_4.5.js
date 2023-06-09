let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vova = { name: "Вова", age: 12 };
let people = [ vasya , masha , vova ];
function sort(a, b){
        return a.age - b.age;
    }
people.sort(sort);
console.log(people[0].name + ' ' + people[1].name + ' ' + people[2].name);
