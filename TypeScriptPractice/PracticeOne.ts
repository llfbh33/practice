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

// String litterals are subtypes of string.  We could also extract them like this with a type keyword
type Severity = "info" | "warning" | "error";

function logSystemEvent2(event: string, severity: Severity): string {
  return `SYSTEM ${severity.toUpperCase()}: ${event}`;
};
// We would take in a prop of Severity, inwhich the input could only be one of the three options

// Above we created a type keyword - an alias type
type LoggerCallback = (s1: string, s2: string) => string;
// This is a basic function that takes in two strings and returns a string.  It can be used as a callback function 
// Any time that we need to use this specific type of function 
function setLoggerTimeout(loggerCallback: LoggerCallback, delay: number) {
    // do something
    // This way we can clean up what we are seeing and make the code easier to read as well as reusable
    // In the future if we want to change it we only have to modify the type declaration
};


// Higher order Functions
type SupportResponse = (name: string) => string;

// with these functions we are utilizing SupportResponse as a style guide
function greetCustomer(name: string) {
    return `Hello ${name}, welcome to Support.ai! How can I assist you today?`;
};
function farewellCustomer(name: string) {
    return `Goodbye ${name}, have a great day!`;
};

// These functions are going to be the functions which can be accessed with the SupportResponse Alias
// We create a higher level function to access those function through SupportResponse
function handleResponse(fn: SupportResponse) {
    console.log(fn("Aubrie"))
};
// Now we can access the lower level functions that we based off ofthe support structure
handleResponse(greetCustomer);
handleResponse(farewellCustomer);

// This information is vital in preperation for these types of patterns:
const responses: SupportResponse[] = [
    greetCustomer,
    farewellCustomer,
];
// in the above responses, every function takes (name: string) and every function returns a string
// we can access these functions and their responses with the index within the array or by mapping through them
// We could also store them as keyed objects so we can easily access them


// const responsesMap: Record<string, SupportResponse> = {   -- Here we are just putting string as a type, this will give us an error
//     greet: greetCustomer,                                -- because there is the possibility that it will be undefined
//     farewell: farewellCustomer,
// }
// // so now we can grab the functions without the index which could fall apart quickly with changes
// responsesMap["greet"]("Aubrie");
// responsesMap["farewell"]("Aubrie")

// We could also do type-safe keys  
type ResponseType2 = "greet" | "farewell";                  // --- we need to make sure that there are specific values

const responsesMap2: Record<ResponseType2, SupportResponse> = { // use types as types, like string or number
  greet: greetCustomer,
  farewell: farewellCustomer
};
// our Record will be a key value pair of not just strings and functions, but only strings and functions
// which are currently stored within ResponseType2 and functions which match the format of SupportResponse


// Importing types
// We can import types directly from a module, and should, so it does not generate extra code if converting
// JavaScript to TypeScript
// import { User, Post } from "./models";
// instead of the above, we would add type before the imports
// import type { User, Post } from "./models";
// The reason we add they type even though we do not technically have to is so that when the tsc is compiling
// the code, it knows that the import is not a variable, function, or file.  It is not necessary to 
// reproduce this import when compiling into JavaScript.  All TypeScript code is static code, or it is
// a statically typed language.  The tsc Traspiles the TypeScript code into plain JavaScript before it is executed


// Type Narrowing
// You can use the | pipe / union to set multiple types to a variable.  
let userId: string | number;
userId = "user_42";
userId = 42;

console.log(userId)