function panggilNestedArray(value){
    var transform = Array()
    for(let i = 0; i < value[0].length; i++){
        transform[i] = Array(value[0][i], value[1][i],value[2][i])
           
    }
    return transform
}

var nestedArray = [
    [1,2,3,4],
    ['Mark Zuckenberg','Elon Musk','Bill Gates','Steve Jobs'],
    ['Facebook','Tesla','Microsoft','Apple']
]

console.log(panggilNestedArray(nestedArray))