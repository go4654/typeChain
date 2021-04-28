// const name ="sideway",
//     age=24,
//     gender="male";

// interface Human {
//     name:string;
//     age:number;
//     gender:string;
// }

class Human{
    public name:string;
    public age: number;
    public gender:string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// const person = {
//     name: "sideway",
//     age: 22,
//     gender: "male"
// }

const patiname = new Human("patiname",12,"female")

const sayHi = (person:Human): string => {
    return `hello ${person.name} you are ${person.age} your ${person.gender} `;
}

console.log(sayHi(patiname))

export {}
