const utilities = require("../../utility/utilities");
class ProductDetailsObjects {
   productFromList(productName) {
      return $(`(//span[contains(text(),'${productName}')])[2]`);
   }
   productSize(size) {
      return $(`//a[@href='#' and text()='${size}']`);
   }
   productColor(color) {
      return $(`//a[@href='#' and text()='${color}']`);
   }
   get qtyInputfield() {
      return $("//input[@name='qty']");
   }
   get addToCartButton() {
      return $("//button[contains(.,'ADD TO CART')]");
   }
   get singleProductName() {
      return $('//h1[contains(@class,"product-single-name")]');
   }
   get singleProductPrice() {
      return $('//span[@class="sale-price"]');
   }
}
module.exports = new ProductDetailsObjects();
