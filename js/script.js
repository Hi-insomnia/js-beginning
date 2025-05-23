// {
// let a,b,mul;
// a = 5;
// b = 3;
// mul = a * b ;
// console.log(mul);

// }

{
    // let photosInFolder, photosOnPage, numberOfPage;
    // photosInFolder = parseInt(prompt("Введите количество фото в папке", 10));
    // photosOnPage = parseInt(prompt("Введите количество фото на одной странице", 10));

    // numberOfPage = Math.ceil(photosInFolder / photosOnPage);

    // alert("количество страниц = " + numberOfPage);
    
}
/*
{
    let a = 1,b;
    b = a++;
    console.log(a, b);
}

{
    let a = 15 % 4; //остаток от деления
    let b = Math.floor(14 % 5); //целочисленное деление
    console.log(a, b);
}

{

    let number, d1, d2, d3, d4;
    number = parseInt(prompt("Введите 4-значное число"));
    d1 = number % 10;
    d2 = Math.floor(number/10) % 10;
    d3 = Math.floor(number/100) % 10;
    d4 = Math.floor(number/1000) % 10;
    console.log(d1,d2,d3,d4);
}
*/
//  {
//     /*найти максимум из двух чисел*/
//     let x, y, max;
//     x = parseFloat(prompt("Введите первое число")); 
//     y = parseFloat(prompt("Введите второе число")); 

//     if(x > y) {
//         max = x;
//     }
//     else {
//         max = y;
//     }
//     alert("max = " + max);
// }

// {
//     /*найти максимум из двух чисел - 2 способ*/
//     let x, y, max;
//     x = parseFloat(prompt("Введите первое число")); 
//     y = parseFloat(prompt("Введите второе число")); 

//     max = x;
//     if(y > max) {
//         max = y;
//     }
//     alert("max = " + max);
// }

// {
//     /*найти максимум из трёх  чисел*/
//     let x, y, z, max;
//     x = parseFloat(prompt("Введите первое число")); 
//     y = parseFloat(prompt("Введите второе число")); 
//     z = parseFloat(prompt("Введите третье число")); 


//     if(x >= y && x >= z){
//         max = x;
//     }
//     else if(y >= x && y >= z) {
//         max = y;
//     }
//     else {
//         max = z;
//     }
//     alert("max = " + max);
// }

//  {   /*найти максимум из трёх чисел - 3 способ*/
//     let x, y, z, max;
//     x = parseFloat(prompt("Введите первое число")); 
//     y = parseFloat(prompt("Введите второе число"));
//     z = parseFloat(prompt("Введите третье число")); 

//     max = x;
//     if(y > max){
//         max = y;
//     }
//     if(z > max){
//         max = z;
//     }
//     alert("max = " + max);
// }

{    /*Даны n натуральных чисел. Найти максимум среди них. */
    let n, a, max;
    n = parseInt(prompt("Введите кол-во числел"));
    max = parseInt(prompt("Введите число"));
    for(let i = 1; i < n; i++){
        a = parseInt(prompt("Введите число"));
        if(a > max){
            max = a;
        }
    }
    alert("max = " + max);
}

{
    /*Дана последовательность натуральных чисел, которая заканчивается вводом числа 0. Найти максимум среди этой последовательности. */
    let a, max;
    a = parseInt(prompt("Введите число"));
    max = a;
    while(a != 0){
        a = parseInt(prompt("Введите число"));
        if(a > max){
            max = a;
        }
    }
    alert("max = " + max);
}













{
    //   Дано расстояние в сантиметрах. Найти число полных метров в нем

    let cm, m;
    cm = parseInt(prompt("Введите  расстояие в сантиметрах", 0));
    m = (cm - cm % 100)/100 ;
    console.log (m);


}

{
    // Дано трехзначное число. В нем зачеркнули первую слева цифру и приписали ее в конце. Найти полученное число.
    let n;


}
