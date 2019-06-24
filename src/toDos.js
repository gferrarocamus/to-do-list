import { getStorage } from "./storage";

const renderToDos = projectId => {
  const projects = getStorage();
  const project = projects.find(p => p.id === projectId);
  const toDoContainer = document.getElementById("toDos");
  project.toDos.forEach(toDo => {
    toDoContainer.appendChild(createToDo(toDo));
  });
};

const renderOnClick = e => {
  const projectId = e.target.getAttribute("data-index");
  renderToDos(+projectId);
};

const createToDo = data => {
  const div = document.createElement("div");
  div.classList.add("toDo");
  const title = document.createElement("h3");
  const description = document.createElement("p");
  const priority = document.createElement("p");
  const date = document.createElement("p");
  title.textContent = data.title;
  description.textContent = data.description;
  priority.textContent = data.priority;
  date.textContent = data.date;
  const elements = [title, description, priority, date];

  elements.forEach(element => {
    div.appendChild(element);
  });
  return div;
};

export { renderToDos, renderOnClick };
