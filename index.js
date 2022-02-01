const projects = document.querySelectorAll('.project');

const projectArray = [
    {
        title: 'S.H.I.E.L.D.',
        description: '',
        stack: 'MongoDB | Express.js | Node.js | React.js',
        github: 'https://github.com/hamilton-mike/Marvel-Backend',
        site: 'https://shield-commander.netlify.app/'
    },
    {
        title: 'Tamagotchi',
        description: '',
        stack: 'HTML | CSS | Javascript',
        github: 'https://github.com/hamilton-mike/vegetaTamagotchi',
        site: 'https://vegetatamagotchi.netlify.app/'
    },
    {
        title: 'Galaxy Blog',
        description: '',
        stack: 'HTML | CSS | EJS | MongoDB',
        github: 'https://github.com/hamilton-mike/project_One',
        site: 'https://ga-one-project.herokuapp.com/registration'
    }
];


for (let i = 0; i < projects.length; i++) {
    let project = projects[i];

    project.childNodes[3].addEventListener('click', () => {
        localStorage.setItem("project", JSON.stringify(projectArray[i]))
        location.href = 'project-info.html'
    })
}
