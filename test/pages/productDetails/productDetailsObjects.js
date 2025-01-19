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
}
module.exports = new ProductDetailsObjects();
