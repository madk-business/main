function updatePrice() {
    var quantity = document.getElementById("quantity").value;
    var price = 0.75 * quantity;

    if (quantity >= 2) {
        price -= 0.25 * (quantity - 1);
    }

    document.getElementById("base_price").textContent = "$" + price.toFixed(2);
}

updatePrice();