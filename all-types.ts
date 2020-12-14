//------------------------------
// Boolean
let isDone: boolean = false;


//------------------------------
// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n; //big integer, ES2020+


//------------------------------
// String
let color: string = "blue";
color = 'red';
//how to template strings below
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;


//------------------------------
// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; //generic array type


//------------------------------
// Tuple
// an array with a fixed number of elements whose types are known, but need not be the same
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
// not possible to add new elements except by array push


//------------------------------
// Enum
// sets of numeric values
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;
// possible to change numeration by setting a number to a first element Red = 1
// or as an option it's  possible to set unique value to each


//------------------------------
// Unknown
// the type of variables that we do not know when we are writing an application. These values may come from dynamic content
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = false;
// need to make a check if try to set another variable to the one with type unknown
if (typeof notSure === "string") {
    // TypeScript knows that maybe is a string
    const aString: string = notSure;
    // So, it cannot be a boolean
    // const aBoolean: boolean = notSure;
}

//------------------------------
// Any
// any type, used when not all type information is available or its declaration would take an inappropriate amount of effort
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");


//------------------------------
// Void
// the absence of having any type at all. function returns nothing
function warnUser(): void {
    console.log("This is my warning message");
}


//------------------------------
// Null and Undefined
// coming from JS, they’re not extremely useful on their own
// can assign null and undefined to something like number
// However, when using the --strictNullChecks flag, null and undefined are only assignable to unknown, any and their respective types
// (the one exception being that undefined is also assignable to void)
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;


//------------------------------
// Never
// The never type represents the type of values that never occur.
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // return error("Something failed");
    // while (true) {} // that's another example of the function that returns nothing
}


//------------------------------
// Object
// a type that represents the non-primitive type
declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);
// everything else to assign will show error


//------------------------------
// Type assertions
// Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”
// TypeScript assumes that you, the programmer, have performed any special checks that you need.
// Type assertions have two forms.
// One is the as-syntax:
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
// The other version is the “angle-bracket” syntax:
let someValue2: unknown = "this is a string";
let strLength2: number = (<string>someValue2).length;


//------------------------------
//Function
let combineValues: (a: number, b:number) => number;


//------------------------------
//Union
let resultConversion: 'as-number' | 'as-string';


//------------------------------
//Custom
type numorstring = number | string; // Type aliases can be used to "create" your own types.
type User = { name: string; age: number }; // You can also provide an alias to a (possibly complex) object type


//------------------------------
// Literal types