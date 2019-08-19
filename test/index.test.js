
describe('Indentation Bug', () => {

  test.each`
    a    | b
    ${1} | ${1}
  `('$a == $b', ({ a, b }) => {
    expect(a).toBe(b);
  });
});
