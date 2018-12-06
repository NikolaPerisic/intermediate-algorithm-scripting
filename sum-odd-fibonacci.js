/*
Given a positive integer num, return the sum of all odd 
Fibonacci numbers that are less than or equal to num.
*/

function sumFibs(num) {
    let fibArr = [1, 1];
    for (let i = 2; i < num; i++) {
        if (fibArr[i - 1] + fibArr[i - 2] <= num) {
            fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
        }
    }
    return fibArr.filter((a) => a % 2 !== 0).reduce((a, b) => a + b);
}
console.log(sumFibs(1000));