parseFloat(3.45);
parseInt(3.45); //преобразовывает строку в число ещё parseInt() == Math.floor()
Math.floor(3.89); //3
Math.ceil(3.3); //4
Math.round(3.3); //3
Math.round(3.6); //4

console.log(parseInt('3.45px'))

//ES5
var count = 1
//ES6
let count1 = 2;
const value = 0;

// let str = 'SsAS '/sdsa/' '
// let str1 = 'SsAS `sdsa` '

//alert('Новая \n строка');

// let n;
// alert(n); // undefined

//typeof() - результат типа данных


//---

let x = 5;
//let userName = 'vitaliy';
let cat = 
{
  name:'Floppa',
  age:2
}
//alert(typeof(x));
//or
//alert(typeof x);
//alert(typeof userName);
// alert(typeof cat);
// alert(typeof(cat));

console.log(cat)
document.write(x);//опасный метод! 1:59:00
document.write('<h2>' + x + '</h2>');//
document.write(`<h2>${x}</h2>`);// только обратные одиночные кавычки  опасный метод! 1:59:00