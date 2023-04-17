function sortPopulation(population) {
    let newArr1 = [];
    // console.log(typeof population)
    for (let i = population.toString().length; i > 0; i -= 3) {
        let newStr;
        if (i === 2) {
            newStr = population.toString().slice(i - 2, i)
            newArr1.unshift(newStr)
        } else if (i === 1) {
            newStr = population.toString().slice(i - 1, i)
            newArr1.unshift(newStr)
        } else if (i === 0) {
            newStr = population.toString().slice(i, 0)
            newArr1.unshift(newStr)
        }
        else {
            newStr = population.toString().slice(i - 3, i)
            newArr1.unshift(newStr)
        }
        // console.log("pop ", newArr1)
    }
    return newArr1.toString();
}
export default sortPopulation;