console.log('#6. JavaScript homework example file')
/*
 * #1
 * Задача: Калькулятор калорійності продуктів через клас.
 * Завдання: Розробити модуль на JavaScript, який імплементує клас CalorieCalculator. Клас має використовувати Map для управління даними про калорійність продуктів. 
 * Необхідно реалізувати наступні функціональності:
 * Додавання продуктів: Метод addProduct приймає назву продукту та його калорійність, додаючи їх до колекції.
 * Отримання калорійності продукту: Метод getProductCalories повертає калорійність продукту за його назвою. Якщо продукт не знайдено, повертає рядок 'Product not found'.
 * Видалення продукту: Метод removeProduct видаляє продукт з колекції за назвою.
 *
 * Критерії перевірки:
 * Клас CalorieCalculator має бути реалізований з використанням ключового слова class.
 * Внутрішнє сховище продуктів має бути реалізоване за допомогою new Map().
 * Наявність методів addProduct, getProductCalories, та removeProduct.
 */
class CalorieCalculator {
  constructor() {
    this.ProductCalorie = new Map();;
  }

  addProduct(productName, calories) {
    this.ProductCalorie.set(productName, calories);
  }
  getProductCalories(productName) {
    // Отримуємо калорійність з Map
    const calories = this.ProductCalorie.get(productName);
     // Перевірка наявності продукту
    return calories !== undefined 
    // Якщо продукт знайдено - повертаємо його калорійність
    ? calories 
    // Якщо не знайдено - повертаємо текстове повідомлення
    : 'Product not found'
  }

  removeProduct(productName) {
    this.ProductCalorie.delete(productName)
  }
}
// Демонстрація використання
const calorieCalculator = new CalorieCalculator()
calorieCalculator.addProduct('Apple', 52)
calorieCalculator.addProduct('Banana', 89)
console.log(calorieCalculator.getProductCalories('Apple')) // 52
document.write(`<br> Калорійність Яблука: ${calorieCalculator.getProductCalories('Apple')} ккал<br>`)
console.log(calorieCalculator.getProductCalories('Banana')) // 89
document.write(`<br> Калорійність Банана: ${calorieCalculator.getProductCalories('Banana')} ккал<br>`)
calorieCalculator.removeProduct('Apple')
console.log(calorieCalculator.getProductCalories('Apple')) // Product not found
document.write(`<br> Калорійність Яблука: ${calorieCalculator.getProductCalories('Apple')} ккал<br>`)
/*

 * #2
 * Задача: Унікальні користувачі.
 * Завдання: Реалізувати модуль на JavaScript у формі класу UniqueUsernames, який використовує Set для збереження унікальних імен користувачів. Клас має надавати можливість:
 * Додавання імен користувачів: Метод addUser дозволяє додати нове ім'я до набору. Якщо ім'я вже існує, воно не буде додано повторно, зберігаючи унікальність імен у наборі.
 * Перевірка наявності імені: Метод exists перевіряє, чи існує задане ім'я серед збережених унікальних імен.
 * Отримання кількості унікальних імен: Метод count повертає кількість унікальних імен, збережених у наборі.
 *
 * Критерії перевірки:
 * Наявність методів addUser, exists, count у класі UniqueUsernames.
 * Використання конструкції class для створення класу UniqueUsernames.
 * Застосування new Set() для внутрішнього сховища імен користувачів у конструкторі класу.
 */
class UniqueUsernames {
  constructor() {
    this.userNames = new Set();
  }

  addUser(name) {
    this.userNames.add(name.toLowerCase()) //Конвертує ім'я в нижній регістр для уникнення реєстрозалежності
  }

  exists(name) {
    return this.userNames.has(name.toLowerCase())//Перевіряє наявність імені в Set
  }

  count() {
    return this.userNames.size;
  }
}
// Демонстрація використання
const uniqueUsernames = new UniqueUsernames()
uniqueUsernames.addUser('john_doe')
uniqueUsernames.addUser('jane_doe')
uniqueUsernames.addUser('john_doe') // Ця дія не змінить набір, оскільки 'john_doe' вже існує
document.write(`<br> Додати john_doe: ${uniqueUsernames.addUser('john_doe')}<br>`)
console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`) // true
document.write(`<br> Чи існує john_doe : ${uniqueUsernames.exists('john_doe')}<br>`)
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`) // 2
document.write(`<br> Кількість унікальних імен: ${uniqueUsernames.count()}<br>`)
// Експорт для використання в тестах
// export { CalorieCalculator, UniqueUsernames }
