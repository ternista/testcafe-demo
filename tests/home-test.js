import HomePage from '../page-objects/home-page';
import ResultPage from '../page-objects/result-page';
import ShoppingCartPage from '../page-objects/shopping-cart-page';

fixture('Home page')
  .page('https://www.bol.com/nl/nl/') 
  
  test('Should navigate to search results when click on autocomplete option', async t => {
    // arrange
    await HomePage.acceptCookies();
    // act
    await HomePage.search('Harry Potter');
    await HomePage.clickOnSearchResultItem('harry potter boeken engels');
    // assert
    await t.expect(ResultPage.title.innerText).contains('harry potter boeken engels');
    await t.expect(ResultPage.resultsCount).ok();
  }); 

  test('Should navigate to empty shopping cart when click on shopping cart button', async t => {
    await HomePage.acceptCookies();
    await HomePage.clickOnShoppingCart();
    await t.expect(ShoppingCartPage.emptyBasketTitle).ok();
  }); 