let count = 0;
const intervalId = setInterval(function(name){
    count++;
    if(count>10){
        clearInterval(intervalId);
    }else{
        clearTimeout(timeoutId);
        x();
    }
    console.log(count);
},1000);

    let timeoutId = null;
    var x = function(){
        timeoutId = setTimeout(function(){
            console.log('Timeout')
        },2000)
    }
    x();