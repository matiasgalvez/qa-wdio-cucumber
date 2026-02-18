class CheckoutPage {
    get checkoutBtn() { return $('#checkout'); }
    get firstName() { return $('#first-name'); }
    get lastName() { return $('#last-name'); }
    get postalCode() { return $('#postal-code'); }
    get continueBtn() { return $('#continue'); }
    get finishBtn() { return $('#finish'); }
    get confirmationMsg() { return $('.complete-header'); }

    async startCheckout() {
        await this.checkoutBtn.click();
    }

    async enterInformation() {
        await this.firstName.setValue('John');
        await this.lastName.setValue('Doe');
        await this.postalCode.setValue('12345');
        await this.continueBtn.click();
    }

    async finishOrder() {
        await this.finishBtn.click();
    }
}

module.exports = new CheckoutPage();
