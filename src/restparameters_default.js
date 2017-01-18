//can have any number of parameters 
function needle_haystack(needle,...haystack){
      if (haystack.indexOf(needle)!=-1){
        return true;
    }
    return false;
}
console.log(needle_haystack(2,3,4,5,6,7));
console.log(needle_haystack(7,3,4,5,6,7));

function defParEx(paraone=1,paratwo=2){
    return `I have a ${paraone} and a ${paratwo}`
}

console.log(defParEx("3","5"))
console.log(defParEx("3"))
console.log(defParEx(undefined))