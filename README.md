# PCsA
This is the Positioned Charshifting Algorithm (PCsA), but I prefer calling it the Respectively Byte-by-Byte Modifier-by-Modifier Charshifting Algorithm (RBbBMbMCsA) in some cases.
It works simply by shifting charcode.
```
Feed me the [input]
and the [key].

First, ima parse the hex [key] into an Array of numerical values.
Secondly, loop through EVERY SINGLE character in the [input]:
    Define [_b_] as a temporal Array for later purposes.
    For every [char] in [input], also [i] as current position in the whole array:
        Get a string from charcode ([char].charcodeAt(0) + [key] at pos [i])
        Push the thing into [_b_]
    When ended loop:
        Construct [_b_] into a String [str]
        Returns a Promise with [str] as suceed value, nothing as error.
```
# Known vulnerabilities
As someone pointed out, this algorithm (not the code itself) is vulnerable to Frequency Analysis.
This is possible when the key length is known, and the text is significantly longer than the key.
So i'd recommend a long enough key to always defeat this. It will be fixed in the future.