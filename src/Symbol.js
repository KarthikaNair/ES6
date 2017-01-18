var isMoving = Symbol("isMoving");
element={ color:'red',isMoving:false  } ;
    console.log(element.isMoving);

if (element.isMoving==false)
{
    element.isMoving=true;
    console.log(element.isMoving);

}
console.log(element.isMoving);
console.log(typeof(isMoving));