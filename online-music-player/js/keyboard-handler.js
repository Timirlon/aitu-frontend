const menuItems = document.querySelectorAll("#option-list-top li");
let currentIndex = 0;

function updateFocus() {
    menuItems.forEach((item, index) => {
        item.classList.toggle("focused", index === currentIndex);
    });
}

menuItems[currentIndex].focus();
updateFocus();

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        currentIndex = (currentIndex + 1) % menuItems.length;
    } else if (event.key === "ArrowUp") {
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    }
    menuItems[currentIndex].focus();
    updateFocus();
});
