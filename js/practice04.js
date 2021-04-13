const marks = [81,74,86,59,77];

const SUBJECTS_N = 5;
function calculateGrade(marks){
    for(let grade of marks){
       let totalSum = 0;
        totalSum  += marks[grade];
        let average = 0;
        average = totalSum / SUBJECTS_N;
        console.log(average);
    }
}calculateGrade(marks);