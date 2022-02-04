var obj = localStorage.getItem("project");
obj = JSON.parse(obj);

var zero = localStorage.getItem("zero");
zero = JSON.parse(zero);

var one = localStorage.getItem("one");
one = JSON.parse(one);

const { title, description, stack, github, site, gif } = zero;

document.querySelector('#project').textContent = title;
document.querySelector('iframe').src = gif;
document.querySelector('#tech').textContent = stack;
document.querySelector('#desc').textContent = description;
document.querySelector('#git').href = github;
document.querySelector('#site').href = site;

const zeroDiv = document.querySelector('.zero');
zeroDiv.querySelector('p').textContent = obj.title;
zeroDiv.querySelectorAll('button a')[1].href = obj.site;
zeroDiv.querySelectorAll('button a')[0].addEventListener('click', (e) => {
    e.preventDefault()
    location.href = 'project-info.html';
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
