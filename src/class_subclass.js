class Car
{
   
    constructor(speed)
    {
        this.speed=speed;
        Car.carsMade++;
        
    }
    static faster(car_one,car_two)
    {
        return car_one.speed>car_two.speed;
    }
    tell_speed()
    {
        return this.speed;
    }
}
class Benz extends Car{
constructor(speed)
{
    super(speed*2)
}
zooms()
{
    this.speed=this.speed*2
}
}
Car.carsMade=0;
var Zen=new Car(20);
console.log(Reflect.getPrototypeOf(Zen));
var B=new Benz(20);
console.log(Zen.tell_speed());
console.log(B.tell_speed());
B.zooms();
console.log(B.tell_speed());
console.log(Car.faster(B,Zen));
console.log(Car.carsMade);