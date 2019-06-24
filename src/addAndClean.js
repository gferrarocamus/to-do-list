import { addProject } from "./projectFactory";
import { addToDo } from "./toDoFactory";
import { renderProjects } from "./projects";

const formCleaner = form => {
  [...form.children].forEach(child => {
    child.value = "";
  });
};

const deleteRendered = (data) => {
  let container;
  let divs;
  if (data === 0) {
    container = document.getElementById('projects');
    divs = document.querySelectorAll("#projects > div");
  } else {
    container = document.getElementById('toDos');
    divs = document.querySelectorAll("#toDos > div");
  }
  [...divs].forEach(div => {
    container.removeChild(div);
  })
};

const addAndClean = e => {
  e.preventDefault();
  let form;
  if (e.target.textContent === "Add Project") {
    addProject();
    form = document.querySelector(".projectForm");
    deleteRendered(0);
    renderProjects();
  } else {
    addToDo();
    form = document.querySelector(".toDoForm");
  }
  formCleaner(form);
};

export { addAndClean };
