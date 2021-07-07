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
    console.log(`${a} + " " + ${b} + " " + ${c} + " " + ${d} + " " + ${e}`);
});


/*
I expected to see the first two keys and values printed and then see 
them again for the second iteration, in addition to what was added.
*/
