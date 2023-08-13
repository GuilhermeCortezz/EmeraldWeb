document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (name.trim() === "") {
            showError("name");
            return;
        }
        if (email.trim() === "" || !validateEmail(email)) {
            showError("email");
            return;
        }
        if (phone.trim() === "") {
            showError("phone");
            return;
        }
        if (message.trim() === "") {
            showError("message");
            return;
        }

        // Simulate form submission success (remove this and replace with actual form submission)
        simulateFormSubmission(name, email, phone, message);
    });

    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show error message for a specific form field
    function showError(fieldId) {
        const field = document.getElementById(fieldId);
        const feedback = field.nextElementSibling;
        field.classList.add("is-invalid");
        feedback.style.display = "block";
    }

    // Hide error messages and reset field styles
    function resetErrors() {
        const fields = contactForm.querySelectorAll(".is-invalid");
        fields.forEach(function (field) {
            field.classList.remove("is-invalid");
            field.nextElementSibling.style.display = "none";
        });
    }

    // Function to simulate form submission (replace with actual form submission)
    function simulateFormSubmission(name, email, phone, message) {
        // Clear form fields
        contactForm.reset();
        resetErrors();

        // Display success message
        successMessage.classList.remove("d-none");

        // You can add code here to send the form data to your server or perform other actions
    }
});
