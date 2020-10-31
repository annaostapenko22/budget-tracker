interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: "Anna", age: 22,
    speak(text: string): void {
        console.log("text", text)
    },
    spend(amount: number): number {
        console.log("am", amount)
        return amount;
    }
}
const greetPerson = (person: IsPerson)=> {
    console.log("person", person)
}


console.log("me", me)

import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice('anna', "work on work", 250)
const invTwo = new Invoice('alyona', "work in kiev", 250)
console.log(invOne, invTwo)
let invoices: Invoice[] = [];
invoices.push(invOne)
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()

    console.log(type.value,
        amount.valueAsNumber)
})