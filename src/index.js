module.exports = class PCsA {
    possibleNumerals = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"] // Hexadecimal referrence.
    #key = ""
    #parsedkey = []
    #input
    #result
    // constructor(key, input) {
    //     if(!key || !input) {
    //         throw new Error("Lacks a key or an input.")
    //     }
    //     this.#key = key
    //     this.#input = input
    // }
    
    /**
     * Automatically
     * parse the key into parsedkey for
     * further ciphering
     */
    parse() {
        // Every reparse, reset the previously parsed value.
        if(this.#parsedkey.length > 0) {
            this.#parsedkey = []
        }
        let temp_293 = this.#key.split("")
        temp_293.forEach((v, i) => {
            if(i >= this.#key.length) {
                i = 0
            }
            if(this.possibleNumerals.includes(v)) { // okay this is gonna be intensive as i have to do the hexadecimal thingy
                // if(v === "a" ||
                //     v === "b" ||
                //     v === "c" ||
                //     v === "d" ||
                //     v === "e" ||
                //     v === "f"
                // ) { // this is gonna be hex
                //     if(v === "a") {
                //         this.#parsedkey.push(10)
                //     } else if (v === "b") {
                //         this.#parsedkey.push(11)
                //     } else if (v === "c") {
                //         this.#parsedkey.push(12)
                //     } else if (v === "d") {
                //         this.#parsedkey.push(13)
                //     } else if (v === "e") {
                //         this.#parsedkey.push(14)
                //     } else if (v === "f") {
                //         this.#parsedkey.push(15)
                //     }
                // } else { // normal understandable numerical
                this.#parsedkey.push(parseInt(v, 16))
                // }
            } else {
                throw new TypeError("Parsing key, found " + v +" but expected a Hex value. It's the " + i + "(th, nd, st, rd) character.")
            }
        })
    }
    updateKey(key) {
        this.#key = key;
        this.parse() // reparse after update
        return this;
    }
    updateInput(txt) {
        this.#input = txt;
        return this;
    }
    getParsedKey() { return this.#parsedkey }
    getResult() { return this.#result }
    cipher() {
        if(!this.#input || this.#input.length === 0) {
            throw new Error("Lacks an input.")
        }
        let _b418 = []
        this.#input.split("").forEach((v, i) => {
            let _charcoded = String.fromCharCode(v.charCodeAt(0) + this.#parsedkey[i % this.#parsedkey.length])
            _b418.push(_charcoded)
            // console.log(`Processing ${v} at ${i} selecting modifier ${this.#parsedkey[i % this.#parsedkey.length]} -> ${_charcoded} - CIPHER`)
        })
        this.#result = _b418.join("")
        return new Promise((r,e) => {r(this.getResult())})
    }
    decipher() {
        let _b419 = []
        this.#input.split("").forEach((v, i) => {
            _b419.push(String.fromCharCode(v.charCodeAt(0) - this.#parsedkey[i % this.#parsedkey.length]))
            // console.log(`Processing ${v} at ${i} selecting modifier ${this.#parsedkey[i % this.#parsedkey.length]} -> ${String.fromCharCode(v.charCodeAt(0) - this.#parsedkey[i % this.#parsedkey.length])} - DECIPHER`)
        })
        this.#result = _b419.join("")
        return new Promise((r,e) => {r(this.getResult())})
    }
}