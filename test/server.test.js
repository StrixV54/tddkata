const { add } = require('..');

describe('Test Add Function', () => {
    test('should return 0 for an input of "" (empty string)', () => {
        let result = add('');
        expect(result).toBe(0);
    });
    test('should return 1 for an input of "1"', () => {
        let result = add('1');
        expect(result).toBe(1);
    })
    test('should return 6 for an input of "1,5"', () => {
        let result = add('1,5');
        expect(result).toBe(6);
    })
    test('should return 94136 for an input of "54,89,5325,88668"', () => {
        let result = add('54,89,5325,88668');
        expect(result).toBe(94136);
    })
    test('should return 72222221 for an input of "5555555,66666666"', () => {
        let result = add('5555555,66666666');
        expect(result).toBe(72222221);
    })
    test('should return -1 for an input of "-5,5,3,-4"', () => {
        // let result = add('-5,5,3,-4');
        // expect(result).toBe(-1);
        expect(() => add('-5,5,3,-4')).toThrow("Negative number not allowed -5, -4");
    })
    test('should return 20 for an input of "7\n6,3,4"', () => {
        let result = add('7\n6,3,4');
        expect(result).toBe(20);
    })
    test('should return 10 for an input of "//;\n1;2;7"', () => {
        let result = add('//;\n1;2;7');
        expect(result).toBe(10);
    })
    test('should return 10 for an input of "//;;\n1;;2;;7"', () => {
        let result = add('//;;\n1;;2;;7');
        expect(result).toBe(10);
    })
    test('should return error message printing negative numbers for an input of "//;\n1;2;-3;4;-6;7"', () => {
        expect(() => add('//;\n1;2;-3;4;-6;7')).toThrow("Negative number not allowed -3, -6");
    })
});
