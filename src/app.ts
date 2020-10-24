class Invoice {
    // class fileds
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
        // what counstructor receives and assign to fields
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

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