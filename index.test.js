const { getTriangleArea } = require('./');

describe('Test various cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when getTriangleArea(10, 6)', () => {
    expect(getTriangleArea(10, 6)).toBe(30);
  });
  test('when getTriangleArea(5, 8)', () => {
    expect(getTriangleArea(5, 8)).toBe(20);
  });
  test('when getTriangleArea(0, 8)', () => {
    expect(getTriangleArea(0, 8)).toBe(0);
  });
  test('when getTriangleArea(3, 4)', () => {
    expect(getTriangleArea(3, 4)).toBe(6);
  });
  test('when getTriangleArea(4, 3)', () => {
    expect(getTriangleArea(4, 3)).toBe(6);
  });
});
