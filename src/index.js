const projects = document.querySelectorAll('.project');
const form = document.querySelector('form');
const anchors = document.querySelectorAll('.content button a');

const setPaths = () => {
    const arr = Array.from(anchors)
    arr[0].href = 'https://drive.google.com/file/d/1TrF5BpSsoW_ROxTGFFsCqatABKSjxmdu/view?usp=sharing';
    arr[1].href = 'https://drive.google.com/file/d/1a0Ya-TvQj3C3OEdyKNMskMP4ShEuK6rP/view?usp=sharing';
}

const projectArray = [
    {
        title: 'S.H.I.E.L.D.',
        description: 'Commander there was an idea to bring together a group of remarkable people',
        stack: ['MongoDB', 'Express.js', 'Node.js', 'React.js'],
        github: 'https://github.com/hamilton-mike/Marvel-Backend',
        site: 'https://shield-commander.netlify.app/',
        gif: 'https://giphy.com/embed/3GnKKEw2v7bXi',
        svg: './img/marvel.svg'
    },
    {
        title: 'Tamagotchi',
        description: 'Vegeta fighting enemies, play as a virtual pet. Keep the Saiyan pride alive!',
        stack: ['HTML', 'CSS', 'Javascript'],
        github: 'https://github.com/hamilton-mike/vegetaTamagotchi',
        site: 'https://vegetatamagotchi.netlify.app/',
        gif: 'https://giphy.com/embed/bUVSTqteX1eIbhhZOO',
        svg: './img/team-four-star.svg'
    },
    {
        title: 'Galaxy Blog',
        description: 'Post quotes from your favorite Jedi or Sith Lord in a Galaxy Blog far far away...',
        stack: ['HTML', 'CSS', 'EJS', 'MongoDB'],
        github: 'https://github.com/hamilton-mike/project_One/tree/mike1',
        site: 'https://ga-one-project.herokuapp.com/registration',
        gif: 'https://giphy.com/embed/QtjNbzT6Zi5Cm2oyV2',
        svg: './img/star-war.svg'
    }
];

const setProjects = () => {
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
}

const clear = () => {
    window.onbeforeunload = () => form.reset();
}

setPaths()
setProjects()
clear()
