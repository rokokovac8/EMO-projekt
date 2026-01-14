const nameInput = document.getElementById("productName");
const qtyInput = document.getElementById("productQty");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");
const totalItems = document.getElementById("totalItems");

let cart = [];

addBtn.addEventListener("click", function () {
    const name = nameInput.value;
    const quantity = qtyInput.value;

    if (name === "" || quantity <= 0) {
        return;
    }

    cart.push({
        name: name,
        quantity: quantity
    });

    totalItems.textContent = cart.length;

    productList.innerHTML += `<li>Naziv: ${name}, Količina: ${quantity}</li>`;

    nameInput.value = "";
    qtyInput.value = "";
});
