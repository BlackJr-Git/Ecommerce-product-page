const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const productQuantity = document.getElementById("quantity");

function add() {
    productQuantity.innerText = parseInt(productQuantity.innerText) + 1
}

btnPlus.addEventListener('click',add)

function minus() {
    if (parseInt(productQuantity.innerText) > 0){
        parseInt(productQuantity.innerText) - 1
    } 
}

btnMinus.addEventListener('click',minus)