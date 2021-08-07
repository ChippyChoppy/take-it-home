/**
 * Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits  of the previous element. The sequence ends once an element that has already been in the sequence  appears again. 
Write a function that accepts one argument, the first element a0, and returns the length of the sequence. Example: 
For a0 = 16, the function should return 9 
a0 = 16 
a1 = 1^2 + 6^2 = 37 
a2 = 3^2 + 7^2 = 58 
a3 = 5^2 + 8^2 = 89 
a4 = 8^2 + 9^2 = 145 
a5 = 1^2 + 4^2 + 5^2 = 42 
a6 = 4^2 + 2^2 = 20 
a7 = 2^2 + 0^2 = 4 
a8 = 4^2 = 16, which has already occurred before (a0) Thus, there are 9 elements in the sequence. 

 */

function strangeSeq(a0) {

    let squaredArray=[a0];
    for(let i = 0; ;i++) {
        let n = squaredArray[i].toString().split('').reduce((a,b) => a+(b*b),0)
        if (squaredArray.includes(n)){break}
        else squaredArray.push(n)
    }
    return squaredArray.length+1
}

console.log(strangeSeq(16))