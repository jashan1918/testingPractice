function reverseString(str) {

    // let reversedArr = [];
    // for(let i = str.length - 1; i >= 0; i--) {
    //     reversedArr.push(str[i]);
    // }
    // return reversedArr.join('');

    
   return str.split('').reverse().join('');
}

module.exports = reverseString