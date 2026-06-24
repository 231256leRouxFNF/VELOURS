console.log("VELOURS loaded");

// =======================
// Newsletter
// =======================

const newsletterForm = document.querySelector(".newsletter-form");
const emailInput = document.querySelector("#newsletter-email");

if (newsletterForm && emailInput) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (emailInput.value.trim() === "") {
            alert("Please enter an email address.");
            return;
        }

        alert("Thank you for subscribing!");
    });
}

// =======================
// Appointment Button
// =======================

const appointmentBtn = document.querySelector(".appointment-btn");

if (appointmentBtn) {
    appointmentBtn.addEventListener("click", () => {
        alert("Booking system is coming soon!");
    });
}

// =======================
// Mobile Menu
// =======================

const menuBtn = document.querySelector("#menu-btn");
const mobileNav = document.querySelector("#mobile-nav");

if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });
}


// =======================
// Nice to haves
// =======================
// Fade-in Sections
// =======================

const sections = document.querySelectorAll(".fade-in");
console.log("Found", sections.length, "fade-in sections");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});
