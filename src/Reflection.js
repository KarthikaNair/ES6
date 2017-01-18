var target={foo:'bar',baz:'wat'};   
//delete target.foo
Reflect.deleteProperty(target,'foo');
Reflect.set(target,'foo','bar');
console.log(target);
console.log(Reflect.getOwnPropertyDescriptor(target,"foo"))
console.log(Reflect.has(target,"foo"));
Reflect.defineProperty(target,"x", {value: 7});
console.log(target);