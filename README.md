# frontend
Учебные материалы
## js
# JavaScript_36
обучающие материалы

## 36 Урок. Введение в JavaScript.Работа с консолью разработчика,создание переменых.

В браузере вводим **about:blank** ,открываеться пустой домен,открываем инструменты разработчика .

Подключаем **main.js** к **index.html**  в низу **body**.
```
<script src="js/main.js"></script>
```
Вводим в файле **console.log("Текст 1")** и смотрим изменение в консоле.Коментировать с помощью **//** одну строку, а больше   **/*  */**.   
**let и var** переменные. 

Простые комбинации для понимания:
```
let a = 5;
a++;

5
a
6
let b = 4;
++b;

5
b--
5
b
4
--b
3
b+=1
4
b=b+1
5
"str1"+"str2"
'str1str2'
5+"str"
'5str'
5+"2"
'52'  
```

## 37 Урок. Строковый и логический тип данных.

Любая строка имеет в себе символы и каждый символ имеет свой индекс.
Длинная текстовая строка"**.length**    
24 - количество символов .
методы:
* let str = "привет" - задаём переменную.
* str.slice(1,3)  - получаем нужную информацию из переменной.
* str.toLowerCase() - превращает строку в нижний регистр 
* str.toUpperCase() - превращает строку в верхний регистр 
* trim() - убирает лишние пробелы
В цепочке можно записывать методы через точку.

Операторы сравнения
* Больше/меньше: a > b , a < b .
* Больше/меньше или равно: a >= b , a <= b .
*  Равно: a == b . Обратите внимание, для сравнения используется двойной знак равенства == . Один знак равенства a = b означал бы присваивание.
* Не равно. В математике обозначается символом ≠ , но в JavaScript записывается как a !=

## 38 Урок. Шаблонные строки,Случайные числа,Округление чисел.

* \n - перенести строку
* Math.random() - случайное число от нуля до единицы
* Math.max(3,4,2,1) 4 - возращает максимальное значение
* Math.pow(2,5) 32 - возвести число в степень
* Math.sqrt(64) 8 - квадратный корень
* Math.floor(3.9) 3 - округление
* Math.ceil(3.9) 4 - округление к большему целому
* Math.round(3.1) 3 - округление к ближайшему целому
* Math.екгтс(3.9) 3 - отбрасывает дробную часть
* 4.758.toFixed(1) '4.8' - указываем какое цисло будет после запятой
**!Важно**  let a = "5" undefined  a+5  '55'  +a+5  10 - запомнить конкатинацию (+а за счёт плюса спережи превращаеться в число) 

* console.log(randomInteger(1,5)) - рандом с функцией
* console.log(isNumber(1,5)) - проверка числа

## 39 Урок. Массивы.

Пример работы с масивом в консоле:   
```
(4) [5, 2, 'Str', true]0: 51: 22: "Str"3: truelength: 4[[Prototype]]: Array(0)
arr[1]
2
arr[3]
true
arr[2] = Text
ƒ Text() { [native code] }
arr[3] = "Text"
'Text'
arr
(4) [5, 2, ƒ, 'Text']
arr[4] = 7
7
arr
(5) [5, 2, 'Str', true, 7]
```
Создаём массив в масиве:
```
let matrix = [
    [1,2,4],
    [4,7,9],
    [1,0,3]
    ]
undefined
matrix
(3) [Array(3), Array(3), Array(3)]
0: (3) [1, 2, 4]
1: (3) [4, 7, 9]
2: (3) [1, 0, 3]
length: 3
[[Prototype]]: Array(0)
```

* arr[arr.length-3] -Получение данных из массива.
* arr.shift() - брать данные из начала очереди.
* arr.push(8) - отдавать данные в конец очереди.
* arr.pop() - брать последнее значение.
* arr.unshift(6) - отдаём данные в начало очереди.

* arr.concat(arr2) сложить масивы

* let arr3 = arr.concat(arr2) - обазначаем новый масив этими двумя.
* arr.indexOf("Str1") - узнать индекс
* arr.join("") '52Strtrue' - можем добавить всё что угодно в скобках 
* arr.splice - можем добавлять и забирать значения (!ВАЖНО один из самых удобных способов добавления и удаления данных с массива)
* arr.includes("Text") - поиск элементов
* arr.reverse() - поменять задом на перёд элементы
* "q,w,e,r".split()
['q,w,e,r']
0: "q,w,e,r"
length: 1
[[Prototype]]: Array(0 -  .split() создаёт массив, или же разделяет слово через что-то что введём в скобки.

## 40 Урок. Обьекты.

**{ "key1": 99 } где key1 ключ обязательно строковый а 99 значение любого типа.**    
```
let obj = {
    "color": "Tomato",
    "numbers": ["8888", "7777"],
    "checked": true
}
Как вытащить данные:
obj['checked']
true
obj['numbers']
(2) ['8888', '7777']
obj['numbers'][1]
'7777'
```

Объекты не сортированы и могут быть в любой последовательности в отличие от массива.    
добавим объект :    
obj[name] = "Ivan"
'Ivan'
obj
{color: 'Tomato', numbers: Array(2), checked: true, "": 'Ivan'}

## 41 Урок. Диалоговые окна, Условия , Тернарный оператор, Переключатель Switch.

* alert("ЭЭ") - Всплывающее окно.
* prompt("диалоговое окно") - Диалоговое окно с вопросом и поле с вводом данных.
* let age = prompt("какой возраст ?") - Сохранение данных в переменную **age**.
* alert("мой возвраст " + age) - комбинация с выводом. 
 
 Пример комбинации с if и else :
 ```
let age = prompt("Ваш возврат ?")
if(age != null) {
alert("мой возвраст " + age)
} else {
    alert("вы нажали отмену")
}
 ```

 confirm("удалить ваш код?") - диалоговое окно

 Тот же код через оператор switch 

```
switch(true) {
    case age > 18:
        alert("мне бол 18")
        break;
    case age < 18 && age > 0:
        alert("мне мен 18")
        break;
    case age == 18:
        alert("Мне 18 лет")    
        break;
        default:
            alert("no")
}
```

## 42 Урок. Циклы(5 видов).

**while** и **do while** - один из самых популярных
```
let count = 0;
while(count <10) {
    console.log(count);
    count++;
}


let count = 10;
do {
    console.log(count);
    count--;
} while(count>7) 
```
**for** c 2 до 98 .
```
for(let i=0; i<100; i+=2) {
  console.log(i)
}
```
for работа с масивом умножаем на 2 
```
 let arr = [5, 7, 9, 1, 0];
 for(let i=0; i<arr.length; i++) {
  console.log(arr[i]*2)
} 
```

Цикл **for of** :
```
 let arr = [5, 7, 9, 1, 0];
for(let item of arr) {
    console.log(item)
}
```
Цикл **for in** :
```
let obj = {
    "name": "Petr",
    "age": 25,
    "number": 909090909090
}

for(let key in obj) {
    console.log('Ключ ${key}, Значение ${obj[key]}')
}
```
получаем значение всех ключей в этом объекте, цикл for in не рекомендуеться использовать в обычных массивах , потому не те значения.

Метод forEach :
```
let arr = [5, 7, 9, 1, 0];
arr.forEach(function(item, i, array){
    console.log('Элемент: ${item}
    Индекс: ${i}
    Массив: ${array}')
})
```
Метод Map :
```
  let arr = [5, 7, 9, 1, 0];
  let newArr = arr.map(function(item) {
      return item*3
  })
  console.log(newArr)

```
Задания:


1. Выводим массив из четных чисел от 0 до 20 
  let arr = []
  for(let i=0; i<20; i+=2) {
      arr.push(i)
  }
console.log(arr)

2. Выводим массив в убывающем порядке от 30 до 0 и элементы этого масива деляться на 3 без остатка.
 **1 вариант**
  let arr = []
  for(let i=30; i>0; i-=3) {
      arr.push(i)
  }
console.log(arr)
**2 вариант**
  let arr = []
for(let i=30; i>0; i--) {
if(i%3==0) {
    arr.push(i)
  }
}
console.log(arr)

3. Создать массив каждый элемент которого будет равен квадрату его индекса.
let arr = []
for(let i=0; i>10; i++) {
     arr.push(Math.pow(i,2))     
     }
     console.log(arr)

4. Найти колличество чётных элементов в массиве
let arr = []
let arr1 = [7,4,2,1,0,6,2,6,15]
let count = 0;
for(let i=0; i<arr1.length; i++) {
    if(arr1[i]%2==0) {
        count++;
    }
}
console.log(count)
 

43 Урок. Функции и решения 6 задач.    

Передаём значение через функцию:
```
function printText(name, age) {
    console.log("hello my name is "+name+", Age: "+age)
}
printText("Petr", 15 );
printText("Petr", 95 );
printText("Petr", 5 );
printText("Petr", 11 );
```
Через переменные
```
function printText(name, age) {
    console.log("hello my name is "+name+", Age: "+age)
}
let name = "aza"
let age = 2
printText("Petr", 15 );
printText(name, age );
printText("Petr", 5 );
printText("Petr", 11 );
```
С помощью return
```
function printText(name, age) {
    return "hello my name is "+name+", Age: "+age
}
let name = "aza"
let age = 2
console.log(printText("Petr", 15 ));
console.log(printText(name, age ));
console.log(printText("Petr", 5 ));
console.log(printText("Petr", 11 ));
```

Засовываем функцию в пеменную 
```
function printText(name, age) {
    return "hello my name is "+name+", Age: "+age
}
let name = "aza"
let age = 2

let res = printText(name, age );
alert(res)
```

Создаём обьект и в нём метод.
```
let obj = {
    name: "ivan",
    age: 18,
    hello() {
        console.log("Меня зовут "+this.name)
    }
}
obj.hello()
```

Сортировка по возрастанию в массиве:
```
let arr = [1,4,2,32,4543,3,2,7,8]
arr.sort(function(a,b){
    if(a==b) return 0
    if(a>b) return 1
    if(a<b) return -1

    или 
    return a-b
})
console.log(arr)
```
Числа Фибоначчи - https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8
Выводим с помочью функции до 15-ти:
```
function fib(count) {
    let fib = []
    for(let i=0; i<count; i++) {
        if(i==0) fib[i] = 1;
        else if(i==1) fib[i] = 2;
        else fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
}
let f = fib(15)
console.log(f)
```
Вычисляем факториал числа - https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB
```
function fac(n){
    let fact = 1;
    if(n==0) return fact;
    for(let i=1; i<=n; i++) {
        fact *= i;
    }
    return fact;
}
let a = fac(0)
console.log(a)
let b = fac(3)
console.log(b)
let c = fac(8)
console.log(c)
```
Функция
Где в add переплюсование числа 795 а mul перемножение .
add 7+9+5=21
mul 7 * 9 * 5 = 315
```
let addAndMul = function(num) {
    num += "";
    let add = 0, mul = 1;
    for(let i = 0; i<num.length; i++) {
        add += +num[i];
        mul *= num[i];
    }
    return {
        "Сумма": add,
        "Произведение": mul
    }
}
console.log(addAndMul(795))
```
Конвертируем все цифры числа из 3486 в 6843.
```
function reverse(number) {
    number += "";
    let reverseNumber = "";
    for(let i=number.length-1; i>=0; i-- ) {
        reverseNumber += number[i]
    }
    return +reverseNumber
}

console.log(reverse(3486))
```

Узнаём кол-во чётных и нечетных цифр. result - 9-четных и 7 нечётных
```
function number(number) {
    number += "";
    let chet = 0, nechet = 0;
    for(let i = 0; i<number.length; i++) {
        if(number[i] % 2 == 0) chet++;
        else nechet++;
    }
    return {
        "четные": chet ,
        "не чётные": nechet,
    }
}

console.log(number(1216789644532526))
```

randomaizer от 0 до 100
```
function randomNumber() {
    let number = Math.floor(Math.random()*100);
    for(let count=1; count<=10; count++) {
        let result = +prompt('Попытка №${count}, Введите число:')
        if(result == number) {
            return alert('Вы угадали число! Попыток: ${count}, Число: ${number}')
        } else if(result < number) {
            alert('Ваше число ${result}, меньше загаданного!')
        } else if(result > number) {
            alert('Ваше число ${result}, болльше загаданного!')
     }
    }
    return alert('Вы не угадали число! Число: ${number}')
}
randomNumber()
```

Урок 44. Работа с датой и временем.

**date.jpg**

1. Шпаргалка по работе с датой и временем от ITDoctor
https://yadi.sk/i/DeXmdtyb7LcFtg
https://drive.google.com/file/d/1nkaZO_E9PNvW8UK15lvnr3nct30EwSqb/view?usp=sharing

2. Работа с датой и временем
https://learn.javascript.ru/datetime

3. Интернационализация в JavaScript
https://learn.javascript.ru/intl

4. Библиотека moment.js для работы с датой и временем
https://momentjs.com

Урок 45. Документация кода на JSDoc и Исключения.

Прописываем документацию к своим функциям.
```
/**
 * Функция преобразует строку с временем в минуты
 * @param {string} time время в виде строки, например "02:04" . Может быть в диапозоне от "00:00" до "23:59" .
 * @return {number} целое число в минутах. Например time="02:08" вернет 128.
 */
function timeToMinute(time) {

}
timeToMinute()
```
Метод проверки на ошибку try & catch.
```
function timeToMinute(time) {
    try {
        let hour = +time.split(":")[0]
        let min = +time.split(":")[1]
        if( !(hour>=0 && hour<=23) || !(min>=0 && min<=59))
        {
            throw new RangeError("Ошибка времени")
        }
        return hour*60+min
    } catch(error) {
        console.log(error)
    }
}
console.log(timeToMinute("24:28"))
```