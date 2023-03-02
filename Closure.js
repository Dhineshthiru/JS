function myAdd(x){
    return function(y){
        return x+y;
    }
}
let add5 = myAdd(5);
console.log(add5(10));
let add100 = myAdd(100);
console.log(add100(20));
console.log(add100(45));
console.log(add5(22));