document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('address').value;

        const totalPrice = quantity * 299;

        const message = `
            <strong>Order Details:</strong><br>
            <strong>Strawberry Cake (500 g)</strong><br>
            <strong>Quantity:</strong> ${quantity}<br>
            <strong>Total Price:</strong> Rs ${totalPrice.toFixed(2)}<br>
            <strong>Address:</strong> ${address}<br>
            <br>
            Order is placed successfully!
        `;

        showToast(message);

        orderForm.reset();

        setTimeout(() => {
            window.location.href = "cakes.html";  // Redirect to strawberry-cakes.html
        }, 3000);  // Adjust this timing to match the toast duration
    });

    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.innerHTML = message; // Use innerHTML to allow HTML formatting
        toast.className = 'toast show';

        // Blur the background
        document.querySelector('.container').classList.add('blur');

        setTimeout(() => {
            toast.className = toast.className.replace('show', '');
            document.querySelector('.container').classList.remove('blur');  // Remove the blur effect
        }, 3000);  // Duration of the toast
    }
});
