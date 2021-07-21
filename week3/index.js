const starWars_data = require('./dataSetup.json');
// const items = starWars_data.length;

// console.log(items);

var getData = function(index){
    return starWars_data[index];
}

var printProps = function(obj, props){
    console.log(obj);
    props.forEach(element => {
        console.log(`${element} = ${obj[element]}`);
    });
}

var printMovies = function(items){
    items.forEach(element => {
        console.log(`${element}`);
    });
}

var result0 = getData(0).films;
var result1 = getData(1).films;
var result2 = getData(2).films;

var movies = [...result0, ...result1, ...result2];
printMovies(movies);

// const keys = Object.keys(result);
// console.log(keys);
// printProps(result, keys);

// console.log(JSON.stringify(result)); ///////////<=More detailed
