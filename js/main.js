/*  37 урок */
/* let name = 5;
let str = "10";
let boolean = true;
let boolean2 = false;
console.log("Текст 1");
console.log(5+8); */

/* 38 Урок */

/* let a = 7;
console.log("Text\non 2 line" + a ); */

          /*   проверка числа , рандом */
/*  function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(randomInteger(1,5)) 
 */

/* 39 урок */
/* let arr = [5,2,"Str", true]
let arr2 = [1,2,3]  */

/* 40 урок */
/* let obj = {
    "color": "Tomato",
    "numbers": ["8888", "7777"],
    "checked": true
} */

/* let obj = [
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
] */

/* 41 урок */

/* alert("ЭЭ") */
/* prompt("диалоговое окно") */
/* let age = prompt("Ваш возврат ?")
if(age != null) {
alert("мой возвраст " + age)
} else {
    alert("вы нажали отмену")
} */
 

/* if(confirm("Удалить ваш аккаунт?")) {
    alert("Удалено")
} else {
    alert("Отменено")
}
 */

/* confirm("удалить ваш код?") ? alert("Удалено") : 
alert("Отменено")        сокращённый код записанного выше */

/*  let age = prompt("Введите ваш возраст?") */
/*if(age < 18) {
    alert("Мой возраст меньше 18")
} else if(age > 18) {
    alert("Мой возраст больше 18")
} else if(age == 18) {
    alert("Мой возраст  18")
} */

/* switch(true) {
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
} */

/* 42 урок */

/* let count = 0;
while(count < 10) {
    console.log(count);
    if(count==4) {
        breake;
    }
    count++;
} */

/* let count = 10;
do {
    console.log(count);
    count--;
} while(count>7)  */
 
 /*let arr = [5, 7, 9, 1, 0];
 for(let i=0; i<arr.length; i++) {
  console.log(arr[i]*2)
}  

for(let item of arr) {
    console.log(item) 
} */

/* let obj = {
    "name": "Petr",
    "age": 25,
    "number": 909090909090
}

for(let key in obj) {
    console.log("Ключ ${key}, Значение ${obj[key]}") 
} */

/* let arr = [5, 7, 9, 1, 0];
arr.forEach(function(item, i, array){
    console.log('Элемент: ${item}
    Индекс: ${i}
    Массив: ${array}')
}) */

/* let people = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "masha"},
    {id: 3, name: "Ivana"},
    {id: 4, name: "Ivanka"},
]
let a = peaople.filter(function(item) {
    if (item.id<3) return item 
})
  console.log(a)       */
    
/*   let arr = [5, 7, 9, 1, 0];
  let newArr = arr.map(function(item) {
      return item*3
  })
  console.log(newArr)
 */
   
/*   let arr = []
     for(let i=0; i<20; i++) {
      arr.push(i)
  } 
console.log(arr) */
/* let arr = []
for(let i=30; i>0; i-=3) {
    arr.push(i)
}
console.log(arr) */

/*let arr = []
for(let i=30; i>0; i++) {
    arr.push(i)
}
console.log(arr)*/

/*for(let i=30; i>0; i--) {
if(i%3==0) {
    arr.push(i)
  }
}
console.log(arr) */

// let arr = []
// for(let i=0; i>10; i++) {
//      arr.push(Math.pow(i,2))     
//      }
//      console.log(arr)

// let arr = []
// let arr1 = [7,4,2,1,0,6,2,6,15]
// let count = 0;
// for(let i=0; i<arr1.length; i++) {
//     if(arr1[i]%2==0) {
//         count++;
//     }
// }
// console.log("Всего четных элементов: " + count)
