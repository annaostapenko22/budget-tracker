import { HasFormatter } from "../interfaces/HasFormatter"

export class Invoice implements HasFormatter {
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
