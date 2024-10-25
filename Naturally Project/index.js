document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Form ko submit hone se roke

        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Console par values display karein
        console.log('Login Form Submitted');
        console.log('Email:', loginEmail);
        console.log('Password:', loginPassword);
        console.log('Remember Me:', rememberMe);

        // Success message dikhana
        const messageContainer = document.createElement('div');
        messageContainer.textContent = 'Login successful!';
        messageContainer.style.color = 'green'; // Message ka rang
        messageContainer.style.marginTop = '10px';
        document.getElementById('loginForm').appendChild(messageContainer);

        // Inputs clear karna
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        document.getElementById('rememberMe').checked = false;

        // Message ko auto clear karna
        setTimeout(() => {
            messageContainer.remove();
        }, 3000); // 3 seconds baad message remove hoga
    });

    document.getElementById('registerForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Form ko submit hone se roke

        const registerEmail = document.getElementById('registerEmail').value;

        // Console par values display karein
        console.log('Register Form Submitted');
        console.log('Email:', registerEmail);

        // Success message dikhana
        const messageContainer = document.createElement('div');
        messageContainer.textContent = 'Registration successful! Check your email.';
        messageContainer.style.color = 'blue'; // Message ka rang
        messageContainer.style.marginTop = '10px';
        document.getElementById('registerForm').appendChild(messageContainer);

        // Inputs clear karna
        document.getElementById('registerEmail').value = '';

        // Message ko auto clear karna
        setTimeout(() => {
            messageContainer.remove();
        }, 3000); // 3 seconds baad message remove hoga
    });
});















// Select necessary DOM elements
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotal = document.getElementById("cartTotal");
const startShoppingButton = document.getElementById("startShopping");

// Variables to keep track of cart items
let cartItems = [];
let totalPrice = 0;

// Function to update the cart display
function updateCartDisplay() {
    // Clear the cart display
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>No products in the cart.</p>';
    } else {
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'd-flex justify-content-between align-items-center my-2';
            itemElement.innerHTML = `
                 <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>
                 <button class="btn btn-sm btn-danger remove-item" data-name="${item.name}">Remove</button>
             `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    cartTotal.textContent = `$${totalPrice.toFixed(2)} / ${cartItems.length} Items`;
}

// Event listeners for 'Add to Cart' buttons
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const productName = card.getAttribute("data-name");
        const productPrice = parseFloat(card.getAttribute("data-price"));

        // Check if item is already in the cart
        const existingItem = cartItems.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity++;
            totalPrice += productPrice;
        } else {
            cartItems.push({ name: productName, price: productPrice, quantity: 1 });
            totalPrice += productPrice;
        }

        updateCartDisplay();
    });
});

// Event listener for removing items from the cart
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        const productName = e.target.getAttribute('data-name');
        const itemIndex = cartItems.findIndex(item => item.name === productName);

        if (itemIndex > -1) {
            totalPrice -= cartItems[itemIndex].price * cartItems[itemIndex].quantity;
            cartItems.splice(itemIndex, 1);
            updateCartDisplay();
        }
    }
});

// Start Shopping button action
startShoppingButton.addEventListener("click", () => {
    // Redirect to the shopping page if needed
    alert("Redirecting to shopping...");
});