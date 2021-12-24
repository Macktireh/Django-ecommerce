const btn_add = document.querySelector(".bouton-add");
const product_title = document.getElementById("product-title");
const product_price = document.getElementById("product-price");

if (localStorage.getItem("panier") === null) {
  var VarPanier = {};
} else {
  VarPanier = JSON.parse(localStorage.getItem("panier"));
  panier.innerHTML = "Panier(" + Object.keys(VarPanier).length + ")";
}

btn_add.addEventListener("click", (e) => {
  let item_id = e.target.id;
  if (VarPanier[item_id] !== undefined) {
    quantity = VarPanier[item_id][0] + 1;
    VarPanier[item_id][0] = quantity;
    VarPanier[item_id][2] += parseFloat(product_price.innerHTML);
  } else {
    quantity = 1;
    var name = product_title.innerHTML;
    var price = parseFloat(product_price.innerHTML);
    VarPanier[item_id] = [quantity, name, price];
  }
  // console.log(document.getElementById("product-price-" + item_id));
  // console.log(VarPanier);
  localStorage.setItem("panier", JSON.stringify(VarPanier));
  panier.innerHTML = "Panier(" + Object.keys(VarPanier).length + ")";
  ShowNameProduct(VarPanier);
});

panier.addEventListener("mousemove", ShowNameProduct(VarPanier));
function ShowNameProduct(ListPanier) {
  var VarListProduct = "";
  VarListProduct += "<h6>Listes des produits</h6>";
  VarIndex = 1;
  for (var i in ListPanier) {
    VarListProduct += VarIndex;
    // console.log(document.getElementById("product-title-" + i).innerHTML.id);
    VarListProduct += ` ${ListPanier[i][1]} Qte: ${ListPanier[i][0]}<br>`;
    VarIndex += 1;
  }
  VarListProduct +=
    "<a style='margin-top:10px;' href='/panier' class='btn btn-primary'>Accéder au panier</a>";
  $('[data-toggle="popover"]').popover();
  // panier.setAttribute("data-content", VarListProduct);
  panier.setAttribute(
    "data-content",
    `<p style="font-weight: bold;"> ${VarListProduct} </p>`
  );
}
