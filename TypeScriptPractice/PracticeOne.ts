// We are going to be practicing typescript
// Anything you can type in javaScript can be converted to typeScript
// But not all TypeScript can be converted to JavaScript

// TypeScripts Purpose is to add static types to JavaScript


// This is a JavaScript and TypeScript phrase, But the type of cat is "any"
let cat = 'So Fluffy!!'
console.log(cat);
// When converted to .ts from .js it will be updated to (added 2 in here so that we do not have page errors)
let cat2: any = "So Fluffy!!"
console.log(cat2)

// This is only a TypeScript Phrase
let dog: string = "They are so friendly!!"
console.log(dog);


// When we have a function in TypeScript we need to include types for each of the parameters provided
// We also need to add a type after the parameters for that the type returned from the function will be
const newName = (firstName: string, middleName: string, lastName: string): string => {
    return `My new name is ${firstName} ${middleName} ${lastName}`
};
function newAge(oldAge: number, changedAge: number): string {
    return `I used to be ${oldAge}, but I decided at heart I am ${changedAge}`
};
// The declaration can work with arrow functions as well as traditional functions

// However, with functions Inferred types are often prefered over explicit function returns like above
// in many scenarios because of improved maintainability, better refactoring experience, and reduced 
// code verbosity. Explicit types, while having some advantaged, introduce maintenance overhead, especaly 
// when dependent types may change.
