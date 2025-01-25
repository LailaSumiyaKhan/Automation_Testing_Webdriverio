class CartObjects {
   get viewCartButton() {
      return $('//a[@href="/cart"]');
   }
   get productNameFromList() {
      return $('//a[contains(@class,"name")]');
   }
   get grandTotalPrice() {
      return $('//div[@class="grand-total-value"]');
   }
}
module.exports = new CartObjects();
