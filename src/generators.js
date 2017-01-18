function * fibonacci()
{
    var a=0;
    var b=1;
    while (true)
    {   
    yield a;
    [a,b]=[b,a+b]
}   
}


var iter=fibonacci();
for( let i =0; i<10; i ++)
{
    console.log(iter.next().value)
}

