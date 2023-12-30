
//! Logs each letter separately
// const letters = ("HEKGLMN");

let letters = ("HEKGLMN")
let confirmLetters

let addedLetters = ""

let addedLettersPass = ""

//! Logs first letter
// const letters = ("H", "E", "K", "G", "L", "M");

// //! For Loop
// for(let i = 0; i < letters.length; i++){
//     console.log(letters[i]);
// }

function someLetters(){
    confirmLetters = confirm("Do you want some letters? Okay, here they come!")
    addedLetters = addedLettersPass.concat(letters)

    if(confirmLetters) {
    prompt("oh, you want letters huh?")
    } else {
    prompt("fine, no letters for you!")
}
someLetters()


// //! For in loop
// for(let i in letters){
// console.log(letters[i]);
// }