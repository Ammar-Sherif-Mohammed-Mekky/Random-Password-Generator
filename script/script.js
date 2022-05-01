// document.getElementById("holder-one").style.color = #55F991
//button
let generateButton = document.getElementById("password-generator")
//password holders
let passwordHolderOne = document.getElementById("holder-one")
let passwordHolderTwo = document.getElementById("holder-two")
let passwordHolderThree = document.getElementById("holder-three")
let passwordHolderFour = document.getElementById("holder-four")
//passwords forms
let passwordForm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "(", ")", "@", "#", "!", "$", "%", "^","&", "*", ";", ",", "/", "?", "a","z", "b", "c","d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

let passwordIsGenerated = false
let passwordNotGenerated = true

function generatePassword(e){
    e.preventDefault()
    passwordIsGenerated = true
    passwordNotGenerated = false

    if (passwordIsGenerated === true && passwordNotGenerated === false){
        for (let i = 0; i < 10; i++){
            passwordHolderOne.textContent +=  passwordForm[Math.floor(Math.random() * passwordForm.length)];
            passwordHolderTwo.textContent +=  passwordForm[Math.floor(Math.random() * passwordForm.length)];
            passwordHolderThree.textContent +=  passwordForm[Math.floor(Math.random() * passwordForm.length)];
            passwordHolderFour.textContent +=  passwordForm[Math.floor(Math.random() * passwordForm.length)];
            
        }
    }
    // passwordIsGenerated === false
    //         passwordNotGenerated === true
    // if  (passwordIsGenerated === false && passwordNotGenerated === true){
    //     removeEventListener(generatePassword())
    // }
    
    // function hover(){
    //     passwordHolderOne.textContent = "Copy Password"
    // }
    
    // function copy(){
    //     navigator.clipboard.writeText(passwordHolderOne.value);
    // }
   
    // removeEventListener(generatePassword())

    event.stopImmediatePropagation();

}


function stopPassword(){

}


// generatePassword()



generateButton.onclick = generatePassword;