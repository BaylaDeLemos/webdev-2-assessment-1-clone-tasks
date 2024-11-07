document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Example: display message for form submission (simulated)
    document.querySelector('.status').textContent = "Thank you for reaching out!";
    
    // Reset form fields
    this.reset();
});
