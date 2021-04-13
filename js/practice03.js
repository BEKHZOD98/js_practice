// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i < limit; i++) {
//         if ((i % 3 === 0) || (i % 5 === 0)) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sum(100));
let student = {
    age: 18,
    name: 'abbos',
    id: 2018,
    major: 'programming',
    car: 'tesla'
}
function showProperties(obj) {

    for (let keyString in obj) {
        if (typeof obj[keyString] === 'string') {
            console.log(keyString, obj[keyString]);
        }
    }
}

function showNumberProperties(obje) {
    for (let number in obje) {
        if (typeof obje[number] === 'number') {
            console.log(number, obje[number]);
        }
    }
}

showProperties(student);
showNumberProperties(student);

