var me = {
    name: "Anna", age: 22,
    speak: function (text) {
        console.log("text", text);
    },
    spend: function (amount) {
        console.log("am", amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log("person", person);
};
console.log("me", me);
import { Invoice } from "./classes/invoice.js";
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
