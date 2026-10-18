
document.addEventListener("DOMContentLoaded", function () {

    
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            const isOpen =
                menuButton.getAttribute("aria-expanded") === "true";

            menuButton.setAttribute("aria-expanded", String(!isOpen));
            navLinks.classList.toggle("is-open", !isOpen);
        });
    }

    
    document.querySelectorAll("[data-year]").forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    
    const packageSelect = document.getElementById("package");
    const params = new URLSearchParams(window.location.search);
    const selectedPackage = params.get("package");

    if (packageSelect && selectedPackage) {
        const validPackages = ["day", "classic", "premium", "custom"];

        if (validPackages.includes(selectedPackage)) {
            packageSelect.value = selectedPackage;
        }
    }

    
    const contactForm = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    if (contactForm && feedback) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            feedback.textContent =
                "Demo only: your message has not been sent. " +
                "Connect a form service or backend to receive enquiries.";

            feedback.classList.add("is-visible");
        });
    }

});
