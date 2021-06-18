let toggleButton = document.getElementsByClassName("toggle_button")[0];
let navbarLinks = document.getElementsByClassName("navbar_links")[0];

toggleButton.addEventListener("click",() =>{
    navbarLinks.classList.toggle("active");
})

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 3000);