//Working with tsc command and setup nodemon :
//Basic introduction tutorials :
function Hello(name) {
    return "Hello " + name;
}
var message = Hello('Ezgi!');
console.log(message);
var num;
num = 10;
num = 10.4;
var city;
city = 'Ankara';
city = 'İstanbul';
var isItTrue;
isItTrue = false;
isItTrue = true;
var nums = [1, 2, 3, 4];
var nums2 = [1, 3, 5, 7];
var arr = [5, "Ankara"]; //tuple form
console.log(arr[0]);
console.log(arr[1]);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
