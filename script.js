function orderNow() {
    window.location.href = 'order.html';
}

function addToCart(item) {
    alert(item + ' has been added to your cart.');
}

function submitForm(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
}

function placeOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const foodItem = document.getElementById('food-item').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Order placed successfully!\n\nName: ${name}\nAddress: ${address}\nFood Item: ${foodItem}\nQuantity: ${quantity}`);
}
