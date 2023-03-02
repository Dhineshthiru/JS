class Car{
    setName(name){
        this.name = name;
    }
    startEngine(){
        console.log('Engine started for'+this.name);
    }
    stopEngine(){
        console.log('Engine stopped for'+this.name);
    }
class Toyota extends Car{
        topspeed(speed){
            console.log('Top speed for'+this.name+'is'+speed);
        }
    }
}
let myCar = new Toyota();
myCar.setName = ('BMW');
myCar.startEngine();
myCar.stopEngine();
myCar.topspeed(200);