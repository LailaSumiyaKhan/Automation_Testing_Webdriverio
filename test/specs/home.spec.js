const homeActions = require("../pages/home/homeActions");
const productDetailsActions = require("../pages/productDetails/productDetailsActions");
const productName = "Nike react phantom";
const productColor = "Black";
const productSize = "X";
const qty = "2";
describe("Demo Evershop product purchase journey", () => {
   it("Search with valid product", async () => {
      await homeActions.clickOnSearchIcon();
      await homeActions.enterSearchedProduct(productName);
      await browser.keys("Enter");
   });

   it("Add product to cart", async () => {
      await productDetailsActions.selectProductFromList(productName);
      await productDetailsActions.selectProductSize(productSize);
      await productDetailsActions.selectProductColor(productColor);
      await productDetailsActions.enterQty(qty);
      await productDetailsActions.clickOnAddToCartButton();
   });
});
