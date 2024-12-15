console.log('#8. JavaScript homework example file')

/*
 * #1
 *
 * Задача: Створення та додавання DOM-елемента до вказаного контейнера
 * Мета: Розробити функцію createDomElement, яка приймає назву тега, текстовий вміст та контейнер, до якого потрібно додати новий елемент. Функція створює новий елемент з вказаним тегом та текстовим вмістом і додає цей елемент до заданого контейнера.
 *
 * Вимоги:
 * 1. Функція має приймати три параметри:
 *    - tagName - рядок, що вказує на назву тега нового елемента.
 *    - textContent - рядок, що вказує на текстовий вміст нового елемента.
 *    - container - DOM-елемент, до якого буде додано новий створений елемент.
 * 2. Функція має створити новий DOM-елемент з вказаним тегом і текстовим вмістом.
 * 3. Створений елемент має бути доданий до вказаного контейнера.
 * 4. Функція повертає посилання на створений елемент, що дозволяє подальшу взаємодію з ним.
 * 5. Функція має бути експортована для використання в інших модулях та тестування.
 */

function createDomElement(tagName, textContent, container) {

  // створення елементу "в даному випадку створюємо параграф"
  const el = document.createElement(tagName); 

  //додаю через властивість textContent 
  el.textContent = textContent; 

  // додавання елементу в контейнер  
  container.appendChild(el); 
  return el;
}



// В якості прикладу використовуємо body як контейнер
const container = document.body 
console.log(createDomElement('p', 'This paragraph has been added to the specified container.', container))

/*
 * #2
 *
 * Задача: Встановлення cookie з корисною інформацією на 10 секунд
 * Мета: Розробити функцію setUserInfoCookie, яка встановлює cookie з ім'ям userInfo та значенням у форматі "ключ=значення", яке зберігає корисну інформацію про користувача (наприклад, обрану мову інтерфейсу) та має термін дії 10 секунд. Значення cookie повинно бути відповідно закодовано для безпечного зберігання у веб-браузері.
 *
 * Вимоги до функції:
 *
 * 1. Функція приймає два аргументи: key (назва інформаційного параметра) та value (значення параметра).
 * 2. Функція кодує значення параметра для коректного зберігання у cookie.
 * 3. Функція встановлює cookie userInfo з закодованим значенням "ключ=значення" та встановлює термін його дії на 10 секунд.
 * 4. При встановленні cookie, функція виводить інформаційне повідомлення у консоль про успішне зберігання даних.
 */

// setUserInfoCookie.js

function setUserInfoCookie(key, value) {

  // Функція кодує значення gпараметра в кукі, кодуємо(НЕ ШИФРУВАННЯ) ключ-значення в якому воно повино виглядати.                    
  const encoded = encodeURIComponent(`${key} = ${value}`); 
  const date = new Date();

  //Налаштовую для cookie термін дії  10 секунд
  date.setTime(date.getTime() + 10 * 1000); 
  const cookieString = `userInfo=${encoded}; expires=${date.toUTCString()}; path=/`;
  document.cookie = cookieString;


  console.log(`Cookie: ${cookieString}`) 
  document.write(`<br> Cookie: ${cookieString}   <br>`) 
}


setUserInfoCookie('language', 'en');



/*
 * #3
 *
 * Задача: Робота з sessionStorage для зберігання та отримання даних користувача
 * Мета: Створити дві функції, saveUserInfo і getUserInfo, для взаємодії з sessionStorage. Перша функція повинна зберігати інформацію про користувача, а друга - отримувати її. Крім того, обидві функції повинні виводити відповідні повідомлення у консоль про успішне збереження або отримання даних.
 *
 * Вимоги до saveUserInfo:
 *
 * 1. Функція приймає два параметри: ключ (key) та значення (value).
 * 2. Зберігає пару ключ-значення в sessionStorage.
 * 3. Виводить у консоль повідомлення формату "Saved key: value".
 *
 * Вимоги до getUserInfo:
 *
 * 1. Функція приймає один параметр: ключ (key).
 * 2. Отримує значення за вказаним ключем з sessionStorage.
 * 3. Виводить у консоль повідомлення формату "Retrieved key: value", де value - це значення, отримане з sessionStorage.
 * 4. Повертає значення отримане з sessionStorage.
 */

function saveUserInfo(key, value) {

  // зберігання в sessionStorage 
  sessionStorage.setItem(key, value) 
}

function getUserInfo(key) {

  // Провірка елементу по ключу, якщо не зщнайден  виведе `Ключ не знайдено` якщо знайден виведе його
  if(sessionStorage.getItem(key) === null) return `Ключ не знайдено`; 
  return `Retrieved key (${key}): ${sessionStorage.getItem(key)}`
}

saveUserInfo('username', 'JohnDoe');
console.log(getUserInfo('username'))
document.write(`<br>` + getUserInfo('username') + `<br>`) 
console.log(getUserInfo('usernamee'))
document.write(`<br>` + getUserInfo('usernamee') + `<br>`)

// export { createDomElement, setUserInfoCookie, saveUserInfo, getUserInfo }
