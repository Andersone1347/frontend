# 01 Язык HTML.

## Урок 1. Введение в **html**     
  
Примеры **html** кода с **css** и без него.    


## Урок 2. Подготовка рабочей среды.   

Включение доступа к видимости расширения файлов.     
Открываем мой компьютер => выберараем слева вверху меню вид => ставим галочку **Расширение имен файла**.    

Установка и запуск браузера **google hrome** и текстового редактора **VS Code**.     

Создание **index.html**, где в **body** наполняем контент    
```
Hello world!   
```

## Урок 3. Обзор функций редактора **VS Coda**     
    
Установка комфортных настроек редактора, файл => настройки => параметры (или же **Ctrl+**)    
Выбор визуального оформления темы , файл => настройки => цветовая тема (**Ctrl+k**)   

Создание папок **index** , **css* , **img** .   
Установка плагинов в **VS Code**(ctrl+shift+x):   

* Live Server - запуск отображение кода в браузере в реальном времени.   
* One Monokai Theme - визуальные темы.   
* Material Icon Theme - иконки.   

Знакомство с **emmet** , а в частности с горячими клавишами:    
1. **!** - создание базовой структуры в **html** документе.   
2. **lorem(число)*** - стандартный текст для заполнения пустот.  

**Emmet** - плагин для текстовых редакторов, который напоминает автоподстановку текста в смартфоне, но более функциональную.    

**(alt + z)** - сочетание клавиш для переноса строки , да бы не было прокрутки.   

## Урок 4. Первые HTML теги.    

Открытие странички **html** с помощью плагина **live server**.  

Как создавать коментари    
```
<!--любой текст-->
```   
Заголовок страницы
<title>Заголовок</title>   

С помощью **emmet** можно просто писать **div** и нажать на **enter** и он сразу выведет <div></div>

## Урок 5. Как задавать путь к файлу.

Создание файла **style.css** в папке **сss**.
С помощью тега **link** соединяем **index.html** c файлом **style.css** в файле **index.html** , в **href** указываем буть к файлу **css**.
```
<link rel="stylesheet" href="css/style.css">
```
В папку **img** добавляем картинку с названием **logo.png**.В **body** c помочью тега <img> добавляем картинку на страничку.
```
<img src="img/logo.png" alt="logo">
```
Так же как и с картинкой можно добавить подлючение **java scripta** ,создаём папку **js** и в этой папке создаём файл **main.js**.
```
<Script src="js/main.js"></Script>
```
## Урок 6. Задание на создание папок и файлов.

Подключение **css** и **js** файлов
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css2/main.css">
</head>
<body>
      <img src="img/main/logo.png" alt="logo">
      <script src="js/lib.js"></script>
      <script src="js/script/main.js"></script>
</body>
</html>
```
Создаём в папке **css** папку **css2** и в ней файл **main.css**, а в папке **js** папку **script** а в ней файл **main.js** и в папке **js** файл **lib.js**.
В папке **img** создаём папку **main** и перетаски ваем в неё файл **logo.png** .

## Урок 7. Теги **html**.   

В **ol** и **ul**  должен быть тег **li**.
```
<ul>
<li></li>
</ul>

<ol>
<li></li>
</ol>
```
**ol** - это список из цифр.
**ul** - это список точек.

**a href="#">ссылка**
Переход на другую страницу.

## Урок 8. Создание таблиц.   
 Таблицы
 ```
<table border="1">
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
</table>
 ```
 * table - таблица.   
 * border - рамка.   
 * tr - строка.   
 * td - столбец.   

 ## Урок 9. Работа с текстом.   

**div** - блочный тег.
**span** - строчный тег.
**hr** - прямая горизонтальная линия.
**p** - параграф блочный тег.
**h1-h6** - Заголовки.

## Урок 10. Задание. 

Закрепляем выученые теги.
```
<body>
<H1>загаловок</H1>

<p>умеем:</p>

<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
<hr>
<ol>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>
<hr>
  <table border="1">
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
</table>
<h4>конец</h4>
</body>
```

## Урок 11. Создание формы.
```
<form action="">
    <input type="" value="">
 ```   
 C помощью **(ctrl+space)** в **type** можно вызвать меню и посмотреть какие формы бывают.

 Теги:
 * button - кнопка.
 * textarea - текстовой редактор.

 ## Урок 12. Универсальные атрибуты тегов.

 * hidden - скрывающий атрибут.
 * title - подскаска.
 * class - класс может быть одинаковый у элементов.
 * id - должны быть индивидуальные для каждого элемента.

 ## Урок 13. Цвет RGB и спецсимволы.

 Спецсимволов **html** большое колличество, сайт с спецсимволами https://htmlweb.ru/html/symbols.php.   
 
 Цвет записываеться в разных форматах, можно записать в текстовом варианте **green**, в значение **RGB (0,128,0)** , и в коде **#008000**.

## Урок 14. Подведение итогов изучения Html   

# 02 Язык CSS

## Урок 15. Css селекторы.

Подключаем к индексу **css** файл с помощью тега **link**.
```
 <link rel="stylesheet" href="/css/style.css">
```
Пример **css** кода:
```
*{
color: teal;
}

```
Где **color** это свойство , **teal** значение.
**h1{}** обращение ко всем элементам **h1**.
По классам обращаемся через точку, по индификаторам через решётку. В **css** всё работает сверху вниз, так же ещё можно обращаться к атрибутам **html**.   
Пример:  
```
div[title] {
    color: red;
}
```
В **сss** каждое значение заканчиваеться точкой с запятой.

## Урок 16. Работа с изображениями в сss.

```
html
<body>
<div class="logo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa recusandae sapiente dolores, doloremque a nihil repudiandae veniam, voluptate doloribus nostrum impedit quidem? Beatae dolor, tempora nesciunt accusantium fugit totam?</div>
</body>
css
.logo {
    background-image: url(../img/logo.png)
    background-repeat: no-repeat;
}
}
```
Две точки нужны для выхода из папки **css**.       
    **background-repeat: no-repeat;** нужно для того что бы изображение не повторялось.
## Урок 17. Границы.

С помощью **border** можно отчертить рамку , границу блока, а с **border-radius** скруглить углы.
```
  border-top: ;
    border-bottom: ;
    border-left: ;
    border-right: ;
    
```
Можно настроить любую границу отдельно.
```
.menu__inner .logo {
    width: 200px;
    height: 80px;
    background: #fff;
    background-image: url(../img/1.png);
    background-repeat: no-repeat;
/*     background-size: cover; */
    background-position: center center;
}
```


## Урок 18. Размеры элементов.

C помощью **width**(ширина) и **height**(высота) выставляем нужные параметры картинки.   
Тестовое задание , нарисовать в **сss** светафор.
```
html
<body>
<div class="svetofor">
  <div class="red"></div>
  <div class="orange"></div>
  <div class="green"></div>
</div>
</body>
css
.svetofor div{
width: 100px;
height: 100px;
border-radius: 50%;
}
.red {
    background-color: red;
}
.orange {
    background-color: orange;
}
.green {
    background-color: green;
}
```

## Урок 19. Работа с шрифтом.

* font-family - свойство выбора шрифта.
* font-size - размер шрифта.
* font-weight - ширина шрифта.
* line-height - интервал между строками.
* text-align - выравние текста по стороне.
* text-decoration - подчёркивание.
* text-transform - изменение символов.
* list-style - символы для списка.

## Урок 20. Блочная модель документа. 

Рисуем 2 квадрата красный и синий с помощью **css**.
```
index
<body>
  <div class="box box1"></div>
  <div class="box box2"></div>
</body>
css
.box {
    width: 150px;
    height: 150px;
    border: 1px solid black;
}
.box1 {
    background-color: rgb(83,136,172);
    margin: 10px;
}
.box2 {
    background-color: rgb(200,106,106);
    margin: 10px;
}
```
С помощью **box-sizing: border-box;** мы делаем так что бы стандартные марджин и падинг не меняли размер элемента.

Ссылка на все комбинации **Emmet** https://webdesign-master.ru/blog/html-css/2.html

## Урок 21. Псевдоклассы и псевдоэлементы.

Изменить курсор можно благодаря свойству **cursor:(ctrl+space);**

* hover - псевдокласс который срабатывает при наведении мышкой.
* nth-child() - выбор дочернего элемента,можно указать **odd** это к нечетному элементу и **even** к четному.
* first-child - первый элемент.
* last-child - последний элемент.
* before{content:1;} - псевдоэлемент добавляеться перед элементом.
* after{content:1;} - псевдоэлемент добавляеться после элемента.

## Урок 22. Основы Css flexbox.

C помочью свойства **display:flex;** можно **div** писать строчно,а благодаря **flex-wrap: wrap;** убираем горизантальный ползунок прокрутки и переносяться на новую строку.
* **flex-direction: column;** - в столбик.

* **order: 1;** - менять местами

* **justify-content:;** - выравнивание по горизантали

* **align-items:;** - по вертикали

* **align-self:** - работа непосредственно с элементом.

* **align-content:;** - вертикальное выравнивание всех элементов внутри родительского.

## Урок 23. Адаптивная версия сайта, Создание своей сетки.

В index.html создаём вложеную цепочку дивов.
```
<div class="header">
  <div class="container">
    <div class="row">
      <div class="col-12">1</div>
      <div class="col-6">2</div>
      <div class="col-6">3</div>
      <div class="col-3">4</div>
      <div class="col-3">5</div>
      <div class="col-3">6</div>
      <div class="col-3">7</div>
      <div class="col-4">8</div>
      <div class="col-4">9</div>
      <div class="col-4">10</div>
    </div>
  </div>
</div>
```
C помощью **flex-box** вычерчиваем невидимую таблицу из 12 столбиков,и по формуле x/12*100,где x-столбик к которому хотим перейти.
```
     :root {
     --gutter: 20px;
     --bg: tomato;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    html {
        box-sizing: border-box;
        font-size: 18px;
    }
    body,p,h1,h2,h3,ul,ol {
        margin: 0;
        padding: 0;
    }
    .header {
        background-color: grey;
    }
    .container {
        background-color: #eee;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
    }
    .row > div {
        padding: 15px;
        margin: 0 auto;
        background-color: wheat;
        border: 1px solid gray
    }
    .col-3 {
        width: calc(25% - var(--gutter));
    }
    .col-6 {
        width: calc(50% - var(--gutter));
    }
    .col-12 {
        width: calc(100% - var(--gutter));
    } 
    .col-4 {
        width: calc(33.33% - var(--gutter));
    }
```
Описание **bootstrap** сетки
https://getbootstrap.com/docs/5.2/layout/grid/          
**@media screen and (max-width:992px){}**   
запрос медиа (то что написано в фигурных скобках будет работать только на экранах меньше 992px)   
**root {--peremen};** - в **css** можно создавать переменную.   
В итоге мы научились управлять элементами на разный размерах мобильных устройств.   

## Урок 24. Задание по работе с сеткой.

Сделать **style.css** файл со всеми размерами столбцов от 1 до 12, также создать медиа запрос по размерам **lg,md,sm** и вывести в отдельный файл **media.css**.

style.css
```
:root {
    --gutter: 20px;
    --bg: #5b9c5a;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 18px;
  }
  body,p,h1,h2,h3,ul,ol {
    margin: 0;
    padding: 0;
  }
  .header {
    background-color: var(--bg);
  }
  .container {
    background-color: #eee;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .row > div {
    padding: 15px;
    margin: 0 auto;
    background-color: wheat;
    border: 1px solid gray
  }
  .col-1 {
    width: calc(8.3% - var(--gutter));
  }
  .col-2 {
    width: calc(16.66% - var(--gutter));
  }
  .col-3 {
    width: calc(25% - var(--gutter));
  }
  .col-4 {
    width: calc(33.33% - var(--gutter));
  }
  .col-5 {
    width: calc(41.66% - var(--gutter));
  }
  .col-6 {
    width: calc(50% - var(--gutter));
  }
  .col-7 {
    width: calc(58.33% - var(--gutter));
  }
  .col-8 {
    width: calc(66.66% - var(--gutter));
  }
  .col-9 {
    width: calc(75% - var(--gutter));
  }
  .col-10 {
    width: calc(83.33% - var(--gutter));
  }
  .col-11 {
    width: calc(91.66% - var(--gutter));
  }
  .col-12 {
    width: calc(100% - var(--gutter));
  }
  ```
  media.css
```
@media screen and (max-width:992px) {
  .container {
    max-width: 100%;
  }
  .col-lg-1 {
    width: calc(8.3% - var(--gutter));
  }
  .col-lg-2 {
    width: calc(16.66% - var(--gutter));
  }
  .col-lg-3 {
    width: calc(25% - var(--gutter));
  }
  .col-lg-4 {
    width: calc(33.33% - var(--gutter));
  }
  .col-lg-5 {
    width: calc(41.66% - var(--gutter));
  }
  .col-lg-6 {
    width: calc(50% - var(--gutter));
  }
  .col-lg-7 {
    width: calc(58.33% - var(--gutter));
  }
  .col-lg-8 {
    width: calc(66.66% - var(--gutter));
  }
  .col-lg-9 {
    width: calc(75% - var(--gutter));
  }
  .col-lg-10 {
    width: calc(83.33% - var(--gutter));
  }
  .col-lg-11 {
    width: calc(91.66% - var(--gutter));
  }
  .col-lg-12 {
    width: calc(100% - var(--gutter));
  }
}
@media screen and (max-width:768px) {
  .col-md-1 {
    width: calc(8.3% - var(--gutter));
  }
  .col-md-2 {
    width: calc(16.66% - var(--gutter));
  }
  .col-md-3 {
    width: calc(25% - var(--gutter));
  }
  .col-md-4 {
    width: calc(33.33% - var(--gutter));
  }
  .col-md-5 {
    width: calc(41.66% - var(--gutter));
  }
  .col-md-6 {
    width: calc(50% - var(--gutter));
  }
  .col-md-7 {
    width: calc(58.33% - var(--gutter));
  }
  .col-md-8 {
    width: calc(66.66% - var(--gutter));
  }
  .col-md-9 {
    width: calc(75% - var(--gutter));
  }
  .col-md-10 {
    width: calc(83.33% - var(--gutter));
  }
  .col-md-11 {
    width: calc(91.66% - var(--gutter));
  }
  .col-md-12 {
    width: calc(100% - var(--gutter));
  }
}
@media screen and (max-width:576px) {
  .col-sm-1 {
    width: calc(8.3% - var(--gutter));
  }
  .col-sm-2 {
    width: calc(16.66% - var(--gutter));
  }
  .col-sm-3 {
    width: calc(25% - var(--gutter));
  }
  .col-sm-4 {
    width: calc(33.33% - var(--gutter));
  }
  .col-sm-5 {
    width: calc(41.66% - var(--gutter));
  }
  .col-sm-6 {
    width: calc(50% - var(--gutter));
  }
  .col-sm-7 {
    width: calc(58.33% - var(--gutter));
  }
  .col-sm-8 {
    width: calc(66.66% - var(--gutter));
  }
  .col-sm-9 {
    width: calc(75% - var(--gutter));
  }
  .col-sm-10 {
    width: calc(83.33% - var(--gutter));
  }
  .col-sm-11 {
    width: calc(91.66% - var(--gutter));
  }
  .col-sm-12 {
    width: calc(100% - var(--gutter));
  }
}
```

# 03 Практика по HTML и CSS.

## Урок 25.Практическое занятие 1.
### Создание шапки.            
По макету лого и меню навигации,с помощью **hover** при наведение на меню загораеться желтым , объекты меню обёрнуты в тег **а** для дальнейшего перехода для сайта.

html
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой сайт</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="menu">
        <div class="container">
            <div class="menu__inner">
                <div class="logo">
                    <img src="img/logo.png" alt="">
                </div>
                <ul class="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">How it Work</a></li>
                    <li><a href="#">Happy Clients</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>

</body>
</html>
```
css
```
* {
    box-sizing: border-box;
    font-family: sans-serif;
}
.container {
    width: 1170px;
    margin: 0 auto;
}
.menu__inner {
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0; 
}
.nav li a {
    text-transform: uppercase;
    color: #999;
    text-decoration: none;
    padding: 10px 20px;
}
.nav li a:hover {
    background-color: #ffc744;
    color: #fff;
    border-radius: 5px;
}
```

С прописаным медиа __css__.
```
* {
    box-sizing: border-box;
    font-family: sans-serif;
}
.container {
    width: 1170px;
    margin: 0 auto;
}
.menu__inner {
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0; 
}
.nav li a {
    text-transform: uppercase;
    color: #999;
    text-decoration: none;
    padding: 10px 20px;
}
.nav li a:hover {
    background-color: #ffc744;
    color: #fff;
    border-radius: 5px;
}

@media screen and (max-width:994px) {
    .container {
        max-width: 100%;
      }
      .menu__inner {
        margin: 0;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .nav {
        flex-direction: column;
      }
}
```
![alt](/img_read/025%20%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BA%20%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8.png)

## Урок 26. Домашнее задание 1.

С помощью дивов сделать похожую html страничку как на видио, и в css указать похожие свойства текста,расположения,шрифта,и размера.
```
html
<div class="menu">
    <div class="container">
      <div class="nav">
      <div class="value">
      <div class="number">2500</div>
        <div class="text">happy clients</div>
      </div>
        <div class="value">
          <div class="number">300</div>
            <div class="text">full notebooks</div>
        </div>
            <div class="value">
              <div class="number">120</div>
                <div class="text">teammates</div>
            </div>
                <div class="value">
                  <div class="number">30</div>
                    <div class="text">stores</div>
                </div>
      </div>
    </div>
```
```
css
*, *:before, *:after {
    box-sizing: inherit;
}
.container {
    width: 950px;
    margin: 0 auto;
}
.menu {
background-color: blueviolet;
width: 1050px;
margin: 400px;
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;

}
.value {
    text-align: center;
}
.number {
    color: rgb(255, 109, 5);
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 40px;
    text-align: center;
    margin-bottom: 20px;
}
.text {
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: lighter;
}
```
__media__
```
@media screen and (max-width:1150px) {
.container{
    width: 100%;
}
    .info__inner{
    justify-content: center;
}
.item{
    padding: 0 20px;
}
}

@media screen and (max-width:740px) {
.number{
    font-size: 45px;
}
.text{
    font-size: 15px;
}
}
```               
Или __flex-wrap__.
```
 @media screen and (max-width:1250px) {
.container{
    width: 100%;
}
.info__inner{
    flex-wrap: wrap;
}
 }
 @media screen and (max-width:769px) {
    .info__inner{
        height: auto;
    }
```
![alt](/img_read/026%20%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5.png)

## Урок 27. Практическое занятие 2.
### Создаём блок в котором иконка, цифры и надпись.          
 В **body** 3 вложеных дива **box=>container=>box__inner** , а в **css** устанавливаем ширину для контейнера **1170px** и с помощью **margin** выравниваем по центру **0 auto;** и соответствено **border-box** для всех элементов.    
Внутри **box__inner** создаём див c класом **item** , а в нём 3 дива с класами **number,text,line** и заполняем их как на картинке, клонируем до 5 штук див **item**.   
Скачиваем плагин на **VS code** под названием **VS html to css**. Он нужен для того что бы облегчить работу в css, копируем **html** код нажимаем **(alt+x)** и вставляем **css** файл и в результате получаем все открытые классы.   
Переходим на сайт и создаём градиент похожий на макете.
Для работы с иконками переходим на сайт https://fontawesome.ru/get-started/#modal-download скачиваем библиотеку **начало работы=>расширеная кастомизация=>скачать** заходим в папку **css** и берём и переносим файл **font-awesome.min.css** в свою папку **css** и подключаем его в **head** до наших стилей,и копируем папку **fonts** в папку **html** 
На сайте кликаем по нужной иконке и копируем код в свою работу.
html
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой сайт</title>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="box">
        <div class="container">
            <div class="box__inner">
                <div class="item">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <div class="number">3587</div>
                    <div class="text">Satisfied clients</div>
                    <div class="line"></div>
                </div>
                <div class="item">
                    <i class="fa fa-coffee" aria-hidden="true"></i>
                    <div class="number">207</div>
                    <div class="text">Cups of coffee</div>
                    <div class="line"></div>
                </div>
                <div class="item">
                    <i class="fa fa-comment-o" aria-hidden="true"></i>
                    <div class="number">2500</div>
                    <div class="text">Blog Posts</div>
                    <div class="line"></div>
                </div>
                <div class="item">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <div class="number">873</div>
                    <div class="text">Likes</div>
                    <div class="line"></div>
                </div>
                <div class="item">
                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                    <div class="number">900</div>
                    <div class="text">We lauched</div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
```
css
```
* {
    box-sizing: border-box;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.container {
    width: 1170px;
    margin: 0 auto;
}
.box {
    
    background: rgb(45,22,0);
    background: linear-gradient(90deg, rgba(45,22,0,1) 0%, rgba(111,54,0,1) 100%);
}
.box__inner {
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.item {
    text-align: center;
}
.number {
    padding-top: 15px;
    color: #fff;
    font-size: 60px;
}
.text {
    color: #eec8a8;
    font-size: 25px;
    font-family: sans-serif;
    margin-bottom: 25px;
    text-transform: uppercase;
}
.line {
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 0 auto;
}
i.fa {
    font-size: 60px;
    color: #eec8a8;
}

```
__media__
```
@media screen and ( max-width:1170px ) {
    .container {
        width: 100%;
    }
    .box__inner {
    flex-wrap:wrap;
    height: 360px;
    }
    .item {
        padding: 20px 5px;
    }
}

@media screen and ( max-width:1050px ) {
.box__inner{
    height: 410px;
}
@media screen and ( max-width:960px ) {
    .box__inner {
        height: 470px;
    }
}
```


font-awesome.min.css
```
/*!
 *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */@font-face{font-family:'FontAwesome';src:url('../fonts/fontawesome-webfont.eot?v=4.7.0');src:url('../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),url('../fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),url('../fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),url('../fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),url('../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scale(-1, 1);-ms-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(1, -1);-ms-transform:scale(1, -1);transform:scale(1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\f000"}.fa-music:before{content:"\f001"}.fa-search:before{content:"\f002"}.fa-envelope-o:before{content:"\f003"}.fa-heart:before{content:"\f004"}.fa-star:before{content:"\f005"}.fa-star-o:before{content:"\f006"}.fa-user:before{content:"\f007"}.fa-film:before{content:"\f008"}.fa-th-large:before{content:"\f009"}.fa-th:before{content:"\f00a"}.fa-th-list:before{content:"\f00b"}.fa-check:before{content:"\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\f00d"}.fa-search-plus:before{content:"\f00e"}.fa-search-minus:before{content:"\f010"}.fa-power-off:before{content:"\f011"}.fa-signal:before{content:"\f012"}.fa-gear:before,.fa-cog:before{content:"\f013"}.fa-trash-o:before{content:"\f014"}.fa-home:before{content:"\f015"}.fa-file-o:before{content:"\f016"}.fa-clock-o:before{content:"\f017"}.fa-road:before{content:"\f018"}.fa-download:before{content:"\f019"}.fa-arrow-circle-o-down:before{content:"\f01a"}.fa-arrow-circle-o-up:before{content:"\f01b"}.fa-inbox:before{content:"\f01c"}.fa-play-circle-o:before{content:"\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\f01e"}.fa-refresh:before{content:"\f021"}.fa-list-alt:before{content:"\f022"}.fa-lock:before{content:"\f023"}.fa-flag:before{content:"\f024"}.fa-headphones:before{content:"\f025"}.fa-volume-off:before{content:"\f026"}.fa-volume-down:before{content:"\f027"}.fa-volume-up:before{content:"\f028"}.fa-qrcode:before{content:"\f029"}.fa-barcode:before{content:"\f02a"}.fa-tag:before{content:"\f02b"}.fa-tags:before{content:"\f02c"}.fa-book:before{content:"\f02d"}.fa-bookmark:before{content:"\f02e"}.fa-print:before{content:"\f02f"}.fa-camera:before{content:"\f030"}.fa-font:before{content:"\f031"}.fa-bold:before{content:"\f032"}.fa-italic:before{content:"\f033"}.fa-text-height:before{content:"\f034"}.fa-text-width:before{content:"\f035"}.fa-align-left:before{content:"\f036"}.fa-align-center:before{content:"\f037"}.fa-align-right:before{content:"\f038"}.fa-align-justify:before{content:"\f039"}.fa-list:before{content:"\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\f03b"}.fa-indent:before{content:"\f03c"}.fa-video-camera:before{content:"\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\f03e"}.fa-pencil:before{content:"\f040"}.fa-map-marker:before{content:"\f041"}.fa-adjust:before{content:"\f042"}.fa-tint:before{content:"\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\f044"}.fa-share-square-o:before{content:"\f045"}.fa-check-square-o:before{content:"\f046"}.fa-arrows:before{content:"\f047"}.fa-step-backward:before{content:"\f048"}.fa-fast-backward:before{content:"\f049"}.fa-backward:before{content:"\f04a"}.fa-play:before{content:"\f04b"}.fa-pause:before{content:"\f04c"}.fa-stop:before{content:"\f04d"}.fa-forward:before{content:"\f04e"}.fa-fast-forward:before{content:"\f050"}.fa-step-forward:before{content:"\f051"}.fa-eject:before{content:"\f052"}.fa-chevron-left:before{content:"\f053"}.fa-chevron-right:before{content:"\f054"}.fa-plus-circle:before{content:"\f055"}.fa-minus-circle:before{content:"\f056"}.fa-times-circle:before{content:"\f057"}.fa-check-circle:before{content:"\f058"}.fa-question-circle:before{content:"\f059"}.fa-info-circle:before{content:"\f05a"}.fa-crosshairs:before{content:"\f05b"}.fa-times-circle-o:before{content:"\f05c"}.fa-check-circle-o:before{content:"\f05d"}.fa-ban:before{content:"\f05e"}.fa-arrow-left:before{content:"\f060"}.fa-arrow-right:before{content:"\f061"}.fa-arrow-up:before{content:"\f062"}.fa-arrow-down:before{content:"\f063"}.fa-mail-forward:before,.fa-share:before{content:"\f064"}.fa-expand:before{content:"\f065"}.fa-compress:before{content:"\f066"}.fa-plus:before{content:"\f067"}.fa-minus:before{content:"\f068"}.fa-asterisk:before{content:"\f069"}.fa-exclamation-circle:before{content:"\f06a"}.fa-gift:before{content:"\f06b"}.fa-leaf:before{content:"\f06c"}.fa-fire:before{content:"\f06d"}.fa-eye:before{content:"\f06e"}.fa-eye-slash:before{content:"\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\f071"}.fa-plane:before{content:"\f072"}.fa-calendar:before{content:"\f073"}.fa-random:before{content:"\f074"}.fa-comment:before{content:"\f075"}.fa-magnet:before{content:"\f076"}.fa-chevron-up:before{content:"\f077"}.fa-chevron-down:before{content:"\f078"}.fa-retweet:before{content:"\f079"}.fa-shopping-cart:before{content:"\f07a"}.fa-folder:before{content:"\f07b"}.fa-folder-open:before{content:"\f07c"}.fa-arrows-v:before{content:"\f07d"}.fa-arrows-h:before{content:"\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\f080"}.fa-twitter-square:before{content:"\f081"}.fa-facebook-square:before{content:"\f082"}.fa-camera-retro:before{content:"\f083"}.fa-key:before{content:"\f084"}.fa-gears:before,.fa-cogs:before{content:"\f085"}.fa-comments:before{content:"\f086"}.fa-thumbs-o-up:before{content:"\f087"}.fa-thumbs-o-down:before{content:"\f088"}.fa-star-half:before{content:"\f089"}.fa-heart-o:before{content:"\f08a"}.fa-sign-out:before{content:"\f08b"}.fa-linkedin-square:before{content:"\f08c"}.fa-thumb-tack:before{content:"\f08d"}.fa-external-link:before{content:"\f08e"}.fa-sign-in:before{content:"\f090"}.fa-trophy:before{content:"\f091"}.fa-github-square:before{content:"\f092"}.fa-upload:before{content:"\f093"}.fa-lemon-o:before{content:"\f094"}.fa-phone:before{content:"\f095"}.fa-square-o:before{content:"\f096"}.fa-bookmark-o:before{content:"\f097"}.fa-phone-square:before{content:"\f098"}.fa-twitter:before{content:"\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\f09a"}.fa-github:before{content:"\f09b"}.fa-unlock:before{content:"\f09c"}.fa-credit-card:before{content:"\f09d"}.fa-feed:before,.fa-rss:before{content:"\f09e"}.fa-hdd-o:before{content:"\f0a0"}.fa-bullhorn:before{content:"\f0a1"}.fa-bell:before{content:"\f0f3"}.fa-certificate:before{content:"\f0a3"}.fa-hand-o-right:before{content:"\f0a4"}.fa-hand-o-left:before{content:"\f0a5"}.fa-hand-o-up:before{content:"\f0a6"}.fa-hand-o-down:before{content:"\f0a7"}.fa-arrow-circle-left:before{content:"\f0a8"}.fa-arrow-circle-right:before{content:"\f0a9"}.fa-arrow-circle-up:before{content:"\f0aa"}.fa-arrow-circle-down:before{content:"\f0ab"}.fa-globe:before{content:"\f0ac"}.fa-wrench:before{content:"\f0ad"}.fa-tasks:before{content:"\f0ae"}.fa-filter:before{content:"\f0b0"}.fa-briefcase:before{content:"\f0b1"}.fa-arrows-alt:before{content:"\f0b2"}.fa-group:before,.fa-users:before{content:"\f0c0"}.fa-chain:before,.fa-link:before{content:"\f0c1"}.fa-cloud:before{content:"\f0c2"}.fa-flask:before{content:"\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\f0c5"}.fa-paperclip:before{content:"\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\f0c7"}.fa-square:before{content:"\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\f0c9"}.fa-list-ul:before{content:"\f0ca"}.fa-list-ol:before{content:"\f0cb"}.fa-strikethrough:before{content:"\f0cc"}.fa-underline:before{content:"\f0cd"}.fa-table:before{content:"\f0ce"}.fa-magic:before{content:"\f0d0"}.fa-truck:before{content:"\f0d1"}.fa-pinterest:before{content:"\f0d2"}.fa-pinterest-square:before{content:"\f0d3"}.fa-google-plus-square:before{content:"\f0d4"}.fa-google-plus:before{content:"\f0d5"}.fa-money:before{content:"\f0d6"}.fa-caret-down:before{content:"\f0d7"}.fa-caret-up:before{content:"\f0d8"}.fa-caret-left:before{content:"\f0d9"}.fa-caret-right:before{content:"\f0da"}.fa-columns:before{content:"\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\f0de"}.fa-envelope:before{content:"\f0e0"}.fa-linkedin:before{content:"\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\f0e4"}.fa-comment-o:before{content:"\f0e5"}.fa-comments-o:before{content:"\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\f0e7"}.fa-sitemap:before{content:"\f0e8"}.fa-umbrella:before{content:"\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\f0ea"}.fa-lightbulb-o:before{content:"\f0eb"}.fa-exchange:before{content:"\f0ec"}.fa-cloud-download:before{content:"\f0ed"}.fa-cloud-upload:before{content:"\f0ee"}.fa-user-md:before{content:"\f0f0"}.fa-stethoscope:before{content:"\f0f1"}.fa-suitcase:before{content:"\f0f2"}.fa-bell-o:before{content:"\f0a2"}.fa-coffee:before{content:"\f0f4"}.fa-cutlery:before{content:"\f0f5"}.fa-file-text-o:before{content:"\f0f6"}.fa-building-o:before{content:"\f0f7"}.fa-hospital-o:before{content:"\f0f8"}.fa-ambulance:before{content:"\f0f9"}.fa-medkit:before{content:"\f0fa"}.fa-fighter-jet:before{content:"\f0fb"}.fa-beer:before{content:"\f0fc"}.fa-h-square:before{content:"\f0fd"}.fa-plus-square:before{content:"\f0fe"}.fa-angle-double-left:before{content:"\f100"}.fa-angle-double-right:before{content:"\f101"}.fa-angle-double-up:before{content:"\f102"}.fa-angle-double-down:before{content:"\f103"}.fa-angle-left:before{content:"\f104"}.fa-angle-right:before{content:"\f105"}.fa-angle-up:before{content:"\f106"}.fa-angle-down:before{content:"\f107"}.fa-desktop:before{content:"\f108"}.fa-laptop:before{content:"\f109"}.fa-tablet:before{content:"\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\f10b"}.fa-circle-o:before{content:"\f10c"}.fa-quote-left:before{content:"\f10d"}.fa-quote-right:before{content:"\f10e"}.fa-spinner:before{content:"\f110"}.fa-circle:before{content:"\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\f112"}.fa-github-alt:before{content:"\f113"}.fa-folder-o:before{content:"\f114"}.fa-folder-open-o:before{content:"\f115"}.fa-smile-o:before{content:"\f118"}.fa-frown-o:before{content:"\f119"}.fa-meh-o:before{content:"\f11a"}.fa-gamepad:before{content:"\f11b"}.fa-keyboard-o:before{content:"\f11c"}.fa-flag-o:before{content:"\f11d"}.fa-flag-checkered:before{content:"\f11e"}.fa-terminal:before{content:"\f120"}.fa-code:before{content:"\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\f123"}.fa-location-arrow:before{content:"\f124"}.fa-crop:before{content:"\f125"}.fa-code-fork:before{content:"\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\f127"}.fa-question:before{content:"\f128"}.fa-info:before{content:"\f129"}.fa-exclamation:before{content:"\f12a"}.fa-superscript:before{content:"\f12b"}.fa-subscript:before{content:"\f12c"}.fa-eraser:before{content:"\f12d"}.fa-puzzle-piece:before{content:"\f12e"}.fa-microphone:before{content:"\f130"}.fa-microphone-slash:before{content:"\f131"}.fa-shield:before{content:"\f132"}.fa-calendar-o:before{content:"\f133"}.fa-fire-extinguisher:before{content:"\f134"}.fa-rocket:before{content:"\f135"}.fa-maxcdn:before{content:"\f136"}.fa-chevron-circle-left:before{content:"\f137"}.fa-chevron-circle-right:before{content:"\f138"}.fa-chevron-circle-up:before{content:"\f139"}.fa-chevron-circle-down:before{content:"\f13a"}.fa-html5:before{content:"\f13b"}.fa-css3:before{content:"\f13c"}.fa-anchor:before{content:"\f13d"}.fa-unlock-alt:before{content:"\f13e"}.fa-bullseye:before{content:"\f140"}.fa-ellipsis-h:before{content:"\f141"}.fa-ellipsis-v:before{content:"\f142"}.fa-rss-square:before{content:"\f143"}.fa-play-circle:before{content:"\f144"}.fa-ticket:before{content:"\f145"}.fa-minus-square:before{content:"\f146"}.fa-minus-square-o:before{content:"\f147"}.fa-level-up:before{content:"\f148"}.fa-level-down:before{content:"\f149"}.fa-check-square:before{content:"\f14a"}.fa-pencil-square:before{content:"\f14b"}.fa-external-link-square:before{content:"\f14c"}.fa-share-square:before{content:"\f14d"}.fa-compass:before{content:"\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\f152"}.fa-euro:before,.fa-eur:before{content:"\f153"}.fa-gbp:before{content:"\f154"}.fa-dollar:before,.fa-usd:before{content:"\f155"}.fa-rupee:before,.fa-inr:before{content:"\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\f158"}.fa-won:before,.fa-krw:before{content:"\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\f15a"}.fa-file:before{content:"\f15b"}.fa-file-text:before{content:"\f15c"}.fa-sort-alpha-asc:before{content:"\f15d"}.fa-sort-alpha-desc:before{content:"\f15e"}.fa-sort-amount-asc:before{content:"\f160"}.fa-sort-amount-desc:before{content:"\f161"}.fa-sort-numeric-asc:before{content:"\f162"}.fa-sort-numeric-desc:before{content:"\f163"}.fa-thumbs-up:before{content:"\f164"}.fa-thumbs-down:before{content:"\f165"}.fa-youtube-square:before{content:"\f166"}.fa-youtube:before{content:"\f167"}.fa-xing:before{content:"\f168"}.fa-xing-square:before{content:"\f169"}.fa-youtube-play:before{content:"\f16a"}.fa-dropbox:before{content:"\f16b"}.fa-stack-overflow:before{content:"\f16c"}.fa-instagram:before{content:"\f16d"}.fa-flickr:before{content:"\f16e"}.fa-adn:before{content:"\f170"}.fa-bitbucket:before{content:"\f171"}.fa-bitbucket-square:before{content:"\f172"}.fa-tumblr:before{content:"\f173"}.fa-tumblr-square:before{content:"\f174"}.fa-long-arrow-down:before{content:"\f175"}.fa-long-arrow-up:before{content:"\f176"}.fa-long-arrow-left:before{content:"\f177"}.fa-long-arrow-right:before{content:"\f178"}.fa-apple:before{content:"\f179"}.fa-windows:before{content:"\f17a"}.fa-android:before{content:"\f17b"}.fa-linux:before{content:"\f17c"}.fa-dribbble:before{content:"\f17d"}.fa-skype:before{content:"\f17e"}.fa-foursquare:before{content:"\f180"}.fa-trello:before{content:"\f181"}.fa-female:before{content:"\f182"}.fa-male:before{content:"\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\f184"}.fa-sun-o:before{content:"\f185"}.fa-moon-o:before{content:"\f186"}.fa-archive:before{content:"\f187"}.fa-bug:before{content:"\f188"}.fa-vk:before{content:"\f189"}.fa-weibo:before{content:"\f18a"}.fa-renren:before{content:"\f18b"}.fa-pagelines:before{content:"\f18c"}.fa-stack-exchange:before{content:"\f18d"}.fa-arrow-circle-o-right:before{content:"\f18e"}.fa-arrow-circle-o-left:before{content:"\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\f191"}.fa-dot-circle-o:before{content:"\f192"}.fa-wheelchair:before{content:"\f193"}.fa-vimeo-square:before{content:"\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\f195"}.fa-plus-square-o:before{content:"\f196"}.fa-space-shuttle:before{content:"\f197"}.fa-slack:before{content:"\f198"}.fa-envelope-square:before{content:"\f199"}.fa-wordpress:before{content:"\f19a"}.fa-openid:before{content:"\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\f19d"}.fa-yahoo:before{content:"\f19e"}.fa-google:before{content:"\f1a0"}.fa-reddit:before{content:"\f1a1"}.fa-reddit-square:before{content:"\f1a2"}.fa-stumbleupon-circle:before{content:"\f1a3"}.fa-stumbleupon:before{content:"\f1a4"}.fa-delicious:before{content:"\f1a5"}.fa-digg:before{content:"\f1a6"}.fa-pied-piper-pp:before{content:"\f1a7"}.fa-pied-piper-alt:before{content:"\f1a8"}.fa-drupal:before{content:"\f1a9"}.fa-joomla:before{content:"\f1aa"}.fa-language:before{content:"\f1ab"}.fa-fax:before{content:"\f1ac"}.fa-building:before{content:"\f1ad"}.fa-child:before{content:"\f1ae"}.fa-paw:before{content:"\f1b0"}.fa-spoon:before{content:"\f1b1"}.fa-cube:before{content:"\f1b2"}.fa-cubes:before{content:"\f1b3"}.fa-behance:before{content:"\f1b4"}.fa-behance-square:before{content:"\f1b5"}.fa-steam:before{content:"\f1b6"}.fa-steam-square:before{content:"\f1b7"}.fa-recycle:before{content:"\f1b8"}.fa-automobile:before,.fa-car:before{content:"\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\f1ba"}.fa-tree:before{content:"\f1bb"}.fa-spotify:before{content:"\f1bc"}.fa-deviantart:before{content:"\f1bd"}.fa-soundcloud:before{content:"\f1be"}.fa-database:before{content:"\f1c0"}.fa-file-pdf-o:before{content:"\f1c1"}.fa-file-word-o:before{content:"\f1c2"}.fa-file-excel-o:before{content:"\f1c3"}.fa-file-powerpoint-o:before{content:"\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\f1c8"}.fa-file-code-o:before{content:"\f1c9"}.fa-vine:before{content:"\f1ca"}.fa-codepen:before{content:"\f1cb"}.fa-jsfiddle:before{content:"\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\f1cd"}.fa-circle-o-notch:before{content:"\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\f1d0"}.fa-ge:before,.fa-empire:before{content:"\f1d1"}.fa-git-square:before{content:"\f1d2"}.fa-git:before{content:"\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\f1d4"}.fa-tencent-weibo:before{content:"\f1d5"}.fa-qq:before{content:"\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\f1d9"}.fa-history:before{content:"\f1da"}.fa-circle-thin:before{content:"\f1db"}.fa-header:before{content:"\f1dc"}.fa-paragraph:before{content:"\f1dd"}.fa-sliders:before{content:"\f1de"}.fa-share-alt:before{content:"\f1e0"}.fa-share-alt-square:before{content:"\f1e1"}.fa-bomb:before{content:"\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\f1e3"}.fa-tty:before{content:"\f1e4"}.fa-binoculars:before{content:"\f1e5"}.fa-plug:before{content:"\f1e6"}.fa-slideshare:before{content:"\f1e7"}.fa-twitch:before{content:"\f1e8"}.fa-yelp:before{content:"\f1e9"}.fa-newspaper-o:before{content:"\f1ea"}.fa-wifi:before{content:"\f1eb"}.fa-calculator:before{content:"\f1ec"}.fa-paypal:before{content:"\f1ed"}.fa-google-wallet:before{content:"\f1ee"}.fa-cc-visa:before{content:"\f1f0"}.fa-cc-mastercard:before{content:"\f1f1"}.fa-cc-discover:before{content:"\f1f2"}.fa-cc-amex:before{content:"\f1f3"}.fa-cc-paypal:before{content:"\f1f4"}.fa-cc-stripe:before{content:"\f1f5"}.fa-bell-slash:before{content:"\f1f6"}.fa-bell-slash-o:before{content:"\f1f7"}.fa-trash:before{content:"\f1f8"}.fa-copyright:before{content:"\f1f9"}.fa-at:before{content:"\f1fa"}.fa-eyedropper:before{content:"\f1fb"}.fa-paint-brush:before{content:"\f1fc"}.fa-birthday-cake:before{content:"\f1fd"}.fa-area-chart:before{content:"\f1fe"}.fa-pie-chart:before{content:"\f200"}.fa-line-chart:before{content:"\f201"}.fa-lastfm:before{content:"\f202"}.fa-lastfm-square:before{content:"\f203"}.fa-toggle-off:before{content:"\f204"}.fa-toggle-on:before{content:"\f205"}.fa-bicycle:before{content:"\f206"}.fa-bus:before{content:"\f207"}.fa-ioxhost:before{content:"\f208"}.fa-angellist:before{content:"\f209"}.fa-cc:before{content:"\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\f20b"}.fa-meanpath:before{content:"\f20c"}.fa-buysellads:before{content:"\f20d"}.fa-connectdevelop:before{content:"\f20e"}.fa-dashcube:before{content:"\f210"}.fa-forumbee:before{content:"\f211"}.fa-leanpub:before{content:"\f212"}.fa-sellsy:before{content:"\f213"}.fa-shirtsinbulk:before{content:"\f214"}.fa-simplybuilt:before{content:"\f215"}.fa-skyatlas:before{content:"\f216"}.fa-cart-plus:before{content:"\f217"}.fa-cart-arrow-down:before{content:"\f218"}.fa-diamond:before{content:"\f219"}.fa-ship:before{content:"\f21a"}.fa-user-secret:before{content:"\f21b"}.fa-motorcycle:before{content:"\f21c"}.fa-street-view:before{content:"\f21d"}.fa-heartbeat:before{content:"\f21e"}.fa-venus:before{content:"\f221"}.fa-mars:before{content:"\f222"}.fa-mercury:before{content:"\f223"}.fa-intersex:before,.fa-transgender:before{content:"\f224"}.fa-transgender-alt:before{content:"\f225"}.fa-venus-double:before{content:"\f226"}.fa-mars-double:before{content:"\f227"}.fa-venus-mars:before{content:"\f228"}.fa-mars-stroke:before{content:"\f229"}.fa-mars-stroke-v:before{content:"\f22a"}.fa-mars-stroke-h:before{content:"\f22b"}.fa-neuter:before{content:"\f22c"}.fa-genderless:before{content:"\f22d"}.fa-facebook-official:before{content:"\f230"}.fa-pinterest-p:before{content:"\f231"}.fa-whatsapp:before{content:"\f232"}.fa-server:before{content:"\f233"}.fa-user-plus:before{content:"\f234"}.fa-user-times:before{content:"\f235"}.fa-hotel:before,.fa-bed:before{content:"\f236"}.fa-viacoin:before{content:"\f237"}.fa-train:before{content:"\f238"}.fa-subway:before{content:"\f239"}.fa-medium:before{content:"\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\f23b"}.fa-optin-monster:before{content:"\f23c"}.fa-opencart:before{content:"\f23d"}.fa-expeditedssl:before{content:"\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\f244"}.fa-mouse-pointer:before{content:"\f245"}.fa-i-cursor:before{content:"\f246"}.fa-object-group:before{content:"\f247"}.fa-object-ungroup:before{content:"\f248"}.fa-sticky-note:before{content:"\f249"}.fa-sticky-note-o:before{content:"\f24a"}.fa-cc-jcb:before{content:"\f24b"}.fa-cc-diners-club:before{content:"\f24c"}.fa-clone:before{content:"\f24d"}.fa-balance-scale:before{content:"\f24e"}.fa-hourglass-o:before{content:"\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\f253"}.fa-hourglass:before{content:"\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\f256"}.fa-hand-scissors-o:before{content:"\f257"}.fa-hand-lizard-o:before{content:"\f258"}.fa-hand-spock-o:before{content:"\f259"}.fa-hand-pointer-o:before{content:"\f25a"}.fa-hand-peace-o:before{content:"\f25b"}.fa-trademark:before{content:"\f25c"}.fa-registered:before{content:"\f25d"}.fa-creative-commons:before{content:"\f25e"}.fa-gg:before{content:"\f260"}.fa-gg-circle:before{content:"\f261"}.fa-tripadvisor:before{content:"\f262"}.fa-odnoklassniki:before{content:"\f263"}.fa-odnoklassniki-square:before{content:"\f264"}.fa-get-pocket:before{content:"\f265"}.fa-wikipedia-w:before{content:"\f266"}.fa-safari:before{content:"\f267"}.fa-chrome:before{content:"\f268"}.fa-firefox:before{content:"\f269"}.fa-opera:before{content:"\f26a"}.fa-internet-explorer:before{content:"\f26b"}.fa-tv:before,.fa-television:before{content:"\f26c"}.fa-contao:before{content:"\f26d"}.fa-500px:before{content:"\f26e"}.fa-amazon:before{content:"\f270"}.fa-calendar-plus-o:before{content:"\f271"}.fa-calendar-minus-o:before{content:"\f272"}.fa-calendar-times-o:before{content:"\f273"}.fa-calendar-check-o:before{content:"\f274"}.fa-industry:before{content:"\f275"}.fa-map-pin:before{content:"\f276"}.fa-map-signs:before{content:"\f277"}.fa-map-o:before{content:"\f278"}.fa-map:before{content:"\f279"}.fa-commenting:before{content:"\f27a"}.fa-commenting-o:before{content:"\f27b"}.fa-houzz:before{content:"\f27c"}.fa-vimeo:before{content:"\f27d"}.fa-black-tie:before{content:"\f27e"}.fa-fonticons:before{content:"\f280"}.fa-reddit-alien:before{content:"\f281"}.fa-edge:before{content:"\f282"}.fa-credit-card-alt:before{content:"\f283"}.fa-codiepie:before{content:"\f284"}.fa-modx:before{content:"\f285"}.fa-fort-awesome:before{content:"\f286"}.fa-usb:before{content:"\f287"}.fa-product-hunt:before{content:"\f288"}.fa-mixcloud:before{content:"\f289"}.fa-scribd:before{content:"\f28a"}.fa-pause-circle:before{content:"\f28b"}.fa-pause-circle-o:before{content:"\f28c"}.fa-stop-circle:before{content:"\f28d"}.fa-stop-circle-o:before{content:"\f28e"}.fa-shopping-bag:before{content:"\f290"}.fa-shopping-basket:before{content:"\f291"}.fa-hashtag:before{content:"\f292"}.fa-bluetooth:before{content:"\f293"}.fa-bluetooth-b:before{content:"\f294"}.fa-percent:before{content:"\f295"}.fa-gitlab:before{content:"\f296"}.fa-wpbeginner:before{content:"\f297"}.fa-wpforms:before{content:"\f298"}.fa-envira:before{content:"\f299"}.fa-universal-access:before{content:"\f29a"}.fa-wheelchair-alt:before{content:"\f29b"}.fa-question-circle-o:before{content:"\f29c"}.fa-blind:before{content:"\f29d"}.fa-audio-description:before{content:"\f29e"}.fa-volume-control-phone:before{content:"\f2a0"}.fa-braille:before{content:"\f2a1"}.fa-assistive-listening-systems:before{content:"\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\f2a4"}.fa-glide:before{content:"\f2a5"}.fa-glide-g:before{content:"\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\f2a7"}.fa-low-vision:before{content:"\f2a8"}.fa-viadeo:before{content:"\f2a9"}.fa-viadeo-square:before{content:"\f2aa"}.fa-snapchat:before{content:"\f2ab"}.fa-snapchat-ghost:before{content:"\f2ac"}.fa-snapchat-square:before{content:"\f2ad"}.fa-pied-piper:before{content:"\f2ae"}.fa-first-order:before{content:"\f2b0"}.fa-yoast:before{content:"\f2b1"}.fa-themeisle:before{content:"\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\f2b4"}.fa-handshake-o:before{content:"\f2b5"}.fa-envelope-open:before{content:"\f2b6"}.fa-envelope-open-o:before{content:"\f2b7"}.fa-linode:before{content:"\f2b8"}.fa-address-book:before{content:"\f2b9"}.fa-address-book-o:before{content:"\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\f2bc"}.fa-user-circle:before{content:"\f2bd"}.fa-user-circle-o:before{content:"\f2be"}.fa-user-o:before{content:"\f2c0"}.fa-id-badge:before{content:"\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\f2c3"}.fa-quora:before{content:"\f2c4"}.fa-free-code-camp:before{content:"\f2c5"}.fa-telegram:before{content:"\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\f2cb"}.fa-shower:before{content:"\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\f2cd"}.fa-podcast:before{content:"\f2ce"}.fa-window-maximize:before{content:"\f2d0"}.fa-window-minimize:before{content:"\f2d1"}.fa-window-restore:before{content:"\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\f2d4"}.fa-bandcamp:before{content:"\f2d5"}.fa-grav:before{content:"\f2d6"}.fa-etsy:before{content:"\f2d7"}.fa-imdb:before{content:"\f2d8"}.fa-ravelry:before{content:"\f2d9"}.fa-eercast:before{content:"\f2da"}.fa-microchip:before{content:"\f2db"}.fa-snowflake-o:before{content:"\f2dc"}.fa-superpowers:before{content:"\f2dd"}.fa-wpexplorer:before{content:"\f2de"}.fa-meetup:before{content:"\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}

```
![alt](/img_read/027%20%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BA%20%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8.png)

## Урок 28. Домашнее задание 2.

Сделать блок как на видио.
```
html
<div class="box">
  <div class="container">
    <div class="box__inner">
      
      <i class="fa fa-users" aria-hidden="true"></i> 
      <div class="item">
        <div class="number">3587</div>
        <div class="text">satissfield clients</div>
      </div>

      <i class="fa fa-users" aria-hidden="true"></i>
      <div class="item">
        <div class="number">3587</div>
        <div class="text">satissfield clients</div>
      </div>

      <i class="fa fa-users" aria-hidden="true"></i>
      <div class="item">
        <div class="number">3587</div>
        <div class="text">satissfield clients</div>
      </div>

      <i class="fa fa-users" aria-hidden="true"></i>
      <div class="item">
        <div class="number">3587</div>
        <div class="text">satissfield clients</div>
      </div>

    </div>
  </div>
</div>
```
```
* {
    box-sizing: border-box;
}
.container {

    width: 1170px;
    margin: 0 auto;
}

.box {

    background: teal;
}
.box__inner {
    margin-top: 200px;
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.item {
    text-align: left;
}
.number {
    padding-top: 11px;
    color: #ffffff;
    font-size: 20px;
}
.text {
    color: #ffffff;
    font-size: 10px;
    font-family: sans-serif;
    margin-bottom: 18px;
    text-transform: uppercase;
    padding-top: 5px;
}
.line {
    width: 60px;
    height: 4px;
    background-color: white;
    margin: 0 auto;
}
i.fa {
    font-size: 30px;
    color: #ffffff;
    margin-left: 100px;
}
```
__media__
```
@media screen and (max-width: 1170px) {
    .container {
        width: 100%;
    }
    .box__inner{
        flex-wrap: wrap;
    }
    .item {
        padding: 10px;
    }
}
```
![alt](/img_read/028%20%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5.png)


## Урок 29. Практическое занятие 3.
 ### Сделать блок приемущественно низ сайтов заголовок, параграф, иконки.
  Создаём тег **h1** и выравниваем текст с помощью максимальной ширины и марджин , так же выравниваем и **p**. Далее вставляем иконки. Не всегда получаеться по селектору установить нужные свойства , поэтому лучше всего указывать и классы.
html
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой сайт</title>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="box">
        <div class="container">
            <div class="box__inner">
                <h1>At the same time that we are earnest to explore & learn all things</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora eos expedita sapiente nobis dolores corporis adipisci! Aut itaque, ipsa eaque recusandae velit a perspiciatis quasi eum molestiae illum nam.</p>
                <div class="icon-box">
                    <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
```
css
```
* {
    box-sizing: border-box;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.container {
    width: 1170px;
    margin: 0 auto;
}
.box__inner {
    text-align: center;
}
h1 {
    max-width: 750px;
    margin: 80px auto 30px;
    line-height: 45px;
    font-weight: normal;
}
p {
    max-width: 900px;
    margin: 0 auto 60px;
    line-height: 30px;
}
.icon-box {
    margin-bottom: 60px;
}
.icon-box i.fa {
    color: rgb(26, 152, 156);
    font-size: 80px;
    margin: 0 50px;
}
```
![alt](/img_read/029%20%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BA%20%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8.png)

 ## Урок 30. Домашнее задание 3.
  Сделать блок как на видио.
  ```
  html
<body>

    <div class="box">
        <div class="container">
            <div class="box__inner">
                <div class="img">
                    <img src="img/2.png" alt="">
                </div>
                <div class="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore exercitationem, officiis et consectetur minima veniam necessitatibus rem a, quisquam sit reiciendis aperiam modi voluptas quod, illo nemo ratione id magnam.</p> 
                </div>
                <div class="icons">
                    <div><i class="fa fa-pencil" aria-hidden="true"></i></div>
                    <div><i class="fa fa-facebook" aria-hidden="true"></i></div>
                </div>
            </div>
        </div>
    </div>

</body>
  ```

__css__
  ```
* {
    box-sizing: border-box;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.container {
    width: 1170px;
    margin: 0 auto;
}
img {
    width: 250px;
}
h2, p {
    color: #5e5e5e;
    line-height: 30px;
}
.box__inner {
    display: flex;
    align-items: center;
    justify-content: center;
}
.content {
    max-width: 500px;
    margin-right: 40px;
}
.icons > div {
    width: 50px;
    height: 50px;
    border: 2px solid #30a740;
    background-color: transparent;
    font-size: 25px;
    color: #30a740;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    cursor: pointer;
    margin: 15px 0;
}
.icons > div:hover {
    background-color: #30a740;
    color: #fff;
}
  ```
__media__
```
@media screen and (max-width: 1160px) {
    .container{
        width: 100%;
    }
}

@media screen and (max-width: 700px) {
    .box__inner {
        flex-wrap: wrap;
    }
    .content {
        order: -1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2, p {
        text-align: center;
    }
}
```


  ![alt](/img_read/030%20%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5.png)
 ## Урок 31. Photoshop.

 Анализируем карточки на макете, включаем линейку иузнаём ширину контейнера , с помощью выделения прикидываем растояние блоков друг от друга.
 С помощью пипетки можем узнать цвет любого элемента, правой кнопкой мыши можно нажать на слой => copy css и узнать нужные параметры. Узнать название шрифта.
 Слои можно экспортировать правой кнопкой мыши квик экспорт пнг.

 ## Урок 32. Практическое занятие 4.
### Создаём блок из четырёх карточек

Устанавливаем данные из **photoshop**, наполняем верстку контентом из **psd**.
Иконки в поисковике можно найти на сайте https://fontawesome.ru/icon/users/ по логичным названиям.    
 Чтобы подключить шрифт локально в css:
 ```
@font-face {
    font-family: Gotham;
    src: url(../fonts/Gotham-Bold.otf)
}
@font-face {
    font-family: Proxima;
    src: url(../fonts/proximanova-regular.otf)
}
 ```
 Конечный результат:
 html
 ```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой сайт</title>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="team">
        <div class="container">
            <div class="team__inner">
                <h2 class="team__title">Team</h2>
                <div class="team__line"></div>
                <p class="team__text">We are a hard working group, who's aim is to listen to your problems and to come up with the best solution possible. We follow the lates trends on the web to create custom talierd niche websites.</p>
            </div>
            <div class="cards">
                <div class="item">
                    <img src="img/team1.png" alt="" class="item__img">
                    <h3 class="item__title">Name</h3>
                    <p class="item__text">Lead Developer</p>
                    <div class="icons">
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></a></i>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></a></i>
                    </div>
                </div>
                <div class="item">
                    <img src="img/team2.png" alt="" class="item__img">
                    <h3 class="item__title">Name</h3>
                    <p class="item__text">Lead Developer</p>
                    <div class="icons">
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></a></i>
                        <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></a></i>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></a></i>
                    </div>
                </div>
                <div class="item">
                    <img src="img/team3.png" alt="" class="item__img">
                    <h3 class="item__title">Name</h3>
                    <p class="item__text">Lead Developer</p>
                    <div class="icons">
                        <a href="#"><i class="fa fa-skype" aria-hidden="true"></a></i>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></a></i>
                    </div>
                </div>
                <div class="item">
                    <img src="img/team4.png" alt="" class="item__img">
                    <h3 class="item__title">Name</h3>
                    <p class="item__text">Lead Developer</p>
                    <div class="icons">
                        <a href="#"><i class="fa fa-skype" aria-hidden="true"></a></i>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></a></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
 ```
css
```
@font-face {
    font-family: Gotham;
    src: url(../fonts/Gotham-Bold.otf)
}
@font-face {
    font-family: Proxima;
    src: url(../fonts/proximanova-regular.otf)
}
* {
    box-sizing: border-box;
}
body {
    margin: 0;
}
.container {
    width: 900px;
    margin: 0 auto;
}
.team {
    background-color: #f3f3f3;  
}
.team__inner {
    text-align: center;
}
.team__title {
    font-size: 30px;
    font-family: "Gotham";
    color: rgb(48, 48, 48);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 50px; 
    margin: 0;
    padding-top: 50px;
}
.team__line {
    width: 184px;
    height: 3px;
    background-color: #303030;
    margin: 0 auto;
}
.team__text {
    padding-top: 30px;
    font-size: 16px;
    font-family: "Proxima";
    color: rgb(90, 90, 90);
    line-height: 25px; 
    margin: 0 auto; 
    width: 540px;
}
.cards {
    display: flex;
    justify-content: space-between;  
    padding-bottom: 80px;
    padding-top: 55px;
}
.item {
    text-align: center;
    background-color: #fff;
    min-width: 210px;
    padding: 20px 35px;
    box-shadow: 0px 2px 4px 0px rgba(0, 1, 1, 0.2); 
}
.item__img {
    margin-bottom: 10px;
}
.item__title {
    font-size: 16px;
    font-family: "Gotham";
    color: rgb(48, 48, 48);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 16px;
    margin: 0 0 10px 0;
}
.item__text {
    font-size: 12px;
    font-family: "Georgia";
    color: rgb(48, 48, 48);
    font-style: italic;
    line-height: 12px;
    margin: 0 0 10px 0;
}
.icons {

}
.fa {
    font-size: 20px;    
    color: #7f7f7f;
    margin: 0 10px;
}
.fa-twitter {

}
.fa-linkedin {

}
.fa-dribbble {

}
.fa-skype {

}

```
 ## Урок 33. Домашнее задание 4.
(переделать)
 Сделать блок как на видио.

html
 ```
<body>

    <div class="team">
        <div class="container">
            <div class="team__inner">
                <h2 class="team__title">why this is awesome</h2>
                <div class="team__line"></div>
                <p class="team__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="cards">
                <div class="item">
                    <div class="icons"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                    <h3 class="item__title">Thoughtful Design</h3>
                    <p class="item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veritatis! Beatae commodi dolor dolores? Rerum laborum sed expedita?</p>
                </div>
                <div class="item">
                    <div class="icons"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                    <h3 class="item__title">Thoughtful Design</h3>
                    <p class="item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veritatis! Beatae commodi dolor dolores? Rerum laborum sed expedita?</p>
                </div>
                <div class="item">
                    <div class="icons"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                    <h3 class="item__title">Thoughtful Design</h3>
                    <p class="item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veritatis! Beatae commodi dolor dolores? Rerum laborum sed expedita?</p>
                </div>
            </div>
        </div>
    

</body>
 ```

 css
 ```

* {
    box-sizing: border-box;
}

.container {
    width: 1095px;
    height: 387px;
    margin: 0 auto;
}
.team {
    background-color: #ff3f3;  
}
.team__inner {
    text-align: center;
}
.team__title {
    font-size: 30px;
    font-family: "Gotham";
    color: rgb(48, 48, 48);
    font-weight: bold;
    text-transform: uppercase;
    line-height: 50px; 
    margin: 0;
    padding-top: 50px;
}
.team__line {
    width: 50px;
    height: 3px;
    background-color: orange;
    margin: 0 auto;
    margin-top: 30px;
}
.team__text {
    padding-top: 30px;
    font-size: 16px;
    font-family: "Proxima";
    color: rgb(90, 90, 90);
    line-height: 25px; 
    margin: 0 auto; 
    width: 540px;
}
.cards {
    display: flex;
    justify-content: space-around;  
    padding-bottom: 80px;
    padding-top: 75px;
}
.item {
    text-align: center;
    background-color: #fff;
    min-width: 328px;
    padding: 20px 35px;
   
}
 .icons .fa{
    padding-top: 10px;  
    color: orange;
    font-size: 45px;
    width: 70px;
    height: 70px;
    border: 2px solid orange;
    border-radius: 50%;
    align-items: center;   
 }
 
 ```
 ## Урок 34. Заключение.

Полезные сайта для поиска инвормации. 

http://bg.siteorigin.com/ - генератор паттернов фона
http://www.heropatterns.com/ - готовые паттерны фона
https://image.online-convert.com/ru - конвертер изображений
https://fonts.google.com/ - шрифты

http://fontawesome.io/icons/ - иконки
https://www.flaticon.com/ - иконки
https://materializecss.com/icons.html - иконки Material дизайн
http://fontello.com/ - иконки

https://codepen.io/ - писать код онлайн
https://www.materialpalette.com/ - палитра цветов
http://ianlunn.github.io/Hover/ - готовые эффекты для кнопок
http://apps.eky.hk/css-triangle-generator/ - генератор треугольников

https://www.colorzilla.com/gradient-editor/ - генератор градиентов
https://www.calltoidea.com/ - идеи для элементов сайта
https://turbologo.ru/ - генератор логотипа
https://morphismail.github.io/myInstruments/index.html - мои инструменты для теней

https://htmlweb.ru/html/symbols.php - спецсимволы
https://html5book.ru/specsimvoly-html/ - спецсимволы
https://csscolor.ru/ - палитра цветов
https://gist.github.com/yeromin/5d525c294132e58ef8feeccd5eab4a39 - 30 css селекторов

https://html5book.ru/ - веб справочник
https://webref.ru/ - веб справочник
https://html5book.ru/css3-flexbox/ - флексбоксы
https://yoksel.github.io/flex-cheatsheet/ - интерактивный флексбокс.

Верстка по макету на видио. 

## Урок 35. Ознакомиться с дополнительными материалами.

