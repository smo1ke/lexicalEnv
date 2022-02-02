"use strict";
// Измените пример с занятия по замыканию (counter) так, чтобы при каждом вызове значение счетчика менялось не на 1, а на переданное пользователем число (передать его при вызове внешней функции customCounter).

// Пример использования:
// const myCounter = customCounter1(5);
// const result1 = myCounter();  // => 5
// const result2 = myCounter();  // => 10
// const result3 = myCounter();  // => 15

function customCounter() {
  let count = 0;

  function counter() {
    count = count + 5;
    return count;
  }
  return counter;
}

const result1 = customCounter();
console.log("result1:>> ", result1());
console.log("result1 :>> ", result1());
console.log("result1 :>> ", result1());

// Или:

// * Измените пример с занятия по замыканию (counter) так, чтобы пользователь задавал
// начальное значение счетчика (в примере с занятия это 0)
// и
// шаг изменения счетчика (в примере с занятия это 1).

function customCounter1() {
  let count = 1;

  function counter() {
    count = count + 5;
    return count;
  }
  return counter;
}

const result2 = customCounter1();
console.log("result2:>> ", result2());
console.log("result2 :>> ", result2());
console.log("result2 :>> ", result2());
// Пример использования:
// const myCounter = customCounter2(1, 5);
// const result1 = myCounter();  // => 6
// const result2 = myCounter();  // => 11
// const result3 = myCounter();  // => 16

// В ОТЛАДЧИКЕ отследить переменные, которые находятся в ЗАМЫКАНИИ.
