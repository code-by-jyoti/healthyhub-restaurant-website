// Menu Filter Functionality
const filterButtons = document.querySelectorAll(".menu-filter button");
const menuItems = document.querySelectorAll(".food-menu-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        menuItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {
                item.style.display = "flex";
            }
            else {
                item.style.display = "none";

            }

        });

    });

});

// Sticky Navbar Effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
    
    else {
        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";
    }
    
});

// Mobile Menu Auto Close
document.querySelectorAll(".menu-items a").forEach(link => {

    link.addEventListener("click", () => {

        const checkbox = document.getElementById("box");
        if (checkbox) {
            checkbox.checked = false;
        }

    });
});

// Contact Form Validation
const form = document.querySelector(".form-container");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {

            if (!input.value.trim()) {
                valid = false;
                input.style.border = "2px solid red";
            }
            
            else {
                input.style.border = "1px solid #ccc";
            }

        });

        if (!valid) {
            alert("Please fill all fields correctly");
            return;
        }

        alert("Message sent successfully!");

        form.reset();

    });

}