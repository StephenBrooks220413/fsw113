/*
Requirement 1: 
Add state, dateOgBirth and payRate attributes to the 
student data using JavaScript
*/

var students = [ 


    { 
        name: "John", 
        city: "Los Angelos",
        state: "California",
        DateOfBirth: "06/20/1992",
        payRate: "75,000"
    },


    { 
        name: "Peter", 
        city: "London",
        state: "England",
        DateOfBirth: "06/20/1989",
        payRate: "85,000"
    },


    { 
        name: "Mathew", 
        city: "Manchester",
        state: "United Kingdom",
        DateOfBirth: "06/20/1993",
        payRate: "65,000" 
    },


    { 
        name: "Jane", 
        city: "Phoenix",
        state: "Arizona",
        DateOfBirth: "04/27/1983",
        payRate: "95,000" 
    }

]

// Requirement 2:
// And use a forEach loop javascript construct to print 
// to console the value of each property before and after 
// adding the additional attributes.

students.forEach(function (arrayItem) {
    var x = arrayItem.name;
    var y = arrayItem.city;
    console.log(x + " " + y);
});

students.forEach(function (arrayItem) {
    var a = arrayItem.name;
    var b = arrayItem.city;
    var c = arrayItem.state;
    var d = arrayItem.DateOfBirth;
    var e = arrayItem.payRate;
    console.log(a + " " + b + " " + c + " " + d + " " + e);
});


// Requirement 3: 
//
// Change the declaration from var to const and repeat Requirement 2 and 3


students.forEach(function (arrayItem) {
    const x = arrayItem.name;
    const y = arrayItem.city;
    console.log(x + " " + y);
});

students.forEach(function (arrayItem) {
    const a = arrayItem.name;
    const b = arrayItem.city;
    const c = arrayItem.state;
    const d = arrayItem.DateOfBirth;
    const e = arrayItem.payRate;
    console.log(a + " " + b + " " + c + " " + d + " " + e);
});


// Requirement 4: 
//
// Describe your expectation and the actual output.

/*
I expected to see the first two keys and values printed and then see 
them again for the second iteration, in addition to what was added.
*/


/*
Requriement 5
Here is a brief description of the Multiplication Table using JavaScript
https://stackoverflow.com/questions/41465569/multiplication-table-in-javascript (Links to an external site.) 
Using the following constraints:
You are not allowed to declare any additional global variables except the following
*/

const multipliers = [1,2,3,4,5,6,7,8,9,10]
const multiplican = [1,2,3,4]
const tableStart = 1
const tableEnd = 12
const table = []

table = [
    {
        "name": 1,
        "values" : [
            {"1": "1 x 1 = 1"},
            {"2": "1 x 2 = 2"},
            {"3": "1 x 3 = 3"},
            {"4": "1 x 4 = 4"},

            

            {"12": "1 x 12 = 12"},
        ]
    },
    {
        "name": 2,
        "values" : [
            {"1": "2 x 1 = 2"},
            {"2": "2 x 2 = 4"},
            {"3": "2 x 3 = 6"},
            {"4": "2 x 4 = 8"},

            

            {"12": "2 x 12 =24"},
        ]
    },

    
    {
        "name": 12,
        "values" : [
            {"1": "12 x 1 = 12"},
            {"2": "12 x 2 = 24"},
            {"3": "12 x 3 = 36"},
            {"4": "12 x 4 = 48"},

            

            {"12": "12 x 12 =144"},
        ]
    },

]