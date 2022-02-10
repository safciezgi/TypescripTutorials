class Home{
    _roomNum:number;      //To be clear in constructor I use " _ " symbol
    _windowNum:number;
    _floorNum:number;
    constructor(roomNum:number, windowNum:number, floorNum:number){
        this._roomNum = roomNum;
        this._windowNum = windowNum;
        this._floorNum = floorNum;
    }
    Eat(){
        console.log("We had dinner on " + this._floorNum + ". floor!")
    }
}

let home = new Home(3, 5, 5)
home.Eat()                     //Eat function output
console.log(home._floorNum)   //floor number
console.log(home._roomNum)   //room number
console.log(home._windowNum)   //window number


/********************INHERITENCE*****************************************************/

class Person{
    private _name:string
    protected age:number

    get name():string{
        return "Name is : " + this._name;
    }

    set name(n:string){
        this._name = n;
    }

    save(){
        console.log("Person saved successfully!")
    }
}

class Customer extends Person{
    sale(){
        // this.name   //it can not be reachable because "name" variable defined private in "Person" class so we can not declare like this
        //this.age  // it can be reachable because "age" variable defined protected in "Person" class
        console.log("The sale has been made!")
    }
}

class Personal extends Person{
    salary(){
        console.log("The salary has been paid!")
    }
}

let customer = new Customer()
customer.save();
customer.sale();

let personal = new Personal();
personal.save();
personal.salary();

customer.name = "Ezgi"
console.log(customer.name)