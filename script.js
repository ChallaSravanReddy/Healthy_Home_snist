document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.getElementById('registerBtn');
    const registerModal = document.getElementById('registerModal');
    const options = document.querySelectorAll('.option');
    const donateBloodBtn = document.getElementById('donateBloodBtn');
    const bloodBankBtn = document.getElementById('bloodBankBtn');

    registerBtn.addEventListener('click', () => {
        registerModal.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });

    
    donateBloodBtn.addEventListener('click', () => {
            // Navigate to the blood donation login page
        window.location.href = 'blood-donation-login.html';
    });

    bloodBankBtn.addEventListener('click', () => {
        // Navigate to the blood donation login page
    window.location.href = 'blood-bank-registration.html';
});
   
    
});