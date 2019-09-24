const range = function(input1,input2){
    let add = 0;
    //this condition checks that numbers are not equal and that is not a fake number "4"
    if((input1 != input2) && (typeof(input1) == "number" && typeof(input2) == "number")){
        for(let i = input1; i <= input2; i++){
            add += i;
        }
    }
    else {
        return "ERROR"
    }
    return add;
}

const sumAll = function() {
    //this condition statement checks for (non-numbers) & (negative numbers)
    if((!isNaN(arguments[0]) && !isNaN(arguments[1])) && (arguments[0]>=0 && arguments[1]>= 0)){
        if (arguments[1] < arguments[0]){
    
            return range(arguments[1],arguments[0]);
        } 
        else {
        
            return range(arguments[0],arguments[1]);
        }
    }
    else {
        return "ERROR";
    }
}

module.exports = sumAll
