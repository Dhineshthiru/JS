const getData = () =>{
    console.count("Fetching Data...",count++);
}
const throttle = (fn,limit)=>{
    let flag = true;
    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            fn.apply(context,args);
            flag=false;
            setTimeout(()=>{flag=true;},limit);
        }
    }
}
const betterFunction = throttle(getData,1000);