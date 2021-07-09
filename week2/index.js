//CL01:JavaScript:

var temp = () => 104;
console.log(typeof temp);
console.log(temp());
console.log("//It is a function and temp is 104//");
console.log("////////////////////////////////");

//CL02:JavaScript:
var temp = multiplier => 104 * multiplier;
console.log(temp(2));
console.log("///////////Answers is 208////////");
console.log("////////////////////////////////");

//CL03:JavaScript:
var temp = ( multiplier, devider ) => 104 * multiplier/ devider;
console.log(temp(3, 6));
console.log("///////////Answers is 52////////");
console.log("////////////////////////////////");

//CL04: JavaScript:
var temp = (multiplier, divider) => {
    let result = 104 * multiplier;
    if(result) {
        result = 104 / divider;
    }
    return result;
}

console.log(temp(3,6));
console.log("///////////Answers is 17.33333333333332////////");
console.log("////////////////////////////////");

//CL05: JavaScript:
var clickButton = function (){

    console.log(this)
 }

 console.log(clickButton());
 console.log("///////////You get a node response and undefined////////");
 console.log("////////////////////////////////");

 //CL06
 var clickButton = ( )  => {
    console.log(this);
}

clickButton();
console.log("///////////You get an empty object////////");
console.log("////////////////////////////////");

 //CL07
 var clickButton = ( )  => {
    console.log(this);
}

clickButton();
console.log("///////////You get an empty object////////");
console.log("////////////////////////////////");

// CLO8 JavaScript:

var person =  {
    name : 'David Smith',
    age : 56,
    details: function ( ){
        console.log(this);
    }
};

person.details();
console.log("///////////You get the name and age of var person////////");
console.log("////////////////////////////////");

// CLO9 JavaScript:

var person =  {
    name : 'David Smith',
    age : 56,
    details: () => {
        console.log(this);
    }
};

person.details();
console.log("///////////You get an empty object////////");
console.log("////////////////////////////////");

//COL10
var temp = (100);
console.log(temp);
console.log("///////////You get 100////////");
console.log("////////////////////////////////");