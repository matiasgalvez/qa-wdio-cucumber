const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I login with {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('I should see {string}', async (result) => {
    const url = await browser.getUrl();

    if (result === 'inventory') {
        await expect(url).toContain('inventory');
    } else if (result === 'error') {
        const error = await $('.error-message-container');
        await expect(error).toBeDisplayed();
    }
});

Given('I am logged in', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
});

When('I add the backpack to the cart', async () => {
    await InventoryPage.addBackpackToCart();
});

Then('the cart badge should show {string}', async (count) => {
    const badge = await InventoryPage.cartBadge;
    await expect(await badge.getText()).toBe(count);
});

Then('the backpack should be visible in the cart', async () => {
    await InventoryPage.openCart();
    await expect(await CartPage.cartItem).toBeDisplayed();
});

When('I add a product to the cart', async () => {
    await InventoryPage.backpackAddButton.click();
    await InventoryPage.shoppingCartLink.click();
});

When('I proceed to checkout', async () => {
    await CheckoutPage.startCheckout();
});

When('I enter checkout information', async () => {
    await CheckoutPage.enterInformation();
});

When('I finish the order', async () => {
    await CheckoutPage.finishOrder();
});

Then('I should see the order confirmation message', async () => {
    await expect(CheckoutPage.confirmationMsg)
        .toHaveText('Thank you for your');
});
