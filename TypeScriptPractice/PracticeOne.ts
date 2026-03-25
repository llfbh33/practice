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