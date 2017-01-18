var p =fetch('foo')
p.then
(res=>{
`This is the result ${res}`
},
err=>{
`This is the error ${err}`
})
console.log("hello")