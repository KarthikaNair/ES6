myMap = new Map([["a",1],["b",2],["c",3]]);

for (let [key,val] of myMap){
    console.log(key,val)
}
console.log("using iterator")

let iter= myMap[Symbol.iterator]()
let next=iter.next();
while (!next.done)
{
console.log(next.value)
next=iter.next();

}

anotherMap=new Map()
anotherMap.set("d",4);
anotherMap.set("e",5);
anotherMap.set("f",6);

for (let[key,value] of anotherMap)
{
    console.log(key,value);
}
