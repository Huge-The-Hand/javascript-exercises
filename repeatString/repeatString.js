const repeatString = function(string, times_repeated ) {
    let addWords = '';
    if (times_repeated<0){
        return('ERROR');
        
    } else {
    for (let i = 0; i < times_repeated; i++) {
        addWords += string;
    } 
    return(addWords);
    }

}
//console.log(repeatString('hey', -2)) //for testing in the terminal
module.exports = repeatString
