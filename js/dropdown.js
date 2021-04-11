let menuItems = document.querySelectorAll('.dropdown__item');
if (menuItems.length > 0) {
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        menuItem.addEventListener("click", function (e) {
            menuItem.classList.toggle("_active");
        });
    }
}
