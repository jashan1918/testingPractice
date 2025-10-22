function capitalize(str) {

    if(str === "") return ""

    if(typeof str != "string")  {
        throw new Error("Input must be a string")
    }

    const result = str[0].toUpperCase() + str.slice(1);
    console.log(result);

    return result;
}

module.exports = capitalize