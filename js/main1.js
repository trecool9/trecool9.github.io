console.log('#9. JavaScript homework example file')

/*
 * #1
 *
 * Задача: Відстежування кліку на кнопку та виведення повідомлення
 * Мета: Розробити функцію, яка призначає обробник події кліку на кнопку з певним ID і виводить у консоль заздалегідь визначене повідомлення при кожному кліку на кнопку.
 *
 * Вимоги:
 * 1. Функція має приймати два параметри:
 *    - buttonId (рядок) - ID кнопки, на яку потрібно встановити обробник події.
 *    - message (рядок) - повідомлення, яке буде виводитись у консоль при кліку на кнопку.
 * 2. Функція має знайти кнопку за допомогою buttonId і призначити їй обробник події кліку.
 * 3. При кліку на кнопку у консоль має виводитись задане message.
 * 4. Функція має бути експортована для подальшого використання і тестування.
 *
 */

function handleButtonClick(buttonId, message) {
  
  // Знаходить кнопку по її ID
  const button = document.getElementById(buttonId);

  // Перевіряє чи існує кнопка, якщо ні виведе помилку (повідомлення)! - це оператор логічного заперечення (NOT) в JavaScript.
  // Коли  ! перед змінною або виразом, це означає "протилежне значення" або "інверсію":
  if (!button) {
    console.error(`Кнопка з ID "${buttonId}" не знайдена.`);
    return;
  }

  // Додаю обробник події кліку
  button.addEventListener('click', () => {

    // Виводимо повідомлення у консоль при кліку
    console.log(message);
  })
}
handleButtonClick('myButton', 'Button clicked!');
// export default handleButtonClick;

/*
 * #2
 *
 * Задача: Розробка функції відстеження позиції курсору миші
 * Мета: Створити функцію trackMousePosition, яка встановлює обробник події для відстеження руху миші по документу та виводить в консоль координати курсору миші (X та Y).
 *
 * Вимоги до реалізації:
 * 1. Функціональність: Функція має відслідковувати рух миші по документу. При кожному русі миші функція має виводити в консоль координати clientX та clientY, які представляють позицію курсору відносно вікна переглядача.
 * 2. Реєстрація обробника події: Функція має використовувати document.addEventListener для реєстрації обробника події mousemove.
 * 3. Вивід даних: При спрацьовуванні події mousemove, функція має виводити рядок у форматі `"Mouse X: [X], Mouse Y: [Y]"`, де `[X]` та `[Y]` - це відповідні координати курсору миші.
 *
 */

function trackMousePosition() {

  // Додаю обробник події руху миші до документа
  document.addEventListener('mousemove', (event) => {

    // Отримую координати курсору миші 
    const x = event.clientX;
    const y = event.clientY; 

    // Вивожу координати в консоль 
    console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
  })
}

// Вивожу результат в консоль
console.log(trackMousePosition())

/*
 * #3
 *
 * Задача: Реалізація делегування подій для відстеження кліків на елементах списку
 * Мета: Створити функцію setupEventDelegation, яка дозволить встановити обробник подій на весь список, замість окремих елементів `<li>`. Функція повинна відстежувати кліки на елементах <li> у межах заданого списку і логувати текст "Item clicked: [Текст Елемента]", де "[Текст Елемента]" - це текст клікнутого елемента `<li>`, в консоль.
 *
 * Вимоги до реалізації:
 * 1. Вибір елемента списку: Функція повинна приймати селектор CSS як аргумент, що вказує на елемент списку `<ul>` або `<ol>`, до якого буде застосовано делегування подій.
 * 2. Встановлення обробника подій: Використовуючи метод addEventListener, функція має додати обробник для події `click` на весь список. Обробник повинен спрацьовувати при кліку на будь-який з елементів `<li>` у цьому списку.
 * 3. Логування кліків: Коли елемент <li> клікнуто, функція має вивести у консоль повідомлення у форматі "Item clicked: [Текст Елемента]", де "[Текст Елемента]" має бути текстом клікнутого елемента <li>. Текст елемента має бути обрізаним trim(), щоб видалити зайві пробіли на початку та в кінці.
 *
 */

// function createTestList() {
//   document.body.innerHTML = `
//     <ul id="testList">
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//     </ul>
//     `
// }
// createTestList()

function setupEventDelegation(selector) {

  // Знахожу список за переданим селектором document.querySelector() - це метод, який:
  // Шукає перший елемент, що відповідає CSS-селектору
  // Повертає цей елемент або null, якщо нічого не знайдено
  const list = document.querySelector(selector);

  // Провіряє чи інсує список 
  if (!list) {
    console.error(`Список з селектором "${selector}" не знайдено.`)
    return;
  }
  // Додаю обробник події 

  list.addEventListener('click', (event) => {

    // Провіряю , чи клік відбувся по елементу <li>
    const clickedItem = event.target.closest('li');

    // Якщо клік не по <li>, виходимо з функції
    if (!clickedItem) return;

    // Отримуємо текст елемента і обрізаємо зайві пробіли за допомогою методу trim() 
    const itemText = clickedItem.textContent.trim();
    
    // Виводимо повідомлення в консоль
    console.log(`Item clicked: ${itemText}`);
  })
}
setupEventDelegation('#testList')

// Експорт функції для використання та тестування
// export { handleButtonClick, trackMousePosition, setupEventDelegation }
