const pcsa = new (require("../src/index"))() // Get the PCsA utillity class, im doing it shortly.

// I wan't to decipher the message back.
// But I don't have any key. So i'm gonna get a random key.
// I don't expect it to work though-
let valued = pcsa.updateInput("Igopt;!Yrvqs")
                 .updateKey("bbccff")

// Alrighty. Let's get things to work!
// You also get a promise after doing this. I never missed any
// promise. Trust my code!
valued.decipher()
    .then((out) => console.log("First time i try it, it returns " + out)) // >\cde,▬Nfjbd

// Oh no,
// The code seemed to not work.
// So I decided to ask myself for the key. (fun fact: i actually have to 
// rebrowse the cipher.js's code to get it). And now let's try again.
let valued2 = pcsa.updateKey("12345f")
valued2.decipher()
    .then((out) => console.log("After having the keys, it's " + out)) // Hello, World!

// Now i have the desired effect.