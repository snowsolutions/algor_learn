const canSum = (targetNum, numbers) => {
    if (targetNum === 0) return true;
    if (targetNum < 0) return false;
    for (let num of numbers) {
        const remainder = targetNum - num
        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }
    return false;
}

console.time();
console.log(canSum(3, [2,3,4,7])); //true
console.log(canSum(7, [2,3,4,7])); //true
console.log(canSum(5, [3,6,7])); //false
console.log(canSum(12, [3,6,7])); //true
console.log(canSum(16, [1,3,6,7,5])); //true
console.log(canSum(300, [7,14])); //false
console.timeEnd()