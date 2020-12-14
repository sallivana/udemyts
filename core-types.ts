let testArray: any[]; //any is a mixed type
testArray = ['Name', 5, true];

// this type is called enum and its purpose to keep named numbers
// you can set a value for the first one and the following pick it up, default is zero
// or it'' possible to set values any number or a string each
enum level {JUNIOR = 1, MEDIOR, SENIOR,PRINCIPAL,TEAMLEAD,MANAGER, DIRECTOR};

const person: {
    name: string;
    age: number;
    hobbies: string[];
    employed: [boolean, string, number]
} = {
    name: 'Alyona',
    age: 27,
    hobbies: ['Baking', 'Drawing', 'Exercising'],
    employed: [true, 'Designer', level.SENIOR] //this type is called "tuples", it is a fixed length array
};

person.employed.push('Developer'); // push is an exception for tuples types
// person.employed = [true, 'Designer', 'Developer']; // although setting up the third element like this is not possible
// person.employed[0] = 3; // overwriting with another type is not possible
console.log(person.employed);

for (const hobby in person.hobbies) { // hobby here is a string as TS knows that values have to be strings
    console.log(person.hobbies[hobby].toUpperCase());
}