type numorstring = number | string; // Type aliases can be used to "create" your own types.
type User = { name: string; age: number }; // You can also provide an alias to a (possibly complex) object type
const u1: User = { name: 'Max', age: 30 } // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.


function combine(
    el1: numorstring,
    el2: numorstring,
    resultConversion: 'as-number' | 'as-string' // it's called union types
) { //so as an example this function can concatenate strings or sum numbers
    let result: number | string;

    if (typeof el1 === 'number' && typeof el2 === 'number' || resultConversion === 'as-number') {
        result = +el1 + +el2;
    } else {
        result = el1.toString() + '-' + el2.toString();
    }
    return result;
}

const combineAges = combine(8, 19, 'as-number');
console.log(combineAges);

const combineAgesStrings = combine('8', '19', 'as-number');
console.log(combineAgesStrings);

const combineNames = combine('Zoey', 'Matt', 'as-string');
console.log(combineNames);