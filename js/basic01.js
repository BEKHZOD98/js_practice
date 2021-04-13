// let word;
// word = 'book';
// switch(word){
//     case 'pencil':
//         console.log('qalam');
//         break;
//     case 'book':
//         console.log('kitob');
//         break;
//         default:
//         console.log('nomalum soz');
// }
/*
let word = 'book' ;
if (word === 'pencil'){
    console.log('qalam');
}else if(word ==='book'){
    console.log('kitob');
}else{
    console.log('nomalum soz');
}*/
let word = 'book';
let result = word === 'pencil' && 'book' ? 'qalam' : 'kitob';
console.log(result);