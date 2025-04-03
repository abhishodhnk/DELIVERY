document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.getElementById('orderButton');
    const orderFormPopup = document.getElementById('orderFormPopup');
    const closeButton = document.querySelector('.close');
    const orderForm = document.getElementById('orderForm');
    const successMessage = document.getElementById('successMessage');

    orderButton.addEventListener('click', function() {
        orderFormPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        orderFormPopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === orderFormPopup) {
            orderFormPopup.style.display = 'none';
        }
    });

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        successMessage.style.display = 'block';
        setTimeout(function() {
            orderFormPopup.style.display = 'none';
            successMessage.style.display = 'none';
            orderForm.reset();
        }, 2000);
    });
});
