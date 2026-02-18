const Page = require('./page');

class CartPage extends Page {

    get cartItem() {
        return $('.inventory_item_name');
    }
}

module.exports = new CartPage();
