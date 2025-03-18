describe('Test Server is running', () => {
    test('check "Hello, World!" is printed in console', () => {
        const consoleLog = jest.spyOn(console, 'log');
        console.log('Hello, World!');
        expect(consoleLog).toHaveBeenCalledWith('Hello, World!');
    });
});
