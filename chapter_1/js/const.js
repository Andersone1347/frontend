//Месеца
const month = ["", "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
//Месяца в именительном падеже
const monthIp = ["", "январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

//Журналы
const JOURNALS = [
  ["1", "Описание журнала", "yes"],
  ["2", "Описание журнала", "no"],
  ["3", "Описание журнала", "no"],
  ["4", "Описание журнала", "yes"],
  ["5", "Описани3е журнала", "yes"],
  ["6", "Описание журнала", "yes"],
  ["7", "О1", "no"],
  ["8", "Описание журнала", "yes"],
]

//Номера телефонов
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