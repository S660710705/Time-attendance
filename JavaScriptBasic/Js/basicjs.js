let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getCarInfo: function() {
        return this.brand + " " + this.model + " (" + this.year + ")";
    }
};

// การเข้าถึง properties
console.log(car.brand); // Output: Toyota
console.log(car["model"]); // Output: Corolla

// การเรียกใช้ method
console.log(car.getCarInfo()); // Output: Toyota Corolla (2020)
car.color = "red";
console.log(car.color); 