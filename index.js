class Vehicle {
    #manufacturer;

    constructor(manufacturer) {
        this.#manufacturer = manufacturer;
    }

    get manufacturer() {
        return this.#manufacturer;
    }

    set manufacturer(value) {
        this.#manufacturer = value;
    }

    static getManufacturer(vehicle) {
        return vehicle.manufacturer;
    }

    calculateAcceleration(initialVelocity, finalVelocity, time) {
        return (finalVelocity - initialVelocity) / time;
    }
}

class Vehicle {
    #manufacturer;

    constructor(manufacturer) {
        this.#manufacturer = manufacturer;
    }

    get manufacturer() {
        return this.#manufacturer;
    }

    set manufacturer(value) {
        this.#manufacturer = value;
    }

    static getManufacturer(vehicle) {
        return vehicle.manufacturer;
    }

    calculateAcceleration(initialVelocity, finalVelocity, time) {
        return (finalVelocity - initialVelocity) / time;
    }
}

class Electric extends Car {
    #chargeTime;
    #energyConsumption;

    constructor(manufacturer, model, chargeTime, energyConsumption) {
        super(manufacturer, model, 0); // Fuel efficiency is set to 0
        this.#chargeTime = chargeTime;
        this.#energyConsumption = energyConsumption;
    }

    get chargeTime() {
        return this.#chargeTime;
    }

    set chargeTime(value) {
        this.#chargeTime = value;
    }

    get energyConsumption() {
        return this.#energyConsumption;
    }

    set energyConsumption(value) {
        this.#energyConsumption = value;
    }

    charge() {
        return `${this.model} is charging.`;
    }

    calculateDistanceByEnergy(batteryCapacity) {
        return batteryCapacity * this.#energyConsumption;
    }
}

const myVehicle = new Vehicle('Toyota');
console.log(myVehicle.manufacturer); 
console.log(Vehicle.getManufacturer(myVehicle)); 
console.log(myVehicle.calculateAcceleration(0, 60, 10)); 

const myCar = new Car('Toyota', 'Corolla', 30);
console.log(myCar.manufacturer); 
console.log(myCar.model);
console.log(myCar.fuelEfficiency);
console.log(myCar.calculateDistance(10)); 

const myElectricCar = new Electric('Tesla', 'Model S', 2, 5);
console.log(myElectricCar.manufacturer);
console.log(myElectricCar.model);
console.log(myElectricCar.chargeTime);
console.log(myElectricCar.energyConsumption); 
console.log(myElectricCar.charge()); 
console.log(myElectricCar.calculateDistanceByEnergy(20)); 
