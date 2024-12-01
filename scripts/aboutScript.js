function showNavSidebar(){
    const sidebar = document.querySelector('.navSidebar');
    sidebar.style.display = 'flex';
}

function hideNavSidebar(){
    const sidebar = document.querySelector('.navSidebar');
    sidebar.style.display = 'none';
}


function toggleContact() {
    document.getElementById("contact-popup").classList.toggle("active");
}

function validateForm(event) {
    const nameInput = document.querySelector(".popup-content input[type='text']");
    const emailInput = document.querySelector(".popup-content input[type='email']");
    const messageInput = document.querySelector(".popup-content textarea");
    const errorContainer = document.querySelector(".error-message-container");
    let isValid = true;

    // Clear any previous error messages
    errorContainer.textContent = "";

    // Validate name (non-empty)
    if (nameInput.value.trim() === "") {
        isValid = false;
    }

    // Validate email using a regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
    }

    // Validate message (non-empty)
    if (messageInput.value.trim() === "") {
        isValid = false;
    }

    // Show error message or close the popup
    if (!isValid) {
        errorContainer.textContent = "Please enter a valid name, email, and message.";
    } else {
        toggleContact(); // Close the popup if valid
    }

    // Prevent form submission and scrolling
    event.preventDefault();
}

// Attach the validation function to the Submit button
document.querySelector(".popup-content .button input[type='button']").addEventListener("click", validateForm)