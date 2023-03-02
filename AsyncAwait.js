
async function f(){
    let Promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
         resolve("DONE !")   
        },1000)
    });

let result = await Promise;
alert(result);
f();
}