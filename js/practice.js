// function bigNum(num1, num2){
//     if(num1>num2){
//         console.log(num1 + ' shu soni katta');
//     }else 
//         console.log(num2+' shu soni katta');
// }
// bigNum(15,6);
// function big(a,b){
//     result = a>b ? a + ' soni katta' : b + ' soni katta';
//     console.log(result);
// }
// big(5,1);
// function isLandscape(width,height){
//     return(width>height);
// }
// let result = isLandscape(5,10);
// console.log(result);
////////////2 practice
/*
function fizzBuzz(input){
    if((input%3 ==0) && (input%5 == 0)){
        return   input = 'FizzBuzz';
    }
    if((input%3 !==0) || (input%5 !== 0)){
        return input;
    }
    if (typeof input !== 'number'){
        return 'son emas';
    }
    if(input%3 == 0){
      return  input = 'Fizz';
    }
    if(input%5 == 0){
        return  input = 'Buzz';
    }
}

console.log(fizzBuzz(30));*/
function fizzBuzz(input){
    if (typeof input !== 'number'){
        return 'son emas';
    }
    if(input%3==0 && input%5 == 0){
        return   input = 'FizzBuzz';
    }
    if(input%3 || input%5 !== 0){
        return 'bolinmidi';
    }
    if(input%3 == 0){
      return  input = 'Fizz';
    }
    if(input%5 == 0){
        return  input = 'Buzz';
    }
}

console.log(fizzBuzz(17));