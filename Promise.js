const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("Success")},1000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{reject("Failure")},1000);
})
p1.then(console.log).catch(console.log);

//Simplified Promise

const p3 = val=>new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(val+10)},1000);
})
p3(1).then(x=>x+20).then(console.log)