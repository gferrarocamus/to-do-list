import { addAndClean } from './addAndClean';

const renderProjectForm = () => {
  const form = document.createElement('form');
  form.classList.add('projectForm');
  const nameLabel = document.createElement('label');
  const name = document.createElement('input');
  name.setAttribute('name', 'title');
  name.setAttribute('type', 'text');
  const btn = document.createElement('button');
  btn.setAttribute('id', 'projectBtn');
  btn.addEventListener('click', addAndClean, false);

  nameLabel.textContent = "Project Name: ";
  btn.textContent = "Add Project";
  [nameLabel, name, btn].forEach((element) => {
    form.appendChild(element);
  });

  const main = document.getElementById('projects');
  main.appendChild(form);
}

export { renderProjectForm }
