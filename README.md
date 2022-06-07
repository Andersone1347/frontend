## Урок 1. Введение в **html**     
  
Примеры **html** кода с css и без него.    


## Урок 2. Подготовка рабочей среды.   

Включение доступа к видимости расширения файлов.     
Открываем мой компьютер => выберараем слева вверху меню вид => ставим галочку **Расширение имен файла**.    

Установка и запуск браузера **google hrome** и текстового редактора **VS Code**.     

Создание **index.html**, где в body наполняем контент    
```
Hello world!   
```

## Урок 3. Обзор функций редактора **VS Coda**     
    
Установка комфортных настроек редактора, файл => настройки => параметры (или же **Ctrl+**)    
Выбор визуального оформления темы , файл => настройки => цветовая тема (**Ctrl+k**)   

Создание папок **index** , **css* , **img** .   
Установка плагинов в VS Code**(ctrl+shift+x)** :   

* Live Server - запуск отображение кода в браузере в реальном времени.   
* One Monokai Theme - визуальные темы.   
* Material Icon Theme - иконки.   

Знакомство с **emmet** , а в частности с горячими клавишами:    
1. **!** - создание базовой структуры в html документе.   
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

С помощью **emmet** можно просто писать div и нажать на enter и он сразу выведет <div></div>

## Урок 5.  

Создание файла **style.css** в папке сss.
С помощью тега **link** соединяем **index.html** c файлом **style.css** в файле index.html , в href указываем буть к файлу css.
```
<link rel="stylesheet" href="css/style.css">
```
В папку img добавляем картинку с названием **logo.png**.В **body** c помочью тега <img> добавляем картинку на страничку.
```
<img src="img/logo.png" alt="logo">
```
Так же как и с картинкой можно добавить подлючение **java scripta** ,создаём папку **js** и в этой папке создаём файл **main.js**.
```
<Script src="js/main.js"></Script>
```
## Урок 6. Задание на создание папок и файлов.

Подключение css и js файлов
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
 * button - кнопка .
 * textarea - текстовой редактор.

 ## Урок 12. Универсальные атрибуты тегов.

 * hidden - скрывающий атрибут.
 * title - подскаска.
 * class - класс может быть одинаковый у элементов.
 * id - должны быть индивидуальные для каждого элемента.

 ## Урок 13. Цвет RGB и спецсимволы.

 Спецсимволы пример **&nbsp;* , сайт с спецсимволами https://htmlweb.ru/html/symbols.php    
 
 Цвет записываеться в разных форматах, можно записать в текстовом варианте **green**, в значение **RGB (0,128,0)** , и в коде **#008000** .

## Урок 14. Подведение итогов изучения Html   

## Урок 15. Css селекторы.

Подключаем к индексу **css** файл с помощью тега **link**.   
Пример:
```
*{
color: teal;
}

```
Где **color** это свойство , **teal** значение.
**h1{}** обращение ко всем элементам h1.
По классам обращаемся через точку, по индификаторам через решётку.В **css** всё работает сверху вниз, так же ещё можно обращаться к атрибутам **html**.   
Пример:  
```
div[title] {
    color: red;
}
```
В **сss** каждое значение заканчиваеться точкой с запятой.

Полезные селекторы которые нужно знать https://webdesign-master.ru/blog/html-css/2.html

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
Две точки нужны для выхода из папки css.
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

## Урок 18. Размеры элементов.

C помощью width(ширина) и height(высота) выставляем нужные параметры картинки. 
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

Рисуем 2 квадрата красный и синий с помощью css.
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
C помощью flex-box вычерчиваем невидимую таблицу из 12 столбиков,и по формуле x/12*100,где x-столбик к которому хотим перейти.
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
@media screen and (max-width:992px){}   
запрос медиа (то что написано в фигурных скобках будет работать только на экранах меньше 992px)   
**root {--peremen};** - в **css** можно создавать переменную.   
В итоге мы научились управлять элементами на разный размерах мобильных устройств.   

## Урок 24. Задание по работе с сеткой.

Сделать **style.css** файл со всеми размерами столбцов от 1 до 12, также создать медиа запрос по размерам lg,md,sm и вывести в отдельный файл media.css.
```
style.css
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
  media.css

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
## Урок 25.Практическое занятие 1.

Создание шапки по макету лого и меню навигации,с помощью hover при наведение на меню загораеться желтым , объекты меню обёрнуты в тег **а** для дальнейшего перехода для сайта.

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
    width: 1170px;
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

## 27 Урок. Практическое занятие 2.
Создаём в **body** 3 вложеных дива **box=>container=>box__inner** , а в **css** устанавливаем ширину для контейнера **1170px** и с помощью **margin** выравниваем по центру **0 auto;** и соответствено **border-box** для всех элементов.    
Внутри **box__inner** создаём див c класом **item** , а в нём 3 дива с класами **number,text,line** и заполняем их как на картинке, клонируем до 5 штук див **item**.   
Скачиваем плагин на **VS code** под названием **VS html to css**. Он нужен для того что бы облегчить работу в css, копируем **html** код нажимаем **(alt+x)** и вставляем **css** файл и в результате получаем все открытые классы.   
Переходим на сайт и создаём градиент похожий на макете.
Для работы с иконками переходим на сайт https://fontawesome.ru/get-started/#modal-download скачиваем библиотеку **начало работы=>расширеная кастомизация=>скачать** заходим в папку **css** и берём и переносим файл **font-awesome.min.css** в свою папку **css** и подключаем его в **head** до наших стилей,и копируем папку **fonts** в папку **html** 
На сайте кликаем по нужной иконке и копируем код в свою работу.

## 28 Урок. Домашнее задание 2.

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
