//PAUSE AND PRACTICE DEMO 1
// const PI = new Number(3.147);
// const radius = [2, 4, 6, 8, 10];

// let areaOfCircle = 2 * PI * radius[0];

// console.log(`
// The value of the circle 
// for radius ${radius[0]} 
// is ${areaOfCircle.toPrecision(4)}
// `);


////////////////////////////////////////////
// PAUSE AND PRACTICE DEMO2
// const PI = new Number(3.147);
// const radius = [2,4,6,8,10];

// let areaOfCircle = 2 * PI * radius[0];

// for(let i = 0; 
//     i < radius.length; 
//     i++){
//     let areaOfCircle =2 * PI * radius[i];
//     console.log(`
//     The value of a cricle is 
//     ${radius[i]} is 
//     ${areaOfCircle.toPrecision(4)}
//     `);
// }

// radius.forEach(function(radius){
//     let radius = radius + 10;
//     let areaOfCircle = 2 * PI * radius;
//     console.log(`
//      The value of a cricle is 
//      ${radius} is 
//      ${areaOfCircle.toPrecision(4)}
//      `);
// })

function foo(x,y){ if(x>y){ temp = x; x =y; y = temp; } for(var i = 0; i <10; i++){ console.log(i); } console.log(temp) } foo()