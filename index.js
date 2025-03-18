function add(numbers) {
    if (!numbers) return 0;
    // storing delimiters in array for scalability
    let delimiters = [',', '\n'];
    // checking for custom delimiters with pattern : "//[delimiter]\n[numbers…]"
    if (String(numbers).startsWith('//') && String(numbers).includes('\n')) {
        delimiters.push(String(numbers).slice(2, String(numbers).indexOf('\n')));
        numbers = numbers.slice(String(numbers).indexOf('\n'));
    }
    let negativeNumbers = [];
    let separatedNum = String(numbers).split(new RegExp(delimiters.join('|')));
    // checking and storing for negative numbers
    for (let num of separatedNum) {
        if (+num < 0) negativeNumbers.push(num);
    }
    if (negativeNumbers.length > 0)
        throw new Error("Negative number not allowed " + negativeNumbers?.join(', '));
    return separatedNum?.reduce((acc, curr) => {
        return acc + +curr
    }, 0);
}

// console.log(add('//;\n1;2;-3;4;-6;7'));

module.exports = { add };
