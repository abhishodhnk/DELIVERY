document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('address').value;

        const totalPrice = quantity * 105; 

        const message = `
            <strong>Order Details:</strong><br>
            <strong>CocaCola Drink<br>1 ltr</strong><br>
            <strong>Quantity:</strong> ${quantity}<br>
            <strong>Total Price:</strong> Rs ${totalPrice.toFixed(2)}<br>
            <strong>Address:</strong> ${address}<br>
            <br>
            Order is placed successfully!
        `;

        showToast(message);

        orderForm.reset();

        setTimeout(() => {
            window.location.href = "Drinks.html";  
        }, 3000);  
    });

    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.innerHTML = message; 
        toast.className = 'toast show';

        
        document.querySelector('.container').classList.add('blur');

        setTimeout(() => {
            toast.className = toast.className.replace('show', '');
            document.querySelector('.container').classList.remove('blur');  
        }, 3000);  
    }
});
