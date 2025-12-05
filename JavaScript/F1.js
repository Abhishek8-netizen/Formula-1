function changeNavBar(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            navBar.classList.remove("changeColor");
            anchorLink.classList.remove("changeFontColor");
        }
        else {
            navBar.classList.add("changeColor");
            anchorLink.classList.add("changeFontColor");
        }
    })
}

let homeSection = document.getElementById("home");

let navBar = homeSection.querySelector("nav");
let anchorLink = homeSection.querySelector("a");

let observerHome = new IntersectionObserver(changeNavBar, { threshold: 0.4 });
observerHome.observe(homeSection);

/*************************************************************************************** */

function showIntro(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            introHeading.classList.add("showIntroHeading");
            introPara.classList.add("showIntroPara");
        }
    })
}

function showf1Weekend(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            f1WeekendHeading.classList.add("showf1WeekendHeading");
            f1WeekendPara.classList.add("showf1WeekendPara");
        }
    })
}

function showchampParas(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            entry.target.classList.add("showChampionshipPara");
        }
    })
}


let introSection = document.getElementById("intro");
let introHeading = introSection.querySelector("h1");
let introPara = introSection.querySelector("p");

let observerShowIntro = new IntersectionObserver(showIntro, { threshold: 0.4 });
observerShowIntro.observe(introSection);

let f1WeekendSection = document.getElementById("f1Weekend");
let f1WeekendHeading = f1WeekendSection.querySelector("h1");
let f1WeekendPara = f1WeekendSection.querySelector("p");

let observerShowf1Wknd = new IntersectionObserver(showf1Weekend, { threshold: 0.4 });
observerShowf1Wknd.observe(f1WeekendSection);

let champParaList = document.querySelectorAll(".championshipPara");
let observerChampPara = new IntersectionObserver(showchampParas, { threshold: 0.1 });
champParaList.forEach(para => { observerChampPara.observe(para) });