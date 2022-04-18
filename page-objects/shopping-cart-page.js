import { Selector, t } from 'testcafe';

class ShoppingCartPage {
    get emptyBasketTitle() { return Selector("h1[data-test='emptyBasketTitle']"); }
}

export default new ShoppingCartPage();