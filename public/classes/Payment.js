var Payment = /** @class */ (function () {
    function Payment(c, d, a) {
        // what counstructor receives and assign to fields
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    Payment.prototype.format = function () {
        return this.recipient + " is owed $" + this.amount + " for " + this.details;
    };
    return Payment;
}());
export { Payment };
