// There are seven premitive datatypes (nn ss bb u)
console.log("\nPremitive datatypes:")
let a = null; //null
let b = 123; //number
let c = "Raj"; //string
let d = Symbol("this is a symbol") //symbol
let e = true //boolean
let f = BigInt(34223423434234) //bigint
let g //undefined
console.log(a ,"\n",b ,"\n",c ,"\n",d ,"\n",e ,"\n",f ,"\n",g)

// Object in javascript are non premitive datatypes
console.log("\nNon premitive datatypes:")
const item = {
    "nulla": null,
    "number": 1,
    "string": "Raj Kushwaha",
    "symbol": Symbol("sym"),
    "boolean": false,
    "bigint": BigInt(23232),
    "undefined": undefined
}
console.log(item["nulla"] ,"\n", item["number"])
console.log(item)