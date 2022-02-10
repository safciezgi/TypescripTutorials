abstract class CreditBase {
    constructor() {
        
    }
    save():void{
        console.log("Saved!")
    }
    abstract calculate():void
}

class consumerCredit extends CreditBase {
    
    constructor() {
        super();
    }
    calculate(): void {
        console.log("Credit calculated!");
    }
}
class mortgageCredit extends CreditBase {
    
    constructor() {
        super();
    }
    calculate(): void {
        console.log("Mortgage credit calculated!");
    }
}

let cons_credit = new consumerCredit()
cons_credit.save();
cons_credit.calculate();

let morg_credit = new mortgageCredit()
morg_credit.calculate()
morg_credit.save()

let credit : CreditBase;
credit = new consumerCredit();
credit = new mortgageCredit();
