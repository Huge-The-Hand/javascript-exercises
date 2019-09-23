const removeFromArray = function() {
    var list = arguments[0];
    for (var i = 1; i < arguments.length; i++){
        for (var j = 0; j < list.length; j++){
            if (arguments[i]===list[j]) {
                list.splice(j,1);
            }
        }

    }
    return list

}

module.exports = removeFromArray
//con = removeFromArray([21,2,3,'jello'],'jello');
//console.log(con);




//["bar", "baz", "foo", "qux"]

//list.splice(0, 2) 
// Starting at index position 0, remove two elements ["bar", "baz"] and retains ["foo", "qux"].
/*
function longestString() {
    var longest = '';
    for (var i=0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    return longest;
  }
*/