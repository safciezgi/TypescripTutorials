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
var CreditBase = /** @class */ (function () {
    function CreditBase() {
    }
    CreditBase.prototype.save = function () {
        console.log("Saved!");
    };
    return CreditBase;
}());
var consumerCredit = /** @class */ (function (_super) {
    __extends(consumerCredit, _super);
    function consumerCredit() {
        return _super.call(this) || this;
    }
    consumerCredit.prototype.calculate = function () {
        console.log("Credit calculated!");
    };
    return consumerCredit;
}(CreditBase));
var mortgageCredit = /** @class */ (function (_super) {
    __extends(mortgageCredit, _super);
    function mortgageCredit() {
        return _super.call(this) || this;
    }
    mortgageCredit.prototype.calculate = function () {
        console.log("Mortgage credit calculated!");
    };
    return mortgageCredit;
}(CreditBase));
var cons_credit = new consumerCredit();
cons_credit.save();
cons_credit.calculate();
var morg_credit = new mortgageCredit();
morg_credit.calculate();
morg_credit.save();
