const returnTrue = () => true;

describe('returnTrue', () => {
  test('should return true as a boolean', () => {
    expect(returnTrue()).toBe(true);
    expect(returnTrue()).toBe(true);
    expect(returnTrue()).toBe(true);
  });
});
