let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
]

let car = cars.find(car => car.color === "purple" && car.type === "minivan");
console.log(car);

if(car == car){
    console.log("All matches found")
} else {
    console.log("no matches found")
}

if(car.color == "purple"){
    console.log("The vehicle is purple")
} else {
    console.log("no matches found")
}

if(car.registration == "registeration"){
    console.log("The vehicle registeration is current")
} else {
    console.log("Not currently registered")
}

if(car.capacity == "7"){
    console.log("The vehicle has the right capacity")
} else {
    console.log("Vehcile does not have the right capacity")
}

let carTypes = cars.find(carTypes => carTypes.color === "red" && carTypes.type === "station wagon")
console.log(carTypes)

if(carTypes == carTypes){
    console.log("All matches found")
} else {
    console.log("no matches found")
}

if(carTypes.color == "red"){
    console.log("The vehicle is red")
} else {
    console.log("no matches found")
}

if(carTypes.registeration == "registeration"){
    console.log("The vehicle registeration is current")
} else {
    console.log("Not currently registered")
}

if(carTypes.capacity == "5"){
    console.log("The vehicle has the right capacity")
} else {
    console.log("Vehcile does not have the right capacity")
}

let vehicles = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
]

let results = vehicles.filter(car => car.color === "red");
console.log(results);

let catalog = vehicles.filter(car => car.type === 'minivan' && 'station wagon');
console.log(catalog);


[vehicles].forEach(x => console.log(x))


const autos = vehicles.filter(({ color }) => color == 'red' && color == 'green');

console.log(autos)