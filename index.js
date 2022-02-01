const projects = document.querySelectorAll('.project');

const projectArray = [
    {
        title: 'S.H.I.E.L.D.',
        description: '',
        stack: 'MongoDB | Express.js | Node.js | React.js',
        github: 'https://github.com/hamilton-mike/Marvel-Backend',
        site: 'https://shield-commander.netlify.app/',
        gif: 'https://giphy.com/embed/k44WnHDdvfClW'
    },
    {
        title: 'Tamagotchi',
        description: '',
        stack: 'HTML | CSS | Javascript',
        github: 'https://github.com/hamilton-mike/vegetaTamagotchi',
        site: 'https://vegetatamagotchi.netlify.app/',
        gif: 'https://giphy.com/embed/XAr3mee7JuXYc'
    },
    {
        title: 'Galaxy Blog',
        description: '',
        stack: 'HTML | CSS | EJS | MongoDB',
        github: 'https://github.com/hamilton-mike/project_One/tree/mike1',
        site: 'https://ga-one-project.herokuapp.com/registration',
        gif: 'https://giphy.com/embed/9E7kUhnT9eDok'
    }
];

for (let i = 0; i < projects.length; i++) {
    let project = projects[i];

    project.childNodes[3].addEventListener('click', () => {
        localStorage.setItem("project", JSON.stringify(projectArray[i]));
        const others = projectArray.filter(obj => obj !== projectArray[i]);
        localStorage.setItem("zero", JSON.stringify(others[0]));
        localStorage.setItem("one", JSON.stringify(others[1]));
        location.href = 'project-info.html';
    });
}
