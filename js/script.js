function Car(make, img, price, model, year) {
    this.make = make;
    this.img = img;
    this.price = price;
    this.model = model;
    this.year = year;
}

var cars = [
    new Car("BMW", "bmw.jpg", 800000, "X5", 2022),
    new Car("Volvo", "volvo.jpg", 25000, 240, 1985),
    new Car("Toyota", "toyota.jpg",150000, "Camry", 2019),
    new Car("Ford", "ford.jpg", 400000, "Mustang", 2022),
    new Car("Honda", "honda.jpg", 80000, "Civic", 2015),    
    new Car("Audi", "audi.jpg", 300000, "A4", 2020),
    new Car("Volkswagen", "golf.jpg", 120000, "Golf", 2017),
    new Car("Mercedes-Benz", "merca.jpg", 220000, "E-klass", 2016),
    new Car("Nissan", "nissan.jpg", 60000, "Altima", 2013),
    new Car("Koenigsegg", "jesko.jpg", 30000000, "Jesko", 2021),
];

var output = document.getElementById("output");

for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    var carInfo = "Märke: " + car.make + "<br>";
    carInfo += "Modell: " + car.model + "<br>";
    carInfo += "År: " + car.year + "<br>";
    carInfo += "Pris: $" + car.price + "<br>";
    carInfo += '<img src="' + car.img + '" alt="' + car.make + ' ' + car.model + '"><br><br>';
    output.innerHTML += carInfo;
}
