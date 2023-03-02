function on(){
    var x= document.getElementById("i").value;
   var m= document.getElementById("p").innerHTML = "SUCCESS";
   try{
    if(x == " ") throw "EMPTY";
    if(isNaN(X)) throw "IS NOT A NUMBER";
    if(x<5) throw "TOO LOW";
    if(x>10) throw "TOO HIGH";
   } 
   catch(e){
    m.innerHTML = "ERROR:"+e;
   }
   finally{
    console.log("Enter a correct value");
   }
}