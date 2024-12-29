// Strings 
const firstName = "Devansh"
const lastName = "Chhabra"
const fullName = `${firstName} ${lastName}`

console.log(fullName)
console.log(`My Full Name is ${fullName}`)

// Dynamic Strings as Objects
const newString = new String("Raghav")  

// Attributes
console.log(newString[0])
console.log(newString.__proto__)
console.log(newString.length)

// Functions
console.log(newString.toUpperCase())
console.log(newString.charAt(2))
console.log(newString.indexOf('G'))

// Substring and Slicing : ignores the last index
console.log(newString.substring(2,4))
console.log(newString.substring(2))
console.log(newString.substring(4,2))  //automatically reverses the index
console.log(newString.substring(-3))  //treats -ve as zero

console.log(newString.slice(2,4))
console.log(newString.slice(2))
console.log(newString.slice(4,2)) // start > end -> empty
console.log(newString.slice(-3,-1))

let tempString = "     Devansh     ";
tempString = tempString.trim();
console.log(tempString);

let url = "https://devansh.com/devansh%20chhabra%20"
url = url.replace("%20","-")    // First Occurence only
console.log(url)

console.log(url.includes("Devansh"))    // case-sensitive

url = "https :: // devansh.com/devansh %20 chhabra"
console.log(url.split(" "))  // breaks into array on the basis of the given parameter