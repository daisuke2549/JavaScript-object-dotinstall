"use strict";



function add(x, ...y){
    let result = x;

    y.forEach(number => {
        result = result + number;
    });
    console.log(result);
}


add(1,2,3,4);