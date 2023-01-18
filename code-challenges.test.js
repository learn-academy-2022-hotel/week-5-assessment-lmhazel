// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

//Pseudo Code:
//Input: a string
//Output: the characters in the string are changed as such:a" to 4, "e" to 3, "i" to 1, and "o" to 0.
//Function: The function specialWord changes the input into an array with each character being a different value in the array. The function codeMaker uses the map funtion to iterate throughout the values in specialWord and invokes a conditional function called codeFunction which uses conditions to see if the value is equal to a character that is supposed to change to a different character and if it is, then it returns that value as the character. If not, then it returns the original value. Then the code returns the new array with the join method with quotation marks as the parameter in order for it to return as a string and not an array.


// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codeMaker", () => {
    it("returns a string but with the appropriate characters changed to different characters", () => {
        expect(codeMaker()).toEqual("L4ck4d41s1c4l")
    })
})
// b) Create the function that makes the test pass.

specialWord = secretCodeWord1.split('')

const codeFunction = (value) =>{ 
        if (value === "a"){
            return "4"
        } else if (value === "e"){
            return "3"
        } else if (value === "i"){
            return "1"
        } else if (value === "o"){
            return "0"
        } else {
            return value
        }
    }

const codeMaker = (word) => {
    return word.map(codeFunction)
}
codeMaker(specialWord).join("")

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

//Pseudo Code:
//Input: An array of words and a single letter
//Output: An array of all words containing that particular letter
//Function: The function fruitOrganizer takes a letter in which it first sets the variable capLetter which is a capitalized version of the letter. Then the function uses the filter method and returns only the words that include the input or capLetter. 

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("fruitOrganizer", () => {
        it("returns an array of all the words containing a particular letter", () => {
         expect(fruitOrganizer(letterA)).toEqual(["Mango", "Apricot", "Peach"])
         expect(fruitOrganizer(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
        })
    })

// // b) Create the function that makes the test pass.
const fruitOrganizer = (letter) => {
    let fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    let capLetter = letter.toUpperCase()
    return fruitArray.filter((value) => {
        if (value.includes(letter)){
            return value
        } else if (value.includes(capLetter)){
            return value
        }
    })
}
fruitOrganizer(letterA)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

//Pseudo Code:
//Input: an array of 5 numbers
//Output: true or false
//Function: The function called fullHouse sorts the array in ascending order and then uses a conditional statement that returns a true if the array at the 0th and the first index equal each other and the array at the 0th and 2nd equal each other and the array at the 3rd and the 4th equal each other as well as return true if the array at the 0th and the 1st equal each other and the array at the 2nd and 3rd index equal each other and the 2nd and 4th index equal each other. If none of the prior conditions are met, the function will return false.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

describe("fullHouse", () => {
    it("returns true or false based on if the array is a full house", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(true)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// b) Create the function that makes the test pass.

const fullHouse = (array) => {
    array.sort()
    
    if(array[0] === array[1] && array[0] === array[2] && array[3] === array[4]) {
        return true
    } else if(array[0] === array[1] && array[2] === array[3] && array[2] === array[4]){
        return true
    } else {
        return false
    }
}

fullHouse(hand1)

