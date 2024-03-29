const btns_add = document.querySelectorAll(".bouton-add");
const panier = document.getElementById("panier");
// const product_title = document.querySelectorAll("product-title");
// console.log(document.getElementById("product-title-1").innerHTML);

if (localStorage.getItem("panier") === null) {
  var VarPanier = {};
} else {
  VarPanier = JSON.parse(localStorage.getItem("panier"));
  panier.innerHTML = "Panier(" + Object.keys(VarPanier).length + ")";
}

// console.log(VarPanier);
// $(document).on("click", ".btn_add", function () {
//   console.log("yes ajouter !");
//   var item_id = this.id.toString();
//   console.log(item_id);
//   if (VarPanier[item_id] !== undefined) {
//     VarPanier[item_id] = VarPanier[item_id] + 1;
//   } else {
//     VarPanier[item_id] = 1;
//   }
//   console.log(VarPanier);
// });
// localStorage.clear();

btns_add.forEach((btn_add) => {
  btn_add.addEventListener("click", (e) => {
    let item_id = e.target.id;
    if (VarPanier[item_id] !== undefined) {
      quantity = VarPanier[item_id][0] + 1;
      VarPanier[item_id][0] = quantity;
      VarPanier[item_id][2] += parseFloat(
        document.getElementById("product-price-" + item_id).innerHTML
      );
    } else {
      quantity = 1;
      var name = document.getElementById("product-title-" + item_id).innerHTML;
      var price = parseFloat(
        document.getElementById("product-price-" + item_id).innerHTML
      );
      VarPanier[item_id] = [quantity, name, price];
    }
    // console.log(document.getElementById("product-price-" + item_id));
    // console.log(VarPanier);
    localStorage.setItem("panier", JSON.stringify(VarPanier));
    panier.innerHTML = "Panier(" + Object.keys(VarPanier).length + ")";
    ShowNameProduct(VarPanier);
  });
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
