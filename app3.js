const string = "abcdefg";
const allUnique = string.split("").reduce( (acc, char, index, array) => {
    if(array.indexOf(char) !== index){
        acc = false;
    }
    return acc;
}, true);
console.log(allUnique);