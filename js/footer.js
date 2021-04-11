let menuItems = document.querySelectorAll('.has-dropdown');
    if (menuItems.length > 0) {
        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = menuItems[i];
            menuItem.addEventListener("click", function (e) {
                menuItem.classList.toggle("_active");
                e.preventDefault();
            });
        }
    }