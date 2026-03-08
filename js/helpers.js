import { arrayProjects, hours } from "./costants.js";

let greeting;
if(hours < 12)
    greeting = "Bom dia";
else if(hours < 18)
    greeting = "Boa tarde";
else greeting = "Boa noite";

function buildProjects(htmlDiv, projects){
    htmlDiv.innerHTML = "";
    projects.forEach((project) => {
        htmlDiv.innerHTML += `
            <div class="div-project">
                <div class="div-project-header">
                    <img src="${project.img}"/>
                </div>
                <div class="div-project-body">
                    <h1>${project.name}</h1>
                    <p>${project.description}</p>
                    <h2>Tecnologias: ${project.tools}</h2>
                </div>
                <div class="div-project-footer">
                    <a href="${project.url}" target="_blank">Ver projeto</a>
                </div>
            </div>
        `;
    });
}

function buildNavItemProjects(htmlNavDiv){
    const quantityItems = parseInt((arrayProjects.length % 3 == 0) ? arrayProjects.length / 3 :  (arrayProjects.length / 3) + 1);
    for(let i=0; i<quantityItems; i++){
        htmlNavDiv.innerHTML += `
            <button class="itemProject" name="${i*3}:${(i*3)+3}">${i+1}</button>
        `;
    }
}

function addListenerItemsProjects(htmlDiv, nodeListItems){
    nodeListItems.forEach(items => {
        items.addEventListener('click', function(){
            const [start, end] = this.name.split(':');
            buildProjects(htmlDiv, arrayProjects.slice(parseInt(start), parseInt(end))); 
        })
    })
}

export {
    greeting,
    buildProjects,
    buildNavItemProjects,
    addListenerItemsProjects
}