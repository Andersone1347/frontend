/*36 урок*/
// console.log(3+5);

// let name = 5;
// let str = "5";

/*  37 урок  */
/* let name = 5;
let str = "10";
let boolean = true;
let boolean2 = false;
console.log("Текст 1");
console.log(5+8); */

/* 38 Урок */

/* let a = 7;
console.log("Text\non 2 line "+a ); */

          /*   проверка числа , рандом */
/*  function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0)
} */
/* function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
console.log(randomInteger(1,5))  */


/* 39 урок */
/*  let arr = [5,2,"Str", true]
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
// let cats = [
//     {
//         "name": "Barsik",
//         "age": ["10"],
//         "color": "orange"
//     },
//     {
//         "name": "Vaselisa",
//         "age": ["7"],
//         "color": "grey"
//     },
//     {
//         "name": "Monika",
//         "age": ["3mount"],
//         "color": "white-black"
//     }
//     ]

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
} */


/* confirm("удалить ваш код?") ? alert("Удалено") : 
alert("Отменено")    */   /*   сокращённый код записанного выше */

//  let age = prompt("Введите ваш возраст?")
/* if(age < 18) {
    alert("Мой возраст меньше 18")
} else if(age > 18) {
    alert("Мой возраст больше 18")
} else if(age == 18) {
    alert("Мой возраст  18")
}
 */
// switch(true) {
//     case age > 18:
//         alert("мне бол 18")
//         break;
//     case age < 18 && age > 0:
//         alert("мне мен 18")
//         break;
//     case age == 18:
//         alert("Мне 18 лет")    
//         break;
//         default:
//             alert("no")
// }

/* 42 урок */

// let count = 0;
// while(count < 10) {
//     console.log(count);
//     count++;
// }

// let count = 0;
// while(count < 10) {
//     console.log(count);
//     if(count==4) {
//       break;
//     }
//     count++;
// }

/* let count = 0;
while(count < 10) {
    console.log(count);
    if(count==4) {
        breake;
    }
    count++;
} */

//  let count = 11;
// do {
//     console.log(count);
//     count--;
// } while(count>7)  

// for(let i=0; i<100; i+=2) {
//     console.log(i)
//   }
 
//  let arr = [5, 7, 9, 1, 0];
//  for(let i=0; i<arr.length; i++) {
//   console.log(arr[i]*2)
// }  

// for(let item of arr) {
//     console.log(item*2) 
// } 

//  let obj = {
//     "name": "Petr",
//     "age": 25,
//     "number": 909090909090
// }

// for(let key in obj) {
//     console.log(`Ключ ${key}, Значение ${obj[key]}`) 
// } 

//  let arr = [5, 7, 9, 1, 0];
// arr.forEach(function(item, i, array){
//     console.log(`Элемент: ${item}
//     Индекс: ${i}
//     Массив: ${array}`)
// }) 

//  let people = [
//     {id: 1, name: "Ivan"},
//     {id: 2, name: "masha"},
//     {id: 3, name: "Ivana"},
//     {id: 4, name: "Ivanka"},
// ]
// let a = people.filter(function(item) {
//     if (item.id<4) return item 
// })
//   console.log(a)       
    
/*  let arr = [5, 7, 9, 1, 0];
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

function fib(count) {
    let fib = []
    for(let i=0; i<count; i++) {
        if(i==0) fib[i] = 1;
        else if(i==1) fib[i] = 2;
        else fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
}
let f = fib(15)
console.log(f)
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

// // 45 урок
// /**
//  * Функция преобразует строку с временем в минуты
//  * @param {string} time время в виде строки, например "02:04" . Может быть в диапозоне от "00:00" до "23:59" .
//  * @return {number} целое число в минутах. Например time="02:08" вернет 128.
//  */
// function timeToMinute(time) {

// }
// timeToMinute()

// function timeToMinute(time) {
//     try {
//         let hour = +time.split(":")[0]
//         let min = +time.split(":")[1]
//         if( !(hour>=0 && hour<=23) || !(min>=0 && min<=59))
//         {
//             throw new RangeError("Ошибка времени")
//         }
//         return hour*60+min
//     } catch(error) {
//         console.log(error)
//     }
// }
// console.log(timeToMinute("24:28"))

// урок 46
// let admin = {
//     rules: 777,
//     isAdmin(){
//         console.log("adm "+this.name+" inis "+this.rules)
//     }
// }

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.__proto__ = admin;
// }
// let u1 = new User("Petr", 21)
// let u2 = new User("voland", 91)
// let u3 = new User("petir", 28)

// class User {
//     constructor(name, age, admin=false) {
//         this.name = name;
//         this.age = age;
//         this.admin = admin;
//     }
//     myInfo() {
//         console.log("Меня зовут "+this.name+", мне "+this.age+" лет ")
//         if(this.admin == true) {
//             console.log("Я админ")
//         }
//     }
// }
// class Moderator extends User {
//     constructor(name,age,admin=false,moder=true) {
//         super(name, age, admin)
//         this.moder = moder;
//     }
//     static addPost() {
//         console.log("New Post")
//     }
//     static master = true;
//     myInfo() {
//             super.myInfo();
//             console.log("Я модер")
//     }
// }
// let u1 = new User("Petr", 21)
// let u2 = new User("voland", 91, true)
// let u3 = new User("petir", 28)
// let m1 = new Moderator("Kir", 18, true)

// class People{
// /**
//  * Класс человек
//  * @param {string} fio по формату "фамилия имя отчество"
//  * @param {string} birthday по формату "21.11.1111"
//  * @param {string} numbers номер . если больше 2 номеров, то по формату "номер1, номер2"
//  * @param {string} room комната
//  */
// constructor(fio, birthday, numbers="", room="") {
//     let name = fio.toLowerCase().split(" ");
//     this.name = {};
//     this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
//     this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
//     this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

//     let date = birthday.split(".");
//     this.date = {};
//     this.date.d = +date[0]
//     this.date.m = +date[1]
//     this.date.y = +date[2]

//     this.numbers = numbers.split(", ")

//     this.room = +room
//   }
//   static mounth = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
//    /**
//    * Фио
//    * @return {string} строка формата "Фамилия имя отчество"
//    */
//   getFio() {
//     return `${this.name.f} ${this.name.i} ${this.name.o}`
// }
//   /**
//    * вывести день рождения 
//    * @return {string} строка формата "24 июля 1997"
//    */
//   getBirthday() {
//     return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
//   }
//   /**
//    * Вывести Фамилия_Имя_отчество.расширение
//    * @param {string} extention расширение, например "jpg" или "png"
//    * @return {string} для названия изображения
//    */
//   getImgSrc(extention) {
//     return `${this.name.f}_${this.name.i}_${this.name.o}.${extention}`
//   }
//  /**
//    * Вывести все номера телефона или только первый номер
//    * @param {boolean} allNumbers если true то все номера, если false только первый номер
//    * @return {string} Строка формата: "89606013478, 89026013478" 
//    */
//   getNumberList(allNumbers) {
//     if(this.numbers.length == 0 || this.numbers[0].length == 0) 
//         return undefined
//     if(allNumbers) {
//         return this.numbers.join(", ")
//     } else { 
//     return this.numbers[0];
//     }
//   }
// }
// let people1 = new People("Панов Андрей Алексеевич", "09.07.1994", "9999,9999,9999", 1347)
// let people2 = new People("ров рей реевич", "01.01.1991")

// console.log(people1.getFio())
// console.log(people2.getFio())

// 47 урок
// function Person(){
//     this.age = 0;
//     setInterval(() => {
//         this.age++;
//         console.log(this.age)
//     }, 1000);
// }
// var p = new Person();

/* 48 урок  */