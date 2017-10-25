function getTotal() {
  var goombaElem = document.getElementById("goomba");
  var goombaCaught = goombaElem.value;
  var boBombElem = document.getElementById("bobomb");
  var boBomb = boBombElem.value;
  var cheepcheepElem = document.getElementById("cheepcheep");
  var cheep = cheepcheepElem.value;
  var totalCoins = document.getElementById("total");
    goombaCaught*=5;
    boBomb*=7;
    cheep*=11;
  totalCoins.innerText = goombaCaught + boBomb + cheep;
}
