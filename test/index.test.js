
describe('Indentation Bug', () => {

  test.each`
    a    | b
    ${1} | ${1}
  `('$a == $b', ({ a, b }) => {
    expect(a).toBe(b); // error  Expected indentation of 2 spaces but found 4  indent
  }); // error  Expected indentation of 0 spaces but found 2  indent
});
