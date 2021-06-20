let toggleButton = document.getElementsByClassName("toggle_button")[0];
let navbarLinks = document.getElementsByClassName("navbar_links")[0];

toggleButton.addEventListener("click",() =>{
    navbarLinks.classList.toggle("active");
})

