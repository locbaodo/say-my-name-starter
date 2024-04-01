const { sayMyName } = require('./');

describe('Test various cases', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('Empty case', () => {
    expect(sayMyName('', '')).toBe('Hi! My name is  ');
  });
  test('John Doe', () => {
    expect(sayMyName('John', 'Doe')).toBe('Hi! My name is John Doe');
  });
  test('when firstName="A" and lastName="B"', () => {
    expect(sayMyName('A', 'B')).toBe('Hi! My name is A B');
  });
  test('when firstName is "A" and lastName is "" ', () => {
    expect(sayMyName('A', '')).toBe('Hi! My name is A ');
  });
  test('when firstName="" and lastName="B"', () => {
    expect(sayMyName('', 'B')).toBe('Hi! My name is  B');
  });
});
