//Working with tsc command and setup nodemon :
//Basic introduction tutorials :
function Hello(name:string) {
    return "Hello " + name
}
let message = Hello('Ezgi!')

console.log(message)

let num:number
num = 10
num = 10.4

let city:string
city = 'Ankara'
city = 'İstanbul'

let isItTrue:boolean
isItTrue = false
isItTrue = true

let nums:number[] = [1, 2, 3, 4]
let nums2 : Array<number> = [1, 3, 5, 7]

let arr:[number, string] = [5, "Ankara"] //tuple form
console.log(arr[0])
console.log(arr[1])

enum Color {Red=1, Green, Blue}
let color : Color = Color.Red

let test : any ="Ankara" //any provide for you to use all data types
test = 2
test = {}

let test2 : void = undefined

function Hello2():void{
    console.log("Hello")
}

//undefined null
let age:number
age = 25

