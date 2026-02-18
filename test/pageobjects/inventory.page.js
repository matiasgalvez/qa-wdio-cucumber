const Page = require('./page');

class InventoryPage extends Page {

    get backpackAddButton() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get cartBadge() {
        return $('.shopping_cart_badge');
    }

    get cartIcon() {
        return $('.shopping_cart_link');
    }

    async addBackpackToCart() {
        await this.backpackAddButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    get shoppingCartLink() {
        return $('.shopping_cart_link');
    }
}

module.exports = new InventoryPage();
