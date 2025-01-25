class Utilities {
   textToNumber(text) {
      return parseFloat(text.replace(/[$,]/g, ""));
   }
}
module.exports = new Utilities();
