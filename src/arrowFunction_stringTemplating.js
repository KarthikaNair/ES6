//single parameter
sayHello=name=>`Hello there ${name}`;
//multiple parameters
sayHi=(name,surname)=>`Hi there ${name} ${surname}`;

//return object
concurrentAdd=(one,two,three)=>({
    a:one+two,
    b:two+three
});

console.log(sayHello("Karthika"));
console.log(sayHi("Karthika","Nair"));
var {a,b}=concurrentAdd(1,2,3)  ;  
console.log(a,b);