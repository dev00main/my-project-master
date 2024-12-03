window.onload = function() {
    //This retrieves the stringified version of the filtered books array from localStorage
   const filteredBooks = JSON.parse(localStorage.getItem('filteredBooks'));
   console.log(filteredBooks);
    const list = document.createElement("ul");
    const resultsContainer = document.getElementById('bookResults');

    if (filteredBooks) {
        filteredBooks.forEach(book => {
            const listItem = document.createElement("li");
            listItem.className = "book-item";

            // Loop through the images of the book
            book.images.forEach(image => {
                const bookImageWrapper = document.createElement("div");
                bookImageWrapper.className = "ima";

                const bookImage = document.createElement("img");
                bookImage.className = "imagee";
                bookImage.src = image.src;

                const priceDiv = document.createElement("button");
                priceDiv.className = "price";
                priceDiv.innerText = `Price: $${image.price}`;

                // Create the quantity selector
                const counterDiv = document.createElement('div');
                counterDiv.classList.add('counter');

                const downButton = document.createElement('span');
                downButton.classList.add('down');
                downButton.textContent = '-';

                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = '1'; // Default value

                const upButton = document.createElement('span');
                upButton.classList.add('up');
                upButton.textContent = '+';

                // Append buttons to the counter div
                counterDiv.appendChild(downButton);
                counterDiv.appendChild(inputField);
                counterDiv.appendChild(upButton);

                // Quantity decrease functionality
                downButton.addEventListener('click', function() {
                    let quantity = parseInt(inputField.value, 10);
                    if (quantity > 1) {
                        inputField.value = quantity - 1;
                    }
                });

                // Quantity increase functionality
                upButton.addEventListener('click', function() {
                    let quantity = parseInt(inputField.value, 10);
                    inputField.value = quantity + 1;
                });

                // Add to cart functionality
                priceDiv.onclick = function() {
                    const quantity = parseInt(inputField.value, 10);
                    addToCart(image.src, image.price, quantity); // Add to cart with the quantity
                };

                // Append image, price, and quantity selector to the list item
                listItem.appendChild(bookImageWrapper);
                bookImageWrapper.appendChild(bookImage);
                bookImageWrapper.appendChild(priceDiv);
                bookImageWrapper.appendChild(counterDiv);

                list.appendChild(listItem);
            });
        });

        // Append the list of books to the container
        resultsContainer.appendChild(list);
    }
};

// Function to add items to the shopping cart
function addToCart(src, price, quantity) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.src === src);

    if (!existingItem) {
        cart.push({ src, price, quantity });
    } else {
        existingItem.quantity += quantity; // Increment quantity if item already in cart
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Function to update the cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").textContent = cartCount;
}

// Redirect to cart page on cart icon click
document.querySelector(".fas.fa-shopping-cart").onclick = function() {
    console.log("Cart icon clicked!"); 
    window.location.href = "cart.html";
}
