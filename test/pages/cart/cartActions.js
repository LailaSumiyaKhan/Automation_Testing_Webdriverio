const cartObjects = require("./cartObjects");
const utilities = require("../../utility/utilities");
class CartActions {
   async clickOnViewCartButton() {
      await cartObjects.viewCartButton.click();
   }
   async getProductNameFromList() {
      return await cartObjects.productNameFromList.getText();
   }
   async getGrandTotalPrice() {
      const productPrice = await cartObjects.grandTotalPrice.getText();
      return utilities.textToNumber(productPrice);
   }
}
module.exports = new CartActions();
