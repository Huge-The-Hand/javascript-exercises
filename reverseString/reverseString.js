const reverseString = function(userString) {

    let rev_string ; //for some reason this store a NaN string don't know how to remove
    for (i = 0;i <= userString.length; i++) {
        rev_string += userString[userString.length-i];
    }
    let str = rev_string.substr(3); //to exclude the Nan from beginning of statement
    return str;
    
}

console.log(reverseString("hello"))
module.exports = reverseString
