/**
 * Write a function that returns the minimum number of rotations required to unlock a basic number  combination lock. In this case, a rotation is defined as an action that increments one of the numbers by  one. For example, to change a 3 to a 5, you must perform two rotations: 3 to 4 and then 4 to 5. Like a  real number combination lock, the numbers wrap around and it would only take 3 rotations to change an  8 to a 1. Your function should accept two arguments, both arrays comprised of single-digit numbers. The  arrays may contain an arbitrarily large quantity of numbers, but both arrays will always have the same  length. 
For example: 
 [4, 2, 1, 8, 3] & [8, 3, 0, 1, 6] 
 [5, 5, 2, 0, 9, 3, 2, 4] & [5, 1, 8, 4, 9, 2, 0, 0] 
 [3] & [8] 
The first argument is the current state of the lock and the second argument is the unlocking position.  Your function should return a number: the number of rotations needed to change the lock from its  current state to the unlocking position.
For example, if the lock was set at [0, 0, 0] and unlocked with [3, 1, 8] it would take 6 rotations to unlock  the lock: 
 0 🡪 1 🡪 2 🡪 3 | 3 rotations 
 0 🡪 1 | 1 rotation 
 0 🡪 9 🡪 8 | 2 rotations 
 TOTAL: | 6 rotations 

 */

function minRotations(current, unlocked) {
    let rotation = 0;
    let curNum, unlockNum;
    let start = current.join(''),
        code = unlocked.join('')

    console.log(start > 0, code)
    while (start > 0 || code > 0) {
        curNum = start % 10;
        unlockNum = code % 10;

        console.log (curNum, unlockNum)

        rotation += Math.min(Math.abs(curNum - unlockNum), 10 - Math.abs(curNum - unlockNum))

        start = Math.floor(start / 10)
        code = Math.floor(code / 10)
    }
    return rotation;
}

console.log(minRotations([4, 2, 1, 8, 3], [8, 3, 0, 1, 6] ))
console.log(minRotations([0,0,0], [3,1,8] ))
