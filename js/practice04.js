const marks = [81, 74, 88, 94, 77];
calculateGrade(marks);

function calculateGrade(marks) {
    let avrg = calculateAverage(marks);
    if (avrg <= 50) return 'F';
    if (avrg <= 60) return 'D';
    if (avrg <= 70) return 'C';
    if (avrg <= 80) return 'B';
    return 'A';
}
function calculateAverage(array){
    let sum = 0;
    for (let value of array) {
        sum += value;
    }

    let avrg = sum / array.length;
    return avrg;
}
console.log(calculateGrade(marks));
console.log('hello world');
