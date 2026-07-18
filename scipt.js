const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    message.textContent = "Your message has been submitted successfully!";
    form.reset();
});