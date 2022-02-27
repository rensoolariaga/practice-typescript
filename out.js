// console.log("Im out")
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// in terminal tsc out.ts -w == nodemon ts.out in package.json
// types
var stringDataImplicit = "hello"; // implicit mode of asign a data type to the var/let/const
var stringDataExplicitAndDeclaration = "declaration"; // implicit mode of asign a data type to the var/let/const and declare it
var numberData = 14;
var booleanData = true;
var declaration = "first time: string"; // the data type any let me changue the value of the var post first declaration
declaration = "post first time: number/boolean o whatever";
// arrays
var stringArray = ["dec1", "dec2", "dec3"];
var numberArray = [1, 2, 3, 4];
var booleanArray = [true, false];
var anyArray = ["dec1", true, 2, [], {}];
// tuple ---> array with defined structure
var stringAndNumberTuple;
stringAndNumberTuple = ["quintero", 10];
stringAndNumberTuple = ["barco", 21, "perez", 24];
// void, undefined, null
var voidData = undefined;
var nullData = null;
var undefinedData = undefined;
// functions
function sumFunction(num0, num1) {
    return num0 + num1;
}
;
var randomFunction = function (param0, param1) {
    if (typeof (param0) === 'string') {
        param0 = parseInt(param0);
    }
    ;
    if (typeof (param1) === 'string') {
        param1 = parseInt(param1);
    }
    ;
    return param0 + param1;
};
function presentation() { }
(function (name, surname) {
    if (surname === undefined) {
        return "Hello, im ".concat(name);
    }
    return "Hi! My name is ".concat(name, " ").concat(surname);
});
function showToDo(todo) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
var myToDo = {
    title: 'star wars',
    text: 'the last jedi'
};
showToDo(myToDo);
// classes
var UserClass = /** @class */ (function () {
    function UserClass(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    UserClass.prototype.register = function () {
        console.log("".concat(this.name, " is registred!"));
    };
    UserClass.prototype.showTheAge = function () {
        return this.age;
    };
    UserClass.prototype.ageInYears = function () {
        return "".concat(this.age, " years");
    };
    UserClass.prototype.payFunctionToClassExtended = function () {
        console.log("".concat(this.name, " paide the service"));
    };
    return UserClass;
}());
var newUser = new UserClass('renso', 25, "renso.o.1996@gmail.com");
console.log(newUser.ageInYears());
var MemberClass = /** @class */ (function (_super) {
    __extends(MemberClass, _super);
    function MemberClass(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id; // id is the unique data what recived of the extend class
        return _this;
    }
    MemberClass.prototype.payCompleted = function () {
        _super.prototype.payFunctionToClassExtended.call(this);
    };
    return MemberClass;
}(UserClass()));
var ivan = new MemberClass(1, 'ivan', 'ivan@gmail.com', 24);
ivan.payCompleted();
document.write(); // render in the interface the value of the var
