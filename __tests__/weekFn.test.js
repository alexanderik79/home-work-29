const weekFn = require('../src/weekFn');

describe('тестування функції weekFn', () => {
  test('перевірка відповідності для тижня до номеру', () => {
    expect(weekFn(1)).toBe('Понеділок');
    expect(weekFn(2)).toBe('Вівторок');
    expect(weekFn(3)).toBe('Середа');
    expect(weekFn(4)).toBe('Четвер');
    expect(weekFn(5)).toBe('П\'ятниця');
    expect(weekFn(6)).toBe('Субота');
    expect(weekFn(7)).toBe('Неділя');
  });

  test('перевірка на некоректний номер дня тижня', () => {
    expect(weekFn(9)).toBe(null);
    expect(weekFn(1.5)).toBe(null);
    expect(weekFn('2')).toBe(null);
    expect(weekFn(0)).toBe(null);
    expect(weekFn(-1)).toBe(null);
  });
});