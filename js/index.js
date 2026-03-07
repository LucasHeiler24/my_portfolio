import { arrayMyFullName, arrayProjects } from "./costants.js";
import { greeting, buildProjects, buildNavItemProjects, addListenerItemsProjects } from "./helpers.js";

window.onload = function(){    
    document.getElementById('greetingHome').textContent = `${greeting}, eu sou`.toLocaleUpperCase();

    window.addEventListener("scroll", () => {
        document.querySelector('header nav').style.background = (window.scrollY >= 100) ?  '#2E073F' : '#AD49E1'
    });
    
    arrayMyFullName.forEach((letter, index) => {
        setTimeout(() => {
            document.getElementById('myLettersAnimated').textContent += letter;
        }, index * 500);
    });

    const showLenguages = document.getElementById('showLenguages');
    const showFrameworks = document.getElementById('showFrameworks');
    const skillsLenguages = document.getElementById('skillsLenguages');
    const skillsFrameworks = document.getElementById('skillsFrameworks');
    showLenguages.className = 'show-skills'
    skillsFrameworks.style.display = 'none'
    
    showLenguages.addEventListener('click', function() {
        this.className = 'show-skills';
        skillsFrameworks.style.display = 'none'
        skillsLenguages.style.display = 'grid'
        showFrameworks.removeAttribute('class', 'class');
    });

    showFrameworks.addEventListener('click', function() {
        this.className = 'show-skills';
        skillsLenguages.style.display = 'none'
        skillsFrameworks.style.display = 'grid';
        showLenguages.removeAttribute('class', 'class');
    });

    const carrouselProjects = document.getElementById('carrouselProjects');
    const navItemProjects = document.getElementById('navItemProjects');
    buildProjects(carrouselProjects, arrayProjects.slice(0, 3));
    buildNavItemProjects(navItemProjects);
    addListenerItemsProjects(carrouselProjects, document.querySelectorAll('.itemProject'));
}