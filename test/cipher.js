const pcsa = new (require("../src/index"))() // Get the PCsA utillity class, im doing it shortly.

// Now i want to cipherify the "Hello, World!" message
// using my algorithm and the key "12345f"

// So firstly, i'll want to feed the class with the key and input.
// The class is programmed so it will parse the key whenever you call updateKey()
// You won't have to parse() it again.
let keyed = pcsa.updateKey("12345f")
                .updateInput("Hello, World!")

// Having the stuff set correctly, i'm gonna cipher them.
// It would return a Promise with the content inside.
// No error handling, you don't have to .catch() it
// Wrapping it in a try-catch block is better.
let bruh = ""
keyed.cipher()
    .then((result) => {console.log(result); bruh = result}) // Replace the console.log(...) with anything of your choice!

// And if you have wondered anything, visit https://tryitands.ee

module.exports = bruh