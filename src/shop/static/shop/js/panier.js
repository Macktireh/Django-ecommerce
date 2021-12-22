let list_products_name = document.getElementById("ul-product-name");

var storagee = JSON.parse(localStorage.getItem("panier"));
console.log(storagee);
console.log(
  `type: ${typeof storagee}    length: ${Object.keys(storagee).length}`
);
console.log("-----");
console.log(storagee[4][1]);
console.log("-----");
for (var i in storagee) {
  let product_name = storagee[i][1];
  let quantity = storagee[i][0];
  list_products_name.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
      ${product_name}
      <span class="badge badge-primary badge-pill">QTE : ${quantity}</span>
  </li>`;
  //   console.log(storagee[i][1]);
  //   console.log(storagee[i][0]);
}
