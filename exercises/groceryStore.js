var shopper = {
    groceryCart: [
      "bananas",
      "apples",
      "chicken"
    ],
    tasty: true,
    quantity: 6,
    openCart: function(){
      console.log("Hey Shopper");
    }

}
console.log(shopper.quantity);
shopper.openCart();
console.log(shopper.groceryCart[0]);
