import { HasFormatter } from "../interfaces/HasFormatter"

export class Payment implements HasFormatter {
    // class fileds
    readonly recipient: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
        // what counstructor receives and assign to fields
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}