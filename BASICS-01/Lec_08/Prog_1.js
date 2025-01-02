// Dates

// Date OBJECT returns the values in miliseconds since it JAN 1,1970
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

// Specify the arbitary date : Here months range from 0-11
let newDate = new Date(2025,0,5)
console.log(newDate.toDateString())
console.log(newDate.getDay())

newDate = new Date(2025,0,2,22,15,30)
console.log(newDate.toString())
console.log(newDate.toLocaleString('en-IN'))

newDate = new Date("2025-01-2") // Here months range from 01-12

// TimeStamps : it also returns the miliseconds
let timeStamp = Date.now()
console.log(timeStamp)
console.log(timeStamp/1000) // converts into seconds

// Other functionalities
console.log(myDate);
console.log(myDate.getFullYear())
console.log(myDate.getMonth())  // Month range 0-11
console.log(myDate.getDay())    // SUNDAY-0 SATURDAY-6
console.log(myDate.getDate())
// Locale String...is customisable