import { arrayMyFullName, arrayProjects } from "./costants.js";
import { greeting, buildProjects, buildNavItemProjects, addListenerItemsProjects } from "./helpers.js";

window.onload = function(){    
    document.getElementById('greetingHome').textContent = `${greeting}, eu sou`.toLocaleUpperCase();
    
    setTimeout(() => {
        document.querySelector('.section-home').classList.add('show');
    }, 500);

    let showMenuMobile = false;
    document.getElementById('showMenuMobile').addEventListener('click', () => {
        document.getElementById('menuMobile').style.display =  (!showMenuMobile) ? 'flex' : 'none';
        showMenuMobile = !showMenuMobile;
    })

    window.addEventListener("scroll", () => {
        const heightPage = window.scrollY;
        document.querySelector('header nav').style.background = (heightPage >= 100) ?  '#2E073F' : '#AD49E1';
        document.querySelector('.mobile-menu').style.background = (heightPage >= 100) ?  '#2E073F' : '#AD49E1';
        
        if(heightPage >= 400)
            document.querySelector('.section-about').classList.add('show');

        if(heightPage >= 1200)
            document.querySelector('.section-skills').classList.add('show');
        
        if(heightPage >= 1500)
            document.querySelector('.section-projects').classList.add('show');
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