/**
 * Update your answer to the previous question to account for locks with arbitrary characters in place of the  numbers 0-9. The characters should be accepted as a third character set array, comprised of at least two  strings. The character set array is ordered and should contain only unique values. Just like with numbers,  you should be able to wrap around from one end of the array to the other. The first two arrays should  
contain only elements that appear in the character set array. 
For example if your function is provided with the following arguments: 
 Starting point: ['*', '#', '+'] 
 Unlocking combination: ['+', 'i', '{\}'] 
 Character set: ['!', '+', '*', ')', 'i', '=', '{\}', '#'] 
Then the result should be 7 rotations, as demonstrated below:  
 * 🡪 + | 1 rotation 
 # 🡪 {\} 🡪 = 🡪 i | 3 rotations 
 + 🡪 ! 🡪 # 🡪 {\} | 3 rotations 
 TOTAL: | 7 rotation

 */

function alienRotations(current, unlocked, key) {
    let rotation = 0;
    let curNum, unlockNum;
    let start = current.join(''),
        code = unlocked.join('')
    let keyObj = {}
    // console.log(start > 0, code)

    key.forEach((symbol, i) => {
        keyObj[symbol] = i
        i++
    })
    for (symbol in current) {
        if (keyObj.includes(symbol)) {
            symbol = keyObj[symbol]
        }
        console.log(symbol)
    }
    console.log(keyObj)
    while (start > 0 || code > 0) {
        curNum = start % 10;
        unlockNum = code % 10;

        // console.log(curNum, unlockNum)

        rotation += Math.min(Math.abs(curNum - unlockNum), 10 - Math.abs(curNum - unlockNum))

        start = Math.floor(start / 10)
        code = Math.floor(code / 10)
    }
    return rotation;


}

console.log(alienRotations(['*', '#', '+'], ['+', 'i', '{\}'], ['!', '+', '*', ')', 'i', '=', '{\}', '#']))

