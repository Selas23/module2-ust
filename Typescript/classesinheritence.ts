class Vehicle{
    name:string;

    constructor(name:string){
        this.name = name;
    }
    getName():string{
        return this.name;
    }
}
class Car extends Vehicle{
    model:string;

    constructor(model:string,name:string){
        super(name);// parent class constructor ,to get name
        this.model = model; //model is in the same class, therefore we call with this
    }
    getNameModel():string{
        return this.model + this.name;
    }

}
class Truck extends Vehicle{
    constructor(name:string){
        super(name);
    }
}
var mycar = new Car("Sports Model..", "BMW");
console.log(mycar.getNameModel);

var truck = new Truck ("Tata truck");
console.log(truck.getName());