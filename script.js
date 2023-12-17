
// // Операторы сравнения 

// // == - оператор проверяющий на равенство 

// // !!! ЛЮБОЙ ОПЕРАТОР СРАВНЕНИЯ ОТДАЕТ БУЛЕВЫЕ ЗНАЧЕНИЯ 

// let x = 5 == 5; // true 

// console.log(x);

// // === - оператор строгой проверки

// // != -  оператор проверяющий на неравенство 

// x = 5 != 5;
// console.log(x);

// // > - больше

// x = 5 > 4;
// console.log(x);

// // < - меньше

// x = 5 < 4;
// console.log(x);

// // >= - больше либо равно 

// x = 5 >= 8;
// console.log(x);

// // <= - 

// x = 5 <= 8;
// console.log(x);

// // Условия 


// // if (num > num1) {
// //   console.log('Первое число больше второго');
// // } else {
// //   console.log('Второе число больше первого');
// // }

// // 




// // && - и 

// // || - или 
// let num = 10;
// let num1 = 5;
// // if (num && num1) {
// //   if (num > num1) {
// //     console.log('Первое число больше второго');
// //   } else if (num1 > num) {
// //     console.log('Второе число больше первого');
// //   } else if (num == num1) {
// //     console.log('Числа равны');
// //   }
// // }else{
// //   console.log('Error');
// // }


// // if (num == undefined || num1 == undefined) {
// //   console.log('Error');
// // } else {
// //   if (num > num1) {
// //     console.log('Первое число больше второго');
// //   } else if (num1 > num) {
// //     console.log('Второе число больше первого');
// //   } else if (num == num1) {
// //     console.log('Числа равны');
// //   }
// // }

// // 


let num = +prompt('Введите целое положительное число');
let num1 = 0;

if (num <= 0 || isNaN(num)) {
    console.log("Введите положительное число.");
} else {
    for (let i = 1; i <= num; i++) {
        num1 += i;
    }
    console.log(`Сумма чисел от 1 до ${num} равна: ${num1}`);
}