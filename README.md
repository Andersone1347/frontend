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

В **<ol> и <ul>** должен быть тег **<li>**.
```
<ul>
<li></li>
</ul>

<ol>
<li></li>
</ol>
```
**<ol>** - это список из цифр.
**<ul>** - это список точек.

**<a href="#">ссылка</a>**
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

**<div>** - блочный тег.
**<span>** - строчный тег.
**<hr>** - прямая горизонтальная линия.
**<p>** - параграф блочный тег.
**<h1>-<h6>** - Заголовки.

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
