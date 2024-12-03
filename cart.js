
window.onload = function() {
    // Retrieve the cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Get the cart list container and total price element
    const cartList = document.getElementById("cartList");
    const totalPriceDiv = document.getElementById("totalPrice");

    // Initialize total price
    let totalPrice = 0;

    // Check if the cart is empty
    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
        totalPriceDiv.textContent = "Total: $0.00";
        return;
    }

    // Loop through each item in the cart and display it
    cart.forEach((item, index) => {
        const cartItem = document.createElement("li");
        cartItem.className = "cart-item";

        // Create image element
        const cartImage = document.createElement("img");
        cartImage.src = item.src;
        cartImage.className = "cart-image";

        // Create price element (price * quantity)
        const cartPrice = document.createElement("span");
        cartPrice.className = "cart-price";
        cartPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;  // Price * Quantity

        // Create quantity display element
        const cartQuantity = document.createElement("span");
        cartQuantity.className = "cart-quantity";
        cartQuantity.textContent = `Quantity: ${item.quantity}`;

        //Create remove icon (Font Awesome or custom icon)
        const removeIcon = document.createElement("button");
     removeIcon.textContent = "Remove";  // This could be a Font Awesome icon like: "<i class='fa fa-trash'></i>"
        removeIcon.className = "remove-icon";
      
       
        // Add click event to remove the item from the cart
        removeIcon.addEventListener("click", function() {
            // Remove the item from the cart array
            cart.splice(index, 1);

            // Update the cart in localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Reload the page to update the cart display
            window.location.reload();
        });

        // Append the image, price, quantity, and remove icon to the cart item
        cartItem.appendChild(cartImage);
        cartItem.appendChild(cartPrice);
        cartItem.appendChild(cartQuantity);
        cartItem.appendChild(removeIcon);

        // Add the cart item to the cart list
        cartList.appendChild(cartItem);

        // Add to the total price (price * quantity)
        totalPrice += item.price * item.quantity;
    });

    // Display the total price
    totalPriceDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;
};

// Optional: Function to clear the entire cart
function clearCart() {
    // Clear the cart from localStorage
    localStorage.removeItem("cart");

    // Reload the page to refresh the cart
    window.location.reload();
}
// Show the confirmation form when the "Confirm Order" button is clicked
function confirm() {
    document.getElementById('orderConfirmation').style.display = 'block';
}

// Function to hide the confirmation modal/form
function closeConfirmation() {
    document.getElementById('orderConfirmation').style.display = 'none';
}

// Handling form submission
document.getElementById('confirmationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const cartId = document.getElementById('cartId').value;
    const customerInfo = document.getElementById('customerInfo').value;

    // Process the cart ID and customer info (you can save or send it to a server)
    alert(`Order Confirmed!\nCart ID: ${cartId}\nCustomer Info: ${customerInfo}`);

    // Optionally redirect after confirmation
    window.location.href = "cart.html"; // You can change this to any URL you prefer
});
