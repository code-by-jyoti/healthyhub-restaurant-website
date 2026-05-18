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