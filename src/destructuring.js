//Array
[a,b,c,,d]=[1,2,3,4,5];
console.log(a,b,c,d);

//rest  
[head,...tail]=[1,2,3,4,5]
console.log(head)
console.log(tail)

//object destructuring short hand
var obj={a:"1" , b:"2"};
var {a,b}=obj;
console.log(a,b);

//function return muptiple values
function returnTwoValues(){
    return {
        first:1,
        second:2
    };
}
var {first,second}=returnTwoValues();
console.log(first,second);