console.log('ДЗ #1 з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
let myNum = 10;
document.write ("<br>" + 'myNum: ' + myNum + "<br>");
console.log(myNum);

// ім'я змінної: myStr, значення: 'some string'
let myStr = 'some string text';
document.write ("<br>" + 'myStr: ' + myStr + "<br>");
console.log(myStr);

// ім'я змінної: myBool, значення: true
let myBool = (true && true);
document.write ("<br>" + 'myBool: ' + myBool + "<br>");
console.log(myBool);

// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
let myArr = [1, 2, 3, 4, 5];
document.write ("<br>" + 'myArr: ' + myArr + "<br>");
console.log(myArr);

// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
let myObj  = {};
myObj.first ='Anthony';
myObj.last ='Nazimenko';
document.write ("<br>" + 'first: ' + myObj.first + "<br>");
document.write ( 'last: ' + myObj.last + "<br>");
console.log(myObj);

/*
 * #2
 * 
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
let decimal2 = parseFloat(myNum).toFixed(2);
document.write("<br>" + 'Task 2: decimal2 = ' + decimal2 + "<br>")
console.log(decimal2)
// decimal2

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */
let c = ++myNum;
document.write("<br>" +'preFixIn'+"<br>" +c + "<br>" + myNum + "<br>")

let d = myNum++;
document.write('postFixIn'+"<br>" + d + "<br>" + myNum + "<br>")

let e = myNum--;
document.write('postFixDis'+"<br>" + e + "<br>" + myNum + "<br>")

let f = --myNum;
document.write('preFixDis'+"<br>" + f + "<br>" + myNum + "<br>")

console.log(c, d, e, f, myNum)
// i

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
let myTest = 20;
document.write("<br>" + myTest  + '+' +   myNum);
console.log(myTest, myNum)
myTest += myNum;
console.log(myTest)
document.write("=" + myTest + "<br>");

    myTest = 20;
document.write("<br>" + myTest  + '-' +   myNum);
console.log(myTest, myNum)
myTest -= myNum;
console.log(myTest)
document.write("=" + myTest + "<br>");

    myTest = 20;
document.write("<br>" + myTest  + '*' +   myNum);
console.log(myTest, myNum)
myTest *= myNum;
console.log(myTest)
document.write("=" + myTest + "<br>");

    myTest = 20;
document.write("<br>" + myTest  + '/' +   myNum);
console.log(myTest, myNum)
myTest /= myNum;
console.log(myTest)
document.write("=" + myTest + "<br>");

    myTest = 20;
document.write("<br>" + myTest  + '%' +   myNum);
console.log(myTest, myNum)
myTest %= myNum;
console.log(myTest)
document.write("=" + myTest + "<br>");
// myTest
// +=
// –=
// *=
// /=
// %=

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */
let myPi = 10;
let circumference = 2 * Math.PI * myPi;
console.log(circumference);
document.write("<br>"+ circumference + "<br>");
circumference = circumference.toFixed(2);
console.log(circumference);
document.write("<br>"+ circumference + "<br>");

function getRandomInt(min, max) {
    return Math.random() * (max - min);
}
myRandom = getRandomInt (1, 10).toFixed(0);
console.log(myRandom);
document.write("<br>"+  myRandom + "<br>");

let myPow = {};
    myPow = Math.pow(3, 5)
console.log(myPow,"чи це потрібно було просто let myRandom = Math.random() , myPow = Math.pow(3.5)?");
document.write("<br>"+  myPow + "<br>");
// let myRandom = Math.random();
// 
// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */
let str = 'Мама мила раму, рама мила маму'
let strObj = {
    str: str,
    length: str.length
}
console.log(strObj, length, str)
document.write("<br>" +  'strObj = '+  strObj.str + "<br>" + 'length = ' + strObj.length + "<br>");
// Мама мыла раму, рама мыла маму
// strObj

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */
let isRamaPos = str.indexOf("рама");
let isRama = (isRamaPos == 16);
console.log(isRamaPos, isRama);
document.write("<br>" +  isRamaPos + "<br>" + isRama + "<br>");
// isRamaPos
// isRama

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */
let strReplace = str.replace('мила', 'миє');
console.log(strReplace.replace('мила', 'тримає'));

strReplace = strReplace.replace('мила', 'тримає');
document.write("<br>" +  strReplace +  "<br>");
// strReplace

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */
document.write("<br>" + str.toUpperCase() + "<br>")
console.log(str.toUpperCase())
document.write("<br>" + str.toLowerCase() + "<br>")
console.log(str.toLowerCase())

