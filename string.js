let string = "[Programming [langu[age]]] is the most popular programming language [today]"
let substring = "Javascript"


let findClose = (string) => {
    let count = 1
    for (let i=0; i<string.length; i++) {
    
        if (string[i] =='[') {
            count++}
        else if (string[i] == ']') {
            count--}
        if ((string[i]== ']') && (count == 1)) {
            return i
            }
        }
    }

let swap = (string, substring) => {    
    let finish = findClose(string)+1    
    return substring+string.substring(finish)
    }

console.log(swap(string, substring))
