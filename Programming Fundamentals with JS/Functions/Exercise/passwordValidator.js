// function solve(password) {
//     let enoughLength = isEnoughLength(password);
//     let leastTwoDigits = isLeastTwoDigits(password);
//     let lettersAndDigits = isLettersAndDigits(password);
//     function isEnoughLength(password) {
//         return password.length >= 6 && password.length <= 10;
//     }

//     function isLettersAndDigits(password) {
//         for(let char of password) {
//             charIndex = char.charCodeAt(0);
//             if(!(charIndex >= 65 && charIndex <= 90) &&
//              !(charIndex >= 97 && charIndex <= 122) &&
//              !(charIndex >= 48 && charIndex <= 57)
//              ) {
//                  return false;
//              } 
//         }
//        return true;
//     }

//     function isLeastTwoDigits(password) {
//         let count = 0;
//         for(let char of password) {
//             charIndex = char.charCodeAt(0);
           
//             if(charIndex >= 48 && charIndex <= 57) {
//                 count++;
//             }
//         }
//         return count >= 2;
//     }

//     if(enoughLength && leastTwoDigits && lettersAndDigits) {
//         console.log("Password is valid");
//     }
//     if(!enoughLength) {
//         console.log("Password must be between 6 and 10 characters");
//     }
//     if(!lettersAndDigits) {
//         console.log("Password must consist only of letters and digits");
//     } 
//     if(!leastTwoDigits) {
//         console.log("Password must have at least 2 digits");
//     }
// }

// solve('logIn');



function passwordValidator(pass) {
  
    function isValidLength(pass) {
        
        if(pass.length >= 6 && pass.length <= 10) {
        return true;
        } else {
            return 'Password must be between 6 and 10 characters';
        }
    }

    function isValidChars(pass) {
        let isValidPass = true;
        for(let i = 0; i < pass.length; i++) {
            let isValid = true;
            let code = pass[i].charCodeAt(0);
            if(code >= 65 && code <= 90 || 
               code >= 97 && code <= 122 ||
               code >= 48 && code <= 57) {
                 isValid = true;
            } else {
                 isValid = false;
                 isValidPass = false;
                 break;
            }
        }
        return isValidPass ? true: 'Password must consist only of letters and digits';
    }

    function atLeastTwoDigits(pass) {
        let digits = 0;
        for(let i = 0; i < pass.length; i++) {
            let code = pass[i].charCodeAt(0);
            if(code >= 48 && code < 57) {
                 digits++;
            }
        }
        return digits >= 2 ? true: 'Password must have at least 2 digits';
    }

    let result = [];
    if(isValidLength(pass) != true) {
        result.push(isValidLength(pass));
    } 
     if(isValidChars(pass) != true) {
        result.push(isValidChars(pass));
    } 
     if(atLeastTwoDigits(pass) != true) {
        result.push(atLeastTwoDigits(pass));
    } 
    if(isValidLength(pass) === true && isValidChars(pass) === true && atLeastTwoDigits(pass) === true) {
        result.push('Password is valid');
    }
    return result.join('\n');
}

console.log(passwordValidator('logIn'));
passwordValidator('logIn');