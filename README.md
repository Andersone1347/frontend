# frontend
Учебные материалы
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
#### ex5. Метод closest.
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

#### ex11.

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
#### ex12.

Создадим свои собственные элнменты.

Метод **createElement** позволяет создать новый элемент, передав в параметре имя тега. После создания с элементом можно работать как с обычным элементом, а также его можно добавить на страницу методами **prepend**, **append**, **appendChild**, **insertBefore** или **insertAdjacentElement**.

В **body**:
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

#### ex13.
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
#### ex14.
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

#### ex15. 

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
#### ex16.

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

#### ex17.   

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
Создадим функцию **createUl(obj)** параметр **obj** потому что она будет приниать объект. 
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

#### ex18.

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

#### ex19.

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

#### 20ex.

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

#### ex21.
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
#### 22ex.


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

#### 23ex.

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


#### ex24.

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

#### ex25.
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

#### ex26.

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

#### ex27.
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

#### ex28.
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

#### ex29.
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

#### ex30.

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

#### ex31.

Есть два больших массива.
```
let words1 = ["Непобедимый", "Визжащий", "Реальный", "Скоростной", "Экцентричный", "Кодовый", "Прожорливый", "Догадливый", "Гениальный", "Разрушительный", "Растерянный", "Торопливый", "Вопрошающий", "Космический", "Динамичный", "Паникующий", "Задумчивый", "Загадочный", "Рекордный", "Непонимающий", "Ультрафиолетовый", "Читающий", "Озорной", "Тормозной", "Волшебный", "Хардовый", "Тычущий", "Внимательный", "Криповый",];
let words2 = ["Мозг", "Везунчик", "Повелитель", "Красавчик", "Печенька", "Тормоз", "Динозавр", "Индеец", "Экстрасенс", "Цыпленок", "Решала", "Ураган", "Взломщик", "Эрудит", "Сыщик", "Крушитель", "Паникер", "Шутник", "Обуза", "Капитан", "Ботаник", "Гриб", "Зомби", "Котик", "Ведьмак", "Храбрец", "Мастер", "Король",];
```
Задача сделать случайное склеивание строк разный массивов.     
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

#### ex32.

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

#### ex1.

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

#### ex2. 

#### ex3.

#### ex4.
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

#### ex5.

C помощью **console.log(event)** можем посмотреть все события которые могут быть.    
Например:
```
      document.querySelector('.btn').onclick = function(event) {
        console.log(event.type)
      }// после нажатия на кнопку консоль выведет // click
```
* event.currentTarget или this - получаем тот элемент на котором произошло событие.
* event.clientX и event.clientY - кординаты курсора нажатые на кнопке.//21 //23.

#### ex6.

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

#### ex7.

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

#### ex8.
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

#### ex9.

Делаем переключение светлой на тёмную тему используя **localstorage** и событие change.     
Событие change происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано.

Для текстовых элементов это означает, что событие произойдёт не при каждом вводе, а при потере фокуса.

Например, пока вы набираете что-то в текстовом поле ниже – события нет. Но как только вы уведёте фокус на другой элемент, например, нажмёте кнопку – произойдёт событие onchange.
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

#### ex10.

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

### ex11.
**body**
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
### ex12.
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
Свойство **tagName** содержит имя тега в верхнем регистре (большими буквами),**eventPhase** – метод на какой фазе он сработал. 
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
### ex13.
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

### ex14.
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

### ex15.

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

### ex16.
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

### ex17.
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

### ex18.
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

### ex19.
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

### ex20.
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
### ex21

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

### ex22.
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

### ex23.

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

### ex24.
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

### ex25.

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
### ex26.

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

### ex27.
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

### ex28.
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

### ex29.
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
Создадим новый **option**.
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

### ex31.

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

### ex32.
Задача сделать фокус на элементе и передвигать его с помощью стрелок.    
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

### ex33.

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

### ex34.
Взаимодействия с текстом из **input** а вчастности **cut**, **cope**, **paste** выводяться в консоль.
```
  <script>
    input.oncut = input.oncopy = input.onpaste = function(e) {
     console.log(e.type + ' - ' + e.clipboardData.getData('text/plain'))
     return false
    }
  </script>
```

### ex35.    
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

### ex36.
Событие **DOMContentLoaded** происходит когда весь **HTML** был полностью загружен и пройден парсером, не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов. Значительно отличающееся от него событие **load** используется для отслеживания только полностью загруженной страницы. Широко распространённой ошибкой является использование **load** в ситуации когда **DOMContentLoaded** является более подходящим, будьте внимательны.
```
document.addEventListener("DOMContentLoaded", function(e) {
  console.log('DOM построен')
})
```
Обновление страницы
```
window.onbeforwunload = function(e) {
  return false
}
```
## Урок 87. Диапозон и Выделение.

### ex38.
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
### ex39

C помощью этой функции всё выделенное на странице будет отображенно в консоли.
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

Запретить удаление в данном моменте для тега **p**.
```
 p.onselectstart = () => false
```

## Урок 88. Депозитный калькулятор.

### ex40.
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

### ex41.

Программа которая будет генерировать **css** код для свойства **box-shadow**.

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

### ex42.
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

ex7. Специальные символы.

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

Подробная информация https://learn.javascript.ru/regexp-lookahead-lookbehind#:~:text=%D0%9E%D0%BF%D0%B5%D1%80%D0%B5%D0%B6%D0%B0%D1%8E%D1%89%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8%20%D0%BF%D0%BE%D0%B7%D0%B2%D0%BE%D0%BB%D1%8F%D1%8E%D1%82%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%B2%D0%B0%D1%82%D1%8C%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F,%D0%B5%D1%81%D1%82%D1%8C%20%D1%87%D1%82%D0%BE%2D%D1%82%D0%BE%20%D0%B7%D0%B0%D1%80%D0%B0%D0%BD%D0%B5%D0%B5%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%B5.

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