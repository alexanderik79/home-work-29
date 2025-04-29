const ageClassification = require('../src/ageClassification');

describe('тетстування функції ageClassification', () => {
  test('0 - -infinity', () => {
    expect(ageClassification(-1)).toBe(null);
  });

  // Не знаю як краще тому зробив один тест рандомними числами а інші граничними
  test('1 - 24', () => {
    let testAge;
    for (let index = 0; index < 100; index++) {
        testAge = Math.floor(Math.random(testAge) * (25 - 1) + 1);
        expect(ageClassification(testAge)).toBe('Дитинство');   
        console.log("test age - " + testAge);    
    }
  });

  test('24.01 - 44', () => {
    expect(ageClassification(24.01)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
  });

  test('44.01 - 65', () => {
    expect(ageClassification(44.01)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
  });

  test('65.1 - 75', () => {
    expect(ageClassification(65.1)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
  });

  test('75.01 - 90', () => {
    expect(ageClassification(75.01)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
  });

  test('90.01 - 122', () => {
    expect(ageClassification(90.01)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
  });

  test('122+', () => {
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});