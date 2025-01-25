const Utilities = require("../../utility/utilities");
const productDetailsObjects = require("./productDetailsObjects");
class productDetailsActions {
   async selectProductFromList(productName) {
      await productDetailsObjects.productFromList(productName).click();
   }
   async selectProductSize(size) {
      await productDetailsObjects.productSize(size).click();
      await browser.pause(3000);
   }
   async selectProductColor(color) {
      await productDetailsObjects.productColor(color).click();
      await browser.pause(2000);
   }
   async enterQty(qty) {
      await productDetailsObjects.qtyInputfield.setValue(qty);
      await browser.pause(2000);
   }
   async clickOnAddToCartButton() {
      await productDetailsObjects.addToCartButton.click();
      await browser.pause(2000);
   }
   async getSingleProductName() {
      return await productDetailsObjects.singleProductName.getText();
   }
   async getSingleProductPrice() {
      const productPrice =
         await productDetailsObjects.singleProductPrice.getText();
      return Utilities.textToNumber(productPrice);
   }
}
module.exports = new productDetailsActions();
