# Frontend
Учебные материалы

# 04 Основы языка JavaScript

## 36 Урок. Введение в JavaScript. Работа с консолью разработчика, создание переменых.

**Java-script** позволяет нам создавать различные элементы на страницы, добавлять интерактивность, слайдеры, галереии и прочие элементы современных сайтов.

В браузере вводим **about:blank**, открываеться пустая строка, открываем инструменты разработчика.

Работаем во вкладке **console**, а во вкладке **sources** можем посмотреть все файлы сайта.

Цифровые значения расчитываються как в обычном калькуляторе.
```
5*5
25
```
**shift+enter** - переход на новую строку.    
**enter** - выполнить команду.    
**ctrl+l** - очистить консоль.    

Подключаем **main.js** в **index.html**  внизу **body**.
```
<script src="js/main.js"></script>
```
Рассмотрим первую функцию, вводим в файле **console.log("Текст 1")** и смотрим изменение в консоле.   
В консоле видим вывод:
```
 Текст 1   main.js:1
 ```
Справа видим название файла, а через двоеточие номер строки.

Если мы запишем:
```
console.log(6+7);
```
В консоле выполниться математическое выражение:
```
13
```
а если тоже самое в кавычках:
```
console.log("6+7");
```
то просто выводиться текст.
```
6+7
```

Кавычки одинаково работаю как двойные так и одинарные.   
Коментировать в Java-script с помощью **//** одну строку, а больше  /* **текст** */.   

Переменная - это область памяти в которой может храниться чего либо, что бы обазначить переменную пишем **let** или **var** и указываем ей название.

Название переменной не может начинаться с цифры.

Указываем переменную:
```
let a = 5;    
```  
```
a++;
5
a
6
```
```
++a
6
a
6
```
**a++** мы видим старое значение, 
**++а** мы видим сразу новое.

Создаём переменную:
```
let b = 4;
```
```
b--
4
b
3
```
```
--b
3
b
3
```
так же и для минус.


Так же быстро складываем.
```
b+=1
5
b=b+1
6
b=b+4
10
```
Две строки в кавычках складываются при сложение.    
В ковычках указываеться строка **"строка"**.
```
"str1"+"str2"
'str1str2'
```

Число складываеться со строкой, даже если это цифра.
```
5+"str"
'5str'

5+"2"
'52'  
```

## 37 Урок. Строковый и логический тип данных.

##### Строковый тип данных.

Работаем в консоле.     
Создаём переменную:   
```
let str = "Привет";
```

После ввода в консоль переменной **str.** у нас появляеться подсказка, различные свойства, способы манипуляции с переменной.
```
str.length
6
```
**length** - пишет длинну строки.

Также можем применять к любой строке.
```
"любая строка".length
12
```
Проверка индекса в нашей переменной **str**.
```
str[0]
'П'
str[1]
'р'
str[2]
'и'
str[3]
'в'
str[4]
'е'
str[5]
'т'
```

Любая строка имеет в себе символы и каждый символ имеет свой индекс, все индексы начинаються с **0**.

Что бы получить последний символ запишем:
```
str[str.length-1]
'т'
str[str.length-2]
'е'
str[str.length-3]
'в'
```
   
**let str = "привет"** - задаём переменную.  
свойство:    
**str.length** что бы узнать длину строки.     
**str.slice(1,3)**  - получаем нужную информацию из переменной.     
Где 1-это стартовая точка , а 3-конечная.     
```
str.slice(1,3)
'ри'
srt.slice(1)
'ривет'
```
**str.toLowerCase()** - превращает строку в нижний регистр.
```
let str = "Привет";
str.toUpperCase()
'ПРИВЕТ'
str.toLowerCase()
'привет'
```
**str.toUpperCase()** - превращает строку в верхний регистр.   


**trim()** - убирает лишние пробелы в начале и в конце.
```
let str = "   Привет  ";
undefined
text.toUpperCase().trim()
'ПРИВЕТ'
```


В цепочке можно записывать методы через точку.

Например:
```
let text = "  ПРивEт  ";
```
**undefined** - обозначаем переменную **text**.
```
text.toLowerCase().trim() //
```
'привет'  - переводим в нижний регистр и убираем пробелы.
```
let text1 = text.toLowerCase().trim() // привет
```
Обозначаем новую переменную **text1**.
```
str1[0].toUpperCase()+text1.slice(1) // Привет
```
В переменной **str1** нулевой индекс **[0]** делаем **toUpperCase()** (это первая буква П) и плюсуем **str1.slice(1)**(ривет).


##### Логический тип данных.

**&&** - Амперсанд логический знак "и".
```
true && true
true
```
```
true && false
false
```
```
false && true
false
```

**||** - Знак "или" в отличие от амперсанд работает наоборот.
```
false||false
false
```
```
false||true
true
```
```
true||false
true
```

**!** - Оператор "не".
```
!false
true
```
```
!true
false
```
**==** - оператор равенство.
```
7=="7"
true
```
**===** - строгое равенство по типу данных.
```
7==="7"
false
```
**!=** - не равны.
```
7!="6"
true
```
```
7!="7"
false
```
**!==** - более строгое сравнение по типу данных.
```
7!=="7"
true
```
```
7!==7
false
```
Операторы сравнения:
* Больше/меньше: a > b , a < b .
* Больше/меньше или равно: a >= b , a <= b .
*  Равно: a == b . Обратите внимание, для сравнения используется двойной знак равенства == . Один знак равенства a = b означал бы присваивание.
* Не равно. В математике обозначается символом ≠ , но в JavaScript записывается как a !=.

## 38 Урок. Шаблонные строки, случайные числа, округление чисел.

Открываем в браузере **index.html** и в текстовом редакторе переходим в файл **main.js**.    
Если введём:
```
console.log("Text
on 2 line" + a ); // ошибка
```
Консоль выведет ошибку, а если весь текст обернуть в верхние кавычки **`**.
```
console.log(`Texton 2
 line" + a `);
```
Консоль выведет так как мы задумывали на другой строке.
```
Texton 2
 line" + a 
```
В этих скобках мы можем использовать встраевымаи переменные.   
**`${}`**- можем выводить переменную.     
Пишем в файле:
```
let a = 7;
console.log(`Texton 2
 line ${a} `);
```
Получаем в консоле:
```
Texton 2
 line 7 
```

Что бы записать в консоле так же не используя верхние кавычки **`** можем воспользоваться **\n**.     
Файл:
```
let a = 7;
console.log("Text\non 2 line "+a );
```
```
Text
on 2 line 7
```
**\n** - перенос строки.

Библиотека Мath. и её разные математические функции:   
* Math.random() - случайное число от нуля до единицы.
* Math.max(3,4,2,1) 4 - возращает максимальное значение.
* Math.pow(2,5) 32 - возвести число в степень.
* Math.sqrt(64) 8 - квадратный корень.
* Math.floor(3.9) 3 - округление.
* Math.ceil(3.9) 4 - округление к большему целому.
* Math.round(3.1) 3 - округление к ближайшему целому.
* Math.trunc(3.9) 3 - отбрасывает дробную часть.
* 4.758.toFixed(1) '4.8' - указываем какое цисло будет после запятой.         
  
  **Запомнить конкатинацию** (строка за счёт плюса спереди превращаеться в число)    
  Пример:
```
let a = "5"
a+5
'55'
+a+5
10
```

Рассмотрим функцию для проверки переменных, являються ли они числом и будет возвращать в консоль либо **true** либо **false**.
```
 function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
console.log(isNumber("5")) 
```
Даже если число будет записано в кавычках то консоль выведет **true**, а если появяться буквы то **false**.

Рассмотрим ещё одну функцию позволяющую нам получить рандомное число от **1** до **5**.
```
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(randomInteger(1,5)) 
```
Через запятую передаём минимальное и максимально значение, и получаем в консоль рандомное значение из этого диапозона.


## 39 Урок. Массивы.

В файле **main.js** создаём переменную **arr** и создаём квадратные скобки **[ ]** и записываем туда через запятую различные числа, строки, или логические значения.
```
let arr = [5,2,"str1",true]
``` 
Так же в массиве может быть записан другой массив, объекты и функции.

Выводим и раскрываем его в консоле:   
```
arr
(4) [5, 2, "Str", true]
0: 5
1: 2
2: "Str"
3: true
length: 4
[[Prototype]]: Array(0)
```
В левой стороне записаны индексы с 0-3.   
**length** - это длинна массива.

С помощью индексов можем обращаться к массиву и получать значение которое там храниться.
```
arr[1]
2
arr[3]
true
arr[2]
"Str"
```
Так же можем переопределить элемент в массиве указав ключ и значение.
```
arr[2] = "Text"
'Text'
arr[2]
'Text'
```
И если выведем наш массив увидим изменения:
```
arr
(4) [5, 2, 'Text', true]
```
В данный момент в нашем массиве 4 индекса, что бы добавить ещё один мы просто создаём 5-ый.
```
arr[4] = 7
```
Проверяем массив:
```
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
```  
Проверяем:
```
matrix    
(3) [Array(3), Array(3), Array(3)]    
0: (3) [1, 2, 4]
1: (3) [4, 7, 9]
2: (3) [1, 0, 3]
```
И для того что бы получить нужное значение, например **3** из масива **103**.    
Прописываем путь по индексам:
```
matrix[2][2]
3
```


**arr[arr.length-1]** - Получение данных из массива c последнего символа.
```
arr[arr.length-1]
true
```
```
arr[arr.length-2]
'Str'
```    

**arr.shift()** - удаляет первый элемент из массива и возвращает его значение, этот метод изменяет длину массива.
```
arr
(4) [5, 2, 'Str', true]
arr.shift()
5
arr
(3) [2, 'Str', true]
```
**arr.push()** - добавляет один или более элементов в конец массива и возвращает новую длину массива.
```
arr.push("text")
5
arr
(5) [5, 2, 'Str', true, 'text']
```
**arr.pop()** - удаляет последний элемент из массива и возвращает его значение.
```
arr.pop()
true
arr
(3) [5, 2, 'Str']
```

**arr.unshift()** - добавляет один или более элементов в начало массива и возвращает новую длину массива.
```
arr.unshift(12)
5
arr
(5) [12, 5, 2, 'Str', true]
```

Cоздаём ещё один массив в файле **main.js**.
```
let arr2 = [1,2,3] 
```


**arr.concat(arr2)** - сложить масивы.
```
arr.concat(arr2)
(7) [5, 2, 'Str', true, 1, 2, 3]
```
Обазначаем новый масив **arr3** этими двумя.
```
let arr3 = arr.concat(arr2)
undefined
arr3
(7) [5, 2, 'Str', true, 1, 2, 3]
```

**arr.indexOf()** - узнаём индекс с помощью названия элемента (в круглые скобки вводим название).
```
arr.indexOf(2)
1
```
Проверяем:
```
arr
(4) [5, 2, 'Str', true]
0: 5
1: 2
2: "Str"
3: true
```
Всё верно.

**arr.join("-") '5-2-Str-true'** - можем добавить пробелы, запятые, дефисы и консоль выведет строку с этим знаком между массивами. 
```
arr.join(", ")
'5, 2, Str, true'
```

**arr.splice** - может добавлять и удалять значения.
**arr.splice(1,2,3)**.     
Где: 
* 1 - Первый параметр это индекс с которого мы начинаем свои действия.  
* 2 - Колличество удаляемых элементов.   
* 3 - Вставить вместо удаленых элементов новый.   

Пример:
```
arr   
(4) [5, 2, 'Str', true]   
arr.splice(0,3,1)       
(3) [5, 2, 'Str']     
arr     
(2) [1, true]    
```
Ещё пример:
```
arr.splice(0,1, 50,"string",false)
[5]
arr
(6) [50, 'string', false, 2, 'Str', true]
```

Вывод: с помощью **splice** удобно как добавлять так и удалять. 

**arr.includes("Text")** - поиск элементов и возравщает в консоле либо **true** либо **false**.    
Cейчас у нас в массиве **[5, 2, 'Str', true]**.       
Ищем значение **2** в массиве. 
```
arr.includes(2)
true
```
И для примера поищем не существующее значение **10**.
```
arr.includes(10)
false
```
Получаем **false**.


**arr.reverse()** - на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.  
```
arr.reverse()
(4) [true, 'Str', 2, 5]
```


**split()** - разбивает объект **String** на массив строк путём разделения строки указанной подстрокой.    

Примеры:  
Создаём массив из одного элемента.
```
"q,w,e,r".split()
['q,w,e,r']
0: "q,w,e,r"
```
Создаём массив из 4-ех элементов.
```
"q, w, e, r".split(", ")
(4) ['q', 'w', 'e', 'r']
0: "q"
1: "w"
2: "e"
3: "r"
```
Получаем массив из букв строки.
```
"qwer".split('')
(4) ['q', 'w', 'e', 'r']
0: "q"
1: "w"
2: "e"
3: "r"
```


## 40 Урок. Объекты.

Объекты состоят из пар ключ и значение.

**{ "key1": 99 } где key1 ключ обязательно строковый а 99 значение любого типа.**    
Записываем в **main.js** :
```
let obj = {
    "color": "Tomato",
    "numbers": ["8888", "7777"],
    "checked": true
}
```
И смотрим как он отображаеться в консоле:
```
obj
{color: 'Tomato', numbers: Array(2), checked: true}
checked: true
color: "Tomato"
numbers: (2) ['8888', '7777']
[[Prototype]]: Object
```
**numbers** - это ещё и массив который состоит из 2 элементов.

Как вытащить данные из объекта есть 2 способа:
1. Квадратные скобки.
```
obj["color"]
'Tomato'
```
2. Через точку.
```
obj.numbers
(2) ['8888', '7777']
```
А получить уже данные из массива с помощью индекса.
```
obj.numbers[0]
'8888'
```

Что бы узнать какие вообще ключи есть в объекте, записываем такую конструкцию.
```
Object.keys(obj)
(3) ['color', 'numbers', 'checked']
0: "color"
1: "numbers"
2: "checked"
```
Получаем массив из всех ключей объекта.

Для того что бы добавить в объект новое значение, как и в массиве просто указываем новое значение.
```
obj["name"] = "Ivan"
'Ivan'
```
Проверяем:
```
obj
{color: 'Tomato', numbers: Array(2), checked: true, name: 'Ivan'}
```

Объекты не сортированы и могут быть в любой последовательности в отличие от массива.    

Создадим массив из объектов в файле:
```
let obj = [
{
    "color": "Tomato",
    "numbers": ["8888", "7777"],
    "checked": true
},
 {
    "color": "Green",
    "numbers": ["18", "7"],
    "checked": false
},
{
    "color": "Red",
    "numbers": ["188", "477"],
    "checked": true
}
]
```
Проверяем консоль:
```
obj
(3) [{…}, {…}, {…}]
0: {color: 'Tomato', numbers: Array(2), checked: true}
1: {color: 'Green', numbers: Array(2), checked: false}
2: {color: 'Red', numbers: Array(2), checked: true}
length: 3
[[Prototype]]: Array(0)
```
Внутри массива содержаться объекты:
```
0:
checked: true
color: "Tomato"
numbers: (2) ['8888', '7777']
[[Prototype]]: Object
```
#### Задание создать из массива и объектов логическое дерево например из питомцев и извлечь из этого данные.
```
let cats = [
    {
        "name": "Barsik",
        "age": ["10"],
        "color": "orange"
    },
    {
        "name": "Vaselisa",
        "age": ["7"],
        "color": "grey"
    },
    {
        "name": "Monika",
        "age": ["3mount"],
        "color": "white-black"
    }
    ]
```
Получаем данные.
```
cats[0]['color']
'orange'
```
```
cats[2]['name']
'Monika'
```
## 41 Урок. Диалоговые окна, условия, тернарный оператор, переключатель switch.

**alert("Текстовая строка")** - 
всплывающее окно показывает сообщение.    
**prompt("диалоговое окно")** - показывает сообщение и запрашивает ввод текста от пользователя. Возвращает напечатанный в поле ввода текст или **null**, если была нажата кнопка **«Отмена»** или **Esc** с клавиатуры.   
Примеры:
```
let age = prompt("какой возраст ?")
```
После того как мы запишем значение в сплывающее окно данные будут сохранены в переменную **age**.    
Комбинация с выводом: 
```
let age = prompt("какой возраст ?")
alert("мой возвраст " + age)
```
 **if** - это условие если, в круглых скобках мы записываем что хотим проверить, а в фигурных что мы хотим выполнить если условие **true** то код в фигурных скобках будет выполняться.
 Но у условия **if** есть и другая ветвь развития **else** оно будет выполняться если условие не истина а ложь.
 
 Пример комбинации с **if** и **else**:
 ```
let age = prompt("Ваш возврат ?")
if(age != null) {
alert("мой возвраст " + age)
} else {
    alert("вы нажали отмену")
}
 ```
**confirm** -отображает модальное окно с текстом вопроса **question** и двумя кнопками **OK** и **Отмена**.   
 Пример:
```
 confirm("удалить ваш код?")
```
Сокращённый код где **?** это **if**, а **:** **else**.
```
confirm("удалить ваш код?") ? alert("Удалено") : alert("Отменено")  
```
Используем **else if** для разных условий.
 ```
 let age = prompt("Введите ваш возраст?")
if(age < 18) {
    alert("Мой возраст меньше 18")
} else if(age > 18) {
    alert("Мой возраст больше 18")
} else if(age == 18) {
    alert("Мой возраст  18")
}
```
Конструкция switch заменяет собой сразу несколько **if**.

**switch** - представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.     Конструкция **switch** имеет один или более блок **case** и необязательный блок **default**.

```
let age = prompt("Введите ваш возраст?")

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

**while** и **do while** - одни из самых популярных циклов.
Оператор **while** создаёт цикл, выполняющий заданную инструкцию, пока истинно проверяемое условие. Логическое значение условия вычисляется перед исполнением тела цикла.

 Синтаксис. **while** **(условие)** **{инструкция}** условие. Выражение, логическое значение которого проверяется каждый раз перед заходом в цикл.
 
 Используем в теле цикла **count++** что бы цикл увеличивался на единицу и остановился, когда он станет больше 10 становиться **false** и цикл завершаеться.
```
let count = 0;
while(count < 10) {
    console.log(count);
    count++;
}
```
Так же цикл можно завершить самостоятельно с помощью **if**.     
Как только **count** становиться равна **4** цикл завершаеться **break;**.
```
let count = 0;
while(count < 10) {
    console.log(count);
    if(count==4) {
      break;
    }
    count++;
}
```
Выражение **do... while** создаёт цикл, который выполняет указанное выражение до тех пор, пока условие не станет ложным. Условие проверяется после выполнения выражения, то есть выражение выполнится как минимум один раз.

Расмотрим примеры использования:         
Указываем переменную **count = 5** потом **do{...}** в фигурных скобках, что нужно сделать а после **while** и условие которое мы проверяем **count>7**.
```
let count = 5;
do {
    console.log(count);
} while(count>7) 
```
Консоль выводит **5** даже не смотря на то, что переменная меньше **7**. 
```
5
```
Если укажем переменную **8** и указать, что бы оно постоянно уменьшалось на один **count--**.
```
let count = 8;
do {
    console.log(count);
    count--;
} while(count>7) 
``` 
То так же увидим в консоле что число выводиться один раз.
```
8
```
А если в переменной указать число побольше например **11**, то
увидим как число выводится четыри раза уменьшаясь до **8**.
```
11
10
9
8
```
Иногда требуеться выполнить код хотя бы один раз, а потом его проверить.


Выражение **for** создаёт цикл, состоящий из 3 необязательных выражений в круглых скобках, разделённых точками с запятой.

Синтаксис:      
**for** **([инициализация];** **[условие];** **[финальное выражение]**)выражение.    
* **i=0** - обозначаем переменную.
* **i<10** - задаём условие.
* **i++** - плюсуем на один.
```
for(let i=0; i<10; i++) {
  console.log(i)
}
```
В консоле получаем цифры от 0 до 9.   

Расмотрим ещё один пример:
```
for(let i=0; i<100; i+=2) {
  console.log(i)
}
```
В это выражение консоль выводит четные цифры от 0 до 100.
 
Рассмотрим цикл **for** с массивами.    
Например стоит задача увеличить все элементы массива.    

Индексы массива начинаються с **[0]** поэтому **i=0**, в условие записываем **i<arr.length;** до количества элементов массива(сколько в массиве элементов столько и будем выполнять наш цикл), финальное выражение ставим **i++** увеличивать на одну единицу. В **console.log** записываем (arr[i]*2) проходимся по каждому элементу массива и умножаем его на **2**.
```
 let arr = [5, 7, 9, 1, 0];
 for(let i=0; i<arr.length; i++) {
  console.log(arr[i]*2)
} 
```
Консоль выводит:
```
10
14
18
2
0
```
Цикл **for...of** выполняет цикл обхода итерируемых объектов (включая **Array**, **Map**, **Set**, объект аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

Рассмотрим ту же задачу умножения на два, элементов массива.
```
 let arr = [5, 7, 9, 1, 0];
for(let item of arr) {
    console.log(item*2)
}
```
В консоле будет такой же вывод.

Цикл **for..in** - перебрать свойства объекта, для каждого свойства выполнить заданный код.

Создадим объект:
```
let obj = {
    "name": "Petr",
    "age": 25,
    "number": 909090909090
}

```
Пример синтаксиса:
```
for(let key in obj)
```
Теперь выводим ключи этого обьекта через консоль.
```
console.log(key)
```
В консоле увидим ключи **name**, **age**, **number**.

Цикл **for in**:
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
В консоле увидим: 
```
Ключ name, Значение Petr
Ключ age, Значение 25
Ключ number, Значение 909090909090
```
**forEach** - предназначен для перебора всех элементов массива.    
Пример:
```
let arr = [5, 7, 9, 1, 0];
arr.forEach(function(item, i, array){
    console.log(`Элемент: ${item}
    Индекс: ${i}
    Массив: ${array}`)
})
```
Получаем такой результат для каждого элемента массива:
```
Элемент: 5
    Индекс: 0
    Массив: 5,7,9,1,0
```
Рассмотрим более сложные примеры:

Задача найти элемент из массива объектов.
Используем метод **.find** для массива, в функции указываем **item**, и в условие проверяем. Если **item.id==3** то возращаем этот элемент и записываем в переменную **a**.
```
 let people = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "masha"},
    {id: 3, name: "Ivana"},
    {id: 4, name: "Ivanka"},
]
let a = people.find(function(item) {
    if (item.id==3) return item 
})
  console.log(a) 
```
Консоль:
```
{id: 3, name: 'Ivana'}
```
Рассмотрим другие методы:   
**people.findIndex** - в том же выражение в консоль вернётся только индекс.
```
2
```
**people.filter** - возращает массив объекта который подходит под условие.
```
0: {id: 3, name: 'Ivana'}
length: 1
[[Prototype]]: Array(0)
```
Если поменяем условие и укажем **item.id<4**, то увидим сразу три элемента в массиве, меньше **id** 4-eх.

```
0: {id: 1, name: 'Ivan'}
1: {id: 2, name: 'masha'}
2: {id: 3, name: 'Ivana'}
length: 3
[[Prototype]]: Array(0)
```
Метод **map()** возвращает новый массив, содержащий трансформированные значения обрабатываемого массива. То, как именно они будут трансформированы, задаётся в передаваемой этому методу функции.
```
  let arr = [5, 7, 9, 1, 0];
  let newArr = arr.map(function(item) {
      return item*3
  })
  console.log(newArr)

```
Консоль:
```
0: 15
1: 21
2: 27
3: 3
4: 0
length: 5
[[Prototype]]: Array(0)
```
При этом массив **arr** не как не изменился.    
Задания:


1. Выводим массив из четных чисел от 0 до 20.
```
  let arr = []
  for(let i=0; i<20; i+=2) {
      arr.push(i)
  }
console.log(arr)
```

2. Выводим массив в убывающем порядке от **30 до 0** и элементы этого масива деляться на **3** без остатка.      
 **1 вариант**.
```
  let arr = []
  for(let i=30; i>0; i-=3) {
      arr.push(i)
  }
console.log(arr)
```
**2 вариант**.
```
  let arr = []
for(let i=30; i>0; i--) {
if(i%3==0) {
    arr.push(i)
  }
}
console.log(arr)
```

3. Создать массив каждый элемент которого будет равен квадрату его индекса.
```
let arr = []
for(let i=0; i>10; i++) {
     arr.push(Math.pow(i,2))     
     }
     console.log(arr)
```

4. Найти колличество чётных элементов в массиве.
```
let arr = []
let arr1 = [7,4,2,1,0,6,2,6,15]
let count = 0;
for(let i=0; i<arr1.length; i++) {
    if(arr1[i]%2==0) {
        count++;
    }
}
console.log("Всего чётных элементов " + count)
``` 

## 43 Урок. Функции и решения 6 задач.    
 
Сама по себе функция это алгоритм, и она ничего не делает пока её не вызовешь.
```
function printText() {
    console.log("Hello")
}
```
Вызываем функцию.
```
printText(); // Hello
```

Запишем функцию с переменными **name**,**age** и выведем:
```
function printText(name, age) {
    console.log("hello my name is "+name+", Age: "+age)
}
printText(); //hello my name is undefined, Age: undefined
```
Переменые не определены.

Выведем функцию с разными **name**,**age**.
```
printText("Petr", 15 ); //hello my name is Petr, Age: 15
printText("Petir", 95 ); //hello my name is Petir, Age: 95
printText("Petrushka", 5 ); //hello my name is Petrushka, Age: 5
printText("Ivan", 11 ); //hello my name is Ivan, Age: 11
```
Через указанные переменные.
```
function printText(name, age) {
    console.log("hello my name is "+name+", Age: "+age)
}
let name1 = "Andrey"
let age1 = 27
printText(name1, age1 ); //hello my name is Andrey, Age: 27
printText("Petir", 95 ); //hello my name is Petir, Age: 95
printText("Petrushka", 5 ); //hello my name is Petrushka, Age: 5
printText("Ivan", 11 ); //hello my name is Ivan, Age: 11
```

Можем возвращать функцию с помощью **return** и записывать в переменную.
```
function printText(name, age) {
    return "hello my name is "+name+", Age: "+age }
let name1 = "Andrey"
let age1 = 27

let res = printText(name1, age1);
alert(res)
```

Функцию так же можно поместить в объект.
```
let obj = {
    name: "ivan",
    age: 18,
    hello() {
        console.log("Меня зовут "+this.name)
    }
}
obj.hello() //Меня зовут ivan
```

Сортировка по возрастанию в массиве с помощью метода **sort()** в скобки которой передаём функцию:
```
let arr = [1,4,2,32,4543,3,2,7,8]
arr.sort(function(a,b)
```
Где **a,b** это два соседних цисла в массиве которые будем сравнивать с помощью if.
```
let arr = [1,4,2,32,4543,3,2,7,8]
arr.sort(function(a,b)
{
    if(a==b) return 0
    if(a>b) return 1
    if(a<b) return -1

    или

    return a-b
})
console.log(arr) //(9) [1, 2, 2, 3, 4, 7, 8, 32, 4543]
```
Запись с помощью стрелочной функции.
```
let arr = [1,4,2,32,4543,3,2,7,8]
arr.sort((a,b) => a - b)
console.log(arr) //(9) [1, 2, 2, 3, 4, 7, 8, 32, 4543]
```
Создадим массив с числами Фибоначчи.

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
Функция, где в **add** переплюсование чисел **7**_**9**_**5** а **mul** перемножение.
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

Узнаём кол-во чётных и нечетных цифр.
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

console.log(number(1216789644532526))// result - 9-четных и 7 нечётных
```

randomaizer от 0 до 100
```
function randomNumber() {
    let number = Math.floor(Math.random()*100);
    for(let count=1; count<=10; count++) {
        let result = +prompt(`Попытка №${count}, Введите число:`)
        if(result == number) {
            return alert(`Вы угадали число! Попыток: ${count}, Число: ${number}`)
        } else if(result < number) {
            alert(`Ваше число ${result}, меньше загаданного!`)
        } else if(result > number) {
            alert(`Ваше число ${result}, больше загаданного!`)
     }
    }
    return alert(`Вы не угадали число! Число: ${number}`)
}
randomNumber()
```

## Урок 44. Работа с датой и временем.

Текущая дата.
```
let a = new Date()
console.log(a)
```

Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, называется таймстамп (англ. timestamp). Это – легковесное численное представление даты.    
Получить это число можем с помощью плюса перед переменной.
```
let a = new Date(2022,07,1)
console.log(+a) //1659301200000
```
```
let a = new Date(2015,6,21,10,51,54,458)
console.log(a.getTime()) // 1437465114458
```
```
let a = new Date(2015,6,21,10,51,54,458)
console.log(a.getFullYear()) //2015
```

![alt](/092%20chapter_3/chapter_3/img/datetime_javascript.jpg)

1. Шпаргалка по работе с датой и временем от ITDoctor
https://yadi.sk/i/DeXmdtyb7LcFtg
https://drive.google.com/file/d/1nkaZO_E9PNvW8UK15lvnr3nct30EwSqb/view?usp=sharing

2. Работа с датой и временем
https://learn.javascript.ru/datetime

3. Интернационализация в JavaScript
https://learn.javascript.ru/intl

4. Библиотека moment.js для работы с датой и временем
https://momentjs.com

## Урок 45. Документация кода на JSDoc и Исключения.

Прописываем документацию к своим функциям.

При наведение мышки на функцию высветиться подсказка что указана в коментарии.
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
            throw new RangeError("Аргумент должен быть в формате 'hh:mm' - 'hh' должен быть от 0 до 23, а 'mm' должен быть от 0 до 59. 'hh' и 'mm' должны быть числами и разделяться знаком ':'")
        }
        return hour*60+min
    } catch(error) {
        console.log(error)
    }
}
console.log(timeToMinute("1:28"))
```

Полезная информация
1. Моя библиотека stringTime.js для работы с временем в строковом формате.
https://github.com/morphIsmail/stringTimeJS

2. Генератор документации JSDoc.
https://ru.wikipedia.org/wiki/JSDoc

3. Обработка ошибок на JavaScript.
https://learn.javascript.ru/try-catch

4. Перехват ошибок на JavaScript.
https://learn.javascript.ru/exception

## 46 урок. Объектно-Ориентированное Програмирование,Прототип,конструкторы,класс.
С помощью цепочки наследования можем создавать комплексные объекты  и получать доступ к родительскому объекту :
```
let admin = {
    ryles: 777
}

let user = {
    name: "iva",
    age: 20,
    __proto__: admin
}
```
И видим что объект **user** унаследовал **ryles:777** у переменной **admin**.
```
user
{name: 'iva', age: 20}
age: 20
name: "iva"
[[Prototype]]:Object
ryles: 777
[[Prototype]]: Object
```
Благодоря прототипу можно наследовать свойства и методы у родительского объекта и с помощью функции конструктор можно создовать однотипные объекты просто.
```
let admin = {
    rules: 777,
    isAdmin(){
        console.log("Я "+this.name+" my rules "+this.rules)
    }
}

function User(name, age) {
    this.name = name;
    this.age = age;
    this.__proto__ = admin;
}
let u1 = new User("Petr", 21)
let u2 = new User("voland", 91)
let u3 = new User("petir", 28)
```
И если сейчас для **u1** вызовем метод **isAdmin()**, **console(log)** выведет:
```
u1.isAdmin()
Я Petr my rules 777
```
Что бы создать метод в конструкторе а не в объекте записываем ещё один метод:
```
this.myInfo = function() {
         console.log("Меня зовут "+this.name+", мне "+this.age+" лет ")}
```

```
u1.myInfo()
Меня зовут Petr, мне 21 лет 
```

Классы.   
Класс это разновидность функции. Выводим в консоль тоже самое только с помощью класса.
```
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    myInfo() {
        console.log("Меня зовут "+this.name+", мне "+this.age+" лет ")
    }
}
let u1 = new User("Petr", 21)
let u2 = new User("voland", 91)
let u3 = new User("petir", 28)
```

Так же как и методы статические свойства работают с самим классом:
```
class User {
    constructor(name, age, admin=false) {
        this.name = name;
        this.age = age;
        this.admin = admin;
    }
    myInfo() {
        console.log("Меня зовут "+this.name+", мне "+this.age+" лет ")
        if(this.admin == true) {
            console.log("Я админ")
        }
    }
}
class Moderator extends User {
    constructor(name,age,admin=false,moder=true) {
        super(name, age, admin)
        this.moder = moder;
    }
    static addPost() {
        console.log("New Post")
    }
    static master = true;
    myInfo() {
            super.myInfo();
            console.log("Я модер")
    }
}
let u1 = new User("Petr", 21)
let u2 = new User("voland", 91, true)
let u3 = new User("petir", 28)
let m1 = new Moderator("Kir", 18, true)
```
Ключевое слово **super** используется для вызова функций, принадлежащих родителю объекта.

Выражения **super.prop** и **super[expr]** действительны в любом определении метода в классах и в литералах объекта.
Результаты проверок.
```
u1.myInfo()
Меня зовут Petr, мне 21 лет 

m1.myInfo()
Меня зовут Kir, мне 18 лет 
 Я админ
 Я модер

u2.myInfo()
Меня зовут voland, мне 91 лет 
Я админ
```

Создаём класс человек с помощью конструктора:
```
class People{
/**
 * Класс человек
 * @param {string} fio по формату "фамилия имя отчество"
 * @param {string} birthday по формату "21.11.1111"
 * @param {string} numbers номер . если больше 2 номеров, то по формату "номер1, номер2"
 * @param {string} room комната
 */
constructor(fio, birthday, numbers, room){
    let name = fio.toLowerCase().split(" ");
    this.name = {};
    this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
    this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
    this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

    let date = birthday.split(".");
    this.date = {};
    this.date.d = +date[0]
    this.date.m = +date[1]
    this.date.y = +date[2]

    this.numbers = numbers.split(", ")

    this.room = +room
  }
}
let people2 = new People("Панов Андрей Алексеевич", "09.07.1994", "9999,9999,9999", 1347)
```

Более сложный класс в котором есть конструктор ,статическое свойство, и 4 метода.
```
class People{
/**
 * Класс человек
 * @param {string} fio по формату "фамилия имя отчество"
 * @param {string} birthday по формату "21.11.1111"
 * @param {string} numbers номер . если больше 2 номеров, то по формату "номер1, номер2"
 * @param {string} room комната
 */
constructor(fio, birthday, numbers="", room="") {
    let name = fio.toLowerCase().split(" ");
    this.name = {};
    this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
    this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
    this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

    let date = birthday.split(".");
    this.date = {};
    this.date.d = +date[0]
    this.date.m = +date[1]
    this.date.y = +date[2]

    this.numbers = numbers.split(", ")

    this.room = +room
  }
  static month = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
   /**
   * Фио
   * @return {string} строка формата "Фамилия имя отчество"
   */
  getFio() {
    return `${this.name.f} ${this.name.i} ${this.name.o}`
}
  /**
   * вывести день рождения 
   * @return {string} строка формата "24 июля 1997"
   */
  getBirthday() {
    return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
  }
  /**
   * Вывести Фамилия_Имя_отчество.расширение
   * @param {string} extention расширение, например "jpg" или "png"
   * @return {string} для названия изображения
   */
  getImgSrc(extention) {
    return `${this.name.f}_${this.name.i}_${this.name.o}.${extention}`
  }
 /**
   * Вывести все номера телефона или только первый номер
   * @param {boolean} allNumbers если true то все номера, если false только первый номер
   * @return {string} Строка формата: "89606013478, 89026013478" 
   */
  getNumberList(allNumbers) {
    if(this.numbers.length == 0 || this.numbers[0].length == 0) 
        return undefined
    if(allNumbers) {
        return this.numbers.join(", ")
    } else { 
    return this.numbers[0];
    }
  }
}
let people1 = new People("Панов Андрей Алексеевич", "09.07.1994", "9999,9999,9999", 1347)
let people2 = new People("ров рей реевич", "01.01.1991")

console.log(people1.getFio())
console.log(people2.getFio())
```
```
Панов Андрей Алексеевич
Ров Рей Реевич
people1.getBirthday()
'9 июля 1994'
people1
People {name: {…}, date: {…}, numbers: Array(1), room: 1347}
date: {d: 9, m: 7, y: 1994}
name: {f: 'Панов', i: 'Андрей', o: 'Алексеевич'}
numbers: ['9999,9999,9999']
room: 1347
[[Prototype]]: Object
people1.room
1347
```
## 47 Урок. Возможности ECMAScript 2015 (ES6)

Полезная информация из урока:

1. Спецификация ECMAScript
https://ru.wikipedia.org/wiki/ECMAScript

2. JavaScript компилятор
https://babeljs.io/

3. Поддержка спецификации ECMAScript 5
https://caniuse.com/es5

4. Поддержка спецификации ECMAScript 2015 (ES6)
https://caniuse.com/es6

Новые функции появившиеся **ECMA 6**.

Константы нельзя переопределять.
```
const a = 3.5  
undefined   
a  
3.5   
a = 1.5 
(ошибка)
```

***...*** - Это оператор расширения.
Записываем в консоль:
```
function sum(a,b) {
    return a+b 
} 
let date = [4,8]
sum(...date)
//12
```
```
function sum(a,b) {
    return a+b 
} 
let date = [4,8]
sum(date)
//'4,8undefined'
```
Создадим несколько переменных и сразу присвоем им значения.
Так сказать **деструктивное присваевание**.
```
let [a,b,c,d] = [10,5,8,9]
undefined
a
10
b
5
c
8
d
9
```

Стрелочные функции в консоль :
```
let sum = (a,b,c) => a+b+c
undefined

sum(5,2,3)
10

let sum = (a,b,c) => {
    return a+b+c
}
sum(5,2,3)
10
```
* repeat() - для повтора вырожения.
```
let a = "Str".repeat(3) // a "StrStrStr" 
```
* includes - для поиска в строке.
```
let str = "Hello, i`m simple String"
console.log(str.includes("simple"))// true
``` 
* startsWith() - поиск начального слова, ends - конечного. 
```
let str = "Hello, i`m simple String"
console.log(str.startsWith("Hello"))// true
```
```
let str = "Hello, i'm simple String"
console.log(str.endsWith("ig"))
```
* Изменение содержимого массива например на ноль:
```
let arr = [5,8,9,2,4]
arr.fill(0)
console.log(arr) //[0,0,0,0,0]
```
* Методы **entries()**,**keys()**,**values()**.
```
let arr = ['a','b','c']
let entries = arr.entries() // индекс и значение в виде массива
let keys = arr.keys()  // индексы
let values = arr.values() // значения

console.log(...entries) //Array(2)0: 01: "a" length: 2[[Prototype]]:Array(0) Array(2) Array(2)
console.log(...keys)  //0 1 2
console.log(...values)  //a b c
```

Объекты **Set** позволяют сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
Синтаксис
 **new Set([iterable]);**     
Пример:
```
let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(1)
console.log(...set) // 1 2 3
console.log(set.has("4")) //false
console.log(set.size)  // 3
set.delete(2)
console.log(...set) // 1 3
set.clear()
console.log(set)  // Set(0) {size: 0}
```
Массив без дубликатов.
```
let arr = [1,5,4,7,8,91,1,4,5]
let arr2 = [...new Set(arr)]
console.log(arr2) // (6) [1, 5, 4, 7, 8, 91]
```     

# 05. Работа с DOM деревом JavaScript

## 48 Урок. Введение.
Скачиваем каталог к себе в папку из архива урока, продолжаем обучение через папку **chapter_1** => **examples_dom**.

## 49 Урок.Выбор элемента DOM.

  #### ex1. Работа с html элементом в js c помощью getElementById .
 
  Объектная модель документа(**DOM**) это элементы **HTML**.

В данном примере создаём переменную **element** присваеваем глобальный объект **document** c методом **getElementById** получить элемент по индефекатору, ('element') в скобках указываем индефикатор который указан в **div**. Теперь можем взаимодействовать с дивом в **JS**.

```
  <div id="element">
    <div>Элемент</div>
  </div>
  <script>
    let element = document.getElementById('element')
    element.style.background = 'tomato'
  </script>
```

#### ex2. С определёнными селекторами с помощью **querySelectorAll('ul > li:first-child')**.

Создаём переменную **elements** так же через объект **document** через точку прописываем метод **quarySelectorAll()** он позволяет выбрать все элементы, селекторы которых мы укажем в скобках, например ('ul > li:first-child') ко всем первым **li** тегов **ul**.
```
  <ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
  </ul>
  <ul>
    <li>Пункт 3</li>
    <li>Пункт 4</li>
  </ul>
  <script>
let elements = document.querySelectorAll('ul > li:first-child')
  </script>
```
Проверим в консоле:
```
elements
NodeList(5) [li, li,]
0: li
1: li
length: 5
[[Prototype]]: NodeList
```
Далее создаём цикл **for** в цикле создаём переменную **el** указываем **of elements** цикл по всем элементам (первым **li**), и изменим название и стили.

```
for(let el of elements) {
  el.style.color = "gray"
  el.innerHTML = 'Новое значение' 
```
#### ex3. Вывод ссылки в элемент innerHTML.

По такому же принцепу создаём переменную а в **document** прописываем **querySelector** - метод находит просто первый и единственный элемент, в данном примере укажем **('ul > li')**, и с помощью **innerHTML** укажем в первом **li** cсылку.
```
  <ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
  </ul>
  <script>
let element = document.querySelector('ul > li')
    element.innerHTML = "<a href='#'>ссылка</a>"
  </script>
```
Так же проверим в консоле и увидим только первую **li**.
```
element
li
```
#### ex4. Метод document.body.children.

Рассмотрим метод **document.body.children**. Данная команда возвращает прототип объекта **HTMLCollection** - это массиво-подобный объект, который хранит в себе узлы объектной модели документа **(DOM)**. Мы получаем всех детей **HTML-элемента** <body> с их собственной структурой вложенности при помощи **JavaScript**.   
В коллекции, дети выстаиваются в порядке появления в разметке документа (древовидный порядок). Первый элемент коллекции будет расположен ближе к родителю. Последний - дальше.       
Пример:
```
  <body>
  <a href="http://google.com">Ссылка 1</a><br>
  <a href="http://yeandex.ru">Ссылка 2</a><br>
  <a href="http://mail.ru">Ссылка 3</a><br>
  </body>
```
Рассмотрим в консоле:
```
document.body.children
HTMLCollection(7) [a, br, a, br, a, br, script]
0: a
1: br
2: a
3: br
4: a
5: br
6: script
length: 7
[[Prototype]]: HTMLCollection
```
Воспользуемся методом **el.matches()** который вернёт **true** или **false**, в зависимости от того, соответствует ли элемент указанному **css-селектору**.
В данной ситуации яндекс и маил соответствуют заданному в скобках значению **matches('a[href$=".ru"')**, поэтому выполниться **el.innerHTML**.
```
    for(let el of document.body.children){
      if(el.matches('a[href$=".ru"')){
        el.innerHTML = "Сайт в зоне .ru"
      }
    } 
```
Рассмотрим более простой вариант через **querySelectorAll()**.
```
   for(let element of document.querySelectorAll('a[href$=".ru"')) {
       element.innerHTML = "Cайт в хоне .ru"  
       }  
```
#### ex5. Метод closest - возвращает ближайший родительский элемент.
**element.closest()** возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному **CSS-селектору** или **null**, если таковых элементов вообще нет.   
В данном примере выведем в консоль тег **ul** с классом **list**.
```

 <h2>Заголовок</h2>

  <div id="content">
    <ul class="list">
      <li class="item">Пункт 1</li>
      <li class="item">Пункт 2</li>
    </ul>
  </div>
  <script>
 let item = document.querySelector('.item')
console.log(item.closest('.list')) 
</script>
```
В консоле увидим:
```
    <ul class="list">...</ul>
```
А если попробуем вывести тег **h2** то получим значение **null**, потому что он не являеться родителем и ни как не связан.
```
 let item = document.querySelector('.item')
console.log(item.closest('.list')) // null
```

## 50 Урок. Атрибуты, Создание элементов.  

#### ex6. Метод contains для проверки вложености элементов.
С помощью метода **contains** можем проверить содержиться ли один элемент внутри другого и получить логический ответ в консоли **true** или **false**.
Проверяем вложеность, есть ли в **list** **item** и наоборот.
```
  <ul class="list">
    <li class="item">Пункт 1</li>
    <li class="item">Пункт 2</li>
  </ul>
  <script>
    let list = document.querySelector('.list')
    let item = document.querySelector('.item')
    console.log(list.contains(item)) // true
    console.log(item.contains(list)) // false
  </script>
```
#### ex7. innerHTML.

**innerHTML** устанавливает или получает **HTML** или **XML** разметку дочерних элементов.
Можем полностью заменить боди на массив скрипта.
```
<body>
  
  <p>Абзац текста</p>
  <div>Текст в блоке div</div>
  <h3>Заголовок 3 уровня</h3>

  <script>
let strs = ["элемент 1","элемент 2","элемент 3"]
document.body.innerHTML = `
<ol>
  <li>${strs[0]}</li>
  <li>${strs[1]}</li>
  <li>${strs[2]}</li>
</ol>
  `
  </script>
</body>
```
Этим методом проверяем **body** в консоле.
```
  console.log(document.querySelector('body').innerHTML)
```
 


#### ex8.textContent.
 
**textContent** - позволяет задавать или получать текстовое содержимое элемента и его потомков.   
body  
```
  <p>Абзац текста</p>
  <div>
    <h3>Заголовок</h3>
    <p>Текст</p>
  </div>
```
Если в консоль введём **innerHtml** то увидим теги **html**.  
script
```
let strs = ["фамилия","имя","отчество"]
document.querySelector('p').textContent = `${strs[0]} - ${strs[1]} - ${strs[2]}`
console.log(document.querySelector('div').innerHTML)
// <h3>Заголовок</h3>
//    <p>Текст</p>
```
А если **textcontent** то нет.
```
console.log(document.querySelector('div').textContent)
// Заголовок
//    Текст
```


#### ex9.hidden,setInterval.

**hidden** - является **Boolean** типом данных , который принимает значение **true** , если содержимое спрятано, в противном случае значение будет **false**.      
**setInterval** - позволяет регулярно исполнять функцию через указанный промежуток времени.    
```
  <p>Абзац текста</p>
  <script>
    let elem = document.querySelector('p')
    setInterval(() => elem.hidden = !elem.hidden, 1000)
  </script>
```

#### ex10.Attribute.

Работа с атрибутами **html**:    
**elem.hasAttribute(name)** – проверяет наличие атрибута.
```
  <p title="Подсказка" class="text">Абзац текста</p>
  <script>
    let elem = document.querySelector('p')
    console.log(elem.hasAttribute('title')) // true
  </script>
```
**elem.getAttribute(name)** – получает значение атрибута.
```
  <p title="Подсказка" class="text">Абзац текста</p>
  <script>
    let elem = document.querySelector('p')
    console.log(elem.getAttribute('title')) // Подсказка
```
**elem.setAttribute(name, value)** – устанавливает атрибут.
```
  <p title="Подсказка" class="text">Абзац текста</p>
  <script>
    let elem = document.querySelector('p')
    elem.setAttribute("class", "basic")
    console.log(elem.getAttribute('class')) // basic
```
  Так как **class** уже был установим **id**.
```
    let elem = document.querySelector('p')
    elem.setAttribute("id", "basic")
    console.log(elem.getAttribute('class')) // text
    console.log(elem.getAttribute('id')) // basic
```
Так же можем получить название и значение атрибутов через цикл **for...of**.
```
  <p title="Подсказка" class="text">Абзац текста</p>
  <script>
    let elem = document.querySelector('p')
    elem.setAttribute("id", "basic")
    for(let atrr of elem.attributes) {
      console.log(`${atrr.name} = ${atrr.value}`)
    }
  </script>
```
  Консоль:
```
title = Подсказка
class = text
id = basic
```
**elem.removeAttribute(name)** – удаляет атрибут.
```
    let elem = document.querySelector('p')
    elem.setAttribute("id", "basic")
    elem.removeAttribute("title")
    for(let atrr of elem.attributes) {
      console.log(`${atrr.name} = ${atrr.value}`)
    }
```
Консоль:
```
class = text
id = basic
```

#### ex11.dataset.

Можем создать свои атрибуты для **html**-тегов лучше всего начинать с **data-**.
```
  <p data-about="Это текст">Абзац текста</p>
  <div data-about-block="Это блок">Блок текста</div>
```
**dataset** - позволяет считывать или устанавливать любые дата-атрибуты на **HTML**-элемент.
Дата-атрибут — это пользовательский атрибут на элементе, название которого начинается с **data-**, например **data-about**. Дата атрибуты используются, чтобы хранить значения на элементах в **HTML**.
```
  <p data-red="Красный">Абзац текста</p>
  <div data-red-green="Красно-зелёный">Блок текста</div>
  <script>
    let elem1 =  document.querySelector('p')
    console.log(elem1.dataset.red) // Красный
    let elem2 =  document.querySelector('div')
    console.log(elem2.dataset.redGreen) // Красно-зелёный
  </script>
```
#### ex12. createElement,prepend, append, appendChild, insertBefore или insertAdjacentElement.

Создадим свои собственные элементы.

Метод **createElement** позволяет создать новый элемент, передав в параметре имя тега. После создания с элементом можно работать как с обычным элементом, а также его можно добавить на страницу методами **prepend**, **append**, **appendChild**, **insertBefore** или **insertAdjacentElement**.

body:
```
  <p>Разделитель</p>
  <hr>
```

Создаём переменную **qwerty** обозначаем **document.createElement('div')** и создаём тег **div**, устанавливаем диву класс **qwerty.className = "and"** и добавим в див загаловок.    
```
let qwerty = document.createElement('div')
qwerty.className = "and"
qwerty.innerHTML = '<h2>Сложно</h2>'
```
Что бы добавить его используем **document.body** c методами:
* append() - добавить в конец.
* prepend() - добавить в начало.
* before() - перед **body**.
* after() - после **body**.
* replaceWith() заменяет одни элементы другими.    
Пример:    
```
document.body.after(qwerty)
```
Сменим тег **body** на **hr**.
```
document.querySelector('hr').before(qwerty)
```
В этой ситуации созданный **div** будет перед **hr**.
```
let qwerty = document.createElement('div')
qwerty.className = "and"
qwerty.innerHTML = '<h2>Сложно</h2>'
document.querySelector('hr').before(qwerty)
```
По такому же принцепу создадим параграф и добавим в созданный **div**.
```
let p = document.createElement('p')
p.textContent =  "Важное сообщение!"
qwerty.append(p)
```
В **append** так же можем вставить через запятую новые элементы.
```
qwerty.append(p, document.createElement('hr'))
```
С помощью **replaceWith** заменим созданный **div** тегом **p**.
```
let qwerty = document.createElement('div')
qwerty.className = "and"
qwerty.innerHTML = '<h2>Сложно</h2>'
document.querySelector('hr').before(qwerty)

let p = document.createElement('p')
p.textContent =  "Важное сообщение!"
qwerty.replaceWith(p)
```

## 51 Урок. Генерация вложенных списков.

#### ex13.insertAdjacentHTML.
**insertAdjacentHTML()** разбирает указанный текст как **HTML** или **XML** и вставляет полученные узлы **(nodes)** в **DOM** дерево в указанную позицию. Данная функция не переписывает имеющиеся элементы, что предотвращает дополнительную сериализацию и поэтому работает быстрее, чем манипуляции с **innerHTML**.     
 Методы:   
* 'beforebegin': до самого element (до открывающего тега).
* 'afterbegin': сразу после открывающего тега  element (перед первым потомком).
* 'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
* 'afterend': после element (после закрывающего тега).
```
  <ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
  </ul>
```
```
  <script>
let ul = document.querySelector('ul')
ul.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>')
ul.insertAdjacentHTML('afterbegin', '<li>afterbegin</li>')
ul.insertAdjacentHTML('beforeend', '<li>beforeend</li>')
ul.insertAdjacentHTML('afterend', '<p>afterend</p>')
  </script>
```
#### ex14.setTimeout.
Мы можем вызвать функцию не в данный момент, а позже, через заданный интервал времени. Это называется «планирование вызова».

Для этого существуют два метода:

**setTimeout** - позволяет вызвать функцию один раз через определённый интервал времени.
**setInterval** - позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.    
Удаляем элемент через 2 секунды.
```
  <div class="alert">
    <p>Сообщение</p>
  </div>

  <div id="one">Один</div>
  <div id="two">Два</div>

  <script>
let div = document.querySelector('div')
setTimeout(() => {
  div.remove()
  two.after(one)
}, 2000)
  </script>
```
И с помощью методов **after** переместим **two** и **one**.

#### ex15.cloneNode().

 **cloneNode()** возвращает дубликат узла, из которого этот метод был вызван.   
Клонируем **div** и меняем сожержимое **p** в клоне. 
 ```
  <div class="alert">
    <p>Сообщение</p>
  </div>

  <script>
    let div = document.querySelector('div')

    let div2 = div.cloneNode(true)
    div2.querySelector('p').textContent = "Ещё одно сообщение"
    div.after(div2)
  </script>
  ```
#### ex16.document.body.append.(newUl)(создаём всплывающее окно которое будет создавать в ul li)

Создаём всплывающее окно которое будет создавать в **ul** **li**.
Создаём в пустом **body** **ul** с помощью **document.body.append.(newUl)**.

Далее создаём цикл **while** , через **Prompt** всплывающее окно в котором будут обозначаться **li** , и услови **if** если в окне ничего не напишем и нажмём кнопку то **break**, потом создаём переменную **newLi** которая будет добавлять **li**, далее указываем **textContent = data** => c помощью append добавляем тег **li**.
```
let newUl = document.createElement('ul');
  document.body.append(newUl);

  while(true) {
    let data = prompt("Введите название элемента", "")
    if(!data) {
      break
    }
    let newLi = document.createElement('li')
    newLi.textContent = data
    newUl.append(newLi)
  }
```

#### ex17.Вывод объекта в HTML.   

Задачка сгенерировать список в списке с помощью **java script**.
```
 <script>
    let data = {
      "Овощи": {
        "огурцы": 5,
        "помидоры": 3
      },
      "Фрукты": {
        "красные": {
          "клубника": 2,
          "малина": 4
        },
        "зеленые": {
          "яблоко": 6,
          "лайм": 2
        }
      }
    }
  </script>
```
Создадим функцию **createUl(obj)** параметр **obj** потому что она будет принимать объект. 
```
function createUl(obj) {}
```
Проверочное условие **if**, если ключей в объекте не будет то будем выходить из функции.
```
if(!Object.keys(obj).length)
return
```
А если будет объект то:   
Создаём переменную **newUl** обозначаем **document.createElement('ul')** создаём новый элемент **ul**.
```
let NewUl = document.createElement('ul')
```
Укажем цикл **for** и для обхода по объекту **(let key in obj)**. **obj** взяли параметр из функции **creatrUl(obj)**. И нам нужен вывод именно числовой вывод объектов, например **яблоко:6**  а не **фрукты:красные** поэтому пишем условие **if(isNaN(obj[key]))** 
```
      for(let key in obj) {
        let NewLi = document.createElement('li')
        if(!isNaN(obj[key]))
```
Для **newLi** указываем **textContent = key + obj[key]** где **key** это будет ключ объекта (огурцы, помидоры, клубника) а obj[key] будет цифровое значение, для того что бы всё работало поставим **else** если **newLi** не число то устанавливаем равное значение ключа.
```
        NewLi.textContent = key +' '+obj[key]
        else
        li.textContent = key
```
Теперь установим переменную **childrenUl** равную значению функции **createUl(obj[key])**, что бы эта функция сделала всё тоже самое для вложенных объектов.
```
let childrenU1 = createUl(obj[key])
```
И добавим проверку **if**, если **childrenUl** существует то мы добавляем в **newLi** добавляем переменную **childrenUl**, а уже после добавляем в переменную **newUl** c помощью **append** тег **li**.
```
 if(childrenU1) {
          newLi.append(childrenU1)
        } 
        newUl.append(newLi)
        }
```
Как цикл завершиться, повторим снова. 
```
return newUl
```
Напишем ещё одну функцию для вывода.    
Назовём её **createTree** указываем (cotainer, obj)  добавлять будем в контейнер с помощью **append(createUl(obj))**, и вставляем всё в пустое **body**.
```
    function createTree(cotainer, obj) {
      document.querySelector(cotainer).append(createUl(obj))
    }
    createTree('body', data)
```
```
<body>

  <script>
    let data = {
      "Овощи": {
        "огурцы": 5,
        "помидоры": 3
      },
      "Фрукты": {
        "красные": {
          "клубника": 2,
          "малина": 4
        },
        "зеленые": {
          "яблоко": 6,
          "лайм": 2
        }
      }
    }
    function createUl(obj) {
      if(!Object.keys(obj).length)
      return
      let newUl = document.createElement('ul')
      for(let key in obj) {
        let newLi = document.createElement('li')
        if(!isNaN(obj[key]))
        newLi.textContent = key +' '+obj[key]
        else
        newLi.textContent = key
        let childrenU1 = createUl(obj[key])
        if(childrenU1) {
          newLi.append(childrenU1)
        }
        newUl.append(newLi)
      }
     return newUl
    }
    function createTree(cotainer, obj) {
      document.querySelector(cotainer).append(createUl(obj))
    }
    createTree('body', data)
  </script>
</body>
```


## 52 Урок. Календарь.

#### ex18. Календарь.

Создаём функцию **getDay** c объектом **date** в тело функции создадим  переменную **day** в которую поместим **date.getDay()** метод стандартный у объекта, а в условии проверим. Если **day** равен нулю то устанавливаем **day** ровно **7** и возращаем **day -1**. Эта функция будет конвертировать в стандартные дни , где **0** понедельник а **6** воскресенье. 
```
    function getDay(date) {
      let day = date.getDay();
      if(day == 0) day = 7;
      return day - 1;
    }
```
Теперь создадим основную функцию **createCalendar(elem, year, month)** в котором 3 параметра:
* elem - css селектор в который непосредственно добавим календарь.
* year - год.
* month - месяц.

Создаём переменную **mon** равную **month -1**, так удобней будет помещать дату где **0** будет январь а декабрь **11**. И создаём переменную **d** в ней будет храниться дата. И непосредственно саму таблицу через переменную **table**, выведем через **innerHTML**.
```
    function createCalendar(elem, year, month) {
      elem = document.querySelector(elem)

      let mon = month -1;
      let d = new Date(year, mon)

      let table = `
      
      <table>
        <caption>${month}.${year}</caption>
        <tr>
          <th>пн</th>
          <th>вт</th>
          <th>ср</th>
          <th>чт</th>
          <th>пт</th>
          <th>сб</th>
          <th>вс</th>
          </tr>
      `;

      table += '</tr></table>';
      elem.innerHTML = table
    }

createCalendar('body', 2022, 6)
```
Появляеться месяц, год и таблица с **HTML**-элементами. Между началом и концом таблицы прописываем цикл **for** что бы получить корректный день недели и прописываем теги **td** в таблицу. Далее прописываем цикл **while** для даты получим месяц и проверим равен ли он переменной **mon**, в тело пропишем, что добавляем **td** плюс **d.getDate()** и добавим условие если **gerDay(d) % 7 = 6** то закрываем **tr** и открывем **tr**, то есть если он равен **6** то можем закрывать тег **tr** и завершаем цикл **d.setDate(d.getDate()+1)**.
```
      for(let i=0; i<getDay(d); i++) {
        table += '<td></td>'
      }
      
       while(d.getMonth() == mon) {
         table += '<td>' + d.getDate() + '</td>'
         if(getDay(d) % 7 == 6) {
          table += '</tr><tr>'
         }
         d.setDate(d.getDate()+1)
       }
```
Получаеться всё работает как, берём первый день **d.getDate()** добавляем в ячейку и выводим **table += '<td>' + d.getDate() + '</td>'** проверяем условие, не являеться это день **6(воскресеньем)** если воскресенье то закрываем **tr** и открываем новый и постоянно увеличиваем день на один.    

Выведем и видим практически готовый календарь за исключением отсувствующих ячеек, исправим это с помощью условия в котором будет цикл который будет добавлять пустые ячейки **td**
```
       if(getDay(d) != 0) {
        for(let i=getDay(d); i<7; i++) {
        table += '<td></td>'
      }
       }
```
Готовая таблица, c переключаемой работающей датой. 
```
<div class="container"></div>

  <script>
    function createCalendar(elem, year, month) {
      elem = document.querySelector(elem)

      let mon = month -1;
      let d = new Date(year, mon)

      let table = `
      
      <table>
        <caption>${month}.${year}</caption>
        <tr>
          <th>пн</th>
          <th>вт</th>
          <th>ср</th>
          <th>чт</th>
          <th>пт</th>
          <th>сб</th>
          <th>вс</th>
          </tr>
      `;

      for(let i=0; i<getDay(d); i++) {
        table += '<td></td>'
      }
      
       while(d.getMonth() == mon) {
         table += '<td>' + d.getDate() + '</td>'
         if(getDay(d) % 7 == 6) {
          table += '</tr><tr>'
         }
         d.setDate(d.getDate()+1)
       }

       if(getDay(d) != 0) {
        for(let i=getDay(d); i<7; i++) {
        table += '<td></td>'
      }
       }

      table += '</tr></table>';
      elem.innerHTML = table
    }

    function getDay(date) {
      let day = date.getDay();
      if(day == 0) day = 7;
      return day - 1;
    }

    createCalendar('body', 2022, 6)
  </script>
```
**Css** файл.
 ```
table {
  border-collapse: collapse;
  margin-bottom: 10px;
  margin-right: 10px;
}
caption {
  padding: 10px 0;
  background-color: #fff6ce;
  border: 1px solid black;
  border-bottom: none;
}
td,
th {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
  font-size: 18px;
}
th {
  font-weight: bold;
  background-color: #fff6ce;
}
 ```

## 53 Урок. Задание календарь.


## 54 Урок. Сортировка таблицы. 

#### ex19 Метод sort().

В данном примере таблица.
```
<table id="table">
  <tr>
    <th>Имя</th>
    <th>Возраст</th>
    <th>Комната</th>
  </tr>
  <tr>
    <td>Саша</td>
    <td>10</td>
    <td>1032</td>
  </tr>
  <tr>
    <td>Маша</td>
    <td>15</td>
    <td>1090</td>
  </tr>
  <tr>
    <td>Паша</td>
    <td>11</td>
    <td>1347</td>
  </tr>
  <tr>
    <td>Даша</td>
    <td>7</td>
    <td>1344</td>
  </tr>
</table>
```

Задача отсортировать таблицу по возрасту.   

Создаём переменную **sortedRows** обозначаем **Array.from(table.rows)**. Метод **Array.from()** создаёт новый экземпляр **Array** из массивоподобного или итерируемого объекта(создаёт массив из элемента). И берём всё кроме нулевого индекса, потому что там **thead**.
```
let sortedRows = Array.from(table.rows).slice(1)
```
Сортируем методом вычитания цифр друг из друга.
```
    .sort((rowA, rowB) => {
      return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML
    })
```
И проверяем в консоли результат:
```
sortedRows[0]
<td>Даша</td>
<td>7</td>
```
Для того что бы изменения появились и на **html-страничке**:
```
    let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => {
      return rowA.cells[1].innerHTML - rowB.cells[1].innerHTML
    })
table.tBodies[0].append(...sortedRows)
```
Задание добавить новую колонку и отсортировать.
```
<table id="table">
  <tr>
    <th>Имя</th>
    <th>Возраст</th>
    <th>Комната</th>
  </tr>
  <tr>
    <td>Саша</td>
    <td>10</td>
    <td>1032</td>
  </tr>
  <tr>
    <td>Маша</td>
    <td>15</td>
    <td>1090</td>
  </tr>
  <tr>
    <td>Паша</td>
    <td>11</td>
    <td>1347</td>
  </tr>
  <tr>
    <td>Даша</td>
    <td>7</td>
    <td>1344</td>
  </tr>
</table>
```
```
let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => {
      return rowA.cells[2].innerHTML - rowB.cells[2].innerHTML
    })
    table.tBodies[0].append(...sortedRows)
```
## 55 Урок. Часы.

#### 20ex. Часы.

Задание сделать часы как на видио, создаём функцию **update()** потом переменную **date** и запишем в неё текущую дату. Создаём часы, минуты и секунды и соответсвующий метод. Условие для того что бы к любому числу меньше **10** добавлялся **0**, и выведем через **id**. Выводим с помощью **textContent** и указываем **setInterval()** в параметры записываем название функции и время через которое выполнять её.
```
function update() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if(hours < 10) hours = '0' + hours
  if(minutes < 10) minutes = '0' + minutes
  if(seconds < 10) seconds = '0' + seconds
  
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
  setInterval(update, 1000)

}
```
Уберём секунды и вызвем сразу функцию, что бы не ждать **setInterval()**.
```
function update() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if(hours < 10) hours = '0' + hours
  if(minutes < 10) minutes = '0' + minutes


  clock.textContent = `${hours}:${minutes}`;
}
update()
  setInterval(update, 60000)
```

## Урок 56. Классы и метрика.

#### ex21. classList, className.
body
```
  <div class="alert block">
    <p>Сообщение</p>
  </div>
```
Создадим переменную **div** помещаем тег **div** меняем класс с помощью **className**, запишем цикл **for...of** и используем метод **classList**, для того что бы вывести в консоль все классы тега **div**.
```
    let div = document.querySelector('div')
    div.className = "alert text block"
    for(let name of div.classList) {
      console.log(name)
    }
    div.classList.remove('block')
```
Можем удалить класс.
```
div.classList.remove('block')
```
Добавить или если есть удалить класс.
```
div.classList.toggle('block')
```
Проверить есть класс или нет.
```
div.classList.contains('alert')
true
```
#### 22ex. Вывод смены цвета через __promt__ .


С методом **div.style** можем изменять **css** стили. 
```
    let div = document.querySelector('div')
    div.style.color = "red"
    div.style.width = "100px"
    div.style.backgroundColor = "grenn"

```
Через метод **prompt** через всплывающее окно сделаем выбор цвета.
```
div.style.backgroundColor = prompt("Выбор цвета", "tomato")
```
Скроем через функцию элемент и откроем через 4 секунды.
```
    div.style.display = "none"
    setTimeout(()=> div.style.display = "", 4000)
```
C помощью **getComputedStyle** можно посмотреть финальные стили которые применяться к элементу.
```
    let style = getComputedStyle(div)
    console.log(style)
```

#### 23ex. Метрика.

body
```
  <main style="position: relative;" id="main">
    <div id="example" style="
      position: absolute; 
      left: 150px; 
      top: 120px; 
      width: 350px; 
      height: 150px; 
      border: 10px solid black; 
      padding: 15px;
    ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur et animi blanditiis sapiente excepturi, aut modi dignissimos nisi veniam eveniet repellendus debitis similique porro non! Doloribus accusantium dolores nobis maxime eaque ut corporis est. Nobis quibusdam voluptatum suscipit accusamus necessitatibus nesciunt animi! Ullam autem eos error dolore adipisci repellendus itaque dolorem quod maxime quasi illum cumque eaque, architecto consequatur recusandae praesentium, consequuntur magni, omnis quam molestias labore. Voluptatibus, laborum sequi aliquid sed amet voluptatum fugit optio ipsam ex quam omnis ea, consequatur est sit explicabo mollitia maiores. Quis suscipit ipsam nisi maiores deserunt consectetur totam dolores et quo expedita?</div>
  </main>
```

Запишем в скрипт, что бы вывести ближайшего родителя от элемента.
```
console.log(example.offsetParent)// <main style="position: relative;" id="main">…</main>
```

Что бы узнать растояние от блока до края, пропишем:
* console.log(example.offsetTop)//120 - верхнего.
* console.log(example.offsetRight)//undefined - правого.
* console.log(example.offsetLeft)//150 - левого.
* console.log(example.offsetDown)//undefined - нижнего.

Ширину и высоту элемента.
* console.log(example.offsetWidth)//400
* console.log(example.offsetHeight)//200

Растояние от внешнего угла до внутренего, в данном примере равна границе **border:10px;**.
* console.log(example.clientLeft)//10
* console.log(example.clientTop)//10

Получаем ширину и высоту с учётом ширины и высоты и **pading** но не учитываеться полоса прокрутки.
* console.log(example.clientHeight)//180
* console.log(example.clientWidth)//380

Учитывая **scroll**.
* console.log(example.scrollWidth)//380
* console.log(example.scrollHeight)//335

Получить ширину и высоту прокрученой части элемента.
* console.log(example.scrollTop)//0
* console.log(example.scrollLeft)//0


#### ex24. Метрика 2.

Узнаём ширину и высоту в данный момент открытого окна браузера.
```
document.documentElement.clientHeight 
452
document.documentElement.clientWidth 
903
```

Что бы получить высоту включая **scroll**.
```
let elem = document.querySelector('div')

let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.body.offsetHeight,
  document.body.clientHeight,
  document.documentElement.scrollHeight,
  document.documentElement.offsetHeight,
  document.documentElement.clientHeight)
```
```
scrollHeight//966
```

Сколько скрыто в прокрутке.     
Вертикальной.
```
window.pageYOffset//0
```
Горизонтальной.
```
window.pageXOffset//0
```


Прокрутка текущей страници на 10 пикселей вниз и на 15 вправо.
```
window.scrollBy(15,10)
```
Постоянная прокрутка по кординате.
```
window.scrollTo(0,10)
```
Прокрутка до определённого элемента, имеет логическое значение.
```
elem.scrollIntoView(true)
```

## Урок 57. Таблица с журналами.

#### ex25. Вывод массива в таблицу.
Подключаем к индексу файл **cоnst.js**     
Вывод таблицы из массива.    
body
```
  <table>
    <tr>
      <th>№</th>
      <th>Информация</th>
      <th>1C</th>
    </tr>
  </table>
```
Массив в скрипте.
```
const JOURNALS = [
  ["1", "Описание журнала", "yes"],
  ["2", "Описание журнала", "no"],
  ["3", "Описание журнала", "no"],
  ["4", "Описание журнала", "yes"],
]
```
Создаём цикл **forEach**, перменную **row** в которой будет тег **tr** и с помощью **innerHTML** выводим. Прописываем условие если второй индекс массива равен **yes** то через span указывем **color:green** если нет то **red**.
```
    JOURNALS.forEach(function(item) {
      let row = document.createElement('tr')
      row.innerHTML = `
      <td>${item[0]}</td>
      <td>${item[1]}</td>
      <td>${item[2] == 'yes'? '<span style="color: #05da00">&#9745;</span>' : item[2] == 'no' ? '<span style="color: red">&#9746;</span>' : item[2]}</td>
     `
     document.querySelector('table').append(row)
    })
```
## Урок 58. Номера из объекта.

#### ex26. Вывод объекта из массивов.

У нас есть объект из масивов.
```
const PHONE_NUMBER = {
  'Группа номеров 1': [
    ['Номер 1', '2591514'],
    ['Номер 2', '2182742'],
    ['Номер 3', '2791821']
  ],
  'Группа номеров 2': [
    ['Номер 1', '2485841']
  ],
  'Группа номеров 3': [
    ['Номер 1', '212433, 243574'],
    ['Номер 2', '442431, 552432']
  ]
}
```
Задача создать структуру и вывести массивы в таблицу.
Получаеться легко видоизменяемая таблица.
```
for(let key in PHONE_NUMBER) {
  let row = document.createElement('tr')
  row.innerHTML = `<th colspan="2">${key}</th>`
  document.querySelector('table').append(row)
  for(let i=0; i<PHONE_NUMBER[key].length; i++) {
    let row = document.createElement('tr')
    row.innerHTML = `
<td>${PHONE_NUMBER[key][i][0]}</td>
<td>${PHONE_NUMBER[key][i][1]}</td>
    `
    document.querySelector('table').append(row)
  }
}
```
## Урок 59. Вывод карточек с сортировкой.

#### ex27. Сортировка таблицы.
Выводим массив из объектов с большой вложеностью и отсортируем по номеру комнаты.
```
const people = [
  {
    room: "8",
    name: {
      f: "Степанов",
      i: "Борис",
      o: "Иванович"
    },
    date: {
      d: 17,
      m: 6,
      y: 1996
    },
    number: ["89057999079"]
  },
  {
    room: "3",
    name: {
      f: "Смирнов",
      i: "Сергей",
      o: "Борисович"
    },
    date: {
      d: 22,
      m: 9,
      y: 1994
    },
    number: ["89097622050"]
  },
  {
    room: "1",
    name: {
      f: "Архипов",
      i: "Иван",
      o: "Сергеевич"
    },
    date: {
      d: 24,
      m: 7,
      y: 1993
    },
    number: ["89056664737"]
  },
  {
    room: "2",
    name: {
      f: "Горшков",
      i: "Кирилл",
      o: "Петрович"
    },
    date: {
      d: 25,
      m: 6,
      y: 1995
    },
    number: ["89137782447"]
  },
]
```
Создаём функцию с пустым массивом, с помощью цикла и метода **push** выводим нужные ключи и объекты, сортируем таблицу по **room**.
```
    function rooms() {
      let rooms = [];
      for(let i=0; i<people.length; i++){
        rooms.push(
          [people[i]["room"], `${people[i]["name"]["f"]} ${people[i]["name"]["i"]} ${people[i]["name"]["o"]}` ]
        )
        }
        return rooms.sort((a, b) => +a[0]-b[0] )
    }
```
Выводим комнаты и фио в таблицу, через цикл **for** внутри которого функция.
```
    document.querySelector('body').innerHTML = `<table></table>`
    let title_rooms = document.createElement('tr')
    title_rooms.innerHTML = `
        <th>Комната</th>
        <th>ФИО</th>`
        document.querySelector('table').append(title_rooms)
        for(let i=0; i<rooms().length; i++) {
          let row = document.createElement('tr')
          row.innerHTML = `
<td>${rooms()[i][0]}</td>
<td>${rooms()[i][1]}</td>
          `
          document.querySelector('table').append(row)
        } 
```

## Урок 60. Вывод карточек людей.

#### ex28 Карточки.
Задача вывести карточки людей с их информацией массива **people**. Создаём цикл, карточки будут храниться в **div** с классом **item**. С помощью **innerHTML** выводим их, и возводим в функцию.
```
    function createCards(selector, array){
    for(let i=0; i< array.length; i++) {
      let item = document.createElement('div')
      item.classList.add('item')
      item.innerHTML = `
      ФИО: ${array[i]["name"]["f"]} ${array[i]["name"]["i"]} ${array[i]["name"]["o"]}<br>
      Номер телефона: ${array[i]["number"].join(', ')}<br>
      День рождения: ${array[i]["date"]["d"]} ${month[+array[i]["date"]["m"]]} ${array[i]["date"]["y"]}<br>
      Комната: ${array[i]["room"]}
      `
      document.querySelector('.items').append(item)
    }
  }
  createCards('.items', people)
```

## Урок 61. Карточки с днями рождения.

#### ex29. Дни рождения.
Задача создать карточки с месяцами в которых будут содержаться люди у кого день рождение в этом месяце массива **people**.

Создаём цикл **forEach** в теле создаём переменные fio в которой будет имя, фамилия, отчество и date с проверкой, если нет даты то выводим пустую строку.
```
 people.forEach(function(item) {
  let fio = `${item["name"]["f"]} ${item["name"]["i"]} ${item["name"]["o"]}`
  let date = item["date"] ? `${item["date"]["d"]} ${month[+item["date"]["m"]]} ${item["date"]["y"]}` : ``
  
 });
```
Далее создаём переменную с тегом **p**, установим ему **innerHTML** и выведем **fio** и **date**. Потом с помощью цикла **for** создадим карточки с месяцами, добавим проверку если месяц будет совпадать с индексом в цикле то добавляем карточку. и если карточка уже существует то не надо добавлять. И выводим в **div**.
```
people.forEach(function(item) {
  let fio = `${item["name"]["f"]} ${item["name"]["i"]} ${item["name"]["o"]}`
  let date = item["date"] ? `${item["date"]["d"]} ${month[+item["date"]["m"]]} ${item["date"]["y"]}` : ``
  
 let element = document.createElement('p')
 element.innerHTML = fio +" "+ date
 for(let i=1; i<=12; i++) {
  if(item["date"]["m"] == i) {
    if(document.querySelector(`.items > div .item${i}`) == null ) {
      let div = document.createElement('div')
      div.classList.add('item')
      div.innerHTML = `
      <h4>${monthIp[i]}</h4>
      <div class="item${i}"></div>
      `
      document.querySelector('.items').append(div)
    }
    document.querySelector(`.items > div .item${i}`).append(element)
  }
 }
 })
```

## Урок 62. Таймер с прогрессбаром.

#### ex30. Тайме.

body
```
  <div class="timer-progresbar">
    <div class="timer-progressbar__fill"></div>
    <div class="timer-progressbar__empty"></div>
  </div>
```
css
```
.timer-progresbar {
  display: flex;
}
.timer-progresbar > div {
  padding: 5px;
}
.timer-progressbar__fill {
  background-color: springgreen;
}
.timer-progressbar__empty {
  background-color: tomato;
}
```
Создаём функцию **myTimer** c параметром **seconds**, запишем в неё переменные **startDate** и **endDate** и обозначим их **new Date**, **endDate** изменим с помощью метода **setSeconds(endDate.getSeconds() + seconds)**. Далее создаём переменную **leftTime** которая будет обозначать (**endDate** - **startDate**) и **interval** это будет функция в которой будет выполняться таймер раз в секунду, и ещё переменные для процентного соотношения и выводим.
```
     function myTimer(seconds) {
      let startDate = new Date()
      let endDate = new Date()
      endDate = endDate.setSeconds(endDate.getSeconds() + seconds)
      let interval = setInterval(() => {
        let currentDate = new Date()
        let leftPercent = Math.trunc((endDate - currentDate) / (endDate -startDate) * 100)
        let passedPercent = +(100 - leftPercent)

        document.querySelector('.timer-progressbar__fill').textContent = passedPercent + '%'
        document.querySelector('.timer-progressbar__fill').style.width = passedPercent + '%'
        document.querySelector('.timer-progressbar__empty').textContent = leftPercent + '%'
        document.querySelector('.timer-progressbar__empty').style.width = leftPercent + '%'

        if(leftPercent == 0) {
          clearInterval(interval)
          document.querySelector('.timer-progressbar__empty').style.display = 'none'
        }
      console.log(1)
      }, 1000)
     }
     myTimer(9)
```

## Урок 63. Генератор имен.

#### ex31. allRandomNames.

Есть два больших массива.
```
let words1 = ["Непобедимый", "Визжащий", "Реальный", "Скоростной", "Экцентричный", "Кодовый", "Прожорливый", "Догадливый", "Гениальный", "Разрушительный", "Растерянный", "Торопливый", "Вопрошающий", "Космический", "Динамичный", "Паникующий", "Задумчивый", "Загадочный", "Рекордный", "Непонимающий", "Ультрафиолетовый", "Читающий", "Озорной", "Тормозной", "Волшебный", "Хардовый", "Тычущий", "Внимательный", "Криповый",];
let words2 = ["Мозг", "Везунчик", "Повелитель", "Красавчик", "Печенька", "Тормоз", "Динозавр", "Индеец", "Экстрасенс", "Цыпленок", "Решала", "Ураган", "Взломщик", "Эрудит", "Сыщик", "Крушитель", "Паникер", "Шутник", "Обуза", "Капитан", "Ботаник", "Гриб", "Зомби", "Котик", "Ведьмак", "Храбрец", "Мастер", "Король",];
```
Задача сделать случайное склеивание строк разных массивов.     
Создаём функцию с двумя циклами **for**, и для начала просто выведем всё возможные варианты словосочетаний.
```
    function allRandomNames(arr1, arr2) {
      let result = []
      for(let i=0; i < arr1.length; i++) {
        for(let j=0; j < arr2.length; j++) {
          result.push(`${arr1[i]} ${arr2[j]}`)
      }
    }
    return result
  }
  let allNames = allRandomNames(words1, words2)

  for(let i=0; i<allNames.length; i++) {
    let item = document.createElement('div')
    item.classList.add('menu_link')
    item.textContent = allNames[i]
    document.body.append(item)
  }
```
С помощью **setInterval()** и **Math.random()** генерируем случайные существительные и прилагательные каждые две секунды.
```
    function allRandomNames(arr1, arr2) {
      let result = []
      for(let i=0; i < arr1.length; i++) {
        for(let j=0; j < arr2.length; j++) {
          result.push(`${arr1[i]} ${arr2[j]}`)
      }
    }
    return result
  }
  let allNames = allRandomNames(words1, words2)


    let item = document.createElement('div')
    item.classList.add('menu_link')

    setInterval(()=>{
      item.textContent = allNames[Math.floor(Math.random() * allNames.length)]
      document.body.append(item)
  }, 2000)
```
## Урок 64. Локальное хранилище (localStorage).

#### ex32. localStorage.

Заходи в инструменты разработчика(f12), выбераем Приложение=>Локальное хранилище и наблюдаем там ключи и объекты. Для того что бы что-то записать туда так и обращаемся:
```
localStorage.setItem('key1', 546)
localStorage.setItem('key2', "54dsdasd6")
localStorage.setItem('key3', false) 
``` 
Попробуем же получить от туда данные в консоль.
```
console.log(localStorage.getItem('key2'))//54dsdasd6
```
 Получаем ключ по индексу.
 ```
console.log(localStorage.key(0)//key2
 ```
 Проверим число элементов в локальном хранилище.
 ```
console.log(localStorage.length//3
 ```
 По локальному хранилищу можно пройти как по массиву с помощью цикла **for** и выведем в консоль.
 ```
for(let i=0; i<localStorage.length; i++) {
  let key = localStorage.key(i)
  console.log(`${key}: ${localStorage.getItem(key)}`)
}
 ```
 C помощью **for..in** и отфильтруем поля с помощью проверки **hasOwnProperty(key)**.
```
for(let key in localStorage) {
  if(!localStorage.hasOwnProperty(key)) {
    continue;
  }
  console.log(`${key}: ${localStorage.getItem(key)}`)//
 key2: 54dsdasd6
 key3: false
 key1: 546
}
```
И получим ключи с помощью цикла **for..of**.
```
for(let key of Object.keys(localStorage)) {
  console.log(`${key}: ${localStorage.getItem(key)}`)
}\\
 key2: 54dsdasd6
 key3: false
 key1: 546
```

# 06 Обработка события на JavaScript

## Урок 62. Обработчик событий.

#### ex1. События.

События мыши:
* click - при нажатии левой кнопкой мыши (на сенсорных при касании).
* contextmenu - при нажатии правой кнопкой мыши.
* mouseover / mouseout - когда мышь наводиться / покидает элемент.
* mousedown / mouseup - когда нажали / отжали кнопку мыши.
* mousemove - при движении мыши.

События на элементах управления: 
* submit - пользователь отправил форму.
* focus - пользователь фокусируеться на элементе.

Клавиатурные события:
* keydown / keyup - когда пользователь нажимает / отпускает клавишу.

События документа:
* DOMContentLoaded - когда HTML загружен и обработан, DOM документа полностью построен и доступен.

#### ex2. Слово this. 
```
<body>
  
  <input type="button" onclick="alert(this.value)" value="Кнопка 1">
  
  <button class="btn">Кнопка 2</button>

  <script>

  </script>
</body>
```

#### ex3. Функция обработчик.
```
<body>
  
  <input type="button" onclick="addText()" value="Кнопка 1">
  
  <button class="btn">Кнопка 2</button>

  <script>
    function addText() {
      alert("Add Text")
    }
document.querySelector('.btn').onclick = addText
  </script>
</body>
```

#### ex4. Несколько обработчиков.
Повесим сразу несколько обработчиков на одно событие.

body
```
  <button class="btn">Кнопка</button>
```
script
```
function addText1() {
  alert('Первый текст')
}
function addText2() {
  alert('2 текст')
}
function addText3() {
  alert('3 текст')
}

document.querySelector('.btn').onclick = addText1
document.querySelector('.btn').addEventListener ('click', addText2)
document.querySelector('.btn').addEventListener ('click', addText3)
```

## Урок 66. Скрыть_Показать элемент.

#### ex5. Объект события.

C помощью **console.log(event)** можем посмотреть все события которые могут быть.    
Например:
```
      document.querySelector('.btn').onclick = function(event) {
        console.log(event.type)
      }// после нажатия на кнопку консоль выведет // click
```
* event.currentTarget или this - получаем тот элемент на котором произошло событие.
* event.clientX и event.clientY - кординаты курсора нажатые на кнопке.//21 //23.

#### ex6. Скрыть/показать элемент.

Сделаем так что бы тег p скрывался при нажати на кнопку.    
body
```
  <button class="btn">Кнопка</button>
  <p>Lorem ipsum dolor sit amet consectetur.</p>

```
script
```
  <script>
document.querySelector('.btn').onclick = function() {
  document.querySelector('p').hidden = !document.querySelector('p').hidden
}
  </script>
```

#### ex7. Удаление элементов.

Имеються три карточки, задача сделать на них крестик и что бы по нажатию они закрывались.     
body
```
  <div class="item">
    <div class="item-title">
      <h3>Петр Иванович</h3>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur minima eos, fuga molestiae delectus.</p>
  </div>
  <div class="item">
    <div class="item-title">
      <h3>Кирил Сергеевич</h3>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur minima eos, fuga molestiae delectus.</p>
  </div>
  <div class="item">
    <div class="item-title">
      <h3>Андрей Петрович</h3>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur minima eos, fuga molestiae delectus.</p>
  </div>
```
css
```
.item {
  background-color: #c8c8c8;
  margin-bottom: 10px;
  padding: 15px;
  font-size: 18px;
  border-radius: 10px;
}
.item-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close {
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 2px solid black;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
}
.close:hover {
  background-color: #000;
  color: #fff;
}
```
Используем метод **insertAdjacentHTML** для того что бы вставить **HTML**-тег.    
script
```
let items = document.querySelectorAll('.item')

for(let item of items) {
  item.querySelector('.item-title').insertAdjacentHTML("beforeend", '<button class="close">&times;</button>')
}
```
И **item.remove()** что бы удалить.
```
let items = document.querySelectorAll('.item')

for(let item of items) {
  item.querySelector('.item-title').insertAdjacentHTML("beforeend", '<button class="close">&times;</button>')
  item.querySelector('.close').onclick = () => item.remove()
} 
```

## Урок 67. Простой слайдер.

#### ex8.слайдер.
body
```
  <h4>Простой слайдер</h4>
  <div class="slider">
    <div class="slider__image">
      <img src="../img/1.jpg">
    </div>
    <div class="slider__breadcrumbs">
      <button class="slider__item active">1</button>
      <button class="slider__item">2</button>
      <button class="slider__item">3</button>
      <button class="slider__item">4</button>
      <button class="slider__item">5</button>
      <button class="slider__item">6</button>
      <button class="slider__item">7</button>
    </div>
  </div>
```
Для начала создадим функцию которая которая будет отображать нажатие на каждую кнопку в консоль.
```
    let btns = document.querySelectorAll('.slider__item')
    for(let btn of btns) {
      btn.onclick = function() {
        console.log(this.innerHTML)
      }
    }
```
С помощью **setAttribute** меняем пути картинок.
```
    let btns = document.querySelectorAll('.slider__item')
    for(let btn of btns) {
      btn.onclick = function() {
        document.querySelector('.slider__breadcrumbs .active').classList.remove('active')
        this.classList.add('active')
        document.querySelector('.slider__image img').setAttribute('src',`../img/${this.innerHTML}.jpg`)
      }
    }
```
## Урок 68. Тёмная тема.

#### ex9. Тёмная тема.

Делаем переключение светлой на тёмную тему используя **localstorage** и событие **change**.     
Событие **change** происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано.

Для текстовых элементов это означает, что событие произойдёт не при каждом вводе, а при потере фокуса.

Например, пока вы набираете что-то в текстовом поле ниже – события нет. Но как только вы уведёте фокус на другой элемент, например, нажмёте кнопку – произойдёт событие **onchange**.       
css-dark
```
body {
  font-family: 'Calibri';
  font-size: 20px;
  background-color: rgb(9, 16, 22);
  color: #ddd;
}
h4 {
  font-size: 40px;
}
.container {
  width: 500px;
  margin: 0 auto;
}
```

css-light
```
body {
  font-family: 'Calibri';
  font-size: 20px;
  background-color: rgb(184, 226, 219);
}
h4 {
  font-size: 40px;
}
.container {
  width: 500px;
  margin: 0 auto;
}
```

body
```
  <div class="container">
    <h4>Тёмная тема</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam sint cupiditate earum eligendi odit vero,
      repellat architecto eius atque accusantium consequuntur optio velit illum necessitatibus sunt assumenda ipsam enim
      amet.</p>
    <label for="">
      Включить тёмную тему?
      <input type="checkbox" class="theme-checkbox">
    </label>
  </div>

```
Сохраняем данные в localStorage с помощью условия.
```
    if(localStorage.getItem('theme') == "true") {
      theme.setAttribute('href', '../css/dark.css')
      checkbox.checked = true
    }
```
Теперь данные храняться в локальном хранилище.
```
    let checkbox = document.querySelector('.theme-checkbox')

    if(localStorage.getItem('theme') == "true") {
      theme.setAttribute('href', '../css/dark.css')
      checkbox.checked = true
    }

checkbox.onchange = function() {
  if(this.checked) {
    localStorage.setItem('theme', true)
    theme.setAttribute('href', '../css/dark.css')
  } else {
    localStorage.setItem('theme', false)
    theme.setAttribute('href', '../css/light.css')
  }
}
```

## 69 Урок. Не jQuery.

#### ex10. Аналог jQuery.

Есть такой body:
```
  <div class="block">Text</div>

  <input type="text" placeholder="Text">
  <input type="text" placeholder="Text">
  <input type="text" placeholder="Text">

```
Постараемся облегчить работу с помощью классов.      
Вместо:
```
document.querySelector('.block').innerHTML = "Новый текст"
```
Выводим через класс.
```
    class $ {
      constructor(selector, where = document) {
        this.self = where.querySelector(selector)
      }
    }

    new $('.block').self.innerHTML = "Новый текст"
```
**callback** — функция, которая будет вызвана по завершению асинхронного действия, сменим размер шрифта в инпутах.
```
    class $ {
      constructor(selector, where = document) {
        this.self = where.querySelector(selector)
        this.elems = where.querySelectorAll(selector)
      }
    each(callback) {
      for(let elem of this.elems) {
        callback(elem)
      }
    }
  }
    new $('.block').self.innerHTML = "Новый текст"
    new $('input').each(function(e) {
      e.style.fontSize = '20px'
    })
```
В конструкторе параметр **where = document** используем его.
```
new $('p', new $('div').self)
```
Сделаем событие, что бы по клику див менял класс.
```
    on(event, callback) {
      for(let elem of this.elems) {
        elem.addEventListener(event, callback)
      }
    }
    new $('div').on('click', function() {
      this.classList.toggle('bgc')
    })
```
Для инпутов так же сделаем переключение стилей.
```
    on(event, callback) {
      for(let elem of this.elems) {
        elem.addEventListener(event, callback)
      }
    }
  }
      new $('input').on('focus',function() {
      this.style.backgroundColor = 'tomato'
    })
    new $('input').on('blur',function() {
      this.style.backgroundColor = ''
    })
```
С помощью **return this** упростим выражение.
```
    on(event, callback) {
      for(let elem of this.elems) {
        elem.addEventListener(event, callback)
      }
   return this
    }
  }
      new $('input').on('focus',function() {
      this.style.backgroundColor = 'tomato'
    }).on('blur',function() {
      this.style.backgroundColor = ''
    })
```
Для сравнения через циклы и переменные записали бы так:
```
    let elems = document.querySelectorAll('input')
    for(let item of elems) {
    item.addEventListener('focus', function() {
      this.style.backgroundColor = 'tomato'
    })
    item.addEventListener('blur', function() {
      this.style.backgroundColor = ''
    })
  }
```

## Урок 70. Фазы события и делегирование.

### ex11. Всплытие.
body
```
  <div class="alert" onclick="alert('Клик')">
    <p>Lorem ipsum <span style="background-color: green; color: black; padding: 3px;">dolor sit</span> amet.</p>
  </div>
  
  <div onclick="alert('DIV 1')" style="border: 2px solid tomato; padding: 10px" class="block">
    DIV 1
    <div onclick="alert('DIV 2')" style="border: 2px solid tomato; padding: 10px">
      DIV 2
      <div onclick="alert('DIV 3')" style="border: 2px solid tomato; padding: 10px" class="stop">
        DIV 3
      </div>
    </div>
  </div>
```

Клик по внутреннему <DIV 3> вызовет обработчик onclick:

* Сначала на самом <DIV 3>.     
* Потом на внешнем <DIV 2>.    
* Затем на внешнем <DIV 1>.     
И так далее вверх по цепочке до самого **document**.

Поэтому если кликнуть на <DIV 3>, то мы увидим три оповещения: DIV 3 → DIV 2 → DIV 1.

Этот процесс называется «всплытием», потому что события «всплывают» от внутреннего элемента вверх через родителей подобно тому, как всплывает пузырёк воздуха в воде.   
Метод **event.stopPropagation()** препятствует продвижению события дальше.
```
    document.querySelector('.stop').addEventListener("click", function(e) {
      console.log(this)
      console.log(e.target)
    })
    document.querySelector('.stop').addEventListener("click", function(e) {
      e.stopPropagation()
    })
```
### ex12. Погружение.
**body**
```
  <form style="border: 2px solid tomato; padding: 10px" class="block">
    FORM
    <div style="border: 2px solid tomato; padding: 10px">
      DIV
      <p style="border: 2px solid tomato; padding: 10px" class="stop">
        P
      </p>
    </div>
  </form>
```
Свойство **tagName** содержит имя тега в верхнем регистре (большими буквами), **eventPhase** – метод на какой фазе он сработал. 
Нажмём на тег **p**.
```
for(let elem of document.querySelectorAll('*')) {
  elem.addEventListener('click', function(e) {
    console.log(elem.tagName + " - Фаза " + e.eventPhase)
  }, true)
} 
  // HTML - Фаза 1
     BODY - Фаза 1
     FORM - Фаза 1
     DIV - Фаза 1
     P - Фаза 2
```
### ex13. Делегирование.
Задача, что бы при клике менялся цвет.
```
  <table id="table">
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr>
    <tr>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
    <tr>
      <td>9</td>
      <td>10</td>
      <td>11</td>
      <td>12</td>
    </tr>
  </table>
```
Смысл в том что это событие добавили в **table** и сколько бы туда **td** не вставили все будут работать. Свойство **target** интерфейса **Event** является ссылкой на объект, который был инициатором события. Он отличается от **Event.currentTarget**, если обработчик события вызывается во время всплытия **(bubbling)** или захвата события.
```
let currentTd
table.onclick = function (e) {
  let td = e.target.closest('td')
  if(!td) return
  if(!table.contains(td)) return
  hover(td)
}

function hover(td) {
  if(currentTd) {
    currentTd.classList.remove('bgc')
  }
  currentTd = td
  currentTd.classList.add('bgc')
}
```

## Урок 71. Счётчик.

### ex14. Счётчик.
body
```
  <input type="button" value="1" data-counter>
  <input type="button" value="3" data-counter>
  <input type="button" value="8" data-counter>
  <input type="button" value="4">
```
Благодаря условию проверяем элемент **data-counter**, и при клике плюсуем **value**.
```
document.addEventListener('click', function(e){
  if(e.target.dataset.counter != undefined) {
    e.target.value++
  }
})
```

## Урок 72. Переключатель.

### ex15. Переключатель.

Создадим кнопки с открытием и закрытием форм.     
**body**
```
  <button data-toggle-id="email">
    Показать/Скрыть Email
  </button>

  <form id="email" hidden>
    Email: <input type="email">
  </form>

  <button data-toggle-id="password">
    Показать/Скрыть Password
  </button>

  <form id="password" hidden>
    Пароль: <input type="password">
  </form>

```
```
document.addEventListener('click', function(e){
  let id = e.target.dataset.toggleId
  if(!id) return
  let elem = document.getElementById(id)
  elem.hidden = ! elem.hidden
})
```

## Урок 73. Удаление карточек.

### ex16. Удаление карточек.
Задача, сделать так что бы карточки удалялись при нажатии на кнопку с класом **close** c помощью делегирования.         
body
```
<div class="item">
    <div class="item-title">
      <h3>Петр Иванович</h3>
      <button class="close">&times;</button>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur minima eos, fuga molestiae delectus.</p>
  </div>
  <div class="item">
    <div class="item-title">
      <h3>Кирил Сергеевич</h3>
      <button class="close">&times;</button>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur minima eos, fuga molestiae delectus.</p>
  </div>
  <div class="item">
    <div class="item-title">
      <h3>Андрей Петрович</h3>
      <button class="close">&times;</button>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur minima eos, fuga molestiae delectus.</p>
  </div>
```
```
 document.querySelector('body').onclick = function(e) {
  if(e.target.className != 'close') return
  let item = e.target.closest('.item')
  item.remove()
 }
```

## Урок 74. Разворачиваемые подменю.

### ex17. Разворачиваемые подменю.
Задача сделать так чтобы **li** сворачивались в **ul**. Скрипт из прошлых занятий.   
 Cвойство **nextSibling** объекта **Node** возвращает дочерний узел следующий за указанным узлом внутри родительского элемента, или **null**, если указанный узел является последним дочерним узлом в родительском элементе, а **parentNode** возвращает родителя определённого элемента **DOM** дерева.
 ```
  <script>
    let data = {
      "Овощи": {
        "огурцы": 5,
        "помидоры": 3
      },
      "Фрукты": {
        "красные": {
          "клубника": 2,
          "малина": 4
        },
        "зеленые": {
          "яблоко": 6,
          "лайм": 2
        }
      }
    }

    function createTree(container, obj) {
      document.querySelector(container).append(createUl(obj))
    }

    function createUl(obj) {
      if(!Object.keys(obj).length) return
      let ul = document.createElement('ul')
      for(let key in obj) {
        let li = document.createElement('li')

        if(!isNaN(obj[key]))
          li.textContent = key + ` ${obj[key]}`
        else
          li.textContent = key

        let childrenUl = createUl(obj[key])
        if(childrenUl) {
          li.append(childrenUl)
        }
        ul.append(li)
      }
      return ul
    }

    createTree('body', data);
    
  </script>
 ```
 При клике сворачиваем **li** в **span**.
 ```
    let ul = document.querySelector('ul')
    for(let li of ul.querySelectorAll('li')) {
      let span = document.createElement('span')
      li.prepend(span)
      span.append(span.nextSibling)
    }

    ul.onclick = function (event) {
      if(event.target.tagName != 'SPAN') return
      let childrenContainer = event.target.parentNode.querySelector('ul')
      if(!childrenContainer) return
      childrenContainer.hidden = !childrenContainer.hidden
    }
 ```

 ## Урок 75. Сортировка таблицы.

### ex18. Сортировка таблицы.
Сделаем по клику сортировку в таблице по **th**, по возрастанию числа и алфавитному порядку.
**body**
```
<table id="table">
    <thead>
      <tr>
        <th data-type="string">Имя</th>
        <th data-type="number">Возраст</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Павел</td>
        <td>19</td>
      </tr>
      <tr>
        <td>Александр</td>
        <td>22</td>
      </tr>
      <tr>
        <td>Иван</td>
        <td>15</td>
      </tr>
      <tr>
        <td>Евгений</td>
        <td>18</td>
      </tr>
      <tr>
        <td>Мария</td>
        <td>20</td>
      </tr>
    </tbody>
  </table>
```
```
    table.onclick = function(e) {
      if(e.target.tagName != 'TH') return
      let th = e.target
      sortTable(th.cellIndex, th.dataset.type)
    }

    function sortTable(colNum, type) {
      let tbody = table.querySelector('tbody')
      let rowsArray = Array.from(tbody.rows)
      let compare;
      switch(type) {
        case 'number':
          compare = function(rowA, rowB) {
            return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
          }
          break;
      case 'string':
        compare = function(rowA, rowB) {
          return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
        }
       break;  
      }
      rowsArray.sort(compare)
      tbody.append(...rowsArray)
    }
```

 ## Урок 76. Всплывающая подсказка.

### ex19. Всплывающая подсказка.
Всплывающие окна на кнопках.         
**body**
```
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae veniam voluptates hic! Dolorum doloremque modi suscipit harum magni, debitis sed facere, rerum magnam dolor pariatur, distinctio voluptatem rem animi.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae veniam voluptates hic! Dolorum doloremque modi suscipit harum magni, debitis sed facere, rerum magnam dolor pariatur, distinctio voluptatem rem animi.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae veniam voluptates hic! Dolorum doloremque modi suscipit harum magni, debitis sed facere, rerum magnam dolor pariatur, distinctio voluptatem rem animi.</p>
  
  <button data-tooltip="длинный текст с подсказкой">Кнопка 1</button>
  <button data-tooltip="Подсказка с<br> HTML тегами">Кнопка 2</button>
```
**css**
```
.tooltip {
  position: fixed;
  padding: 15px;
  border: 2px dashed #b3c9ce;
  border-radius: 4px;
  text-align: center;
  color: #333;
  background: #fff;
}
```
```
    let tooltioElem;
    document.onmouseover = function(e) {
      let target = e.target
      let tooltipHtml = target.dataset.tooltip
      if(!tooltipHtml) return
      tooltioElem = document.createElement('div')
      tooltioElem.className = "tooltip"
      tooltioElem.innerHTML = tooltipHtml
      document.body.append(tooltioElem)

      let coords = target.getBoundingClientRect()
      let left = coords.left + (target.offsetWidth - tooltioElem.offsetWidth) / 2
      if(left < 0) left = 5

      let top = coords.top - tooltioElem.offsetHeight - 5
      if(top < 0) top = coords.top + target.offsetHeight + 5

      tooltioElem.style.left = left + 'px'
      tooltioElem.style.top = top + 'px'
    }

    document.onmouseout = function(e) {
      if(tooltioElem){
        tooltioElem.remove()
        tooltioElem = null
      }
    }
```

 ## Урок 77. Отмена стандартного поведения.

### ex20. Действия браузера по умолчани(контекстное меню правой кнопкой мыши)
body
```
  <a class="menu_link" href="/index.html" onclick="return false">На главную</a>
  <a class="menu_link" href="/index.html" onclick="event.preventDefault()">На главную</a>
  <a class="menu_link" href="/index.html" id="link">На главную</a>

  <p>Lorem ipsum dolor sit amet.</p>
  <button class="menu_link" id="elem">Кнопка</button>
```
При нажатие правой кнопкой мыши на кнопку, отменям контекстное меню.
```
 link.onclick = function(e) {
  return false
 }

 elem.oncontextmenu = function(e) {
  e.preventDefault()
  alert("Контекстное меню кнопки")
 }
```
Метод **preventDefault()** интерфейса **Event** сообщает **User agent**, что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно. Событие продолжает распространяться как обычно, до тех пор, пока один из его обработчиков не вызывает методы **stopPropagation()** или **stopImmediatePropagation()**, любой из которых сразу же прекращает распространение.
Как отмечено ниже, вызов метода **preventDefault()** для события, не подлежащего отмене, например события, отправленного через **EventTarget.dispatchEvent()**, без указания **cancelable:true** не имеет эффекта.           
**Event.defaultPrevented** - возвращает **boolean**-значение, информирующее о том, был ли вызван **event.preventDefault()** в текущем обработчике события.       
Пример использования:
```
 link.onclick = function(e) {
  return false
 }

 elem.oncontextmenu = function(e) {
  e.preventDefault()
  alert("Контекстное меню кнопки")
 }
 document.oncontextmenu = function(e) {
  if(e.defaultPrevented) return
  e.preventDefault()
  alert("Контекстное меню документа")
 }
```
### ex21. Подтверждение перехода по ссылке.

Вопрос о переходе на сайт:
```
<body>
  <a href="https://www.google.com/">На Google</a>

  <script>
   document.body.onclick = function(e) {
    function handleLink(href) {
      let isLeaving = confirm(`Перейти на ${href}?`)
      if(!isLeaving) return false
    }
    let target = e.target.closest('a')
    if(target && document.body.contains(target)) {
      return handleLink(target.getAttribute('href'))
    }
   }
  </script>
</body>
```

 ## Урок 78. Сочетание клавиш.

### ex22. Какая кнопка мыши нажата.
Выводим в консоль нажатия всех кнопок мыши по зелёному квадрату.
```
<body>
  <div class="bgc" style="width: 150px; height: 150px"></div>
  <script>
    document.querySelector('.bgc').addEventListener('mousedown', function(e){
      switch (e.which){
        case 1:
          console.log('Нажата левая кнопка мыши')
          break
          case 2:
          console.log('Нажата средняя кнопка мыши')
          break
          case 3:
          console.log('Нажата правая кнопка мыши')
          break
      }
    })
```

### ex23. Вывод в консоль комбинации клавишь.

В этом событии выводим стринг в консоль при условие зажатия **ctrl+shift** и клике по кнопке или вариант с команд для мак.
```
<body>
  <button>Кнопка</button>
  <script>
    document.querySelector('button').onclick = function(e) {
      if((e.ctrlKey && e.shiftKey) || (e.metaKey && e.shiftKey)) {
        console.log('Ctrl+Shift+Клик')
        console.log('CMD+Shift+Клик')
      }
    }
  </script>
</body>
```

### ex24. Отключить выделение.
 Убираем выделение текста но оставляем рабочий двойной клик.
 ```
<body>
  <div>Двойной клик выделит текст</div>
    <script>
       document.querySelector('div').ondblclick = function(e) {
        console.log("Двойной клик")
       }
       document.querySelector('div').onmousedown = function(e) {
        e.preventDefault()
       }
    </script>
</body>
 ```
  ## Урок 79. Выделение через CTRL.

### ex25. Предотвращение копирования.

Запрещаем копировать тег **p**.
```
<body>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo beatae blanditiis laboriosam consequuntur provident tenetur veniam quidem, rerum, eligendi voluptates nihil saepe voluptate vitae, nisi enim? Ducimus reprehenderit necessitatibus eaque!</p>
  <textarea name="" id="" cols="30" rows="10"></textarea>
  <script>
    document.querySelector('p').oncopy = function(e) {
      e.preventDefault()
    }
  </script>
</body>

```
### ex26. Выделяемый список.

Задача сделать так что бы с зажатым **ctrl** выделялись элементы списка, а с помощью клика один раз.
```
<body>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
  </ul>
  
  <script>
    list.onclick = function(e) {
      if(e.target.tagName != 'LI') return
      if(e.ctrlKey || e.metaKey) {
        toggleSelect(e.target)
      } else {
        singleSelect(e.target)
      }
    }

    list.onmousedown = function() {
      return false
    }

    function toggleSelect(li) {
      li.classList.toggle('bgc')
    }
    function singleSelect(li) {
      for(let elem of list.querySelectorAll('.bgc')) {
        elem.classList.remove('bgc')
      }
      li.classList.add('bgc')
    }
  </script>
</body>
```

## Урок 80. Range-Слайдер.

### ex27. Слайдер (Range).
css
```
.slider {
  width: 300px;
  height: 10px;
  background-color: #eee;
  border-radius: 5px;
}
.slider__btn {
  cursor: pointer;
  background-color: dodgerblue;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  left: 0px;
  top: -5px;
```
body
```
<body style="background-color: #333; margin: 25px;">

  <div id="slider" class="slider">
    <div class="slider__btn"></div>
  </div>
```
Задача, сделать ползунок наподобие **input** **type=range**.

```
<script>
    let btn = slider.querySelector('.slider__btn')
    btn.onmousedown = function(e) {
      e.preventDefault()
      let shiftX = e.clientX - btn.getBoundingClientRect().left
     
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)

      function onMouseMove(e) {
        let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left
        if(newLeft < 0)
        newLeft = 0
        let rightEdge = slider.offsetWidth - btn.offsetWidth
        if(newLeft > rightEdge)
        newLeft = rightEdge

        btn.style.left = newLeft + 'px'
      }
     function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
     }
    }
  </script>
```

## Урок 81. События клавиатуры.

### ex28. События клавиатуры.

Событие **keydown** происходит при нажатии клавиши, а **keyup** – при отпускании.
Выведем в консоль нажатие клавишь на клавиатуре.
```
  <script>
    document.addEventListener('keyup', function(e) {
      console.log('Код: ' + e.code )
      console.log('Символ: ' + e.key )
    })
  </script>
```
Выводим в консоль **string** при нажатие определённых клавишь.
```
    document.addEventListener('keydown', function(e) {
    if(e.code == "KeyZ" && (e.ctrlKey || e.metaKey)) {
      console.log('Вы нажали CTRL+Z')
    }
  })
```

### ex29. Сочетание клавиш.
Функция для cочетания 2-ух клавишь в консоль.
```
  <script>
    function hotKeys(func, ...codes) {
      let pressed = new Set()
      document.addEventListener('keydown', function(e) {
        pressed.add(e.code)
        for(let code of codes) {
          if(!pressed.has(code)){
            return
        }
      }
      pressed.clear()
      func()
      })
      document.addEventListener('keyup', function(e) {
        pressed.delete(e.code)
      })
    }

    hotKeys(function() {
     console.log("вы нажали F+G")
     }, "KeyF","KeyG")

     hotKeys(function() {
     console.log("вы нажали T+L")
     }, "KeyT","KeyL")
  </script>
```
## Урок 82. Работа с формами.

### ex30.
body
```
 <form name="form1">
    <input type="text" name="input1" value="1">
    <input type="text" name="input2" value="2">
    <input type="radio" name="radioBtn" value="btn1" checked>
    <input type="radio" name="radioBtn" value="btn2">
    <input type="radio" name="radioBtn" value="btn3">
    <fieldset name="myFieldset">
      <legend>Title</legend>
      <input name="password" type="password">
    </fieldset>
    <select name="mySelect">
      <option value="item1" selected>Элемент 1</option>
      <option value="item2">Элемент 2</option>
      <option value="item3">Элемент 3</option>
    </select>
    <select name="mySelect2" multiple>
      <option value="item4" selected>Элемент 1</option>
      <option value="item5">Элемент 2</option>
      <option value="item6">Элемент 3</option>
    </select>
  </form>
```
Возводим все элементы **HTML** в массив и выводим в консоль.
```
    let form = document.forms[0]
    let radioBtns = form.elements.radioBtn
    console.log(radioBtns)
```
Создадим масив и выведем в консоль 2 элемента **option** с атрибутом **selected**.
 Метод **map()** создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
```
  <script>
    let form = document.forms[0]
    let select = form.elements.mySelect2
    let selected = Array.from(select.options)
    .filter(option => option.selected)
    .map(option => option.value)
    console.log(selected)
    </script>
```

## Урок 83. Фокус и потеря фокуса.

### ex31. Фокусировка.

Есть два инпута, задача сделать так если в первом инпуте не будет **@** то выводить ошибку и навешивать класс с красным бэкграундом, и нельзя перейти на другой инпут.
```
<body>

  <form id="form">
    <input name="mail" type="email">
    <input type="text">
  </form>
  <div id="error"></div>

  <script>
    let input = document.forms[0].mail
    input.onblur = function() {
      if(!input.value.includes('@')) {
    input.classList.add('invalid')
    error.innerHTML = "Пожалуйста, введите правильный email."
    input.focus()
  }

}
  </script>
```
При активации фокуса срабатывает смена класса.
```
  <script>
    let input = document.forms[0].mail
    form.addEventListener('focus', ()=> form.classList.add('bgc'), true)
    form.addEventListener('blur', ()=> form.classList.remove('bgc'), true)
  </script>
```

## Урок 84. Перемещение по стрелкам.

### ex32. Управление с клавиатуры.
Задача сделать фокус на элементе и передвигать его с помощью стрелок.  

**Element.getBoundingClientRect()** Метод возвращает **DOMRect** объект, предоставляющий информацию о размере элемента и его положении относительно области просмотра.
body
```
<img src="..//img/1.jpg" id="image">
```
```
  <script>
    image.tabIndex = 0

    image.onclick = function() {
      this.style.left = this.getBoundingClientRect().left + 'px'
      this.style.top = this.getBoundingClientRect().top + 'px'
      this.style.position = 'fixed'
    }

    image.onkeydown = function(e) {
      switch(e.key) {
        case 'ArrowLeft':
          this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px'
          return false
          case 'ArrowRight':
          this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px'
          return false
          case 'ArrowUp':
          this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px'
          return false
          case 'ArrowDown':
          this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px'
          return false
      }
    }
  </script>
```

## Урок 85. События форм и буфера обмена.

### ex33. События change / input.

body
```
  <input type="text" id="input">
```
Всё записанное в **input** выводиться в консоль.
```
    input.oninput = function() {
      console.log(input.value)
    }
```
После того как убираем фокус **input**
фиксируеться данные в консоле.
```
    input.onchange = function() {
      console.log(input.value)
    }
```

### ex34. События cut / copy / paste.
Взаимодействия с текстом из **input** а вчастности **cut**, **cope**, **paste** выводяться в консоль.
```
  <script>
    input.oncut = input.oncopy = input.onpaste = function(e) {
     console.log(e.type + ' - ' + e.clipboardData.getData('text/plain'))
     return false
    }
  </script>
```

### ex35. Событие Submit.   
Отправка формы по клику.
body
```
 <form class="form">
    <input type="text">
    <input type="submit" value="Кнопка Submit">
    <input type="image" value="Кнопка Image">
  </form>
```
```
  <script>
    let form = document.forms[0]
    form.onsubmit = function(e) {
      console.log('fsdfsf')
      e.preventDefault()
    }
  </script>
```

## Урок 86. События страницы, async и defer скрипты.

### ex36. Загрузка документа и ресурсов
Событие **DOMContentLoaded** происходит когда весь **HTML** был полностью загружен и пройден парсером, не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов. Значительно отличающееся от него событие **load** используется для отслеживания только полностью загруженной страницы. Широко распространённой ошибкой является использование **load** в ситуации когда **DOMContentLoaded** является более подходящим, будьте внимательны.
```
document.addEventListener("DOMContentLoaded", function(e) {
  console.log('DOM построен')
})
```
Обновление страницы, eсли посетитель собирается уйти со страницы или закрыть окно, обработчик **beforeunload** попросит дополнительное подтверждение.
```
window.onbeforeunload = function() {
  return "Есть несохранённые изменения. Всё равно уходим?";
};
}
```

### ex37. Скрипты async, defer.
![Альтернативный текст](/065%20chapter_2/chapter_2/img/086%20async_defer.png "Подсказка")

https://learn.javascript.ru/external-script

Атрибут-async.
Поддерживается всеми браузерами, кроме IE9-. Скрипт выполняется полностью асинхронно. То есть, при обнаружении **<script async src="...">** браузер не останавливает обработку страницы, а спокойно работает дальше. Когда скрипт будет загружен – он выполнится.

Атрибут-defer.
Поддерживается всеми браузерами, включая самые старые IE. Скрипт также выполняется асинхронно, не заставляет ждать страницу, но есть два отличия от **async**.

## Урок 87. Диапозон и Выделение.

### ex38. Диапазон Range.
Методы Range
Существует множество удобных методов для манипулирования диапазонами.

Установить начало диапазона:

* setStart(node, offset) установить начальную границу в позицию **offset** в node
* setStartBefore(node) установить начальную границу прямо перед node
* setStartAfter(node) установить начальную границу прямо после node
Установить конец диапазона (похожи на предыдущие методы):

* setEnd(node, offset) установить конечную границу в позицию **offset** в **node**
* setEndBefore(node) установить конечную границу прямо перед **node**
* setEndAfter(node) установить конечную границу прямо после **node**
Как было показано, node может быть как текстовым узлом, так и элементом: для текстовых узлов offset пропускает указанное количество символов, в то время как для элементов – указанное количество дочерних узлов.

Другие:

* selectNode(node) выделить **node** целиком
* selectNodeContents(node) выделить всё содержимое **node**
* collapse(toStart) если указано **toStart=true**, установить конечную границу в начало, иначе установить начальную границу в конец, схлопывая таким образом диапазон
* cloneRange() создать новый диапазон с идентичными границами
Чтобы манипулировать содержимым в пределах диапазона:

* deleteContents() – удалить содержимое диапазона из документа
* extractContents() – удалить содержимое диапазона из документа и вернуть как **DocumentFragment**
* cloneContents() – склонировать содержимое диапазона и вернуть как **DocumentFragment**
* insertNode(node) – вставить **node** в документ в начале диапазона
* surroundContents(node) – обернуть **node** вокруг содержимого диапазона. Чтобы этот метод сработал, диапазон должен содержать как открывающие, так и закрывающие теги для всех элементов внутри себя: не допускаются частичные диапазоны по типу **i** abc.
Используя эти методы, мы можем делать с выделенными узлами что угодно.

https://learn.javascript.ru/selection-range

Работа с диапозоном:
```
<body>

  <p id="p">Текст: <i>курсивный текст</i> и <b>жирный текст</b></p>
  <p id="result"></p>

  <script>
    let range = new Range();
    // Каждый описанный метод представлен здесь:
    let methods = {
      // deleteContents() удалить содержимое диапазона из документа
      deleteContents() {
        range.deleteContents()
      },
      extractContents() {
        // extractContents() удалить содержимое диапазона из документа и вернуть как DocumentFragment
        let content = range.extractContents();
        result.innerHTML = "";
        result.append("Извлечено: ", content);
      },
      cloneContents() {
        // cloneContents() склонировать содержимое диапазона и вернуть как DocumentFragment
        let content = range.cloneContents();
        result.innerHTML = "";
        result.append("Клонировано: ", content);
      },
      insertNode() {
        // insertNode(node) вставить node в документ в начале диапазона
        let newNode = document.createElement('u');
        newNode.innerHTML = "НОВЫЙ УЗЕЛ";
        range.insertNode(newNode);
      },
      surroundContents() {
        // surroundContents(node) обернуть node вокруг содержимого диапазона
        let newNode = document.createElement('u');
        try {
          range.surroundContents(newNode);
        } catch (e) { alert(e) }
      },
      resetExample() {
        p.innerHTML = `Текст: <i>курсивный текст</i> и <b>жирный текст</b>`;
        result.innerHTML = "";
        //range.setStart(p.firstChild, 2);
        //range.setEnd(p.querySelector('b').firstChild, 3);
        range.setStart(p, 0);
        range.setEnd(p, 4);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    };
    for (let method in methods) {
      document.write(`<div><button onclick="methods.${method}()">${method}</button></div>`)
    }
    methods.resetExample();

  </script>
</body>
```
### ex39. Выделение Selection.

C помощью этой функции всё выделенное в **textarea** будет отображенно в консоли.
```
  <p id="p">Текст: <i>курсивный текст</i> и <b>жирный текст</b></p>

  От<br>
  <input type="text" disabled id="from"><br>
  До<br>
  <input type="text" disabled id="to"><br>

  <textarea id="area" cols="30" rows="4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo a quaerat praesentium cum, repellat rem dolores eos totam minus reprehenderit quae nulla ullam delectus, expedita quos magni quasi. Fuga, exercitationem!</textarea>
  <br>
  <button id="button">Кнопка с текстом</button>

  <script>
    document.onselectionchange = function() {
      let {anchorNode, anchorOffset, focusNode, focusOffset} = document.getSelection()
      from.value = `${anchorNode && anchorNode.data}:${anchorOffset}`
      to.value = `${focusNode && focusNode.data}:${focusOffset}`

      console.log(document.getSelection().toString())
    }
  </script>
```

Запретить выделение в данном моменте для тега **p**.
```
 p.onselectstart = () => false
```

## Урок 88. Депозитный калькулятор.

### ex40. Депозитный калькулятор.

https://learn.javascript.ru/events-change-input
```
<body id="dark">
  <h1>Депозитный калькулятор</h1>

  <div class="d-flex">
    <form name="calculator">
      <table>
        <tr>
          <td>Первоначальный депозит</td>
          <td>
            <input name="money" type="number" value="10000" required>
          </td>
        </tr>
        <tr>
          <td>Срок вклада?</td>
          <td>
            <select name="months">
              <option value="3">3 (минимум)</option>
              <option value="6">6 (полгода)</option>
              <option value="12" selected>12 (год)</option>
              <option value="18">18 (1.5 года)</option>
              <option value="24">24 (2 года)</option>
              <option value="30">30 (2.5 года)</option>
              <option value="36">36 (3 года)</option>
              <option value="60">60 (5 лет)</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Годовая процентная ставка?</td>
          <td>
            <input name="interest" type="number" value="5" required>
          </td>
        </tr>
      </table>
    </form>

    <table id="diagram">
      <tr>
        <th>Было</th>
        <th>Станет</th>
      </tr>
      <tr>
        <th id="money-before"></th>
        <th id="money-after"></th>
      </tr>
      <td>
        <div style="background: tomato;width:40px;height:100px"></div>
      </td>
      <td>
        <div style="background: springgreen;width:40px;height:0" id="height-after"></div>
      </td>
    </table>
  </div>

  <script>
   let form = document.forms.calculator

   form.money.oninput = calculate
   form.money.onchange = calculate
   form.interest.oninput = calculate

   function calculate() {
    let inital = +form.money.value
    if(!inital) return
    let interest = form.interest.value * 0.01
    if(!interest) return
    let year = form.months.value / 12
    if(!year) return 

    let result = Math.round(inital * (1+interest*year))
    let height = result / form.money.value * 100 + 'px'
    document.getElementById('height-after').style.height = height
    document.getElementById('money-before').innerHTML = form.money.value
    document.getElementById('money-after').innerHTML = result 
  }

  calculate()
```

## Урок 89. Генератор CSS тени.

### ex41. Генератор тени.

Программа которая будет генерировать **css** код для свойства **box-shadow**.
Функция **parseInt()** принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.
body
```
  
  <h2>Box-shadow Generator</h2>
  
  <form>
    <h3>Настройки</h3>
    
    <div class="form-group">
      <label for="inset">Тень внутри элемента?</label>
      <input type="checkbox" id="inset" checked>
    </div>

    <label for="offsetX">Смещение по оси x</label>
    <input type="range" id="offsetX" min="-25" max="25" step="1" value="0">
    
    <label for="offsetY">Смещение по оси y</label>
    <input type="range" id="offsetY" min="-25" max="25" step="1" value="0">
    
    <label for="blur">Разымытие</label>
    <input type="range" id="blur" min="0" max="25" step="1" value="8">
    
    <label for="stretch">Растяжение</label>
    <input type="range" id="stretch" min="-20" max="20" step="1" value="6">
    
    <label for="color">Цвет</label>
    <input type="color" id="color">
    
    <label for="opacity">Прозрачность</label>
    <input type="range" id="opacity" min="0" max="1" step="0.01" value="0.5">
    
    <h3>Результат</h3>
    <div id="result"></div>
    <textarea id="cssCode" readonly></textarea>
  </form>
```
css
```
body {
  font-family: "Calibri";
}
h2, h3 {
  text-transform: uppercase; 
}
h3 {
  margin-top: -10px;
  margin-right: -10px;
  margin-left: -10px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgb(53, 109, 173);
  color: white;
}
form {
  padding: 10px;
  width: 320px;
  display: inline-flex;
  flex-direction: column;
}
#result {
  width: 60px;
  height: 60px;
  background-color: rgb(219, 157, 56);
  margin-bottom: 10px;
}
textarea {
  resize: none;
  height: 50px;
}
.form-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px dashed gray;
}
#color {
  width: 40px;
  height: 40px;
  border: none;
  padding: 0;
  margin: 0;
}
#opacity {
  margin-bottom: 30px;
}
```
```
  <script>
    function generateCss() {
      let inset = document.getElementById('inset').checked
      inset = inset ? ' inset' : ''

      let offsetX = document.getElementById('offsetX').value
      let offsetY = document.getElementById('offsetY').value
      let blur = document.getElementById('blur').value
      let stretch = document.getElementById('stretch').value

      let color = document.getElementById('color').value
      let red = parseInt(color.slice(1,3), 16)
      let green = parseInt(color.slice(3,5), 16)
      let blue = parseInt(color.slice(5,7), 16)
      let opacity = document.getElementById('opacity').value
      
      let result = document.getElementById('result')
      let textarea = document.getElementById('cssCode')

      let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px rgba(${red}, ${green}, ${blue}, ${opacity})`
      
      textarea.value = 'box-shadow:' + str
      result.style.boxShadow = str
    }
    for(let item of document.querySelectorAll('input')) {
      item.addEventListener('input', generateCss)
    }
  </script>
```

## Урок 90. Задание.

Сделать пару похожих программ как в прошлом задании.

## Урок 91. Система уведомлений.   

### ex42. Уведомления.
Создаём систему уведомлений с звуковым сигналом и хронящимися данными в **localStorage**.

body
```
<body>

  <div class="notification">
    <div class="notification__header">
      <img src="../img/notification.png">
      <h2>Уведомления</h2>
    </div>
    <div class="notification__info"></div>
    <div class="notification__form">
      <input type="time">
      <textarea placeholder="Введите текст уведомления" maxlength="100"></textarea>
      <button>ОК</button>
    </div>
    <div class="notification__list">
      <h3>Список уведомлений</h3>
      <div></div>
      <button>Очистить список</button>
    </div>
  </div>

  <script src="../js/notification.js"></script>
</body>
```

css
```
body {
  font-family: "Calibri";
  background-color: #eee;
}
.notification {
  background-color: #fff;
  max-width: 500px;
  margin: 0 auto;
}
.notification__header {
  background-color: #bcd7e7;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  margin-bottom: 10px;
}
.notification__header img {
  align-self: center;
  max-width: 25px;
}
.notification__header h2 {
  margin: 0;
}
.notification__info {
  padding: 0 15px;
  font-weight: bold;
  color: red;
  transition: 1s;
  opacity: 0;
}
.notification__form {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
}
.notification__form input {
  height: 30px;
  min-width: 75px;
}
.notification__form textarea {
  resize: none;
  margin: 0px 10px;
  padding: 10px;
  font-family: "Calibri";
  width: 100%;
  height: 70px;
}
.notification__form > button, .notification__list > button {
  cursor: pointer;
  margin: 0;
  text-transform: uppercase;
  border: none;
  padding: 10px 15px;
  background-color: #bcd7e7;
}
.notification__form > button:hover, .notification__list > button:hover {
  opacity: 0.9;
}
.notification__list {
  padding: 15px;
}
.notification__item {
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  padding: 10px;
  margin-bottom: 10px;
}
.notification__warning {
  background-color: #fff1d7;
}
button[data-time] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  background-color: #a01b1b;
  color: white;
  border: none;
}
button[data-time]:hover {
  background-color: #e00f0f;
}
.notification__list h3 {
  margin: 0 0 15px 0;
}
```      
script
```
document.querySelector('.notification__form button').addEventListener('click', function() {
    let time = document.querySelector('.notification__form input').value
    let message = document.querySelector('.notification__form textarea').value

    let info =document.querySelector('.notification__info')


    if(!message && !time) {
        info.textContent = 'Укажите время и оповещение'
        info.style.opacity = 3
        setTimeout(()=>{
            info.style.opacity = 0
        },2000)
        setTimeout(()=>{
            info.textContent = ''
        },3000)
        return
    }
        if(!time) {
        info.textContent = 'Укажите время'
        info.style.opacity = 1
        setTimeout(()=>{
            info.style.opacity = 0
        },2000)
        setTimeout(()=>{
            info.textContent = ''
        },3000)
        return
    }
    if(!message) {
        info.textContent = 'Укажите оповещение'
        info.style.opacity = 3
        setTimeout(()=>{
            info.style.opacity = 0
        },2000)
        setTimeout(()=>{
            info.textContent = ''
        },3000)
        return
    }
    localStorage.setItem(time, message)
    update()
})

    document.querySelector('.notification__list > button').addEventListener('click', function() {
        if(localStorage.length && confirm("Очистить список уведомлений?")) {
            localStorage.clear()
            update()
            document.querySelector('.notification__list').hidden = true
        } else if(!localStorage.length) {
            alert("Уведомлений нет!")
        }
    })

    function update() {
        if(!localStorage.length) {
            document.querySelector('.notification__list').hidden = true
        } else {
            document.querySelector('.notification__list').hidden = false
        }
        document.querySelector('.notification__list > div').innerHTML = ''
        document.querySelector('.notification__info').textContent = ''

        for(let key of Object.keys(localStorage)) {
            document.querySelector('.notification__list > div').insertAdjacentHTML('beforeend',`
            <div class="notification__item">
            <div>${key} - ${localStorage.getItem(key)}</div>
            <button data-time="${key}">&times;</button>
            </div>
            `)
        }   
      document.querySelector('input').value = '' 
      document.querySelector('textarea').value = ''
      if(document.querySelector('.audioAlert')) {
        document.querySelector('.audioAlert').remove()
      }  
    }


     document.querySelector('.notification__list').addEventListener('click', function(e){
        if(!e.target.dataset.time){
            return
        }
    localStorage.removeItem(e.target.dataset.time) 
    update()
    })

    setInterval(()=>{
        let currentDate = new Date()
        let currentHour = currentDate.getHours()
        if(currentHour < 10) {
            currentHour = '0'+currentHour
        }

        let currentMinute = currentDate.getMinutes()
        if(currentMinute < 10) {
            currentMinute = '0'+currentMinute
        } 

        let currentTime = `${currentHour}:${currentMinute}`
        for(let key of Object.keys(localStorage)) {
            let keyHour = key.split(':')[0]
            let keyMinute = key.split(':')[1]

            if(key == currentTime || (keyHour == currentHour && keyMinute < currentMinute))
            {
                document.querySelector(`button[data-time="${key}"]`).closest('.notification__item').classList.add('notification__warning')
                if(!document.querySelector('.audioAlert')) {
                    document.querySelector('body').insertAdjacentHTML('afterbegin','<audio loop class="audioAlert"><source src="../source/alert.mp3" type="audio/mpeg"></audio>')
                    document.querySelector('.audioAlert').play()
                }
            }
        }
    }, 2000)
```

# 07 Библиотеки JavaScript

## Урок 92. Работа с текстовыми файлами и FileReader.   

### ex1. Содержимое txt файла открываем в консоле.
**FileReader** объект, цель которого читать данные из **Blob** (и, следовательно, из **File** тоже).

Данные передаются при помощи событий, так как чтение с диска может занять время.     

Конструктор:
```
let reader = new FileReader(); // без аргументов
```          
Основные методы:        

**readAsArrayBuffer(blob)** – считать данные как **ArrayBuffer**
**readAsText(blob, [encoding])** – считать данные как строку (кодировка по умолчанию: **utf-8**)
**readAsDataURL(blob)** – считать данные как **base64**-кодированный **URL**.
**abort()** – отменить операцию.
Выбор метода для чтения зависит от того, какой формат мы предпочитаем, как мы хотим далее использовать данные.

**readAsArrayBuffer** – для бинарных файлов, для низкоуровневой побайтовой работы с бинарными данными. Для высокоуровневых операций у **File** есть свои методы, унаследованные от **Blob**, например, **slice**, мы можем вызвать их напрямую.
**readAsText** – для текстовых файлов, когда мы хотим получить строку.
**readAsDataURL** – когда мы хотим использовать данные в **src** для **img** или другого тега. Есть альтернатива – можно не читать файл, а вызвать **URL.createObjectURL(file)**, детали в главе **Blob**.

```
<body>
  <input type="file" onchange="openFile(this)">

  <script>
function openFile(input) {
  let file = input.files[0]
  let reader = new FileReader()
  reader.readAsText(file)
  reader.onload = function() {
     console.log(reader.result) // содержимое файла
  }
  reader.onerror = function() {
    console.log(reader.error)
  }
}
  </script>
</body>
```
## Урок 93. Создание анимации на JS и CSS.
### ex2. 4 перехода и кривая Безье.

Существует 4 свойства для описания CSS-переходов:

* transition-property – свойство перехода
* transition-duration – продолжительность перехода
* transition-timing-function – временная функция перехода
* transition-delay – задержка начала перехода          
Далее мы рассмотрим их все, а сейчас ещё заметим, что есть также общее свойство **transition**, которое позволяет задать их одновременно в последовательности: **property duration timing-function delay**, а также анимировать несколько свойств одновременно.

**Кривая Безье**
Пример:
html
```
  <div class="move move0">linear<br>cubic-bezier(0, 0, 1,
    1)
    <img src="../img/animationLinear.jpg">
  </div>
  <div class="move move1">ease<br>cubic-bezier(0.25, 0.1, 0.25,
    1.0)
    <img src="../img/animationEase.jpg">
  </div>
  <div class="move move2">ease-in<br>cubic-bezier(0.42, 0, 1.0,
    1.0)
    <img src="../img/animationEaseIn.jpg">
  </div>
  <div class="move move3">ease-out<br>cubic-bezier(0, 0, 0.58, 1.0)
    <img src="../img/animationEaseOut.jpg">
  </div>
  <div class="move move4">ease-in-out<br>cubic-bezier(0.42, 0, 0.58,
    1.0)
    <img src="../img/animationEaseInOut.jpg">
  </div>
  <button>Анимация</button>
  <button>Сбросить</button>
```
css
```
.animated {
  transition-property: background-color;
  transition-duration: 3s;
  transition-delay: 1s;
}
.move {
  position: relative;
  width: 320px;
  height: 100px;
  color: #eee;
  left: 0;
  cursor: pointer;
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
.move img {
  width: 100px;
  height: 100px;
}
.move0 {
  background-image: url(../img/1.jpg);
  transition: left 5s linear;
}
.move1 {
  background-image: url(../img/2.jpg);
  transition: left 5s ease;
}
.move2 {
  background-image: url(../img/3.jpg);
  transition: left 5s ease-in;
}
.move3 {
  background-image: url(../img/4.jpg);
  transition: left 5s ease-out;
}
.move4 {
  background-image: url(../img/5.jpg);
  transition: left 5s ease-in-out;
}
```
script
```
    document.querySelector('button').onclick = function () {
      document.querySelector('.move0').style.left = '450px'
      document.querySelector('.move1').style.left = '450px'
      document.querySelector('.move2').style.left = '450px'
      document.querySelector('.move3').style.left = '450px'
      document.querySelector('.move4').style.left = '450px'
    }

    document.querySelectorAll('button')[1].onclick = function () {
      document.querySelector('.move0').style.left = '0px'
      document.querySelector('.move1').style.left = '0px'
      document.querySelector('.move2').style.left = '0px'
      document.querySelector('.move3').style.left = '0px'
      document.querySelector('.move4').style.left = '0px'
    }
```
### ex3. Плавное скрытие блока.

Событие **transitionend** срабатывает, когда **CSS transition** закончил своё выполнение. В случае, когда анимация удаляется до её завершения, то событие не срабатывает.
Пример:
```
<body>
  <img class="img-animate" src="../img/1.jpg" width="100">
  <br>
  Текст после картинки
  <script>
    document.querySelector('.img-animate').onclick = function() {
      this.style.opacity = 0
    }
    document.querySelector('.img-animate').addEventListener('transitionend', function(e) {
      if(!e.propertyName == 'opacity') return
      console.log(e.propertyName)
      console.log(e.elapsedTime)
      e.target.hidden = true
    })
  </script>
</body>
```
css
```
.img-animate {
  transition-property: opacity;
  transition-duration: 2s;
}
```

### ex4. Цикличная анимация без js.
html
```
<body>
  <img src="../img/1.jpg" class="imgKeyframes" width="50">
  <script>
  </script>
</body>
```
css
```
@keyframes move {
  from {
    left: 0px
  }
  to {
    left: 150px;
  }
}
.imgKeyframes {
  animation: move 3s infinite alternate;
  position: absolute;
}
```
### ex5. Анимация без css.
```
<body>
  
  <img src="../img/1.jpg" width="100" id="img" style="position: relative;">

  <script>
    img.onclick = function() {
      let start = Date.now()
      let timer = setInterval(function(){
        let timePassed = Date.now() - start
        img.style.left = timePassed / 5 + 'px'
        if(timePassed > 2000) clearInterval(timer)
      },20)
    }
  </script>
</body>
```

## Урок 94. Регулярные выражения.
Регулярные выражения - это шаблоны, используемые для сопоставления последовательностей символов в строках. В **JavaScript** регулярные выражения также являются объектами. Эти шаблоны используются в методах **exec** и **test** объекта **RegExp**, а также **match**, **replace**, **search** и **split** объекта **String**. 

### ex6. Пример.

```
<body>
  
  <script>
    let tag = prompt("введите HTML тег", "h2")
    let regexp = new RegExp(`<${tag}>`)
    console.log(regexp)// h2
  </script>
</body>
```
#### Флаги.
Регулярные выражения могут иметь флаги, которые влияют на поиск.        
В JavaScript их всего шесть:
* i - С этим флагом поиск не зависит от регистра: нет разницы между A и a (см. пример ниже).
* g - С этим флагом поиск ищет все совпадения, без него – только первое.
* m - Многострочный режим .
* s - Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n .
* u - Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар.
* y - Режим поиска на конкретной позиции в тексте.

Замена значений.
```
  <script>
  let string = 'Строка, ещё одна строка'
  console.log(string.replace(/строка/ig, "Новая строка"))
  </script>
```
Добавление значений.
```
  <script>
  let string = 'Строка, ещё одна строка'
  console.log(string.replace(/строка/ig, "$& showtime "))
  </script>
```

### ex7. Специальные символы.

 Специальные символы в регулярных выражениях --  https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85_%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2

### ex8. 
### ex9. Формат времени.
```
  <script>
   let regexp = /^\d\d:\d\d$/
   while(true) {
    let str = prompt("Введите время")
    if(regexp.test(str)) {
      alert('Вы ввели время ' + str)
      break;
    }
    
   }
  </script>
  ```
  ### ex10. Многострочный режим якорей из последних букв.
  ```
<body>
  
  <script>
    let str = `1. Первая строка
    2. Вторая строка
    3. Третья\n4.строка`

    console.log(str.match(/\D$/gm))
  </script>
</body>
  ```
  ### ex11. Граница слова.
    ```
    <script>
    console.log("Hello World".match(/\bWorld\b/))   //['World', index: 6, input: 'Hello World', groups: undefined]
    console.log("Hello My World".match(/\bWorld\b/)) //['World', index: 9, input: 'Hello My World', groups: undefined]
    console.log("Hello 44 22 555 777".match(/\b\d\d\b/g)) //(2) ['44', '22']
  </script>
  ```
  ### ex12. Экранирование, специальные символы.
  ```
  <script>
    // Специальные символы, чтобы их использовать необходимо их экранировать
    // [\^$.|?*+()
    console.log("6.2".match(/\d.\d/)) // ['6.2', index: 0, input: '6.2', groups: undefined]
  </script>
  ```
  ```
    console.log("/".match(/\//)) // ['/', index: 0, input: '/', groups: undefined]
  ```
  ### ex13. Наборы и диапозоны(посимвольный поиск).
  ```
  <script>
    console.log("16 56 46 76".match(/[15]6/g))
    console.log("#F5D".match(/#[0-9A-F][\da-f][0-0-9A-f]/i))

    console.log('email@yandex.ru'.match(/[^\d\sA-Z]/gi))
  </script>
  ```
  Вывод консоли:
  ```
(2) ['16', '56']
['#F5D', index: 0, input: '#F5D', groups: undefined]
(2) ['@', '.']
  ``` 
  **console.log('email@yandex.ru'.match(/[^\d\sA-Z]/gi))**- разберём этот код.
  * **'email@yandex.ru'** среди этого будет происходить поиск.
  * Метод **match()** возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.
  * **[^\d\sA-Z]** - исключение всех чисел, пробелов и букв от A до Z.
  * Флаги:        
  1. i - c этим флагом поиск не зависит от регистра: нет разницы между A и a.
  2. g - c этим флагом поиск ищет все совпадения, без него – только первое.       
  
   ### ex14. Квантификаторы.
  Поиск от трёх точек и более.
  ```  
     <script>
    console.log('выфвфы...... вфыввф.. вфывфв..фвывыфвф... выфв.'.match(/\.{3,}/g)) \\ ['......', '...']
  </script>
  ```
  Жадный и ленивый режим.
```
  <script>
// жадный режим
console.log('текст "кавы" текст "кавы" снова текст'.match(/".+"/g))
console.log('текст "кавы" текст "кавы" снова текст'.match(/"[^"]+"/g))
// ленивый режим
console.log('текст "кавы" текст "кавы" снова текст'.match(/".+?"/g))
  </script>
```
Консоль;     
```
['"кавы" текст "кавы"']
(2) ['"кавы"', '"кавы"']
(2) ['"кавы"', '"кавы"']
```
   
   Подробнее в учебнике https://learn.javascript.ru/regexp-quantifiers.

   ### ex15. Скобочные группы.
   Примеры:
   ```
<script>
    console.log("go gogo gooo goooog".match(/(go)+/g)) // (4) ['go', 'gogo', 'go', 'go']
  </script>
   ```
   ```
  <script>
    console.log("user.mail.ru @ isers-mail.ru usercom".match(/([\w-]+\.)+\w+/g)) // (2) ['user.mail.ru', 'isers-mail.ru']
  </script> 
   ```
   Проверка правильного введения почты.
   ```
  <script>
    console.log("user@mail.ru @ isers-mail.ru user.com email@yandex.ru".match(/[-.\w]+@([\w-]+\.)+[\w-]+/g)) // (2) ['user@mail.ru', 'email@yandex.ru']
  </script>
   ```
   Запишем в переменную и выведем в консоли.
   ```
  <script>
    let tag = '<h1 class="title">hellow world</h1>'.match(/<(.*?)>/)
  </script>
  // tag
(2) ['<h1 class="title">', 'h1 class="title"', index: 0, input: '<h1 class="title">hellow world</h1>', groups: undefined]
   ```
   Массив из 3 элементов.
   ```
  <script>
    let tag = 'a'.match(/a(z)?(c)?/)
    // tag
(3) ['a', undefined, undefined, index: 0, input: 'a', groups: undefined]
  </script>
   ```
   Добавим значения поиска, теперь можно по этим индификаторам найти значения.
   ```
  <script>
    let tag = 'azc'.match(/a(?<first>z)?(?<second>c)?/)
  </script>
   ```
   Консоль:
   ```
tag.groups
{first: 'z', second: 'c'}
```
### ex16. Обратные ссылки в шаблоне.
```
     <script>
    console.log(`he said: "she's the one!".`.match(/['"](.*?)['"]/g))
    // \1 найти тоже самое что в первой скобочной группе
    console.log(`he said: "she's the one!".`.match(/(['"])(.*?)\1/g))
    // \k<имя_группы>
    console.log(`he said: "she's the one!".`.match(/(?<first>['"])(.*?)\k<first>/g))
  </script>
  ```
  Консоль:
  ```
[`"she'`]
[`"she's the one!"`]
[`"she's the one!"`]
  ```
### ex17. Альтернация (ИЛИ).
```
  <script>
    let regexp = /html|css|java(script)?/gi
    let str = "JAva Cyfxfkf HTML появился джава, потом хтбл . потом JavaScript"
    console.log(str.match(regexp))

    let timeRegExp = /([01]\d|2[0-3]):[0-5]\d/g
    console.log("00:00 10:20 23:99 1:3".match(timeRegExp))        
    // (3) ['JAva', 'HTML', 'JavaScript']
    // (2) ['00:00', '10:20']
  </script>
```
### ex18. Опережающая и ретроспективная проверка.

* X(?=Y)	Позитивная опережающая	X, если за ним следует Y
```
let str = "1 индейка стоит 30€";

alert( str.match(/\d+(?=€)/) ); // 30, число 1 проигнорировано, так как за ним НЕ следует €
```
* X(?!Y)	Негативная опережающая	X, если за ним НЕ следует Y
```
let str = "2 индейки стоят 60€";

alert( str.match(/\d+(?!€)/) ); // 2 (в этот раз проигнорирована цена)
```
* (?<=Y)X	Позитивная ретроспективная	X, если следует за Y
```
let str = "1 индейка стоит $30";

// знак доллара экранируем \$, так как это специальный символ
alert( str.match(/(?<=\$)\d+/) ); // 30, одинокое число игнорируется
```
* (?<!Y)X	Негативная ретроспективная	X, если НЕ следует за Y
```
let str = "2 индейки стоят $60";

alert( str.match(/(?<!\$)\d+/) ); // 2 (проигнорировалась цена)
```

[Подробная информация](https://learn.javascript.ru/regexp-lookahead-lookbehind#:~:text=%D0%9E%D0%BF%D0%B5%D1%80%D0%B5%D0%B6%D0%B0%D1%8E%D1%89%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8%20%D0%BF%D0%BE%D0%B7%D0%B2%D0%BE%D0%BB%D1%8F%D1%8E%D1%82%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%B2%D0%B0%D1%82%D1%8C%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F,%D0%B5%D1%81%D1%82%D1%8C%20%D1%87%D1%82%D0%BE%2D%D1%82%D0%BE%20%D0%B7%D0%B0%D1%80%D0%B0%D0%BD%D0%B5%D0%B5%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%B5.)

### ex19. Поиск на заданной позиции.
Пример использования флага y.
```
  <script>
    let str = 'let varName = "value"';

let regexp = /\w+/y;

regexp.lastIndex = 3;
console.log( regexp.exec(str) ); // null (на позиции 3 пробел, а не слово)

regexp.lastIndex = 4;
console.log( regexp.exec(str) ); // varName (слово на позиции 4)
  </script>
```
Консоль:
```
null
['varName', index: 4, input: 'let varName = "value"', groups: undefined]
```

## 95 Урок. Библиотека list.js_ Поиск и сортировка обычных списков.

Ссылка на сайт  https://listjs.com/.

Установка через CDN производиться в самый низ **body**, если не отдельным файлом скрипт то под подключение.
```
<body>
  
  <script src="//cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js"></script>
</body>
```

## 96 Урок. Библиотека sweetalert2.js_ Всплывающие модальные окна с иконками.

Ссылка на сайт https://sweetalert2.github.io/.
Переходим на сайт => download => ссылка **jsdelivr CDN** => файлы библиотеки находяться в каталоге **dist**.
 
## 97 Урок. Библиотека popper.js_ Всплывающие текстовые подсказки.
Ссылка на сайт https://popper.js.org/.


## 98 Урок. Библиотека baguetteBox.js_ Галерея изображений.
Ссылка на сайт https://feimosi.github.io/baguetteBox.js/.

С сайта переходим на гит => **dist**

## 99 Урок. Библиотека lightgallery.js_ Галерея изображений.
Ссылка на сайт https://sachinchoolur.github.io/lightgallery.js/.
Git => Code => Download ZIP => dist.

## 100 Урок. Библиотека flatpickr.js_ Календарь.
Ссылка на сайт https://sachinchoolur.github.io/lightgallery.js/.

## 101 Урок. Библиотека cleave.js_ Валидация форм.      
Ссылка на сайт https://nosir.github.io/cleave.js/

## 102 Урок. Библиотека mixItUp3.js_ Фильтрация элементов.      
Ссылка на сайт https://www.kunkalabs.com/mixitup/docs/mixitup-factory/.

## 103 Урок. Библиотека swiper.js_ Слайдер изображений.      
Ссылка на сайт https://swiperjs.com/.
ex18.

# 08 Фреймворк Bootstrap 5.

## 104 Урок. Обзор, загрузка и подключение.

https://bootstrap-4.ru/

Создаём новый **index.html** и подключаем по **CDN** **Css** and **JavaScript**, свои стили лучше подключать после бутсраповских.

Устанавливаем расширение **bootstrap5** на **VSCode**, с его помощью можно записывать сокращённо блоки кода нажав **b-5**.

## 105 Урок. Шапка, модальное окно, градиент, треугольник, адаптивное видео.

Загружаем шрифты, картинки, иконки. 
Добавляем иконку:
```
    <link rel="shortcut icon" href="/js_bootstrap/img/favicon.ico" type="image/x-icon">
```
Создаём **header** как на видио по документации бутстрап https://bootstrap-4.ru/docs/5.2/layout/grid/, добавляем **bootstrap** классы, кнопку с якорем на **footer**, в **css** прописываем градиент https://www.colorzilla.com/gradient-editor/. Кнопка плэй с помощью https://morphismail.github.io/myInstruments/, делаем видио адаптивным в модальном окне http://embedresponsively.com/.
body
```

  <header>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center text-white">Видео курс по вёрстке для начинающих</h1>
          <div class="itd_play" data-bs-toggle="modal" data-bs-target="#mu">
          <div class="itd_triangle"></div>
        </div>
       <a href="#footer" class="btn btn-itd btn-lg text-uppercase">заказать</a>
      </div>
    </div>
  </header>

<footer id="footer">
  
</footer>

<div class="modal fade" id="mu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Заголовок</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
<div class='embed-container'><iframe src='https://www.youtube.com/embed/ndNLN1ZMrIY' frameborder='0' allowfullscreen></iframe></div>
      </div>
    </div>
  </div>
</div>

    <script src="/js_bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
```
css
```
:root {
    --color1: green;
    --color2: red;
}

header,
footer,
section {
    padding: 100px 0;
}

header {
    padding: 200px 0;
}

header,
footer {
    background: url(../img/pattern.png), var(--color1);
    background: url(../img/pattern.png), -moz-linear-gradient(left, var(--color1) 0%, var(--color2) 100%);
    background: url(../img/pattern.png), -webkit-linear-gradient(left, var(--color1) 0%, var(--color2) 100%);
    background: url(../img/pattern.png), linear-gradient(to right, var(--color1) 0%, var(--color2) 100%);
    filter: url(../img/pattern.png), progid:DXImageTransform.Microsoft.gradient(startColorstr=var(--color1), endColorstr=var(--color2), GradientType=1);
    background-size: contain;
}

.itd_play {
    background-color: var(--color1);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 30px auto 30px;
    transition: all 0.2s ease;
}

.itd_play:hover {
    background-color: var(--color2);
}

.itd_triangle {
    margin-right: -3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 20px;
    border-color: transparent transparent transparent var(--bs-white);
}

.btn-itd {
    display: block;
    max-width: 200px;
    margin: 0 auto;
    padding: 8px 30px;
    color: var(--bs-white);
    background-color: var(--color2);
}

.btn-itd:hover {
    color: var(--bs-white);
    background-color: var(--color1);
}

.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

## 106 Урок. Сетка 3 на 3 и иконки.
Создаём секцию с иконками в дивах по сетки https://bootstrap-4.ru/docs/4.0/layout/grid/.
```
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-battery-1"></i></div>
          <h5 class="text-center">батарея</h5>
          <div class="line"></div>
        </div>
```
**mb-5** - это отступ снизу.

section
```
<section class="about">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center text-uppercase color1 md-5">о курсе</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-github-circled-alt2"></i></div>
          <h5 class="text-center">Структура</h5>
          <div class="line"></div>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-mixi"></i></div>
          <h5 class="text-center">Структура 2</h5>
          <div class="line"></div>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-mail"></i></div>
          <h5 class="text-center">СЫВЫА</h5>
          <div class="line"></div>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-github-circled-alt2"></i></div>
          <h5 class="text-center">Структура3</h5>
          <div class="line"></div>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-heart-broken"></i></div>
          <h5 class="text-center">сердце</h5>
          <div class="line"></div>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-mail"></i></div>
          <h5 class="text-center">Маил</h5>
          <div class="line"></div>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-emo-unhappy"></i></div>
          <h5 class="text-center">Эмо</h5>
          <div class="line"></div>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-github-circled-alt2"></i></div>
          <h5 class="text-center">Гит</h5>
          <div class="line"></div>
        </div>
        <div class="col-xl-4 col-md-6 col-sm-12">
          <div class="itd_circle"><i class="icon-battery-1"></i></div>
          <h5 class="text-center">батарея</h5>
          <div class="line"></div>
        </div>
        
      </div>
    </div>
  </section>
```
css
```
/* -----------------о курсе--------------- */
.about {
    background-color: #eee;
}
.about i {
    font-size: 25px;
    color: var(--color2);
}
.itd_circle {
    margin: 0 auto 15px;
    width: 70px;
    height: 70px;
    border: 3px solid var(--color2);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.line {
    width: 100px;
    height: 3px;
    background-color: var(--color1);
    margin: 15px auto 30px;
}


/*------------------ цвет--------------- */
.colo1 {
    color: var(--color1);
}

.colo2 {
    color: var(--color2);
}
.bg2 {
    background-color: var(--color1);
}
.bg2 {
    background-color: var(--color2);
}
```
## 107 Урок. Сетка 2 на 2.
Как и в прошлом уроке создаём секцию и ещё добавим такую же ссылку с якорем как в прошлых уроках.
```
  <section class="forwhom">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center text-uppercase color2 mb-5">курс для кого-то</h2>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-6 col-sm-12">
          <h5 class="text center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident?</h5>
        </div>
        <div class="col-md-6 col-sm-12">
          <h5 class="text center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident?</h5>
        </div>
        <div class="col-md-6 col-sm-12">
          <h5 class="text center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident?</h5>
        </div>
        <div class="col-md-6 col-sm-12">
          <h5 class="text center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident?</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <a href="#footer" class="btn btn-itd btn-lg text-uppercase">заказать</a>
          </div>
        </div>
      </div>
    </div>
  </section>
```
css
```
/*---------------- для кого --------------- */
.forwhom h5 {
    padding: 50px;
    border: 3px solid var(--color1);
}
```
## 108 Урок. Как сделать Аккордеон на Bootstrap 5.
https://bootstrap-4.ru/docs/5.0/components/accordion/

Что бы сделать акардион развёрнутым надо убрать у кнопки класс **collapsed** а у **diva**с контентом добавить класс **show**.
```
              <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
```
Кнопка и контент связанны по индификаторам. 
* accordion1, f1, div1.
```
<div class="row">
        <div class="col-md-4 col-sm-12">
          <h4 class="text-center fw-bold mb-3 mt-3">Модуль 1<br>(HTML)</h4>
          
          <div class="accordion accordion-flush" id="accordion1">

            <div class="accordion-item">
              <h2 class="accordion-header" id="f1">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#div1" aria-expanded="false" aria-controls="div1">
                  она #1
                </button>
              </h2>
              <div id="div1" class="accordion-collapse collapse show" aria-labelledby="f1" data-bs-parent="#accordion1">
                <div class="accordion-body fst-italic">первый текст.</div>
              </div>
            </div>
```
css 
```
/* Программа курса */
.accordion-button:not(.collapsed) {
    color: var(--bs-white);
    background-color: var(--color1);
}
.accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
```
## 109 Урок. Адаптивные изображения на Bootstrap 5.

Работа с изображением https://getbootstrap.com/docs/5.2/content/images/.          
Изображения в Bootstrap делаются адаптивными с помощью **.img-fluid**. Это относится **max-width: 100%;** и **height: auto;**к изображению, чтобы оно масштабировалось вместе с родительской шириной.
html
```
<section class="learning">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center text-uppercase color2 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, porro magni! Minima non repudiandae sed perspiciatis aliquid?</h2>
      </div>
    </div>
    <div class="row align-items-center mb-5">
      <div class="col-lg-9 col-sm-12">
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quae nesciunt dolorum, omnis sed, illum consequuntur quisquam asperiores corrupti corporis labore quibusdam nisi animi eum? Minima qui eius quisquam eaque!</h5>
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quae nesciunt dolorum, omnis sed, illum consequuntur quisquam asperiores corrupti corporis labore quibusdam nisi animi eum? Minima qui eius quisquam eaque!</h5>
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quae nesciunt dolorum, omnis sed, illum consequuntur quisquam asperiores corrupti corporis labore quibusdam nisi animi eum? Minima qui eius quisquam eaque!</h5>
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quae nesciunt dolorum, omnis sed, illum consequuntur quisquam asperiores corrupti corporis labore quibusdam nisi animi eum? <a href="https://github.com/Andersone1347/frontend" target="_blank"> qui eius quisquam</a> eaque!</h5>
        <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quae nesciunt dolorum, omnis sed, illum consequuntur quisquam asperiores corrupti corporis labore quibusdam nisi animi eum? Minima qui eius quisquam eaque!</h5>
      </div>
    <div class="col-lg-3 col-sm-12 mb-sm-5 mt-sm-5 text-center">
      <img src="/js_bootstrap/img/mockup.png" alt="kjk" class="img-fluid">
    </div>
    </div>
    <div class="row">
      <div class="col-12">
        <a href="#footer" class="btn btn-itd btn-lg text-uppercase">заказать</a>
      </div>
    </div>
  </div>
</section>
```
## 110 Урок. Практика и задание по работе с Bootstrap 5.

Если возникает противоречие, когда стиль автора страницы и пользователя для одного и того же элемента не совпадает, то **!important** позволяет повысить приоритет стиля.
Задание:
```
<section class="reviews">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center text-uppercase color2 mb-5">отзывы</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="/js_bootstrap/img/people.jpg" alt="chel" class="rounded mx-auto d-block">
        <h4 class="text-center mb-3 mt-3">kristina dsda</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum necessitatibus ut minima ab, perferendis officia nesciunt consectetur animi porro esse ipsum quia. Aspernatur ullam vero iste placeat doloribus quas dignissimos, maiores atque voluptatum sint quae voluptate? Temporibus, ducimus laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo porro deleniti repudiandae facere sapiente. Expedita vero magni deserunt quam voluptatem, ab accusantium maiores omnis iure? Qui laudantium delectus, reprehenderit exercitationem, ut veniam quisquam nemo modi adipisci, vitae optio et nisi quas expedita sed velit molestias nobis. Quo eligendi illum saepe laborum itaque tenetur facilis delectus, aut quisquam, nesciunt consectetur iure autem odit enim perferendis asperiores quis accusamus iusto hic nulla voluptatum! Recusandae rerum quibusdam ipsum minima, est nisi eveniet.</p>
        <div class="line bg1"></div>
      </div>
    </div>
  </div>
</section>
```

## 111 Урок. Форма сбора средств Yoomoney.

https://yoomoney.ru/get

```
<section class="buy">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="text-center text-uppercase color1 mb-5">купить</h2>
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-lg-5 col-sm-12">
        <img src="img/preview.png" alt="buy" class="img-fluid mx-auto d-block">
        <iframe src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&default-sum=800&button-text=13&payment-type-choice=on&fio=on&phone=on&successURL=http%3A%2F%2F127.0.0.1%3A5501%2Fjs_bootstrap%2Findex.html&quickpay=shop&account=4100111118832445&targets=%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%20%D0%BF%D0%BE%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B5&" width="100%" height="222" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita molestias odit, eius velit corrupti dolore quod similique neque reiciendis facilis itaque beatae harum soluta dolor est tenetur accusamus corporis repellat vero provident! Hic, voluptatibus error quasi pariatur esse architecto?</p>
      </div>
    </div>
  </div>
</section>
```

https://yoomoney.ru/quickpay/form?_openstat=iget%3Bshop%3Bicon&from=iget

## 112 Урок. Создание футера.

Делаем иконки в футер.
```
<footer id="footer">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <a href="https://yoomoney.ru/quickpay/form?_openstat=iget%3Bshop%3Bicon&from=iget" target="_blank" class="btn btn-outline-light"><i class="icon-mail"></i></a>
        <a href="" target="_blank" class="btn btn-outline-light"><i class="icon-glass"></i></a>
        <a href="https://www.youtube.com/watch?v=yZZn_g0nOPI" target="_blank" class="btn btn-outline-light"><i class="icon-emo-unhappy"></i></a>
        <a href="" target="_blank" class="btn btn-outline-light"><i class="icon-infinity"></i></a>
        <a href="" target="_blank" class="btn btn-outline-light"><i class="icon-erase"></i></a>
        <a href="" target="_blank" class="btn btn-outline-light"><i class="icon-github-circled-alt2"></i></a>
        <a href="http://htmlbook.ru/html/noscript" target="_blank" class="btn btn-outline-light"><i class="icon-mail"></i></a>
        <a href="https://www.youtube.com/watch?v=yZZn_g0nOPI" target="_blank" class="btn btn-outline-light"><i class="icon-github-circled-alt2"></i></a>
      </div>
    </div>
  </div>
</footer>
```
## 113 Урок. Обзор документация Bootstrap 5.
https://bootstrap-4.ru/docs/5.2/getting-started/introduction/

# 09 Система управления версиями Git и GitHub.

## 114 Урок. Что такое Git.
**Git** - это консольная утилита, для отслеживания и ведения истории изменения файлов, в вашем проекте.
Чаще всего его используют для кода, но можно и для других файлов. Например, для картинок - полезно для дизайнеров. С помощью **Git**-a вы можете откатить свой проект до более старой версии, сравнивать, анализировать или сливать свои изменения в репозиторий. Нажимаем инициализировать репозиторий.
## 115 Урок. Установка Git.
Знакомство с терминалом.         
Установка [Git](https://gitforwindows.org/).

Проверка версии гита в терминале. 
![alt](/img_read/1.png)

Создаём папку на локальном диске => файл **index.html** и **style.css** => создаём терминал в **vscode**  и он автоматически указывает путь где была создана папка.
 В терминале windows powershell придёться вручную прописывать путь.
Команды:       
* dir - показывает все каталоги.
* cd .. - выходит на каталог выше.
* cd (название папки) - переходит в эту папку.
* git init - инициализировать репозиторий.
* с: d:  - выбор локального диска.

Нажимаем инициализировать репозиторий.
## 116 Урок. Регистрация на GitHub.
Обычная регистрация.
## 117 Урок. Первые команды Git.
Установка расширения **Git History Diff**.    
С его помощью можно перейти ко всем сохранёным комитам и посмотреть изменения в них.
![alt](/img_read/1.gif)

## 118 Урок. Работа с Git в VS Code.
В **vscode** во вкладке **git** дополнительные действия(3 точки) команды как в терминале.
![alt](/img_read/1.jpg)
## 119 Урок. Алиасы для Git.
Сокращения для команд в терминале. Находим gitconfig на диске С, и дописывает:
```     
[alias]
	s = status --short
	l = log --oneline --graph --decorate --all
	g = log --graph --abbrev-commit --decorate --all --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)'
	br = branch
	co = checkout

```

## 120 Урок. Отмена изменений и возврат к коммиту.
[Подробное описание](https://ru.stackoverflow.com/questions/431520/%D0%9A%D0%B0%D0%BA-%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%82%D1%8C%D1%81%D1%8F-%D0%BE%D1%82%D0%BA%D0%B0%D1%82%D0%B8%D1%82%D1%8C%D1%81%D1%8F-%D0%BA-%D0%B1%D0%BE%D0%BB%D0%B5%D0%B5-%D1%80%D0%B0%D0%BD%D0%BD%D0%B5%D0%BC%D1%83-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D1%83)

![alt](/img_read/2.jpg)

## 121 Урок. Работа с ветками.
Создание новой ветки и переход в неё **git checkout -b**. Список всех веток **git branch -b** создать и перейти. , **-m** переименовать , **-d** удалить. [Подробная информация](https://www.git-scm.com/book/ru/v2/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-C%3A-%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-Git-%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%81%D0%BB%D0%B8%D1%8F%D0%BD%D0%B8%D1%8F).

## 122 Урок. Панель команд Git в VS Code.
![alt](/img_read/1.jpg) 

## 123 Урок. Откат к любому коммиту и Git Graph.
Устанавливаем **Git Graph** и на лейбл вверху справа проверяем все коммиты и свободно можем по ним переходить.
## 124 Урок. Удаление репозитория.
[Удаление репозитория](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository)
## 125 Урок. Синтаксис Markdown для README.md.

Установим расширение **vscode** _Markdown Preview Enhanced_ для предпросмотра **readme**, кликаем правой кнопкой мыши и выбираем открыть превью маркдаун.
<a id="anchor"></a>
( --- , *** ) - горизонтальная линия.
__жирный__    
_курсив_     
>цитата
>>вложеная цитата

[ссылка](https://github.com/Andersone1347?tab=repositories)

Сноска первая[^1] и вторая [^2]
[^1]: Текст сноски 1
[^2]: Текст сноски 2

![alt](/js_bootstrap/img/1.png)

\# Экранировать \

1 | 2 | 3 |
:-|:-:|--:|
11213132|1312|1312
1|3|2
12|1
11

ТЕРМИН
: ОПРЕДЕЛЕНИЕ

[Вверх якоря](#anchor)

И прочие html-теги.

## 126 Урок. Фрагменты кода Gist.   

1. Устанавливаем расширение "gist" в "Visual Studio";
2. Заходим на главную своего профиля в Github, то есть "https://github.com/settings/profile" далее "Developer sesttings" далее "Personal acces tokens" выбираем "generate new token", Генерируя токен, нужно поставить галочку на gist. и копируем наш сгенерированный код(token);
3. Заходим в "Visual Studio", жмем F1, вводим "gist" и выбираем "GIST: select profile";
4. Вводим в появившееся окно наш сгенерированный TOKEN, далее вас попросят ввести имя пользователя, то есть ВАШЕ имя привязанное к аккаунту на github.
5. Проверить все ли работает ТЕПЕРЬ.

![alt](/img_read/2.png)

__insert code into current file__ - именно вставить **gist** в код.

[Дополнительная информация](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)

## 127 Урок. Хостинг GitHub Pages.

[Пример с моего репозитория](https://andersone1347.github.io/bitrix/)

![alt](/img_read/3.png)

[Подробная информация по установке pages.](https://pages.github.com/)

///////////////////////
//Первые настройки
///////////////////////
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
git config --list --global

////////////////////////
//Основные команды
////////////////////////
git clone ссылка_на_репозиторий //чтобы скачать все файлы в текущую папку (в консоле)
git clone ссылка_на_репозиторий название_папки //свое название папки
cd папка_на_компьютере //чтобы использовать другие команды
git status //выводит все файлы в папке
git add имя_файла //чтобы добавить файл
git commit -m "Add index.html" //указать какие изменения были произведены
git push //залить все файлы на облако (после коммита)
git pull //скачать все файлы которых нехватает
git add -A //подтвердить все файлы или git add .
git commit -m "Made some changes" //сделал некие изменения
git //информация по командам

//Коммитятся только добавленные через add файлы

если надо выйти из окна commit выйти ESC, напить :wq и нажать Enter

//Загрузить локальынй репозиторий на онлайн репозитори github//
git init
git add your_file
git commit -m "first commit"
git remote add origin https://github.com/you_repository/you_project
git push -u origin master

///////////////////
//Отмена изменения
///////////////////
//Отменить изменения до команды add
git checkout -- index.html //один файл
git checkout -- . //все файлы

//Отменить изменнеия после команды add
git reset index.html //один файл
git reset . //все файлы

//Отменить изменения после команды commit
git reset --soft HEAD^1 //сбросить на 1 комминт назад и сохранить все изменнеия локально
git reset --hard HEAD^1 //сброситься и удалить все изменения

git log -5 //посмотреть последние пять коммитов
git log --oneline --graph --decorate --all //для удобного просмотра коммитов

////////////////////////////
//Команды pull, fetch, merge
////////////////////////////
git push origin HEAD
git pull = git fetch + git merge //
git fetch origin // имя папки вместо origin
git merge origin/master //объединить ветки

/////////////////////////
//Ветвление
/////////////////////////
git branch //посмотреть ветки, со звездочкой - текущая
git branch -v //посмотреть ветки, и последние коммиты в них
git branch название_новой_ветки //создать ветку
git checkout название_ветки //переключиться на другую ветку
git checkout -b fix_about //Создать ветку и перейти к ней
git push --set-upstream origin название_ветки //залить на github в нужную ветку
git branch -m new_some_branch //переименовать текущую ветку
git checkout номер_коммита //перейти к нужному коммиту
git checkout -b название_ветки //создать ветку с выбранного ранее коммита
//////////////////////////
//Объединение веток
//////////////////////////
git checkout master //перейти на ветку master
git merge название_ветки //объединить ветки
git branch --merged //посмотреть все объединенные ветки
git branch --no-merged //посмотреть все не объединенные ветки
git branch -d название_ветки //удалить ветку или -D чтобы удалить не смерженую ветку
//////////////////////////
//Отмена слияния веток
//////////////////////////
git reset --hard HEAD^1 //отменить последнее действие

git revert код_коммита //вернуться к коммиту
git revert код_коммита1^..код_коммита2 //отменить диапазон коммитов
git revert -m 1 коммит_мерджа
//////////////////////////
//Перенос коммита в другую ветку
//////////////////////////
git checkout название_ветки //Перейти туда куда будем вставлять изменения
git cherry-pick код_коммита1 код_коммита2 //Добаляем нужный коммит в текущую ветку (через пробел)
//Можно создать новую ветку с текущего места, а в ветке master удалить один коммит
///////////////////
//Алиасы - C:\Users\ismail\.gitconfig
///////////////////
s = status --short
st = status
l = log --oneline --graph --decorate --all
g = log --graph --abbrev-commit --decorate --all --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(dim white) - %an%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n %C(white)%s%C(reset)'
br = branch
co = checkout
////////////////////
//Скрыть изменения
////////////////////
git stash //если есть измененные файлы и надо перейти на другую ветку
git stash list //показать что скрыто
git stash apply //востановить последний стэш (останется в списке стэшей)
/не работает/git stash pop stash@{номер_стэша}//востановить последний стэш и убрать его из списка
/не работает/git stash drop stash@{номер_стэша}//удалить указанный стэш
git stash clear //удалить все записи стэша
///////////////////
//Добавить ветку в конец другой
///////////////////
git rebase имя_ветки
git rebase --onto имя_ветки_куда имя_ветки_начала имя_ветки_куда
git rebase --continue
git rebase -i HEAD~6 //интерактивный ребэйс на 6 коммитов
////////////////////
//Доп. команды
////////////////////
git rm //посмотреть файлы
git rm имя_файла //удалить нужынй файл
git mv имя_файла имя_каталога/имя_файла //переместить файл в каталог 
git add *.txt //добавить все файлы txt
git show код_коммита //посомтреть изменения в коммите
git add любые_символы*.txt //добавить все файлы любые_символы.txt

Шпаргалка по git от автора курса.
![alt](/img_read/3.jpg)

# 10 Фреймворк Vue.js.

## Урок 128. Обзор курса.
Весь курс это практичное создание приложение опросника **vk**.         
Необходимые знания для прохождения курса :           
* HTML
* CSS
* JS
* Vue.js
* Git
* GitHub
* vk приложения

## Урок 129. Обзор структуры файлов.
Копируем папку vueApp в репозиторий.      
Ознакомление со структурой вопрос\ответ.
```
/* Вопросы с ответами и изменение счета */
const questions = [
    [
        "Ваша любимая планета в мире StarCraft",
        ["Слейн", "Айур", "Чар", "Мар-Сара", "Зерус"],
        [
            "this.score.taldarim++",
            "this.score.protoss++",
            "this.score.zerg++",
            "this.score.terran++",
            "this.score.primal++"
        ]
    ],
    [
        "Я река…",
        ["А я звёздный охотник", "Враги плывущие обломки", "Ты моё море"],
        [
            "this.score.protoss++; this.score.terran--",
            "this.score.primal++; this.score.protoss--; this.score.terran--",
            "this.score.terran++; this.score.protoss--"
        ]
    ],
    [
        "С кем вы поговорите на копье Адуна?",
        ["С Абатуром", "Со Свонном", "С Караксом"],
        [
            "this.score.protoss--",
            "this.score.protoss--",
            "this.score.protoss++"
        ]
    ],
```
Алгоритм заключаетьс в том, чей объект наберёт больше плюсов того и в финале выведут на экран.

## Урок 130. Работа над интерфейсом игры.
Заполняем **index**, линкуем css, js. В целом пишем разметку.

_index.html_
```
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <title>С точки зрения бональной эрудиции стратегия для аутистов</title>
  </head>

  <body>
    <div class="main">
      <div class="app">
        <div class="app__header">
          <img src="img/logo.png" class="app__logo" />
        </div>
        <div class="app__body">
          <button class="app__btn">
            <i class="fa fa-play-circle-o" aria-hidden="true"></i>
            <div class="app__btn-text">Начать</div>
          </button>
          <button class="app__btn">
            <i class="fa fa-trophy" aria-hidden="true"></i>
            <div class="app__btn-text">Достижения</div>
          </button>
          <button class="app__btn">
            <i class="fa fa-user" aria-hidden="true"></i>
            <div class="app__btn-text">Автор</div>
          </button>
          <button class="app__btn btn__sound">
            <i class="fa fa-volume-up" aria-hidden="true"></i>
            <div class="app__btn-text">Звук</div>
          </button>
        </div>
      </div>
    </div>

    <script src="js/vue.js"></script>
    <script src="js/const.js"></script>
  </body>
</html>
```
_style.css_
```
@font-face {
    font-family: "Yanone";
    src: url(../fonts/YanoneKaffeesatz-Medium.ttf);
}
* {
  box-sizing: border-box;
}
  body {
        font-family: "Yanone", sans-serif;
}
  i.fa {
    font-size: 30px;
    margin-right: 10px;
  }
@keyframes slide {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 0%;
    }
    100% {
        background-position: 0% 0%;
    }
}
.main {
    background-image: url(../img/background__main.jpg);
    background-repeat: repeat-x;
    animation: slide 90s linear infinite;
}
.app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}
.app__header {
    background-color: rgba(0,0,0,0.5);
    border-bottom: 7px solid orange;
    min-height: 247px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
}
.app__logo {
    padding: 20px 0;
    display: block;
    width: 200px;
    margin: 0 auto;
}
.app__body {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    overflow: auto;
}
.app__btn {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 50px;
    width: 240px;
    background-color: rgba(1,88,154,0.5);
    box-shadow: 0px 7px 0px 0px aqua;
    margin: 0 auto;
    border-radius: 30px;
    text-decoration: none;
    font-style: 16px;
    line-height: 20px;
    color: aliceblue;
    text-transform: uppercase;
}
.app__btn:focus {
    outline: none;
}
```
![alt](/img_read/130%20screen1.jpg)

## Урок 131. Работа над интерфейсом игры.
Верстка страниц достижений.
_index_
```
    <div class="app achivments">
      <div class="app__body">
        <div class="app__body-inner">
          <h2 class="app__body-title">
            <i class="fa fa-trophy" aria-hidden="true"></i>
            Достижения
          </h2>
          <div class="app__body-top">
            <div class="app__card">
              <div class="app__card-text">Счёт</div>
              <div class="app__card-count">0</div>
            </div>
            <div class="app__card">
              <div class="app__card-text">Открыто рас</div>
              <div class="app__card-count">0</div>
            </div>
            <div class="app__card">
              <div class="app__card-text">Всего игр</div>
              <div class="app__card-count">0</div>
            </div>
            <div class="app__card">
              <div class="app__card-text">Любимая раса</div>
              <div class="app__card-count">0</div>
            </div>
          </div>
          <div class="app__body-middle">
            <div class="app_result">
              <div class="app__result-score">
                <i class="fa fa-star" aria-hidden="true"></i>
                <div class="app__result-count">150</div>
              </div>
              <div class="app__result-name">zerg</div>
              <div class="app__result-amount">5</div>
            </div>
          </div>
          <div class="app__body-middle">
            <div class="app_result">
              <div class="app__result-score">
                <i class="fa fa-star" aria-hidden="true"></i>
                <div class="app__result-count">150</div>
              </div>
              <div class="app__result-name">zerg</div>
              <div class="app__result-amount">5</div>
            </div>
          </div>
          <div class="app__body-bottom">
            <button class="app__btn btn__back btn_achivment">
              <i class="fa fa-reply" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

    </div>

```
_style.css_
```
.achivments .app__body {
justify-content: flex-start;
}
.app__body-inner {
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
    color: aliceblue;
    display: flex;
    flex-direction: column;
    padding: 20px;    
}
.app__body-title {
    text-align: center;
    text-transform: uppercase;
    font-size: 25px;
    margin-bottom: 20px;
    padding-top: 20px;
}

.app__body-top {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: max-content max-content;
    place-content: center center;
    margin-bottom: 20px;
}
.app__card {
    background-color: rgba(0,0,0,0.5);
    padding: 20px 10px;
    border: 5px solid rgba(1,88,154,0.5);
    text-align: center;
}
.app__card:nth-child(1) {
border-right: none;
border-bottom: none;
}
.app__card:nth-child(2) {
    border-left: none;
    border-bottom: none;
    }
    .app__card:nth-child(3) {
        border-right: none;
        border-top: none;
        }
    .app__card:nth-child(4) {
            border-left: none;
            border-top: none;
            }
.app__card-text {
    font-size: 22px;
    margin-bottom: 10px;
}
.app__card-count {
    font-size: 18px;
}
.app__body-middle {
    margin-bottom: 15px;
}
.app_result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border: 5px solid rgba(1,88,154,0.5);
    background-color: rgba(25,121,211,0.8);
    margin-bottom: 7px;
}
.app_result:last-child {
    margin-bottom: 0;
}

i.fa-star {
margin-right: 0;
font-size: 15px;
margin-bottom: 3px;
}
.app__result-name {
font-size: 18px;
margin-left: auto;
margin-right: 20px;
}
.app__result-amount {
font-size: 18px;
}

.btn__back {
width: 70px;
height: 70px;
box-shadow: none;
border-radius: 50%;
}
.btn_achivment {
background-color: rgba(0,0,0,0.5);
border: 5px solid rgba(1,88,154,0.5);
}

```
![alt](/img_read/131%20screen5.jpg)

## Урок 132. Экран с вопросами в игре.
Верстка.
_html_
```
    <div class="app">
      <div class="app__body">
        <a target="_blank" href="#" class="app__btn">
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <div class="app__btn-text">Insta</div>
        </a>
        <a target="_blank" href="#" class="app__btn">
         <i class="fa fa-twitter" aria-hidden="true"></i>
          <div class="app__btn-text">twit</div>
        </a>
        <a target="_blank" href="#" class="app__btn">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <div class="app__btn-text">Facebook</div>
        </a>
        <a target="_blank" href="#" class="app__btn">
          <i class="fa fa-youtube" aria-hidden="true"></i>
          <div class="app__btn-text">youtube</div>
        </a>
        <a target="_blank" href="#" class="app__btn">
          <i class="fa fa-vk" aria-hidden="true"></i>
          <div class="app__btn-text">vk</div>
        </a>
        <button class="app__btn btn__back">
          <i class="fa fa-reply" aria-hidden="true"></i>
        </button>
      </div>
    </div>
```
_css_
```
.app__header-inner{
    color: aliceblue;
    text-align: center;
} 
.app__count{
    font-size: 24px;
    margin-bottom: 10px;
}
.app__text {
    font-size: 18px;
}
```
![alt](/img_read/132%20screen2.jpg)
![alt](/img_read/132%20screen4.jpg)

## Урок 133. Экран с результатами.
Верстка.
_index_
```
<div class="app results" data-race="infested">
      <div class="app__body">
        <div class="app__results-inner">
          <div class="results__title">
            zerg
          </div>
          <div class="results__img">
            <img src="img/infested_logo.png">
          </div>
          <div class="results__text-box">
            <p class="results__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eos obcaecati quis minus enim vero perferendis corporis quam, mollitia sunt asperiores molestias atque quia odio, vel autem impedit quo ipsa, voluptatibus a ratione officia nam? Recusandae similique illum maxime a.</p>
            <p class="results__quote">цитата 1</p>
            <p class="results__quote">цитата 2</p>
            <p class="results__author">автор</p>
          </div>
          <div>
            <button class="app__btn btn__back btn__infested">
              <i class="fa fa-reply" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
```
_css_
```
.results .app__body {
    justify-content: space-between;
}
.app__results-inner {
    color: aliceblue;
    padding: 20px;
}
.results__title {
    text-transform: uppercase;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    padding-top: 20px;
}
.results__img {
    text-align: center;
    margin-bottom: 20px;
}
.results__img img {
    width: 250px;
}
.results__text-box {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 20px;
}
.results__text {
    margin-bottom: 20px;
}
.app.results{
    animation: none;
    background-size: cover;
    background-position: center center;
}
.app.results[data-race="zerg"] {
    background-image: url(../img/zerg_bg.jpg);
}
.app.results[data-race="primal"] {
    background-image: url(../img/primal_bg.jpg);
}
.app.results[data-race="terran"] {
    background-image: url(../img/terran_bg.jpg);
}
.app.results[data-race="infested"] {
    background-image: url(../img/infested_bg.jpg);
}
.app.results[data-race="protoss"] {
    background-image: url(../img/protoss_bg.jpg);
}
.app.results[data-race="taldarim"] {
    background-image: url(../img/taldarim_bg.jpg);
    background-position: 40% 0;
}
.app.results[data-race="hybrid"] {
    background-image: url(../img/hybrid_bg.jpg);
    background-position: 45% 0;
}
.btn__zerg {
    background-color: #762877;
}
.btn__primal {
    background-color: #56a725;
}
.btn__protoss {
    background-color: #fce356;
    color: rgba(0,0,0,0.8);
}
.btn__taldarim {
    background-color: #9d0101;
}
.btn__terran {
    background-color: #da8618;
}
.btn__infested {
    background-color: #f5b673;
    color: rgba(0,0,0,0.8);
}
.btn__hybrid {
    background-color: #fc7654;
}
```
![alt](/img_read/133%20screen3-6.jpg)


## Урок 134. Начало работы с Vue.

Директива **v-show** аналогично v-if позволяет скрывать или отображать элементы по определенному условию.

В **index** прописываем скрипт, и к каждому экрану прописываем **v-show=""** для открытия и закрытия экрана true\false.    
_script_
```
    <script>


        let app = new Vue({
    el: '.main',
    data: {
        showMain: true,
        showSocial: false,
        showAchivments: false,
        showQuestions: false,
        showResult: false,
        number: 0,
        score: {
            'zerg': 0,
            'primal': 0,
            'protoss': 0,
            'taldarim': 0,
            'terran': 0
        },
        totalGame: localStorage.getItem('sc2TotalGame') ? JSON.parse(localStorage.getItem('sc2TotalGame')) : {
            'zerg': 0,
            'primal': 0,
            'protoss': 0,
            'taldarim': 0,
            'terran': 0,
            'infested': 0,
            'hybrid': 0,
        },
        totalGames: localStorage.getItem('sc2TotalGame') ? localStorage.getItem('sc2TotalGame') :0,
        questions: questions,
        results: results,
        resultRace: 'infested',
    },
    methods: {
      goToMain() {
         
      }
    }
})
    </script>
```

## Урок 135. Обработка событий на Vue.
Создаём 5 методов для разных вариаций экрана.
```
    methods: {
      goToMain() {
        this.showMain = tru
        this.showSocial = false
        this.showAchivments = false
        this.showQuestions = false
        this.showResult = false
      },
      goToSocial() {
        this.showMain = false
        this.showSocial = true
        this.showAchivments = false
        this.showQuestions = false
        this.showResult = false
      },
      goToAchivments() {
        if(this.totalGames > 0) {
        this.showMain = false
        this.showSocial = false
        this.showAchivments = true
        this.showQuestions = false
        this.showResult = false
      } else {
        this.goToQuestions()
       }
      },
      goToQuestions() {
        this.score = {
            'zerg': 0,
            'primal': 0,
            'protoss': 0,
            'taldarim': 0,
            'terran': 0,
        }
        this.showMain = false
        this.showSocial = false
        this.showAchivments = false
        this.showQuestions = true
        this.showResult = false
      },
      goToResult() {
        this.showMain = false
        this.showSocial = false
        this.showAchivments = false
        this.showQuestions = false
        this.showResult = true
        this.resultRace = race
      },
    }
})
```
Для подписки на события DOM и выполнения **JavaScript**-кода по их наступлении используйте директиву **v-on** или сокращённо **@click**.        
Например:       
_html_
```
<div id="example-1">
  <button v-on:click="counter += 1">+1</button>
  <p>Кнопка выше была нажата {{ counter }} раз</p>
</div>
_js_
```
```
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```
В верстке добавляем методы на наши кнопки с помощью обработчика событий **@click**.

## Урок 136. Циклы и методы на Vue.