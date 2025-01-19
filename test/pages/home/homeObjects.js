class HomeObjects {
   get searchIcon() {
      return $("//a[@class='search-icon']");
   }

   get SearchInputField() {
      return $("//input[@placeholder='Search']");
   }
}
module.exports = new HomeObjects();
