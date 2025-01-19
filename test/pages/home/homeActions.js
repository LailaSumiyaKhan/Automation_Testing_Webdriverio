const homeObjects = require("./homeObjects");

class HomeActions {
   async clickOnSearchIcon() {
      await homeObjects.searchIcon.click();
   }
   async enterSearchedProduct(productName) {
      await homeObjects.SearchInputField.setValue(productName);
   }
}
module.exports = new HomeActions();
