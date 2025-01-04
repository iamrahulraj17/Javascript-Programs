// 1.var
// This is why we avoid var

var a = 10
var a = 21 //we can redeclare the variable in the var
{
    var a = "hello"
    console.log("a = "+a)
}
console.log("a = "+a)

// 2.let
// why we use let for development

let b = 20
b = 30 //we can re use the variable declare in the let by changing the value and not by declaring the variable again
{
    let b = "world"
    console.log("b = "+b)
}
console.log("b = "+b)

// 3.const 
// we use the const keyword to make the variable constant

const c = 40
console.log("c = "+c)
// const d; we cannot initialize the variable without value
//c = 50 this throws an error because constant value doesn't change