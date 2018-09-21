class FullName{
    constructor(fname,lname){
        this.fname = fname;
         this.lname = lname;
    }
    myName(){
        return `My name is ${this.fname} ${this.lname}`;
    };
}

let name1 = new FullName('anuj','Thapa');
console.log(name1.myName());
let name2 = new FullName('Anita','Thapa');
console.log(name2);

console.log(name1);
