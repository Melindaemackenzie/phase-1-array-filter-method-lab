// Code your solution here
function findMatching(array, name) {
    return array.filter (function (string) {
        return string.toLowerCase() === name.toLowerCase()


    })
}




function fuzzyMatch (array, string){
    return array.filter (function (name) {
        return name.toLowerCase().startsWith(string.toLowerCase()) 
    })
}

function matchName(array,string){
    return array.filter (function (drivers) {
        return drivers.name === string})
    }