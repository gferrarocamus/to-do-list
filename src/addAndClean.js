import { addProject } from "./projectFactory";
import { addToDo, findToDo, updateStorage } from "./toDoFactory";
import { renderProjects } from "./projects";
import { renderToDos } from "./toDos";
import { renderToDoForm } from "./toDoForm";
import { renderToDoEditForm } from "./toDoEditForm";

const formCleaner = (form) => {
  [...form.children].forEach(child => {
    if (child.type === "text") child.value = "";
  });
};

const deleteRendered = (parent, children) => {
  const container = document.getElementById(parent);
  let divs = document.querySelectorAll(children);
  [...divs].forEach(div => {
    container.removeChild(div);
  });
};

const showProjectForm = (e) => {
  e.target.classList.remove("visible");
  const form = document.querySelector(".projectForm");
  form.classList.add("visible");
};

const hideProjectForm = () => {
  const btnAdd = document.getElementById("addProjectBtn");
  btnAdd.classList.add("visible");
  const form = document.querySelector(".projectForm");
  form.classList.remove("visible");
};

const addAndClean = (e) => {
  e.preventDefault();
  if (e.target.getAttribute("id") === "projectBtn") {
    addProject();
    formCleaner(document.querySelector(".projectForm"));
    deleteRendered("projects", "#projects > div");
    deleteRendered("projects", "#projects > button");
    renderProjects();
    hideProjectForm();
    deleteRendered("toDosForm", "#toDosForm > form");
    renderToDoForm();
  } else if (e.target.getAttribute("id") === "toDoBtn") {
    addToDo();
    const form = document.querySelector(".toDoForm");
    const id = +form.project.value;
    formCleaner(form);
    deleteRendered("toDos", "#toDos > div");
    renderToDos(id);
  }
};

const cleanAndRender = (e) => {
  const projectId = e.target.getAttribute("data-index");
  deleteRendered("toDos", "#toDos > div");
  renderToDos(+projectId);
};

const showDetails = (details) => {
  [...details].forEach(detail => {
    if ([...detail.classList].indexOf("details") > -1) {
      detail.classList.toggle("hidden");
    }
  });
};

const showDetailsFromTitle = (e) => {
  const details = e.target.parentNode.children;
  showDetails(details);
};

const showDetailsFromDiv = (e) => {
  const details = e.target.children;
  showDetails(details);
};

const editToDo = (e) => {
  const parent = e.target.parentNode;
  const children = e.target.parentNode.children;
  [...children].forEach(child => {
    parent.removeChild(child);
  });
  const toDo = findToDo(parent.getAttribute("data-index"));
  renderToDoEditForm(toDo, parent);
};

const saveChanges = (e) => {
  e.preventDefault();
  const parent = e.target.parentNode.parentNode;
  const form = document.querySelector(".toDoEditForm");
  const id = parent.getAttribute("data-index");
  updateStorage(id, form);
  const index = parent.getAttribute("project-index");
  deleteRendered("toDos", "#toDos > div");
  renderToDos(+index);
};

const removeToDo = e => {};

export {
  addAndClean,
  cleanAndRender,
  showProjectForm,
  showDetailsFromTitle,
  showDetailsFromDiv,
  editToDo,
  saveChanges,
  removeToDo
};
