// console.log("Im out")

// in terminal tsc out.ts -w == nodemon ts.out in package.json

// types

var stringDataImplicit = "hello";  // implicit mode of asign a data type to the var/let/const

var stringDataExplicitAndDeclaration: string = "declaration";  // implicit mode of asign a data type to the var/let/const and declare it

var numberData: number = 14;

var booleanData: boolean = true;

var declaration:any = "first time: string";  // the data type any let me changue the value of the var post first declaration
declaration = "post first time: number/boolean o whatever";

// arrays

var stringArray:string[] = ["dec1", "dec2", "dec3"];
var numberArray:number[] = [1, 2, 3, 4];
var booleanArray:boolean[] = [true, false];
var anyArray:any[] = ["dec1", true, 2, [], {}];

// tuple ---> array with defined structure

var stringAndNumberTuple: [string, number];
stringAndNumberTuple = ["quintero", 10];
stringAndNumberTuple = ["barco", 21, "perez", 24];

// void, undefined, null

let voidData:void = undefined;
let nullData:null = null;
let undefinedData:undefined = undefined;

// functions

function sumFunction(num0, num1):number { // :number ----> this function must return a number
    return num0 + num1;
};

let randomFunction = function(
    param0: string | number, 
    param1: string | number):number {
    if(typeof(param0) === 'string'){
        param0 = parseInt(param0) 
    };
    if(typeof(param1) === 'string'){
        param1 = parseInt(param1) 
    };
    return param0 + param1;
};

function presentation = (
    name:string, 
    surname?:string):string => { // the ? in surname means that the parameter is optional
        if(surname === undefined) {
            return `Hello, im ${name}`
        }
    return `Hi! My name is ${name} ${surname}`
}

// interfaces

interface IToDo { // i defined the interface and send to the parameter of the function and the structure of the variable
    title: string,
    text: string
}
function showToDo(todo: IToDo) { // defined interface in the parameter
    console.log(`${todo.title} - ${todo.text}`)
}

let myToDo: IToDo = { // defined interface for the variable
    title: 'star wars',
    text: 'the last jedi'
}

showToDo(myToDo)

// classes

class UserClass {
    // i defined the type of data what the class accepts in they propiertys
    name: string;
    private birth: number; // private ----> i can required the property ONLY in the class
    public email: string; // public ----> i can required the property   
    protected age: number; // protected -----> i cant required the property

    constructor(
        name: string, 
        age:number, 
        email:string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    register() {
        console.log(`${this.name} is registred!`)
    }

    showTheAge() {
        return this.age
    }

    public ageInYears() { // i can required this function 
        return `${this.age} years`
    })

    payFunctionToClassExtended() {
        console.log(`${this.name} paide the service`)
    }
}

var newUser = new UserClass('renso', 25, "renso.o.1996@gmail.com")

console.log(newUser.ageInYears())

class MemberClass extends UserClass () {
    id: number;

    constructor(id, name, email, age) {
        super(name, email, age);  // inherits the data(name, email, age) of the class father (UserClass)
        this.id = id; // id is the unique data what recived of the extend class
    }

    payCompleted() {
        super.payFunctionToClassExtended();
    }
}

var ivan = new MemberClass(1, 'ivan', 'ivan@gmail.com', 24)

ivan.payCompleted()

document.write(); // render in the interface the value of the var