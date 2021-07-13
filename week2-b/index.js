// CLO1: JavaScript:

let studentArray = Array(10)

console.log(studentArray.length) //10
console.log(studentArray) //empty items

console.log('/////////////////////////////////')
console.log('')

//////////////////////////////////////////////
// CLO2: JavaScript:

let StudentArray = Array.of(10)

console.log(StudentArray.length) //1
console.log(StudentArray) //10

//SyntaxError: Identifier 'studentArray' has already been declared
console.log('/////////////////////////////////')
console.log('')

/////////////////////////////////////////
// CLO3: JavaScript:
let grades = [90,98,78,99] //4

let studentGrades = Array.from(grades, g=> g * 110); //9900, 10780, 8580, 10890 

console.log(studentGrades.length)
console.log(studentGrades)

console.log('/////////////////////////////////')
console.log('')

////////////////////////////////////////////////////
// CLO4: JavaScript:

let Grades = [90,98,78,99]
let StudentGrades = Array.from(Grades, function(g){
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});

console.log(StudentGrades)
//Answer: 99.00000000000001, 107.80000000000001, 85.80000000000001, 108.9 
console.log('/////////////////////////////////')
console.log('')

/////////////////////////////////////////////////////
// CLO5: JavaScript:

let grades1 = [90,98,78,99]
let studentGrades1 = Array.from(grades1, g=>{
   return  g * this.percentageIncrement
},{percentageIncrement:1.10});

console.log(studentGrades1) //Answer: NaN, NaN, NaN, NaN
console.log('/////////////////////////////////')
console.log('')

/////////////////////////////////////////////////////
// CLO6: JavaScript:

let grades2 = [90,98,78,99]
let studentGrades2 = grades2.find(v=> v== 90)

console.log(studentGrades2) //Answer: 90
console.log('/////////////////////////////////')
console.log('')

///////////////////////////////////////////////////
// CLO7: JavaScript:

let grades3 = [90,98,78,99]
let studentGrades3 = grades3.find(v => v >= 90)

console.log(studentGrades3) //Answer: 90
console.log('/////////////////////////////////')
console.log('')

////////////////////////////////////////////////////
// CLO8: JavaScript:

let grades4 = [90,98,78,99]
let studentGrades4 = grades4.map(v => v * .0 >= 90)

console.log(studentGrades4) //Answer: false, false, false, false
console.log('/////////////////////////////////')
console.log('')

////////////////////////////////////////////////////
// CLO9: JavaScript:

let grades5 = [90,98,78,99]
let studentGrades5 = grades5

console.log(studentGrades5) //Answer: 90, 98, 78, 99 
console.log('/////////////////////////////////')
console.log('')

///////////////////////////////////////////////////
// CLO10: JavaScript:

let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")


console.log(people) //Answer: Returns two objects with an arrow, pointing to the value
console.log('/////////////////////////////////')
console.log('')

//////////////////////////////////////////////
// CLO11: JavaScript:
let student1 = {name:'John Masson'}
let adjunct1 = {name:'Dave Larson'}
let people1 = new Map()

people1.set(student1, "Student")
people1.set(adjunct1, "Adjunct")

people1.delete(student1)

console.log(people1) //Answer: Deleted the first line with the string John Masson value
console.log('/////////////////////////////////')
console.log('')

//////////////////////////////////////////////
// CLO12: JavaScript:
let student2 = {name:'John Masson'}
let adjunct2 = {name:'Dave Larson'}
let people2 = new Map()

people2.set(student2, "Student")
people2.set(adjunct2, "Adjunct")

people2.clear()

console.log(people2) //Answer: shows an empty object
console.log('/////////////////////////////////')
console.log('')

//////////////////////////////////////////////
// CLO13: JavaScript:

let student3 = {name:'John Masson'}
let adjunct3 = {name:'Dave Larson'}
let people3 = new Map()

people3.set(student3, "Student")
people3.set(adjunct3, "Adjunct")

let result3 = people3.has(student3);

console.log(result3) //Answer: true
console.log('/////////////////////////////////')
console.log('')

//////////////////////////////////////////////
// CLO14: JavaScript:
let student4 = {name:'John Masson'}
let adjunct4 = {name:'Dave Larson'}
let people4 = new Map()

people4.set(student4, "Student")
people4.set(adjunct4, "Adjunct")

let result4 = people4.keys(student4);

console.log(result4) //Answer: [Map Iterator] { { name: 'John Masson' }, { name: 'Dave Larson' } }
console.log('/////////////////////////////////')
console.log('')

//////////////////////////////////////////////
// CLO15: JavaScript:
let student5 = {name:'John Masson'}
let adjunct5 = {name:'Dave Larson'}
let people5 = new Map()

people5.set(student5, "Student")
people5.set(adjunct5, "Adjunct")

let result5 = people5.values(student5);

console.log(result5) //Answer: [Map Iterator] { 'Student', 'Adjunct' }
console.log('/////////////////////////////////')
console.log('')

//////////////////////////////////////////////
// CLO16: JavaScript:

let student6 = {name:'John Masson'}
let adjunct6 = {name:'Dave Larson'}
let people6 = new WeakMap()

people6.set(student6, "Student")
people6.set(adjunct6, "Adjunct")

ladjunct = null

console.log(people6.size) //Answer: undefined

console.log('/////////////////////////////////')
console.log('')

//////////////////////////////////////////////
// CLO17: JavaScript:
let student7 = {name:'John Masson'}
let adjunct7 = {name:'Dave Larson'}
let people7 = new Set()

people7.add(student7)
people7.add(adjunct7)

people7.add(adjunct7)

console.log(people7.size) //Answer: 2

console.log('/////////////////////////////////')
console.log('')
