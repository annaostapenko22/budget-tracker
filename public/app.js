"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        // what counstructor receives and assign to fields
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('anna', "work on work", 250);
var invTwo = new Invoice('alyona', "work in kiev", 250);
console.log(invOne, invTwo);
var invoices = [];
invoices.push(invOne);
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, amount.valueAsNumber);
});
