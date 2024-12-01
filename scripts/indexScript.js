function showNavSidebar(){
    const sidebar = document.querySelector('.navSidebar')
    sidebar.style.display = 'flex'
}

function hideNavSidebar(){
    const sidebar = document.querySelector('.navSidebar')
    sidebar.style.display = 'none'
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
document.querySelector(".popup-content .button input[type='button']").addEventListener("click", validateForm);











let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("albumCard");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





const dialog = document.getElementById("contact-popup")
dialog.showModal()