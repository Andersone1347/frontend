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

// 43 урок 

// function printText(name, age) {
//     return "hello my name is "+name+", Age: "+age
// }
// let name = "aza"
// let age = 2

// let res = printText(name, age );
// alert(res)

// let obj = {
//     name: "ivan",
//     age: 18,
//     hello() {
//         console.log("Меня зовут "+this.name)
//     }
// }
// obj.hello()

// let arr = [1,4,2,32,4543,3,2,7,8]
// arr.sort(function(a,b){
//     return a-b
// })
// console.log(arr)

// arr.sort()
 
// function fib(count) {
//     let fib = []
//     for(let i=0; i<count; i++) {
//         if(i==0) fib[i] = 1;
//         else if(i==1) fib[i] = 2;
//         else fib[i] = fib[i-2] + fib[i-1];
//     }
//     return fib;
// }
// let f = fib(15)
// console.log(f)

// function fac(n){
//     let fact = 1;
//     if(n==0) return fact;
//     for(let i=1; i<=n; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// let a = fac(0)
// console.log(a)
// let b = fac(3)
// console.log(b)
// let c = fac(8)
// console.log(c)

// let addAndMul = function(num) {
//     num += "";
//     let add = 0, mul = 1;
//     for(let i = 0; i<num.length; i++) {
//         add += +num[i];
//         mul *= num[i];
//     }
//     return {
//         "Сумма": add,
//         "Произведение": mul
//     }
// }
// console.log(addAndMul(795))

// function number(number) {
//     number += "";
//     let chet = 0, nechet = 0;
//     for(let i = 0; i<number.length; i++) {
//         if(number[i] % 2 == 0) chet++;
//         else nechet++;
//     }
//     return {
//         "четные": chet ,
//         "не чётные": nechet,
//     }
// }

// console.log(number(1216789644532526))

// function randomNumber() {
//     let number = Math.floor(Math.random()*100);
//     for(let count=1; count<=10; count++) {
//         let result = +prompt('Попытка №${count}, Введите число:')
//         if(result == number) {
//             return alert('Вы угадали число! Попыток: ${count}, Число: ${number}')
//         } else if(result < number) {
//             alert('Ваше число ${result}, меньше загаданного!')
//         } else if(result > number) {
//             alert('Ваше число ${result}, болльше загаданного!')
//      }
//     }
//     return alert('Вы не угадали число! Число: ${number}')
// }
// randomNumber()

// 44 урок 

// let a = new Date()
// console.log(a)