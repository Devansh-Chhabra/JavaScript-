// Stack And Heap Memory

/*
->Stack Memory: always used for primitive datatypes 
->Heap Memory: is always used for non primitive datatypes

->Stack Memory: always returns the copy 
->Heap Memory: always return the reference of the object...direct changes in the original object
*/

let a = 5
let b = a
console.table([a,b])
b = 10
console.log(b)


let obj1 = {
    username: "Devansh",
    age: 19
}
let obj2 = obj1
console.table([obj1.age,obj2.age])
obj2.age = 20
console.table([obj1.age,obj2.age])

/*
Conclusion:
    1) Variables uses Stack Memory
    2) Objects uses Heap Memory...it gets reference so direct changes everywhere...similar to POINTERS!
*/