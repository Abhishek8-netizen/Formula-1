data = {
    "mclaren": {
        teamName: "MCLAREN",
        drivers: "Oscar Piastri | Lando Norris",
        heroImage: "Pictures/McLaren.avif",
        fullTeamName: "McLaren Formula 1 Team",
        base: "Woking, United Kingdom",
        teamChief: "Andrea Stella",
        technicalChief: "Peter Prodromou / Neil Houldey",
        chassis: "MCL39",
        powerUnit: "Mercedes",
        parallaxImage: "Pictures/McLarenParallax.avif",
        homepageLighterGradient: "#E56D00",
        homepageDarkerGradient: "#562200",
        title: "McLaren"
    },

    "mercedes": {
        teamName: "MERCEDES",
        drivers: "George Russell | Kimi Antonelli",
        heroImage: "Pictures/Mercedes.avif",
        fullTeamName: "Mercedes-AMG PETRONAS Formula One Team",
        base: "Brackley, United Kingdom",
        teamChief: "Toto Wolff",
        technicalChief: "James Allison",
        chassis: "W16",
        powerUnit: "Mercedes",
        parallaxImage: "Pictures/MercedesParallax.avif",
        homepageLighterGradient: "#00D7B6",
        homepageDarkerGradient: "#005A4A",
        title: "Mercedes"
    },

    "redbullracing": {
        teamName: "RED BULL RACING",
        drivers: "Max Verstappen | Yuki Tsunoda",
        heroImage: "Pictures/RedBull.avif",
        fullTeamName: "Oracle Red Bull Racing",
        base: "Milton Keynes, United Kingdom",
        teamChief: "Laurent Mekies",
        technicalChief: "Pierre Waché",
        chassis: "RB21",
        powerUnit: "Honda RBPT",
        parallaxImage: "Pictures/redbullracingParallax.avif",
        homepageLighterGradient: "#4781D7",
        homepageDarkerGradient: "#002766",
        title: "Red Bull Racing"
    },

    "ferrari": {
        teamName: "FERRARI",
        drivers: "Charles Leclerc | Lewis Hamilton",
        heroImage: "Pictures/Ferrari.avif",
        fullTeamName: "Scuderia Ferrari HP",
        base: "Maranello, Italy",
        teamChief: "Frédéric Vasseur",
        technicalChief: "Loic Serra / Enrico Gualtieri",
        chassis: "SF-25",
        powerUnit: "Ferrari",
        parallaxImage: "Pictures/ferrariParalla.avif",
        homepageLighterGradient: "#ED1131",
        homepageDarkerGradient: "#5A0005",
        title: "Ferrari"
    },

    "williams": {
        teamName: "WILLIAMS",
        drivers: "Alexander Albon | Carlos Sainz",
        heroImage: "Pictures/Williams.avif",
        fullTeamName: "Atlassian Williams Racing",
        base: "Grove, United Kingdom",
        teamChief: "James Vowles",
        technicalChief: "Pat Fry",
        chassis: "FW47",
        powerUnit: "Mercedes",
        parallaxImage: "Pictures/williamsParallax.avif",
        homepageLighterGradient: "#1868DB",
        homepageDarkerGradient: "#000565",
        title: "Williams"
    },

    "racingbulls": {
        teamName: "RACING BULLS",
        drivers: "Liam Lawson | Isack Hadjar",
        heroImage: "Pictures/RacingBulls.avif",
        fullTeamName: "Visa Cash App Racing Bulls Formula One Team",
        base: "Faenza, Italy",
        teamChief: "Alan Permane",
        technicalChief: "Tim Goss",
        chassis: "VCARB 02",
        powerUnit: "Honda RBPT",
        parallaxImage: "Pictures/racingbullsParallax.avif",
        homepageLighterGradient: "#6C98FF",
        homepageDarkerGradient: "#1B3584",
        title: "Racing Bulls"
    },

    "haas": {
        teamName: "HAAS F1 TEAM",
        drivers: "Esteban Ocon | Oliver Bearman",
        heroImage: "Pictures/Haas.avif",
        fullTeamName: "MoneyGram Haas F1 Team",
        base: "Kannapolis, United States",
        teamChief: "Ayao Komatsu",
        technicalChief: "Andrea De Zordo",
        chassis: "VF-25",
        powerUnit: "Ferrari",
        parallaxImage: "Pictures/haasParallax.avif",
        homepageLighterGradient: "#9C9FA2",
        homepageDarkerGradient: "#3A3C3E",
        title: "Haas"
    },

    "astonmartin": {
        teamName: "ASTON MARTIN",
        drivers: "Lance Stroll | Fernando Alonso",
        heroImage: "Pictures/AstonMartin.avif",
        fullTeamName: "Aston Martin Aramco Formula One Team",
        base: "Silverstone, United Kingdom",
        teamChief: "Andy Cowell",
        technicalChief: "Enrico Cardile",
        chassis: "AMR25",
        powerUnit: "Mercedes",
        parallaxImage: "Pictures/astonmartinParallax.avif",
        homepageLighterGradient: "#229971",
        homepageDarkerGradient: "#003822",
        title: "Aston Martin"
    },

    "kicksauber": {
        teamName: "KICK SAUBER",
        drivers: "Nico Hulkenberg | Gabriel Bortoleto",
        heroImage: "Pictures/KickSauber.avif",
        fullTeamName: "Stake F1 Team Kick Sauber",
        base: "Hinwil, Switzerland",
        teamChief: "Jonathan Wheatley",
        technicalChief: "James Key",
        chassis: "C45",
        powerUnit: "Ferrari",
        parallaxImage: "Pictures/kicksauberParallax.avif",
        homepageLighterGradient: "#01C00E",
        homepageDarkerGradient: "#004E00",
        title: "Kick Sauber"
    },

    "alpine": {
        teamName: "ALPINE",
        drivers: "Pierre Gasly | Franco Colapinto",
        heroImage: "Pictures/Alpine.avif",
        fullTeamName: "BWT Alpine Formula One Team",
        base: "Enstone, United Kingdom",
        teamChief: "Flavio Briatore",
        technicalChief: "David Sanchez",
        chassis: "A525",
        powerUnit: "Renault",
        parallaxImage: "Pictures/alpineParallax.avif",
        homepageLighterGradient: "#00A1E8",
        homepageDarkerGradient: "#003F65",
        title: "Alpine"
    }
}

let brandName = document.getElementById("brand_name");
let drivers = document.getElementById("drivers");
let heroImage = document.getElementById("hero_image");
let fullTeamName = document.getElementById("full_team_name");
let base = document.getElementById("base");
let teamChief = document.getElementById("team_chief");
let technicalChief = document.getElementById("technical_chief");
let chassis = document.getElementById("chassis");
let powerUnit = document.getElementById("power_unit");
let parallaxImage = document.querySelector(".parallax");
let title = document.querySelector("title");

let parameters = new URLSearchParams(window.location.search);
console.log(parameters);

let teamName = parameters.get("type");

brandName.innerHTML = data[teamName].teamName;
drivers.innerHTML = data[teamName].drivers;
heroImage.setAttribute("src", data[teamName].heroImage);
fullTeamName.innerHTML = data[teamName].fullTeamName;
base.innerHTML = data[teamName].base;
teamChief.innerHTML = data[teamName].teamChief;
technicalChief.innerHTML = data[teamName].technicalChief;
chassis.innerHTML = data[teamName].chassis;
powerUnit.innerHTML = data[teamName].powerUnit;
parallaxImage.style.backgroundImage = "url(" + data[teamName].parallaxImage + ")";
title.innerHTML = data[teamName].title;

document.documentElement.style.setProperty("--homepageLighterGradient", data[teamName].homepageLighterGradient);

document.documentElement.style.setProperty("--homepageDarkerGradient", data[teamName].homepageDarkerGradient);


function changeNavColor(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navbar.classList.remove("changeNavColor");
        }
        else {
            navbar.classList.add("changeNavColor");
        }
    });
}

const header = document.querySelector("header");
const navbar = document.querySelector("nav");
let observer = new IntersectionObserver(changeNavColor, { threshold: 0.2 });
observer.observe(header);

