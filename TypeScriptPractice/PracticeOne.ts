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

// Explicitly returning a value from a function, seperating by a space

function combiningPrompts(systemPrompt: string, userPrompt: string) {
    return `${systemPrompt}\n${userPrompt}`
};
let systemPrompt: string = 'You are a helpful assistant';
let userPrompt: string = 'How do I reset my password';
console.log(combiningPrompts(systemPrompt, userPrompt));


// There is a type called void, which can be used when a function will not have a return value
function LogMessage(message: string): void {
    console.log(message);
};
// There is no return from the above function, we set the type of return to void - without this
// it will return undefined as a default if a return statement is not included


// We also have string litteral union types
let severity: "info" | "warning" | "error"
// The type is still a string and can be mutated as such, but can be used as a prop without being mutable by inputs
 function logSystemEvent(event: string, 
  severity: "info" | "warning" | "error"
): string {
  return `SYSTEM ${severity.toUpperCase()}: ${event}`;
};
// in the above example when using this function, it will only accept one input, not two, and we could capitalize 
// the severity or mutate it in other ways within the function if we wished

// String litterals are subtypes of string.  We could also extract them like this:
type Severity = "info" | "warning" | "error";

export function logSystemEvent2(event: string, severity: Severity): string {
  return `SYSTEM ${severity.toUpperCase()}: ${event}`;
};
// We would take in a prop of Severity, inwhich the input could only be one of the three options