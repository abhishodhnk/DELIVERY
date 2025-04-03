document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const successMessage = `
            Thank you for contacting us, ${name}! <br>
            We have received your message: "${message}" and will respond to ${email} shortly.
        `;

        showToast(successMessage);
        contactForm.reset();

        setTimeout(() => {
            window.location.href = "contact.html";  
        }, 3000); 
    });

    function showToast(message) {
        const toast = document.createElement('div');
        toast.classList.add('toast', 'show');
        toast.innerHTML = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('show');
            toast.addEventListener('transitionend', () => {
                toast.remove();
            });
        }, 3000);  
    }
});
