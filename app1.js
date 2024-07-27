//a rápida raposa marrom salta sobre o cachorro preguiçoso a raposa foi rápida

const setence = "the quick brown fox jumps over the lazy dog the fox was quick";
// Para contar as palavras precisa deixar os espaço entre aspas no split
const wordCounts = setence.split(" ") .reduce( (acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
}, {});
console.log(wordCounts);
//{the: 3,  quick: 2,brown: 1,fox: 2,  jumps: 1,over: 1, lazy: 1, dog: 1,  was:1}