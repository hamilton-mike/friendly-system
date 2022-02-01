const projectName = document.querySelector('#project');
const tech = document.querySelector('#tech');
const desc = document.querySelector('#desc');


var obj = localStorage.getItem("project");
obj = JSON.parse(obj);

const { title, description, stack, github, site } = obj;

projectName.innerText = title;
tech.innerText = stack;
desc.innerText = description;
