myNumberArray=[1,2,5,6,5,6,5,6]
myString="HelloThere"
console.log("Array")
for (let num of myNumberArray){
    console.log(num+2)
}
//as opposed to for in loop which will take these numbers as strings 
//adding +2 in a for in loop will ust append two to end of string

console.log("for in loop behaviour contrast")

for (let num in myNumberArray){
    console.log(num+2)
}
console.log("Supports Set")
//also supported by sets
for (let num of new Set(myNumberArray)){
    console.log(num+2)
}

for (let alphabet of myString){
    console.log(alphabet)
}
