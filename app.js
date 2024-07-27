const string = "banana";
const charactrs = string.split("");// Resultado [ 'b', 'a', 'n', 'a', 'n', 'a' ]
console.log(charactrs);

const result = charactrs.reduce((acc, val) => {
    console.log(`Val: ${val}, acc before: `, acc);//Val: b, acc before: {}

    acc[val] = (acc[val] || 0) + 1;
    console.log(`Acc after: `, acc);//Acc after: { b: 1 } processo se repete
    return acc;
}, {});
console.log(result);

// [ 'b', 'a', 'n', 'a', 'n', 'a' ]
// Val: b, acc before:  {}
// Acc after:  { b: 1 }
// Val: a, acc before:  { b: 1 }
// Acc after:  { b: 1, a: 1 }
// Val: n, acc before:  { b: 1, a: 1 }
// Acc after:  { b: 1, a: 1, n: 1 }
// Val: a, acc before:  { b: 1, a: 1, n: 1 }
// Acc after:  { b: 1, a: 2, n: 1 }
// Val: n, acc before:  { b: 1, a: 2, n: 1 }
// Acc after:  { b: 1, a: 2, n: 2 }
// Val: a, acc before:  { b: 1, a: 2, n: 2 }
// Acc after:  { b: 1, a: 3, n: 2 }
// { b: 1, a: 3, n: 2 }


// const string = "banana";
// const result = string.split("").reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
// }, {});
// console.log(result);
