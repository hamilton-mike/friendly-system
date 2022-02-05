var obj = localStorage.getItem("project");
obj = JSON.parse(obj);

var zero = localStorage.getItem("zero");
zero = JSON.parse(zero);

var one = localStorage.getItem("one");
one = JSON.parse(one);

const { title, description, stack, github, site, gif, svg } = obj;

document.querySelector('#project').textContent = title;
document.querySelector('#desc').textContent = description;
document.querySelector('iframe').src = gif;
document.querySelector('#git').href = github;
document.querySelector('#site').href = site;

const ul = document.querySelector('#tech');
for (let i = 0; i < stack.length; i++) {
    const list = document.createElement('li');
    list.innerHTML = stack[i];
    ul.append(list)
}

const zeroDiv = document.querySelector('.zero');
document.querySelector('.img-zero img').src = zero.svg;
zeroDiv.querySelector('p').textContent = zero.title;
zeroDiv.querySelectorAll('button a')[1].href = zero.site;
zeroDiv.querySelectorAll('button a')[0].addEventListener('click', (e) => {
    e.preventDefault()
    location.href = 'project-info-2.html';
});

const oneDiv = document.querySelector('.one');
document.querySelector('.img-one img').src = one.svg;
oneDiv.querySelector('p').textContent = one.title;
oneDiv.querySelectorAll('button a')[1].href = one.site;
oneDiv.querySelectorAll('button a')[0].addEventListener('click', (e) => {
    e.preventDefault()
    location.href = 'project-info-3.html';
});


const twoDiv = document.querySelector('.two');
twoDiv.querySelector('p').textContent = 'Coming Soon!';
