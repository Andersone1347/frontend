# frontend
Учебные материалы
# 05. Работа с DOM деревом JavaScript

## 48 Урок. Введение.
Скачиваем каталог к себе в папку из архива урока, продолжаем обучение через папку **chapter_1** => **examples_dom**.

## 49 Урок.Выбор элемента DOM.

  #### ex1.
 
  Объектная модель документа(DOM) это элементы HTML.

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

#### ex2.

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
  element.style.color = "gray"
  element.innerHTML = 'Новое значение' 
```
#### ex3.

По такому же принцепу создаём переменную а в **document** прописываем **querySelector** - метод находит просто первый и единственный элемент, в данном примере в укажем **('ul > li')**, и с помощью **innerHTML** укажем в первом **li** cсылку.
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
#### ex4

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
<script>
    for(let element of document.body.children){
      if(element.matches('a[href$=".ru"')){
        element.innerHTML = "Сайт в зоне .ru"
      }
    }   
  </script>
```
Рассмотрим более простой вариант через **querySelectorAll()**.
```
   for(let element of document.querySelectorAll('a[href$=".ru"')) {
       element.innerHTML = "Cайт в хоне .ru"  
       }  
```
#### ex5.
**element.closest()** возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному **CSS-селектору** или **null**, если таковых элементов вообще нет.   
В данном примере выведем в консоль тег **ul** с классом **list**.
```
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

#### ex6.   
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
#### ex7.
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
 


#### ex8.

**innerHTML** - позволяет получить **html** элемента или же его изменить.     
**textContent** - позволяет задавать или получать текстовое содержимое элемента и его потомков.   
**body**  
```
  <p>Абзац текста</p>
  <div>
    <h3>Заголовок</h3>
    <p>Текст</p>
  </div>
```
Если в консоль введём **innerHtml** то увидим теги **html**.  
**script**
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


#### ex9.

**hidden** - является **Boolean** типом данных , который принимает значение **true** , если содержимое спрятано, в противном случае значение будет **false**.      
**setInterval** - позволяет регулярно исполнять функцию через указанный промежуток времени.    
```
  <p>Абзац текста</p>
  <script>
    let elem = document.querySelector('p')
    setInterval(() => elem.hidden = !elem.hidden, 1000)
  </script>
```

#### ex10.

Работа с атрибутами **html**:    
**elem.hasAttribute(name)** – проверяет наличие атрибута
```
  <p title="Подсказка" class="text">Абзац текста</p>
  <script>
    let elem = document.querySelector('p')
    console.log(elem.hasAttribute('title')) // true
  </script>
```
**elem.getAttribute(name)** – получает значение атрибута
```
  <p title="Подсказка" class="text">Абзац текста</p>
  <script>
    let elem = document.querySelector('p')
    console.log(elem.getAttribute('title')) // Подсказка
```
**elem.setAttribute(name, value)** – устанавливает атрибут
```
  <p title="Подсказка" class="text">Абзац текста</p>
  <script>
    let elem = document.querySelector('p')
    elem.setAttribute("class", "basic")
    console.log(elem.getAttribute('class')) // basic
```
  Так как **class** уже был установим **id**
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
**elem.removeAttribute(name)** – удаляет атрибут
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