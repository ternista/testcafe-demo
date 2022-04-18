import { Selector, t } from 'testcafe';

class HomePage {

    get searchField() { return Selector("input[data-test='search_input_trigger']"); };

    get acceptCookiesButton() { return Selector("button[data-test='consent-modal-confirm-btn']"); }

    get shoppingCartButton() { return Selector("a[data-test='basket-button']"); }

    selectSearchResult(name) { return Selector("a.wsp-suggest-group__text").withText(name) };
    
    async search(searchText) {
        await t
        .click(this.searchField)
        .typeText(this.searchField, searchText)
        .wait(1000)
    }

    async clickOnSearchResultItem(itemName) {
        await t.click(this.selectSearchResult(itemName))
    }

    async acceptCookies() {
        await t.click(this.acceptCookiesButton);
    }

    async clickOnShoppingCart() {
        await t.click(this.shoppingCartButton);
    }
}

export default new HomePage();