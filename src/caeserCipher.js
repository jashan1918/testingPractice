function caeserCipher(str, shift) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let result = "";

    for(let i = 0; i < str.length; i++) {

        let upperCaseFlag = 0;
        //get the aplhabet
        let letter = str[i];

        //check if the letter is upperCase
        if (letter === letter.toUpperCase()) {
            upperCaseFlag = true
            letter = letter.toLowerCase();
        }

        //get the index of the letter in the alphabet array
        const oldIndex = alphabet.indexOf(letter);

        //get the new index of the array so you can get the letter from the alphabet string
        const newIndex = (oldIndex + shift) % 26;

        //check if the letter is not an alphabet

        if(!alphabet.includes(letter)) {
            result += str[i];
            continue;
        }

        if(upperCaseFlag) {
            result += alphabet[newIndex].toUpperCase();
        }
    else {
        result += alphabet[newIndex];
}
        
    }

    return result;

}

module.exports = caeserCipher