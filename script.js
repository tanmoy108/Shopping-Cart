function updatePrice(product, price, statement) {
  let quantity = document.getElementById(product + "-number");
  let quantityValue = quantity.value;
  if (statement == true) {
    quantityValue = Number(quantityValue) + 1;
  } else if (quantityValue > 0) {
    quantityValue = Number(quantityValue) - 1;
  }
  quantity.value = quantityValue;
  let quantityPrice = document.getElementById(product + "-price");
  quantityPrice.innerHTML = quantityValue * price;

  calculateTotal();
}

function getProduct(product) {
  return Number(document.getElementById(product + "-number").value);
}

function calculateTotal() {
  let item1 = getProduct("phone") * 2100;
  let item2 = getProduct("case") * 1000;
  let subTotal = item1 + item2;
  document.getElementById("priceSubtotal").innerHTML = subTotal;
  let total = subTotal - (subTotal * 10) / 100;
  document.getElementById("priceTotal").innerHTML = total;
  return "Sub Total: " + subTotal + " Tax: " + 10 + " Total: " + total;
}

function showFunction() {
  var info = calculateTotal();
  alert(info);
}

document.getElementById("phone-plus").addEventListener("click", function () {
  updatePrice("phone", 2100, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updatePrice("phone", 2100, false);
});
document.getElementById("case-plus").addEventListener("click", function () {
  updatePrice("case", 1000, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updatePrice("case", 1000, false);
});
document.getElementById("checkout").addEventListener("click", function () {
  showFunction();
});
