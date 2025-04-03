function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace 'correctUsername' and 'correctPassword' with actual values
    const correctUsername = 'abhi';  // example username
    const correctPassword = '1234';  // example password

    if (username === correctUsername && password === correctPassword) {
        showToast('Login successful! Redirecting...', 'success');
        
        // Create a timeline
        let countdown = 3;  // seconds
        const countdownInterval = setInterval(() => {
            showToast(`Login successful! Redirecting in ${countdown}...`, 'success');
            countdown--;

            if (countdown < 0) {
                clearInterval(countdownInterval);
                window.location.href = 'Drinks.html';
            }
        }, 1000);
    } else {
        showToast('Incorrect username or password.', 'error');
    }
}
