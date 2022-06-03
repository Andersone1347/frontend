# Frontend
Учебные материалы
# display: flex; 
делает блочный элемент флексовым
# flex-wrap: wrap;
если элемент не влазиет пересониться на новую строку
# flex-direction: column;
в столбик 
# order: 1;
менять местами
# justify-content:;
выравнивание по горизантали
# align-items:;
по вертикали
# align-self:
работа непосредственно с элементом
# align-content:
вертикальное выравнивание всех элементов внутри родительского.
# :root {--peremen};
в ксс можно создавать переменную 
# calc()
калькулятор количесво желаемых отступов делим на максимальное количество столбов и минусуем отступ .
# описание bootstrap сетки
https://getbootstrap.com/docs/5.2/layout/grid/
# @media screen and (max-width:992px){}
запрос медиа (то что написано в фигурных скобках будет работать только на экранах меньше 992px)
# для разной ширины экрана
```
.col-3 {
    width: calc(25% - var(--gutter));
}
.col-4 {
    width: calc(33.33% - var(--gutter));
}
.col-6 {
    width: calc(50% - var(--gutter));
}
.col-12 {
    width: calc(100% - var(--gutter));
}
@media screen and (max-width:992px){
    .container {
        max-width: 100%; 
    }
.col-lg-3 {
    width: calc(25% - var(--gutter));
}
.col-lg-4 {
    width: calc(33.33% - var(--gutter));
}
.col-lg-6 {
    width: calc(50% - var(--gutter));
}
.col-lg-12 {
    width: calc(100% - var(--gutter));
}
@media screen and (max-width:768px){
    .container {
        max-width: 100%; 
    }
.col-md-3 {
    width: calc(25% - var(--gutter));
}
.col-md-4 {
    width: calc(33.33% - var(--gutter));
}
.col-md-6 {
    width: calc(50% - var(--gutter));
}
.col-md-12 {
    width: calc(100% - var(--gutter));
}
@media screen and (max-width:576px){
    .container {
        max-width: 100%; 
    }
.col-sm-3 {
    width: calc(25% - var(--gutter));
}
.col-sm-4 {
    width: calc(33.33% - var(--gutter));
}
.col-sm-6 {
    width: calc(50% - var(--gutter));
}
.col-sm-12 {
    width: calc(100% - var(--gutter));
}
@media screen and (max-width:992px){
    .container {
        max-width: 100%; 
    }
    body {
        background-color: black;
    }
}
@media screen and (max-width:768px){
    body {
        background-color: gold;
    }
}
@media screen and (max-width:576px){
    body {
        background-color: red;
    }
}
```

# параметры сетки на bootstrap
https://getbootstrap.com/docs/5.2/layout/grid/
# Архив с файлами bootstrap
https://getbootstrap.com/docs/5.2/getting-started/download/

 @media screen and (max-width:768px) {
.col-md-6    
}