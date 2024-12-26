// Data-type Conversions

// To Number
let score = "33"    
let toNumber = Number(score);
console.table([typeof score,typeof toNumber,score,toNumber])

score = null
toNumber = Number(score)
console.table([typeof score,typeof toNumber,score,toNumber])

score = undefined
toNumber = Number(score)
console.table([typeof score,typeof toNumber,score,toNumber])

score = true
toNumber = Number(score)
console.table([typeof score,typeof toNumber,score,toNumber])





// To Boolean
let loggedIn = 100
let toBool = Boolean(loggedIn)
console.table([typeof loggedIn,typeof toBool,loggedIn,toBool])

loggedIn = null
toBool = Boolean(loggedIn)
console.table([typeof loggedIn,typeof toBool,loggedIn,toBool])

loggedIn = undefined
toBool = Boolean(loggedIn)
console.table([typeof loggedIn,typeof toBool,loggedIn,toBool])

loggedIn = "Devansh"
toBool = Boolean(loggedIn)
console.table([typeof loggedIn,typeof toBool,loggedIn,toBool])





// To string
let value = 33
let toString = String(value)
console.table([typeof value,typeof toString,value,toString])

value = true
toString = String(value)
console.table([typeof value,typeof toString,value,toString])

value = null
toString = String(value)
console.table([typeof value,typeof toString,value,toString])

value = undefined
toString = String(value)
console.table([typeof value,typeof toString,value,toString])