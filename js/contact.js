// Form Submission Processing and Constraint Verification Script
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('portfolio-contact-form');
    const errorBox = document.getElementById('error-message');
    const successBox = document.getElementById('success-message');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop default web transmission reload pass

        // Hide alert monitors initially on reset passes
        errorBox.style.display = 'none';
        errorBox.innerHTML = '';
        successBox.style.display = 'none';

        // Read input states cleanly
        const nameVal = document.getElementById('user-name').value.trim();
        const emailVal = document.getElementById('user-email').value.trim();
        const phoneVal = document.getElementById('user-phone').value.trim();
        const messageVal = document.getElementById('user-message').value.trim();

        // 1. Validation Parameter Pass: Ensure no fields are left empty
        if (!nameVal || !emailVal || !phoneVal || !messageVal) {
            showError('Submission halted: All form container elements must be completed.');
            return;
        }

        // 2. Validation Parameter Pass: Verify structural email formatting
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailVal)) {
            showError('Submission halted: Please provide a valid email format (e.g., name@example.com).');
            return;
        }

        // 3. Validation Parameter Pass: Ensure telephone block contains only digital characters
        const digitsOnlyPattern = /^[0-9]+$/;
        if (!digitsOnlyPattern.test(phoneVal)) {
            showError('Submission halted: Phone number input field must contain numeric digits only.');
            return;
        }

        // Action Triggered when Form Data clears all verification logic fields
        successBox.textContent = `Thank you, ${nameVal}! Your message has been validated and sent successfully.`;
        successBox.style.display = 'block';

        // Clear input form spaces upon completion pass
        contactForm.reset();
    });

    function showError(messageString) {
        errorBox.textContent = messageString;
        errorBox.style.display = 'block';
    }
});