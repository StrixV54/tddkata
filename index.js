function add(numbers) {
    if (!numbers) return 0;
    return String(numbers)?.split(/[,\n]/)?.reduce((acc, curr) => acc + +curr, 0);
}

console.log(add('7\n6,3,4'));

module.exports = { add };
