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