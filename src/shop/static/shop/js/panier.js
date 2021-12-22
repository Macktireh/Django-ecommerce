let list_products_name = document.getElementById("ul-product-name");

if (localStorage.getItem("panier") === null) {
  var storagee = {};
} else {
  storagee = JSON.parse(localStorage.getItem("panier"));
}

for (var i in storagee) {
  let product_name = storagee[i][1];
  let quantity = storagee[i][0];
  list_products_name.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
      ${product_name}
      <span class="badge badge-primary badge-pill">QTE : ${quantity}</span>
  </li>`;
}
