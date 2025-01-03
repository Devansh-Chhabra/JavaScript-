// Arrays in JavaScript can store hetrogeneous data-types
const myArray = [0,1,2,"devansh",true]
let heros = ["Spiderman","Captain America","Hulk"]
let nums = new Array(0,1,2,3,4)
console.log(heros)
console.log(heros[2])




myArray.push(3) 
console.log(myArray)
// here it is const...which means its reference is fixed as an Array but overall Array is MUTABLE
myArray.pop()
console.log(myArray)

// Push & Pop appends and remove from the end...for starting we have unshift and shift
myArray.shift()
myArray.unshift("LOVE")
console.log(myArray)

console.log(myArray.includes("devansh"))
console.log(myArray.indexOf("devansh"))




// Join Functionality converts the Array into String
const newArray = heros.join()
console.log(heros)
console.log(newArray)
console.log(typeof newArray) 




// Slice and Splice
nums = [1,2,3,4,5,6,7,8]
console.log(`Original Array is [${nums}]`)

console.log(nums.slice(2,5)) // extract a portion of Array based on start and end Index(end Index is not included)...if single argument the endIndex is chosen as size 
console.log(`Original Array after Slicing some part is [${nums}] remains the same`)

console.log(nums.splice(5)) // returns the elements to be deleted based on start and end Index(end Index is not included)....if single argument the endIndex is chosen as size...ORIGINAL is modified
console.log(`Original Arrya after Spliciing is [${nums}] thus it has been modified`)