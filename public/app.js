import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/Payment.js";
var docOne;
var docTwo;
docOne = new Invoice("youshi", "wed", 250);
docTwo = new Payment("anna", "wed", 250);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log("docs", docs);
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log("doc", doc);
});
