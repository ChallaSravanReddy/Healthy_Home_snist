document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bloodBankForm');

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

        // Validate Username
        if (!form.username.value.trim()) {
            showError(form.username, 'Username is required');
            isValid = false;
        }

        // Validate Password
        if (!form.password.value) {
            showError(form.password, 'Password is required');
            isValid = false;
        }

        // Validate Organization Name
        if (!form.orgName.value.trim()) {
            showError(form.orgName, 'Organization name is required');
            isValid = false;
        }

        // Validate Blood Types
        const bloodTypes = form.querySelectorAll('input[name="bloodTypes"]:checked');
        if (bloodTypes.length === 0) {
            showError(form.querySelector('.blood-types'), 'Select at least one blood type');
            isValid = false;
        }

        // Validate Address
        if (!form.address.value.trim()) {
            showError(form.address, 'Address is required');
            isValid = false;
        }

        // Validate Contact Number
        if (!form.contactNo.value.trim()) {
            showError(form.contactNo, 'Contact number is required');
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.closest('.form-group');
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
        const bloodTypes = Array.from(form.querySelectorAll('input[name="bloodTypes"]:checked'))
            .map(input => input.value);

        return {
            username: form.username.value,
            password: form.password.value,
            orgName: form.orgName.value,
            bloodTypes: bloodTypes,
            address: form.address.value,
            contactNo: form.contactNo.value
        };
    }
});