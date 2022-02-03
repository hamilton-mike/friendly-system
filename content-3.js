var obj = localStorage.getItem("project");
obj = JSON.parse(obj);

var zero = localStorage.getItem("zero");
zero = JSON.parse(zero);

var one = localStorage.getItem("one");
one = JSON.parse(one);

const { title, description, stack, github, site, gif } = one;

document.querySelector('#project').textContent = title;
document.querySelector('iframe').src = gif;
document.querySelector('#tech').textContent = stack;
document.querySelector('#desc').textContent = description;
document.querySelector('#git').href = github;
document.querySelector('#site').href = site;

const zeroDiv = document.querySelector('.zero');
zeroDiv.querySelector('p').textContent = zero.title;
zeroDiv.querySelectorAll('button a')[1].href = zero.site;
zeroDiv.querySelectorAll('button a')[0].addEventListener('click', (e) => {
    e.preventDefault()
    location.href = 'project-info-2.html';
});

const oneDiv = document.querySelector('.one');
oneDiv.querySelector('p').textContent = obj.title;
oneDiv.querySelectorAll('button a')[1].href = obj.site;
oneDiv.querySelectorAll('button a')[0].addEventListener('click', (e) => {
    e.preventDefault()
    location.href = 'project-info.html';
});
