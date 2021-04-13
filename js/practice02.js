
/*let point = 0;
function checkSpeed(speed){
    if (speed<=70){
        console.log('Okay')
    }
    if (speed>70){
        point++;
        return point;
    }
    if(1<=point<12){
        return 'Jami point: ' + point;
    }
    if (point>12){
        console.log("Guvognoma olib qoyiladi "+ point);
    }
}*/
const NORM_SPEED = 70;
const KM_PER_POINT = 5;
const MAX_POINTS = 12;


function checkSpeed(speed) {
    if (speed <= NORM_SPEED) {
        console.log('ok');
        return;
    }

    const MY_POINTS = Math.floor((speed - NORM_SPEED) / KM_PER_POINT);

    if (MY_POINTS >= MAX_POINTS) {
        console.log('guvohnoma olib qo\'yildi');
    }
    else {
        console.log(MY_POINTS)
    }
}
checkSpeed(125);
