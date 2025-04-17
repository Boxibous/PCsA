const pcsa = new (require("../src/index"))() // Get the PCsA utillity class, im doing it shortly.

// This time, I'm going to do something that most dumbasses (no joke)
// do. It is that you're "https://tryitands.ee"-ing the wrong way.
// I'm gonna do something crazy.
// Outside the hexadecimal!
pcsa.updateInput("Bruh")
    .updateKey("fe is iron! this si not a key") // TypeError.

// "fe" is [15, 14], but the space next to it is not a hex.
