import { getStorage } from './storage';
import { showDetailsFromDiv, showDetailsFromTitle, editToDo, removeToDo } from './addAndClean';
import { toggleChecked } from './toDoFactory';
import './css/toDos.css';

const renderToDos = (projectId) => {
  const projects = getStorage();
  const project = projects.find((p) => p.id === projectId);
  const toDoContainer = document.getElementById('toDos');
  project.toDos.forEach((toDo) => {
    toDoContainer.appendChild(createToDo(toDo));
  });
};

const createToDo = (data) => {
  const div = document.createElement('div');
  div.classList.add('toDo');
  const title = document.createElement('h3');
  title.addEventListener('click', showDetailsFromTitle, false);
  title.textContent = data.title;
  title.classList.add('inline');
  const check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.setAttribute('value', 'completed');
  check.checked = data.check;
  check.addEventListener('click', toggleChecked, false);
  check.classList.add('inline');
  const description = document.createElement('p');
  description.textContent = data.description;
  const priority = document.createElement('p');
  priority.textContent = data.priority;
  const date = document.createElement('p');
  date.textContent = data.date;
  date.classList.add('inline');
  const edit = document.createElement('button');
  edit.textContent = "Edit";
  edit.addEventListener('click', editToDo, false);
  const remove = document.createElement('button');
  remove.textContent = "Delete";
  remove.addEventListener('click', removeToDo, false);

  const details = [description, priority, edit, remove];

  details.forEach((detail) => {
    detail.classList.add('hidden');
    detail.classList.add('details');
  });

  const elements = [title, date, check, description, priority, edit, remove];

  elements.forEach((element) => {
    div.appendChild(element);
  });

  div.setAttribute('data-index', data.id);
  div.addEventListener('click', showDetailsFromDiv, false);

  return div;
};

export { renderToDos };