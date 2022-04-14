# My Personal Portfolio

### Description

Thank you for visiting my portfolio. My name is Michael and I'm a Full Stack Developer.
Here you view my most recent projects, resume, and cover letter. If you have any questions please fill out the form to contact me. Enjoy viewing my website.

### Stack

This project was made using\
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Front-End 
* Use Local Storage to set order for projects
* Pure CSS rules 
* Semantic HTML


## Code Snippet

### JavaScript 

```js
var obj = localStorage.getItem("project");
obj = JSON.parse(obj);

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
```

### CSS

```cs
.project:hover > .overlay {
    background-color: #000;
    opacity: 0.3;
    transition: all 1s;
    border-radius: 50%;
    cursor: pointer;
}
```
## Live Photos
![About Me](img/about-me.png)
![Projects](img/projects.png)
![Project Detail](img/project-details.png)

### Site Map
* [Home](https://shield-commander.netlify.app)
