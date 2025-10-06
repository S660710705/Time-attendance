let animal = {
    type: "Mammal",
    displayType: function() {
        console.log(this.type);
    }
};

let dog = Object.create(animal);
dog.type = "Dog";
dog.displayType(); // Output: Dog
