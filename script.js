
var pwdLength = prompt("Enter a number between 8 and 128.")
//var charTypes = ["lowercase", "uppercase", "numeric", "special"]
var lowerChar = confirm("click OK if you would like your password to use lowercase letters")
var upperChar = confirm("click OK if you would like your password to use uppercase letters")
var numChar = confirm("click OK if you would like your password to use numbers")
var specialChar = confirm("click OK if you would like your password to use special characters")
var passArray = []


//1
if (lowerChar===true && upperChar===false && numChar===false && specialChar===false) {
    for (var i = 0; i < pwdLength; i++) {
        var lower = "abcdefghijklmnopqrstuvwxyz"
        var randomChar = lower[Math.floor(Math.random() * lower.length)];
        passArray.push(randomChar)
        console.log(passArray)
    }
    document.getElementById("password").innerHTML = passArray.join('')
}
//2
else if (lowerChar===true && upperChar===true && numChar===false && specialChar===false) {
    for (var i = 0; i < pwdLength; i++) {
        var lower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var randomChar = lower[Math.floor(Math.random() * lower.length)];
        passArray.push(randomChar)
        console.log(passArray)
    }
    document.getElementById("password").innerHTML = passArray.join('')
}
//3
else if (lowerChar===true && upperChar===false && numChar===true && specialChar===false) {
    for (var i = 0; i < pwdLength; i++) {
        var lower = "abcdefghijklmnopqrstuvwxyz0123456789"
        var randomChar = lower[Math.floor(Math.random() * lower.length)];
        passArray.push(randomChar)
        console.log(passArray)
    }
    document.getElementById("password").innerHTML = passArray.join('')
}
//4
else if (lowerChar===true && upperChar===false && numChar===false && specialChar===true) {
    for (var i = 0; i < pwdLength; i++) {
        var lower = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        var randomChar = lower[Math.floor(Math.random() * lower.length)];
        passArray.push(randomChar)
        console.log(passArray)
    }
    document.getElementById("password").innerHTML = passArray.join('')
}

//5
else if (lowerChar===true && upperChar===true && numChar===true && specialChar===false) {
    for (var i = 0; i < pwdLength; i++) {
        var lower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        var randomChar = lower[Math.floor(Math.random() * lower.length)];
        passArray.push(randomChar)
        console.log(passArray)
    }
    document.getElementById("password").innerHTML = passArray.join('')
}
//6
else if (lowerChar===true && upperChar===true && numChar===true && specialChar===true) {
    for (var i = 0; i < pwdLength; i++) {
        var lower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        var randomChar = lower[Math.floor(Math.random() * lower.length)];
        passArray.push(randomChar)
        console.log(passArray)
    }
    document.getElementById("password").innerHTML = passArray.join('')
}
//7
else if (lowerChar===true && upperChar===true && numChar===true && specialChar===true) {
    for (var i = 0; i < pwdLength; i++) {
        var lower = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        var randomChar = lower[Math.floor(Math.random() * lower.length)];
        passArray.push(randomChar)
        console.log(passArray)
    }
    document.getElementById("password").innerHTML = passArray.join('')
}









// if (lowerChar===true) {
//     var lowerChar = ["a","b","c"]
//     for (i=0; i<Number.pwdLength; i++) {
//         pwd = lowerChar[Math.floor(Math.random() * lowerChar.length)];
//         console.log(pwd)
//     }
    
// }

//var pwd = ""


// for(var i = 0; i <charTypes.length; i++) {
//     var types = confirm("Click OK if you would like your password to use " + (charTypes[i]) + " characters.")

// }


// for(var i = 0; i <1; i++) {
//     var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var randomUpper = upperArr[Math.floor(Math.random() * upperArr.length)];
// }


// function generateLowercase() {
//     var length = 1,
//         lowerChar = "abcdefghijklmnopqrstuvwxyz",
//         retValLower = "";
//     for (var i = 0, n = lowerChar.length; i < length; ++i) {
//         retValLower += lowerChar.charAt(Math.floor(Math.random() * n));
//     }
//     console.log(retValLower);
// }

// function generateUppercase() {
//     var length = 1,
//         upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//         retValUpper = "";
//     for (var i = 0, n = upperChar.length; i < length; ++i) {
//         retValUpper += upperChar.charAt(Math.floor(Math.random() * n));
//     }
//     console.log(retValUpper);
// }

// function generateNumeric() {
//     var length = 1,
//         numericChar = "0123456789",
//         retValNumeric = "";
//     for (var i = 0, n = numericChar.length; i < length; ++i) {
//         retValNumeric += numericChar.charAt(Math.floor(Math.random() * n));
//     }
//     console.log(retValNumeric);
// }

// function generateSpecial() {
//     var length = 1,
//         specialChar = "0123456789",
//         retValSpecial = "";
//     for (var i = 0, n = specialChar.length; i < length; ++i) {
//         retValSpecial += specialChar.charAt(Math.floor(Math.random() * n));
//     }
//     console.log(retValSpecial);
// }

// if (lowerChar===true) {
//     for (var i = 0; i < Number.pwdLength; i++) {
//         chars = [abcdefghijklmnopqrstuvwxyz]
//         var pwd = Math.floor(Math.random() * chars.length) + 1;
// }
// console.log(pwd)
// }


// for(var i = 0; i <Number.pwdLength; i++) {
//     var lower = lowerChar[Math.floor(Math.random() * lowerChar.length)];
//     console.log(lower)
// }





// for(var i = 0; i <= Number.pwdLength; i++) {
//     var pwdType = [Math.floor(Math.random() * computerChoices.length)];
// }





// var lower = confirm("lowercase?")
// var numeric = confirm("numbers?")
// var upper = confirm("uppercase?")
// var special = confirm("special?")
// var lowerArr = [abcdefghijklmnopqrstuvwxyz]
// var upperArr = [ABCDEFGHIJKLMNOPQRSTUVWXYZ]
// var numArr = [0123456789]
// var specialArr = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]






// var randomSel = chars[Math.floor(Math.random() * chars.length)];
// if 


// for (var i = 0; i < 10; i++) {
    
//     var num = Math.floor(Math.random() * 10) + 1;


//prompt("Would you like your password to have uppercase letters?") t/f
//prompt("Would you like your password to have lowercase letters?") t/f
//prompt("Would you like your password to have special characters?") t/f

//Error: must choose at least one character type


// create a random number (character?) generator, loop it until x (x being the password length) is attained
// if Uppercase, convert random characters from array to Uppercase
// if Lowercase, convert random characters from array to Lowercase
// if isSpecial, convert random characters from array to isSpecial.

// OR add character types to single array, choose final password from that array**
// .textContent