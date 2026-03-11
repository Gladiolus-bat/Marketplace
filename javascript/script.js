function showNotification() {
    alert("You have no notifications at the moment.");
}

function showCart() {
    alert("Your cart is currently empty.");
}

function sellAlert() {
    alert("To sell an item, please log in or register an account.");
}

function addCart() {
    alert("Item added to cart!");
}

// Login and Register Page Alerts
function passwordAlert() {
    alert("Please contact support to reset your password.");
}

//Login page validation
loginForm = document.getElementById('LoginForm');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must be exactly 10 digits (numbers only).');
        return;
    }

    // Sending it to console for debugging
    console.log('Logging in user:', { phone, password });

    alert(`Login successful for ${phone}!`);
});

//Payment page alerts
function paymentAlert() {
    document.getElementById('PaymentForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const cardNumber = document.getElementById('card-number').value.trim();
        const cardHolder = document.getElementById('card-holder-name').value.trim();
        const expiry = document.getElementById('expiry-date').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        if (!cardNumber) {
            alert('Please enter your card number.');
            return;
        }

        if (!cardHolder) {
            alert('Please enter the card holder name.');
            return;
        }

        if (!expiry) {
            alert('Please enter the expiry date.');
            return;
        }

        if (!cvv) {
            alert('Please enter your CVV.');
            return;
        }

        alert('Payment submitted successfully!');
    });
}