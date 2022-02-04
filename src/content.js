var obj = localStorage.getItem("project");
obj = JSON.parse(obj);

var zero = localStorage.getItem("zero");
zero = JSON.parse(zero);

var one = localStorage.getItem("one");
one = JSON.parse(one);

const { title, description, stack, github, site, gif } = obj;

let projectName = document.querySelector('#project').textContent = title;
let tech = document.querySelector('#tech').textContent = stack;
let desc = document.querySelector('#desc').textContent = description;
let iframe = document.querySelector('iframe').src = gif;
let git = document.querySelector('#git').href = github;
let live = document.querySelector('#site').href = site;

const zeroDiv = document.querySelector('.zero');
zeroDiv.querySelector('p').textContent = zero.title;
zeroDiv.querySelectorAll('button a')[1].href = zero.site;
zeroDiv.querySelectorAll('button a')[0].addEventListener('click', (e) => {
    e.preventDefault()
    location.href = 'project-info-2.html';
});

const oneDiv = document.querySelector('.one');
oneDiv.querySelector('p').textContent = one.title;
oneDiv.querySelectorAll('button a')[1].href = one.site;
oneDiv.querySelectorAll('button a')[0].addEventListener('click', (e) => {
    e.preventDefault()
    location.href = 'project-info-3.html';
});


const twoDiv = document.querySelector('.two');
twoDiv.querySelector('p').textContent = 'Coming Soon!';
