import { addAndClean } from './renderings';
import './css/projectForm.css';

const renderProjectForm = () => {
  const form = document.createElement('form');
  form.classList.add('projectForm');
  const nameLabel = document.createElement('label');
  const name = document.createElement('input');
  name.setAttribute('name', 'title');
  name.setAttribute('type', 'text');
  name.required = true;
  const btn = document.createElement('button');
  btn.setAttribute('id', 'projectBtn');
  btn.setAttribute('type', 'submit');

  nameLabel.textContent = "Project Name: ";
  btn.textContent = "Add Project";
  [nameLabel, name, btn].forEach((element) => {
    form.appendChild(element);
  });

  form.addEventListener('submit', addAndClean);
  const main = document.getElementById('projectsForm');
  main.appendChild(form);
}

export { renderProjectForm }
