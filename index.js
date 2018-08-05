var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function randomnumber(){
    return Math.random() * (100 - 1) + 1;
  }
 var cartlist = {itemName: item, itemPrice: randomnumber()}
 cart.push(cartlist)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var L = getCart().length;
  if (L === 0){
    return "Your shopping cart is empty.";
  }else{
    var string = []
    if (L === 1){
      for(var a = 0; a < L; a++){
        string.push(` ${getCart()[a].itemName} at $${getCart()[a].itemPrice}`)
      }}else{
        for(var b = 0; b < L - 1; b++){
          string.push(` ${getCart()[b].itemName} at $${getCart()[b].itemPrice}`)
        }for(var c = L - 1; c < L; c++){
          string.push(` and ${getCart()[c].itemName} at $${getCart()[c].itemPrice}`)
      }
    }
  }
  return (`In your cart, you have${string}.`);
}
  


function total() {
  var cost = 0;
  for(var i = 0; i < getCart().length; i++){
    cost += parseFloat(getCart()[i].itemPrice);
  }
  return cost;
}

function removeFromCart (item) {
 ///first run a for loop on the entire getCart()
 ///then an if else
 ///if there is a matching item name then remove it and return the list
 ///if not then return the other string
}

function placeOrder(cardNumber) {
  // write your code here
}
