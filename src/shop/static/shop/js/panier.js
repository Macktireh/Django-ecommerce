const panier = document.getElementById("panier");
const list_products_name = document.getElementById("ul-product-name");
const items_article = document.getElementById("items-article");
const Input_Quantity_Total = document.getElementById("Quantity-Total");
const Input_Price_Total = document.getElementById("Price-Total");
const btn_command = document.getElementById("btn-command");

if (localStorage.getItem("panier") === null) {
  var VarPanier = {};
} else {
  VarPanier = JSON.parse(localStorage.getItem("panier"));
}
panier.innerHTML = "Panier(" + Object.keys(VarPanier).length + ")";

// console.log(VarPanier);
let total_quantity = 0;
let total_price = 0;
for (var i in VarPanier) {
  let product_name = VarPanier[i][1];
  let quantity = VarPanier[i][0];
  let price = VarPanier[i][2];
  total_quantity += quantity;
  total_price += price;
  // console.log(product_name);
  list_products_name.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
      ${product_name}
      <span class="badge badge-primary badge-pill">${quantity}</span>
      <span class="badge badge-warning badge-pill">$ ${price}</span>
  </li>`;
}
list_products_name.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
TOTAL
<span class="badge badge-primary badge-pill">${total_quantity}</span>
<span class="badge badge-warning badge-pill">$ ${total_price}</span>
</li>`;
var it = {};
var it1 = {};
let index = 0;
for (var j in VarPanier) {
  // console.log(`product_id : ${j} product_name : ${VarPanier[j][1]} Qte : ${VarPanier[j][0]}`);
  if (
    it["product_id"] !== undefined &&
    it["product_name"] !== undefined &&
    it["QTE"]
  ) {
    it["product_id"] = parseInt(j);
    it["product_name"] = VarPanier[j][1]
      .replace(/\n/g, "")
      .replace(/\s\s+/g, "")
      .replace(/\\/g, "");
    it["QTE"] = VarPanier[j][0];
  } else {
    it["product_id"] = parseInt(j);
    it["product_name"] = VarPanier[j][1]
      .replace(/\n/g, "")
      .replace(/\s\s+/g, "");
    it["QTE"] = VarPanier[j][0];
  }
  if (it1[index] !== undefined) {
    it1[index] += JSON.stringify(it);
  } else {
    it1[index] = JSON.stringify(it);
  }

  index = index + 1;
}
// console.log("--- it ----");
// console.log(it);

// console.log("--- it1 ----");
// console.log(it1);

// ttt.innerHTML = JSON.stringify(VarPanier);
// console.log(nom);

// nom.value = JSON.stringify(it1);
// console.log(nom);

items_article.value = JSON.stringify(it1);
Input_Quantity_Total.value = JSON.stringify(total_quantity);
Input_Price_Total.value =
  "$" + parseFloat(JSON.stringify(total_price)).toFixed(2);

// btn_command.addEventListener("submit", () => {
//   items_article.value = JSON.stringify(it1);
//   Input_Quantity_Total.value = JSON.stringify(total_quantity);
//   Input_Price_Total.value = JSON.stringify(total_price);
// });

// console.log(it1);
// console.log(JSON.stringify(total_price));
