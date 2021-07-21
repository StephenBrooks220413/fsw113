let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( grades, percentage){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(studentGrades)

console.log(result); //Reference Error: curveGrades is not defined

//////////////////////////////////////////////////////////////////

let studentgrades = [ 90, 80 , 88, 98]
let curvegrages = function( grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curvegrages(studentgrades)

console.log(result) //Reference Error: curveGrades is not defined

//////////////////////////////////////////////////////////////

let StudentGrades = [ 90, 80 , 88, 98]
let CurveGrages = function( grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = CurveGrages(StudentGrades, 1.33)

/////////////////////////////////////////////////////////////////

console.log(result) //Reference Error: curveGrades is not defined

let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( ...grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(...studentGrades, 1.33)

console.log(result)

////////////////////////////////////////////////////////////////////

let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( ...grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(...studentGrades)

console.log(result) // SyntaxError: Rest parameter must be last formal parameter

////////////////////////////////////////////////////////////////////////

let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( ...grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(1.24, ...studentGrades)

console.log(result) // SyntaxError: Rest parameter must be last formal parameter

////////////////////////////////////////////////////////////////////////

let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( ...grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(undefined, ...studentGrades)

console.log(result) //SyntaxError: Rest parameter must be last formal parameter

//////////////////////////////////////////////////////////////////////////

let studentGrades = [ 90, 80 , 88, 98]

let percentageCurve = 0.98
let curveGrages = function( ...grades, percentage = percentageCurve){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(undefined, ...studentGrades)

console.log(result) //SyntaxError: Rest parameter must be last formal parameter

///////////////////////////////////////////////////////////////////////

let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages(undefined, ...studentGrades)

console.log(result) //Answer: [ 80.1, 71.2, 78.32000000000001, 87.22 ]

///////////////////////////////////////////////////////////////
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages(1.3, ...studentGrades)

console.log(result) //Answer: [ 117, 104, 114.4, 127.4 ]

//////////////////////////////////////////////////////////////////

let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages(1.3, 68,56, ...studentGrades)

console.log(result) //Answer: [ 88.4, 72.8, 117, 104, 114.4, 127.4 ]