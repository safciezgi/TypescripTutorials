var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Home = /** @class */ (function () {
    function Home(roomNum, windowNum, floorNum) {
        this._roomNum = roomNum;
        this._windowNum = windowNum;
        this._floorNum = floorNum;
    }
    Home.prototype.Eat = function () {
        console.log("We had dinner on " + this._floorNum + ". floor!");
    };
    return Home;
}());
var home = new Home(3, 5, 5);
home.Eat(); //Eat function output
console.log(home._floorNum); //floor number
console.log(home._roomNum); //room number
console.log(home._windowNum); //window number
/********************INHERITENCE*****************************************************/
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return "Name is : " + this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.save = function () {
        console.log("Person saved successfully!");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        // this.name   //it can not be reachable because "name" variable defined private in "Person" class so we can not declare like this
        //this.age  // it can be reachable because "age" variable defined protected in "Person" class
        console.log("The sale has been made!");
    };
    return Customer;
}(Person));
var Personal = /** @class */ (function (_super) {
    __extends(Personal, _super);
    function Personal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personal.prototype.salary = function () {
        console.log("The salary has been paid!");
    };
    return Personal;
}(Person));
var customer = new Customer();
customer.save();
customer.sale();
var personal = new Personal();
personal.save();
personal.salary();
customer.name = "Ezgi";
console.log(customer.name);
