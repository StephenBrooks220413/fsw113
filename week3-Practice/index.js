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

var result0 = getData(0);
var objectWithAddedProps = {...result0, "class":"FSW113", "type": "demo"}

var keys = Object.keys(objectWithAddedProps)
printProps(objectWithAddedProps, keys)

// console.log(JSON.stringify(result)); ///////////<=More detailed
