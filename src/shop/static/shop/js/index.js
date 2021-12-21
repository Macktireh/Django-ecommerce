let teds = document.querySelectorAll(".ted");

if (localStorage.getItem("panier") == null) {
  let panier = {};
} else {
  panier = JSON.parse(localStorage.getItem("panier"));
}
// $(document).on('click', '.ted', function () {
//   console.log("yes ajouter !")
// })

teds.forEach((ted) => {
  ted.addEventListener("click", (e) => console.log("yes ajouter !"));
});
