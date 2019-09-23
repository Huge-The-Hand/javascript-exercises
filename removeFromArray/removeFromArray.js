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
