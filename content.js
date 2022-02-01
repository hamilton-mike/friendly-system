var obj = localStorage.getItem("project");
obj = JSON.parse(obj);

var zero = localStorage.getItem("zero");
zero = JSON.parse(zero);

var one = localStorage.getItem("one");
one = JSON.parse(one);

const { title, description, stack, github, site, gif } = obj;

const projectName = document.querySelector('#project').textContent = title;
const tech = document.querySelector('#tech').textContent = stack;
const desc = document.querySelector('#desc').textContent = description;
const iframe = document.querySelector('iframe').src = gif;
const git = document.querySelector('#git').href = github;
const live = document.querySelector('#site').href = site;

const zeroDiv = document.querySelector('.zero');
zeroDiv.querySelector('p').textContent = zero.title;
zeroDiv.querySelectorAll('button a')[1].href = zero.site;

const oneDiv = document.querySelector('.one');
oneDiv.querySelector('p').textContent = one.title;
oneDiv.querySelectorAll('button a')[1].href = one.site;

const twoDiv = document.querySelector('.two');
twoDiv.querySelector('p').textContent = 'Coming Soon!';
