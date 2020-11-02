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
export { Invoice };
