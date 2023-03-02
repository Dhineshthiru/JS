function add(a){
    return function(b){
        return a+b;
    }
};
let addition = add(1);
console.log(addition(2));