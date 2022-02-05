const toggleBtn = document.querySelector(".mobile-sidebar-toggle");
const closeBtn = document.querySelector(".mobile-sidebar-close-btn");
const sidebarMenu = document.querySelector(".mobile-sidebar");
const compLinks = document.querySelectorAll(".mobile-sidebar-links a")

toggleBtn.addEventListener("click", () => {
    console.log("clicked");
    sidebarMenu.classList.toggle('show-mobile-sidebar');
})

closeBtn.addEventListener ("click", () => {
    sidebarMenu.classList.toggle("show-mobile-sidebar");
})

compLinks.forEach(item => item.addEventListener("click", () => {
    sidebarMenu.classList.toggle("show-mobile-sidebar");
}));