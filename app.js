const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const productQuantity = document.getElementById("quantity");

const currentPrice = document.getElementById("current-price");
const discount = document.getElementById("discount");
const normalPrice = document.getElementById("normal-price");

const miniatures = document.querySelectorAll("images");
const mainImage = document.getElementById("main-image");

const images1 = document.getElementById("img-1");
const images2 = document.getElementById("img-2");
const images3 = document.getElementById("img-3");
const images4 = document.getElementById("img-4");

function add() {
  productQuantity.innerText = parseInt(productQuantity.innerText) + 1;
}

btnPlus.addEventListener("click", add);

function minus() {
  if (parseInt(productQuantity.innerText) > 0) {
    productQuantity.innerText = parseInt(productQuantity.innerText) - 1;
  }
}

btnMinus.addEventListener("click", minus);

// currentPrice.innerText = parseInt(normalPrice.innerText) * parseInt(discount.innerText)

images1.addEventListener("click", function () {
  mainImage.src = "images/image-product-1.jpg";
  images1.style.border = "3px solid var(--main-color)";
  images1.style.borderRadius = "10px";
  images1.style.opacity = "0.3";

  images2.style.border = "";
  images3.style.border = "";
  images4.style.border = "";

  images2.style.opacity = "";
  images3.style.opacity = "";
  images4.style.opacity = "";
});

images2.addEventListener("click", function () {
  mainImage.src = "images/image-product-2.jpg";
  images2.style.border = "3px solid var(--main-color)";
  images2.style.borderRadius = "10px";
  images2.style.opacity = "0.3";

  images1.style.border = "";
  images3.style.border = "";
  images4.style.border = "";

  images1.style.opacity = "";
  images3.style.opacity = "";
  images4.style.opacity = "";
});

images3.addEventListener("click", function () {
  mainImage.src = "images/image-product-3.jpg";
  images3.style.border = "3px solid var(--main-color)";
  images3.style.borderRadius = "10px";
  images3.style.opacity = "0.3";

  images1.style.border = "";
  images2.style.border = "";
  images4.style.border = "";

  images1.style.opacity = "";
  images2.style.opacity = "";
  images4.style.opacity = "";
});

images4.addEventListener("click", function () {
  mainImage.src = "images/image-product-4.jpg";
  images4.style.border = "3px solid var(--main-color)";
  images4.style.borderRadius = "10px";
  images4.style.opacity = "0.3";

  images1.style.border = "";
  images3.style.border = "";
  images2.style.border = "";

  images2.style.opacity = "";
  images3.style.opacity = "";
  images1.style.opacity = "";
});
