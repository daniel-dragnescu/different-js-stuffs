// constructor = special method for defining the
//               properties and methods of objects

function Car(make, model, year, color) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color;
  this.drive = () => {console.log(`You drive the ${this.make}`)} 
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "Silver");

car2.drive();
