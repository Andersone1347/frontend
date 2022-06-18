# Frontend
Учебные материалы


## 36 Урок. Введение в JavaScript. Работа с консолью разработчика, создание переменых.

**Java-script** позволяет нам создавать различные элементы на страницы, добавлять интерактивность, слайдеры, галереии и прочие элементы современных сайтов.

В браузере вводим **about:blank**, открываеться пустая строка, открываем инструменты разработчика.

Работаем во вкладке console, а во вкладке sources можем посмотреть все файлы сайта.

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
a++ мы видим старое значение, 
++а мы видим сразу новое.

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
В ковычках указываеться строка "строка"
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
Создаём переменную 
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
Проверка индекса в нашей переменной **str**
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

Любая строка имеет в себе символы и каждый символ имеет свой индекс, все индексы начинаються с 0.

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
str.toUpperCase().trim()
'ПРИВЕТ'
```


В цепочке можно записывать методы через точку.

Например:
```
let text = "  ПРивEт  ";
```
**undefined** - обозначаем переменную **text**.
```
text.toLowerCase().trim()
```
'привет'  - переводим в нижний регистр и убираем пробелы.
```
let str1 = str.toLowerCase().trim()
```
Обозначаем новую переменную **srt1**.
```
str1[0].toUpperCase()+str1.slice(1)
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
Если мы напишем:
```
console.log("Text
on 2 line" + a );
```
то консоль выведет ошибку, а если весь наш текст обернуть в верхние кавычки **`**.
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
**\n** - перенос строку.

Библиотека Мath. и её разные математические функции:   
* Math.random() - случайное число от нуля до единицы
* Math.max(3,4,2,1) 4 - возращает максимальное значение
* Math.pow(2,5) 32 - возвести число в степень
* Math.sqrt(64) 8 - квадратный корень
* Math.floor(3.9) 3 - округление
* Math.ceil(3.9) 4 - округление к большему целому
* Math.round(3.1) 3 - округление к ближайшему целому
* Math.trunc(3.9) 3 - отбрасывает дробную часть
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

##### Рассмотрим функцию для проверки переменных, являються ли они числом и будет возвращать в консоль либо **true** либо **false**.
```
 function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
console.log(isNumber("5")) 
```
Даже если число будет записано в кавычках то консоль выведет true, а
если появяться буквы то false.

##### Рассмотрим ещё одну функцию позволяющую нам получить рандомное число от 1 до 5.
```
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(randomInteger(1,5)) 
```
Через запятую передаём минимально и максимально значение,
и получаем в консоль рандомное значение из этого диапозона.


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

**arr.shift()** - удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
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

Cоздаём ещё один массив в файле **main.js**
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
всё верно.

**arr.join("-") '5-2-Str-true'** - можем добавить пробелы, запятые, дефисы и консоль выведет строку с этим знаком между массивами. 
```
arr.join(", ")
'5, 2, Str, true'
```

**arr.splice** - может добавлять и удалять значения.
**arr.splice(1,2,3)**.     
где: 
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
Получаем **false**


**arr.reverse()** - на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.  
```
arr.reverse()
(4) [true, 'Str', 2, 5]
```


**split()** - разбивает объект **String** на массив строк путём разделения строки указанной подстрокой.    
**примеры:**    
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


## 40 Урок. Обьекты.

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
1. через квадратные скобки.
```
obj["color"]
'Tomato'
```
2. через точку.
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
## 41 Урок. диалоговые окна, условия, тернарный оператор, переключатель switch.

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
Сокращённый код(Не рекомендуеться в использовании).
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

**switch** - представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами. Конструкция **switch** имеет один или более блок **case** и необязательный блок **default**.

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

 Синтаксис. **while** (условие) {инструкция} условие. Выражение, логическое значение которого проверяется каждый раз перед заходом в цикл.
 
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
    console.log('Элемент: ${item}
    Индекс: ${i}
    Массив: ${array}')
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
people.findIndex - в том же выражение в консоль вернётся только индекс.
```
2
```
people.filter - возращает массив объекта который подходит под условие.
```
0: {id: 3, name: 'Ivana'}
length: 1
[[Prototype]]: Array(0)
```
Если поменяем условие и укажем item.id<4, то увидим сразу три элемента в массиве, меньше id 4-eх.

```
0: {id: 1, name: 'Ivan'}
1: {id: 2, name: 'masha'}
2: {id: 3, name: 'Ivana'}
length: 3
[[Prototype]]: Array(0)
```
Метод map() возвращает новый массив, содержащий трансформированные значения обрабатываемого массива. То, как именно они будут трансформированы, задаётся в передаваемой этому методу функции.

Метод Map :
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
При этом массив arr не как не изменился.
Задания:


1. Выводим массив из четных чисел от 0 до 20.
```
  let arr = []
  for(let i=0; i<20; i+=2) {
      arr.push(i)
  }
console.log(arr)
```

2. Выводим массив в убывающем порядке от 30 до 0 и элементы этого масива деляться на 3 без остатка.
 **1 вариант**
```
  let arr = []
  for(let i=30; i>0; i-=3) {
      arr.push(i)
  }
console.log(arr)
```
**2 вариант**
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

4. Найти колличество чётных элементов в массиве
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

## Урок 44. Работа с датой и временем.

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

## Урок 45. Документация кода на JSDoc и Исключения.

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

## 46 урок. Объектно-Ориентированное Програмирование,Прототип,конструкторы,класс.
С помощью цепочки наследования можем создавать комплексные объекты  и получать доступ к родительскому объекту :
```
let admin = {
    ryles: 777
}

let user = {
    name: "iva",
    age: 20
    __proto__: admin
}
```
Благодоря прототипу можно наследовать свойства и методы у родительского объекта и с помощью функции конструктор можно создовать однотипные однотипные объекты просто.
```
let admin = {
    ryles: 777
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
  static mounth = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
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

Константы нельзя переопределять.
const a = 3.5  
undefined   
a  
3.5   
a = 1.5 
(ошибка)

Оператор расширения:
```
function sum(a,b) {
    return a+b 
} 
let date = [4,8]
sum(...date)
12
```
Создадим несколько переменных и сразу присвоем им значения.
Так сказать деструктивное присваевание 
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

Стрелочные функции:
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
* repeat() - для повтора вырожения 
* startsWith() - поиск начального слова, end - конечного. 
* Изменение содержимого массива например на ноль:
```
let arr = [5,8,9,2,4]
arr.fill(0)
console.log(arr)
```
Массив без дубликатов 
```
ler arr = [1,5,4,7,8,91,1,4,5]
let arr2 = [...new Set(arr)]
console.log(arr2)
```     
   
   **05 Работа с DOM деревом javaScript**

## 48 Урок. Введение.
Скачиваем каталог к себе в папку из архива урока.

## 49 Урок.Выбор элемента DOM.

  
  С помощью этого скрипта обращаемся ко всем первым лишкам в теге ул и меняем цвет на серый и переименовываем в "новое значение" 
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
for(let element of elements) {
  element.style.color = "gray"
  element.innerHTML = 'Новое значение' 
}
  </script>
```
querySelector - находит просто первый и единственный элемент.

* ex5 
Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.

## 50 Урок. Атрибуты, Создание элементов.

* ex6
С помощью этого метода можем проверить содержиться ли один элемент внутри другова и получить ответ в консоли true или false
```
    let list = document.querySelector('.list')
    let item = document.querySelector('.item')

    console.log(list.contains(item))
    console.log(list.contains(item))
```
* ex7
Можем полностью заменить боди на массив скрипта
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

  console.log(document.querySelector('body').innerHTML)
  </script>
</body>
```
* ex8 Можем именно заменить текст с помощью .textContent

* ex9 Свойство hidden
Можем скрывать элементы на какое-то время.
```
  <p>Абзац текста</p>

  <script>
    let elem = document.querySelector('p')
    setInterval(() => elem.hidden = !elem.hidden, 1000)
  </script>
```
* ex10 
.setAttribute - можем добавить атрибут
.removeAttribute - удалить атрибут
console.dir() - можно посмотреть все свойства и методы.
* ex11
.dataset
```
  <p data-about="Это текст">Абзац текста</p>
  <div data-about-block="Это блок">Блок текста</div>

  <script>
    let elem1 =  document.querySelector('p')
    console.log(elem1.dataset.about)
    let elem2 =  document.querySelector('div')
    console.log(elem2.dataset.aboutBlock)
  </script>
```
* ex12
.append() добавить в конец
.prepend() добавить в начало
before and after
.replaceWith заменить тэг

51 Урок. Генерация вложенных списков.

* ex13
insertAdjacentHTML - добавить html элемент в скрипт

* beforebegin 
* afterbegin
* beforeend
* afterend

* ex14
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
И с помощью методов after and before переместим 2 и 1 .

* ex15 
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
* ex16

Создаём в пустом **body** **ul** с помощью **document.body.append.(ul)**

Далее создаём цикл **while** , через **Prompt** всплывающее окно в котором будут обозначаться **li** , и услови **if** если в окне ничего не напишем и нажмём кнопку то **break**

* ex17 
Задачка сгенерировать список в списке с помощью **java script**
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
    function createUl(obj) {
      if(!Object.keys(obj).length)
      return
      let ul = document.createElement('ul')
      for(let key in obj) {
        let li = document.createElement('li')
        if(!isNaN(obj[key]))
        li.textContent = key +' '+obj[key]
        else
        li.textContent = key
        let childrenU1 = createUl(obj[key])
        if(childrenU1) {
          li.append(childrenU1)
        }
        ul.append(li)
      }
     return ul
    }
    function createTree(cotainer, obj) {
      document.querySelector(cotainer).append(createUl(obj))
    }
    createTree('body', data)
  </script>
```

52 Урок. Календарь.
* ex18
Создаём таблицу календаря по видео.
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
С переключаемой работающей датой.