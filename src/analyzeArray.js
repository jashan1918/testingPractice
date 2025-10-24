function analyzeArray (arr) {

    //if array is empty then thrwo an error
    if(arr.length === 0) throw new Error("Array cannot be empty")

    //find the average
    let avg;
    let sum = 0;
    let min = arr[0];
    let max = arr[0];

    arr.forEach((e) => {
        sum += e;
        if(e < min) {
            min = e;
        }

        if(e > max) {
            max = e;
        }
    })
    avg = sum / arr.length;

    //find the min

    const obj = {

        average: avg,
        min: min,
        max: max,
        length: arr.length
    }

    return obj;

}

module.exports = analyzeArray