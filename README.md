# frontend
Учебные материалы
# 05. Работа с DOM деревом JavaScript

## 48 Урок. Введение.
Скачиваем каталог к себе в папку из архива урока, продолжаем обучение через папку **chapter_1** => **examples_dom**.

## 49 Урок.Выбор элемента DOM.

  #### ex1.
 
  Объектная модель документа(DOM) это элементы HTML.

В данном примере создаём переменную **element** присваеваем глобальный объект **document** c методом **getElementById** получить элемент по индефекатору, ('element') в скобках указываем индефикатор который указан в **div**. Теперь можем взаимодействовать с дивом в **JS**

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