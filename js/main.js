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

let count = 0;
while(count < 10) {
    console.log(count);
}