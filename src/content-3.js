var obj = localStorage.getItem("project");
obj = JSON.parse(obj);

var zero = localStorage.getItem("zero");
zero = JSON.parse(zero);

var one = localStorage.getItem("one");
one = JSON.parse(one);

const { title, description, stack, github, site, gif } = one;
console.log();

document.querySelector('#project').textContent = title;
document.querySelector('iframe').src = gif;
document.querySelector('#desc').textContent = description;
document.querySelector('#git').href = github;
document.querySelector('#site').href = site;

const ul = document.querySelector('#tech');
for (let i = 0; i < stack.length; i++) {
    const list = document.createElement('li');
    list.innerHTML = stack[i];
    ul.append(list)
}

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

const twoDiv = document.querySelector('.two');
twoDiv.querySelector('p').textContent = 'Coming Soon!';
