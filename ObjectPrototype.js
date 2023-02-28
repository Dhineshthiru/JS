function display(a,b){
    this.name = a;
    this.age = b;
}

display.prototype.year = "1st Year";
display.prototype.details = function(){
    return this.name + " "+this.age+" "+this.year;
};

var s1 = new display("Dhinesh",23);
var s2 = new display("Hari",24);
document.getElementById("demo").innerHTML = s2.details();
