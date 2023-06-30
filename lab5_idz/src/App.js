import React from 'react';
import TableSorter from './TableSorter';
import './styles.css';

const data = [
  {
    "Название": "Бурдж-Халифа",
    "Тип": "Небоскрёб",
    "Страна": "ОАЭ",
    "Город": "Дубай",
    "Год": 2010,
    "Высота": 828,
    "Этажность": 163
  },
  {
    "Название": "Бурдж-Халифа",
    "Тип": "Небоскрёб",
    "Страна": "ОАЭ",
    "Город": "Дубай",
    "Год": 2010,
    "Высота": 828,
    "Этажность": 163
  },
  {
    "Название": "Варшавская радиомачта",
    "Тип": "Антенная мачта",
    "Страна": "Польша",
    "Город": "Константинов",
    "Год": 1974,
    "Высота": 646.38,
    "Этажность": "-"
  },
  {
    "Название": "Tokyo Skytree",
    "Тип": "Бетонная башня",
    "Страна": "Япония",
    "Город": "Токио",
    "Год": 2012,
    "Высота": 634,
    "Этажность": "-"
  },
  {
    "Название": "Шанхайская башня",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Шанхай",
    "Год": 2013,
    "Высота": 632,
    "Этажность": 121
  },
  {
    "Название": "Телерадиомачта KVLY-TV",
    "Тип": "Радиомачта",
    "Страна": "США",
    "Город": "Бланчард",
    "Год": 1963,
    "Высота": 629,
    "Этажность": "-"
  },
  {
    "Название": "Телебашня Гуанчжоу",
    "Тип": "Гиперболоидная башня",
    "Страна": "КНР",
    "Город": "Гуанчжоу",
    "Год": 2009,
    "Высота": 600,
    "Этажность": "-"
  },
  {
    "Название": "Международный финансовый центр Пинань",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Шэньчжэнь",
    "Год": 2017,
    "Высота": 600,
    "Этажность": 115
  },
  {
    "Название": "Lotte World Tower",
    "Тип": "Небоскрёб",
    "Страна": "Южная Корея",
    "Город": "Сеул",
    "Год": 2017,
    "Высота": 555,
    "Этажность": 123
  },
  {
    "Название": "Си-Эн Тауэр",
    "Тип": "Бетонная башня",
    "Страна": "Канада",
    "Город": "Торонто",
    "Год": 1976,
    "Высота": 553,
    "Этажность": "-"
  },
  {
    "Название": "Останкинская башня",
    "Тип": "Бетонная башня",
    "Страна": "Россия",
    "Город": "Москва",
    "Год": 1967,
    "Высота": 540.1,
    "Этажность": "-"
  },
  {
    "Название": "Уиллис-тауэр",
    "Тип": "Небоскрёб",
    "Страна": "США",
    "Город": "Чикаго",
    "Год": 1974,
    "Высота": 527.3,
    "Этажность": 110
  },
  {
    "Название": "Тайбэй 101",
    "Тип": "Небоскрёб",
    "Страна": "Тайвань",
    "Город": "Тайбэй",
    "Год": 2004,
    "Высота": 509.2,
    "Этажность": 101
  },
  {
    "Название": "Шанхайский всемирный финансовый центр",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Шанхай",
    "Год": 2008,
    "Высота": 492,
    "Этажность": 101
  },
  {
    "Название": "Международный коммерческий центр",
    "Тип": "Небоскрёб",
    "Страна": "Гонконг",
    "Город": "Гонконг",
    "Год": 2009,
    "Высота": 484,
    "Этажность": 118
  },
  {
    "Название": "Восточная жемчужина",
    "Тип": "Бетонная башня",
    "Страна": "КНР",
    "Город": "Шанхай",
    "Год": 1994,
    "Высота": 467.9,
    "Этажность": "-"
  },
  {
    "Название": "Лахта-центр",
    "Тип": "Небоскрёб",
    "Страна": "Россия",
    "Город": "Санкт-Петербург",
    "Год": 2018,
    "Высота": 462,
    "Этажность": 88
  },
  {
    "Название": "Landmark 81",
    "Тип": "Небоскрёб",
    "Страна": "Вьетнам",
    "Город": "Хошимин",
    "Год": 2018,
    "Высота": 461.2,
    "Этажность": 81
  },
  {
    "Название": "875 Норт-Мичиган-авеню",
    "Тип": "Небоскрёб",
    "Страна": "США",
    "Город": "Чикаго",
    "Год": 1969,
    "Высота": 457.2,
    "Этажность": 100
  },
  {
    "Название": "Петронас. башня 1 и 2",
    "Тип": "Небоскрёб",
    "Страна": "Малайзия",
    "Город": "Куала-Лумпур",
    "Год": 1998,
    "Высота": 452,
    "Этажность": 88
  },
  {
    "Название": "Финансовый центр Наньцзин-Гринлэнд",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Нанкин",
    "Год": 2009,
    "Высота": 450,
    "Этажность": 66
  },
  {
    "Название": "Эмпайр-стейт-билдинг",
    "Тип": "Небоскрёб",
    "Страна": "США",
    "Город": "Нью-Йорк",
    "Год": 1931,
    "Высота": 448.7,
    "Этажность": 102
  },
  {
    "Название": "Международный финансовый центр. башня зап.",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Гуанчжоу",
    "Год": 2010,
    "Высота": 437.5,
    "Этажность": 103
  },
  {
    "Название": "Kingkey 100",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Шэньчжэнь",
    "Год": 2011,
    "Высота": 439.8,
    "Этажность": 100
  },
  {
    "Название": "Бордже Милад",
    "Тип": "Бетонная башня",
    "Страна": "Иран",
    "Город": "Тегеран",
    "Год": 2003,
    "Высота": 435,
    "Этажность": "-"
  },
  {
    "Название": "Парк-авеню. 432",
    "Тип": "Небоскрёб",
    "Страна": "США",
    "Город": "Нью-Йорк",
    "Год": 2015,
    "Высота": 425.5,
    "Этажность": 85
  },
  {
    "Название": "Международная гостиница и башня Трампа",
    "Тип": "Небоскрёб",
    "Страна": "США",
    "Город": "Чикаго",
    "Год": 2009,
    "Высота": 423.4,
    "Этажность": 96
  },
  {
    "Название": "Менара Куала-Лумпур",
    "Тип": "Бетонная башня",
    "Страна": "Малайзия",
    "Город": "Куала-Лумпур",
    "Год": 1995,
    "Высота": 421,
    "Этажность": "-"
  },
  {
    "Название": "Цзинь Мао",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Шанхай",
    "Год": 1999,
    "Высота": 420.5,
    "Этажность": 88
  },
  {
    "Название": "Экибастузская ГРЭС-2",
    "Тип": "Дымовая труба",
    "Страна": "Казахстан",
    "Город": "Экибастуз",
    "Год": 1987,
    "Высота": 419.7,
    "Этажность": "-"
  },
  {
    "Название": "Международный финансовый центр",
    "Тип": "Небоскрёб",
    "Страна": "Гонконг",
    "Город": "Гонконг",
    "Год": 2003,
    "Высота": 415.8,
    "Этажность": 88
  },
  {
    "Название": "Тяньцзиньская телебашня",
    "Тип": "Бетонная башня",
    "Страна": "КНР",
    "Город": "Тяньцзинь",
    "Год": 1991,
    "Высота": 415.2,
    "Этажность": "-"
  },
  {
    "Название": "Башня Аль-Хамра",
    "Тип": "Небоскрёб",
    "Страна": "Кувейт",
    "Город": "Кувейт",
    "Год": 2010,
    "Высота": 412,
    "Этажность": 77
  },
  {
    "Название": "Пекинская телебашня",
    "Тип": "Бетонная башня",
    "Страна": "КНР",
    "Город": "Пекин",
    "Год": 1992,
    "Высота": 405,
    "Этажность": "-"
  },
  {
    "Название": "Башня CITIC",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Гуанчжоу",
    "Год": 1997,
    "Высота": 391.1,
    "Этажность": 80
  },
  {
    "Название": "Киевская телебашня",
    "Тип": "Решётчатая мачта",
    "Страна": "Украина",
    "Город": "Киев",
    "Год": 1973,
    "Высота": 385,
    "Этажность": "-"
  },
  {
    "Название": "Башня Сёньхин",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Шэньчжэнь",
    "Год": 1996,
    "Высота": 384,
    "Этажность": 69
  },
  {
    "Название": "Абу-Даби Плаза",
    "Тип": "Небоскрёб",
    "Страна": "Казахстан",
    "Город": "Астана",
    "Год": 2015,
    "Высота": 382,
    "Этажность": 88
  },
  {
    "Название": "Бурдж-Мохаммед-бин-Рашид",
    "Тип": "Небоскрёб",
    "Страна": "ОАЭ",
    "Город": "Абу-Даби",
    "Год": 2014,
    "Высота": 381,
    "Этажность": 88
  },
  {
    "Название": "Inco Superstack",
    "Тип": "Дымовая труба",
    "Страна": "Канада",
    "Город": "Copper Cliff",
    "Год": 1971,
    "Высота": 380,
    "Этажность": "-"
  },
  {
    "Название": "Тантекс-Скай-Тауэр",
    "Тип": "Небоскрёб",
    "Страна": "Тайвань",
    "Город": "Гаосюн",
    "Год": 1997,
    "Высота": 378,
    "Этажность": 85
  },
  {
    "Название": "JW Marriott Marquis Dubai. 1 и 2",
    "Тип": "Небоскрёб",
    "Страна": "ОАЭ",
    "Город": "Дубай",
    "Год": 2010,
    "Высота": 376,
    "Этажность": 77
  },
  {
    "Название": "Ташкентская телебашня",
    "Тип": "Башня",
    "Страна": "Узбекистан",
    "Город": "Ташкент",
    "Год": 1985,
    "Высота": 374.9,
    "Этажность": "-"
  },
  {
    "Название": "Башня Федерация «Восток»",
    "Тип": "Небоскрёб",
    "Страна": "Россия",
    "Город": "Москва",
    "Год": 2016,
    "Высота": 374,
    "Этажность": 97
  },
  {
    "Название": "Сентрал-плаза",
    "Тип": "Небоскрёб",
    "Страна": "Гонконг",
    "Город": "Гонконг",
    "Год": 1992,
    "Высота": 374,
    "Этажность": 78
  },
  {
    "Название": "Башня Освобождения",
    "Тип": "Бетонная башня",
    "Страна": "Кувейт",
    "Город": "Кувейт",
    "Год": 1996,
    "Высота": 372,
    "Этажность": "-"
  },
  {
    "Название": "Телебашня «Коктобе»",
    "Тип": "Башня",
    "Страна": "Казахстан",
    "Город": "Алматы",
    "Год": 1983,
    "Высота": 371.5,
    "Этажность": "-"
  },
  {
    "Название": "Дымовая труба электростанции",
    "Тип": "Дымовая труба",
    "Страна": "США",
    "Город": "Homer City",
    "Год": 1977,
    "Высота": 371,
    "Этажность": "-"
  },
  {
    "Название": "Дымовая труба Берёзовской ГРЭС",
    "Тип": "Дымовая труба",
    "Страна": "Россия",
    "Город": "Шарыпово",
    "Год": 1985,
    "Высота": 370,
    "Этажность": "-"
  },
  {
    "Название": "Рижская телебашня",
    "Тип": "Бетонная башня",
    "Страна": "Латвия",
    "Город": "Рига",
    "Год": 1987,
    "Высота": 368.5,
    "Этажность": "-"
  },
  {
    "Название": "Берлинская телебашня",
    "Тип": "Бетонная башня",
    "Страна": "Германия",
    "Город": "Берлин",
    "Год": 1969,
    "Высота": 368,
    "Этажность": "-"
  },
  {
    "Название": "Дымовая труба электростанции.",
    "Тип": "Дымовая труба",
    "Страна": "США",
    "Город": "Маундсвилл",
    "Год": 1968,
    "Высота": 367.6,
    "Этажность": "-"
  },
  {
    "Название": "Башня Банка Китая",
    "Тип": "Небоскрёб",
    "Страна": "Гонконг",
    "Город": "Гонконг",
    "Год": 1990,
    "Высота": 367.4,
    "Этажность": 70
  },
  {
    "Название": "Башня Банка Америки",
    "Тип": "Небоскрёб",
    "Страна": "США",
    "Город": "Нью-Йорк",
    "Год": 2008,
    "Высота": 366,
    "Этажность": 54
  },
  {
    "Название": "Башня Алмас",
    "Тип": "Небоскрёб",
    "Страна": "ОАЭ",
    "Город": "Дубай",
    "Год": 2008,
    "Высота": 363,
    "Этажность": 68
  },
  {
    "Название": "Дымовая труба электростанции в Трбовле",
    "Тип": "Дымовая труба",
    "Страна": "Словения",
    "Город": "Трбовле",
    "Год": 1976,
    "Высота": 360,
    "Этажность": "-"
  },
  {
    "Название": "Endesa Termic ",
    "Тип": "Дымовая труба",
    "Страна": "Испания",
    "Город": "Ферроль",
    "Год": 1974,
    "Высота": 356,
    "Этажность": "-"
  },
  {
    "Название": "SEG Plaza",
    "Тип": "Небоскрёб",
    "Страна": "КНР",
    "Город": "Шэньчжэнь",
    "Год": 2000,
    "Высота": 355.8,
    "Этажность": 70
  },
  {
    "Название": "First Canadian Place",
    "Тип": "Небоскрёб",
    "Страна": "Канада",
    "Город": "Торонто",
    "Год": 1976,
    "Высота": 355,
    "Этажность": 72
  },
  {
    "Название": "Эмиратская офисная башня",
    "Тип": "Небоскрёб",
    "Страна": "ОАЭ",
    "Город": "Дубай",
    "Год": 2000,
    "Высота": 354.6,
    "Этажность": 54
  },
  {
    "Название": "ОКО Южная башня",
    "Тип": "Небоскрёб",
    "Страна": "Россия",
    "Город": "Москва",
    "Год": 2015,
    "Высота": 354,
    "Этажность": 85
  },
  {
    "Название": "Виннцкая телемачта",
    "Тип": "Радиомачта",
    "Страна": "Украина",
    "Город": "Винница",
    "Год": 1961,
    "Высота": 354,
    "Этажность": 54
  },
  {
    "Название": "Медеплавильный завод",
    "Тип": "Дымовая труба",
    "Страна": "Румыния",
    "Город": "Бая-Маре",
    "Год": 1995,
    "Высота": 351.5,
    "Этажность": "-"
  },
  {
    "Название": "Стратосфера Лас-Вегас",
    "Тип": "Бетонная башня",
    "Страна": "США",
    "Город": "Лас-Вегас",
    "Год": 1996,
    "Высота": 350.2,
    "Этажность": "-"
  },
  {
    "Название": "Дымовая труба Сырдарьинской электростанции",
    "Тип": "Дымовая труба",
    "Страна": "Узбекистан",
    "Город": "Сырдарья",
    "Год": 1980,
    "Высота": 350,
    "Этажность": "-"
  }
];

const App = () => {
  return (
    <div>
      <h1>ИДЗ №5 Вариант 8</h1>
      <TableSorter data={data} />
    </div>
  );
};

export default App;
