function changePage(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            bodyElement.classList.add("changeTheme");
            navElement.classList.add("changeNavTheme");
        }
        else {
            bodyElement.classList.remove("changeTheme");
            navElement.classList.remove("changeNavTheme");
        }
    })
}

let sprintSection = document.getElementById("sprint");
let navElement = document.querySelector("nav");
let bodyElement = document.querySelector("body");

let observerSprint = new IntersectionObserver(changePage, { threshold: 0.2 });
observerSprint.observe(sprintSection);