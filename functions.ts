function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {  //void as there is no return in this function, no need to define it explicitly with :void
    console.log('Result: ' + num);
}

function printResult2(num: number): undefined { // it's the only case when it's possible to set undefined for  a function
    console.log('Result: ' + num);
    return; // because of this return
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    let result = n1 + n2;
    cb(result);
}
addAndHandle(5,7, (result) => { //callback anonimous function
    console.log(result);
    return result; //TS won't argue on that although we set 'void' before because 'void' basically means 'ignore any result function returns'
})


let combineValues: (a: number, b:number) => number; // we say that variable must have a function with nums as params and return a num too

combineValues = add; //we store a function in this variable and it fits requirements above
// combineValues = printResult; //TS will argue about this function as it doesn't fit requirements above

console.log(combineValues(8,12));
printResult(add(5, 12));

// let experiment: undefined; // undefined is also a type but can be set to variables only