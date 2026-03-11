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
    