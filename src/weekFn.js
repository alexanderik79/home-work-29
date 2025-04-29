// 3. Тестування функції weekFn(cond): Напишіть тести для функції weekFn(cond), 
// що повертає назву дня тижня за заданим числом. 
// Тест повинен переконатися, що функція коректно повертає назви для чисел від 1 до 7, 
// та повертає null для невідповідних значень (наприклад, 9, 1.5, '2').

function weekFn(cond) {
    let str = ''
    
    switch (cond) {
    case 1:
      str = 'Понеділок'
      break
    case 2:
      str = 'Вівторок'
      break
    case 3:
      str = 'Середа'
      break
    case 4:
      str = 'Четвер'
      break
    case 5:
      str = 'П\'ятниця'
      break
    case 6:
      str = 'Субота'
      break
    case 7:
      str = 'Неділя'
      break
    default:
      str = null
    }
    
    return str
    }
    
    // console.log(weekFn(1))   // 'Понеділок'
    // console.log(weekFn(3))   // 'Середа'
    // console.log(weekFn(7))   // 'Неділя'
    // console.log(weekFn(9))   // null
    // console.log(weekFn(1.5)) // null
    // console.log(weekFn('2')) // null
    

    module.exports = weekFn;