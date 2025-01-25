const homeActions = require("../pages/home/homeActions");
const productDetailsActions = require("../pages/productDetails/productDetailsActions");
const cartActions = require("../pages/cart/cartActions");
const chaiExpect = require("chai").expect;
const searchedText = "Nike react phantom";
let singleProductName = "";
const productColor = "Black";
const productSize = "X";
const qty = "2";
let singleProductPrice;
describe("Demo Evershop product purchase journey", () => {
   it("Search with valid product", async () => {
      await homeActions.clickOnSearchIcon();
      await homeActions.enterSearchedProduct(searchedText);
      await browser.keys("Enter");
   });

   it("Add product to cart", async () => {
      await productDetailsActions.selectProductFromList(searchedText);
      singleProductName = await productDetailsActions.getSingleProductName();
      await productDetailsActions.selectProductSize(productSize);
      await productDetailsActions.selectProductColor(productColor);
      await productDetailsActions.enterQty(qty);
      singleProductPrice = await productDetailsActions.getSingleProductPrice();
      await productDetailsActions.clickOnAddToCartButton();
      await cartActions.clickOnViewCartButton();
   });

   it("Verify product name in cart page", async () => {
      const actualName = await cartActions.getProductNameFromList();
      const expectedName = singleProductName;
      chaiExpect(expectedName).to.include(actualName);
   });
   it("Verify product grand total price in cart page", async () => {
      const actualPrice = await cartActions.getGrandTotalPrice();
      console.log("actualPrice: " + actualPrice);
      const expectedPrice = singleProductPrice * qty;
      console.log("expectedPrice: " + expectedPrice);
      chaiExpect(expectedPrice).to.eql(actualPrice);
   });
});
