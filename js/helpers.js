const hours = new Date().getHours();
const arrayMyFullName = ['L', 'U', 'C', 'A', 'S', ' ', 'H', 'E', 'I', 'L', 'E', 'R'];
const arrayProjects =
[
    {
        name: 'Authorization',
        description: 
        `Esse projeto tem como objetivo, aprimorar meus conhecimentos
        em como contruir um sistema de autorização com JWT(Json Web Token).
        Foi utilizado como banco de dados Postgres e Node para desenvolver a aplicação.`,
        img: './images/projectJWT.jpeg',
        url: 'https://github.com/LucasHeiler24/project_authorization',
        tools: 'Node, Postgres'
    },
    {
        name: 'Algorithms',
        description: 
        `Esse projeto tem como objetivo, aprimorar minha lógica de programação com algoritmos,
        em plataformas como Hackerrank, LeetCode, que obetenho referêcias para desenvolver.`,
        img: './images/projectAlgorithms.png',
        url: 'https://github.com/LucasHeiler24/Algorithms',
        tools: 'C'
    },
    {
        name: 'Pokedex',
        description: 
        `Esse projeto tem como objetivo, fazer integrações (fetch) para API's externas.
        Foi utilizado a API: PokéApi para construir um HUB de pokemons, onde o usuário consiga
        navegar, filtrar e ver detalhes sobre cada pokemon.`,
        img: './images/projectAlgorithms.png',
        url: 'https://github.com/LucasHeiler24/Algorithms',
        tools: 'JavaScript'
    },
    {
        name: 'Jogo da velha',
        description: `Esse projeto tem como objetivo, fazer um clássico jogo da velha interativo com JavaScript`,
        img: './images/projectAlgorithms.png',
        url: 'https://github.com/LucasHeiler24/Algorithms',
        tools: 'JavaScript'
    },
    {
        name: 'My Components',
        description: `Esse projeto tem como objetivo, ser uma plataforma que disponibiliza aos usuários
        uma página com meus próprios componentes documentados e livres para uso.
        Utilizado Storybook para documentação.`,
        img: './images/projectStorybook.png',
        url: 'https://github.com/LucasHeiler24/Algorithms',
        tools: 'React, Storybook'
    },
];

let greeting;
if(hours < 12)
    greeting = "Bom dia";
else if(hours < 18)
    greeting = "Boa tarde";
else greeting = "Boa noite";

function activeHeader(nodeListLinksActive){
    nodeListLinksActive.forEach(links => {
        links.addEventListener('click', () => {
            links.className = "header-active-true";
        })
    });
}

function buildProjects(htmlDiv){
    arrayProjects.forEach((project) => {
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
                    <a href="${project.url}">Ver projeto</a>
                </div>
            </div>
        `
    });
}

export {
    greeting,
    arrayMyFullName,
    activeHeader,
    arrayProjects,
    buildProjects
}