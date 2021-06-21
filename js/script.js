let toggleButton = document.getElementsByClassName("toggle_button")[0];
let navbarLinks = document.getElementsByClassName("navbar_links")[0];
let counters = document.querySelectorAll(".counter");
let speed = 1000;
counters.forEach(counter => {
    let updateCounter = () => {
        let target = +counter.getAttribute('data-target');
        let count = +counter.innerText;

        let inc = target / speed;
        console.log(count);

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCounter, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCounter();
})
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
})

