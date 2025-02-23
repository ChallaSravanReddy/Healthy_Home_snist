document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bloodDonationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            // If the form is valid, you would typically send this data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', getFormData());
            alert('Registration successful!');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        
        // Clear previous error messages
        clearErrors();

        // Validate Name
        if (!form.name.value.trim()) {
            showError(form.name, 'Name is required');
            isValid = false;
        }

        // Validate Username
        if (!form.username.value.trim()) {
            showError(form.username, 'Username is required');
            isValid = false;
        }

        // Validate Address
        if (!form.address.value.trim()) {
            showError(form.address, 'Address is required');
            isValid = false;
        }

        // Validate Blood Group
        if (!form.bloodGroup.value) {
            showError(form.bloodGroup, 'Please select a blood group');
            isValid = false;
        }

        // Validate Password
        if (!form.password.value) {
            showError(form.password, 'Password is required');
            isValid = false;
        }

        // Validate Confirm Password
        if (form.password.value !== form.confirmPassword.value) {
            showError(form.confirmPassword, 'Passwords do not match');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = message;
        formGroup.appendChild(error);
    }

    function clearErrors() {
        const errors = form.querySelectorAll('.error');
        errors.forEach(error => error.remove());
    }

    function getFormData() {
        return {
            name: form.name.value,
            username: form.username.value,
            address: form.address.value,
            bloodGroup: form.bloodGroup.value,
            password: form.password.value
        };
    }
});