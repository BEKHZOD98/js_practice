let customer = {
    name: 'akbar',
    age: 23,
    subscription: 1
}
function calc(result){
    
    return customer.subscription >= result ? 'Azo' : 'Azo emas';
    
}
//calc(1);
console.log(calc(3));