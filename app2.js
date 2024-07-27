const number = "123456";
const sumOfDigits = number.split("").reduce( (acc, digit) => {
    return acc + parseInt(digit, 10);
}, 0);

console.log(sumOfDigits);// 21