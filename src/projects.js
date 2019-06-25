import { getStorage } from './storage';
import { cleanAndRender, showProjectForm } from './addAndClean';
import './css/project.css';

const renderProjects = () => {
  const projects = getStorage();
  const container = document.getElementById('projects');
  projects.forEach(project => {
    const div = document.createElement('div');
    div.classList.add('project');
    div.addEventListener('click', cleanAndRender, false);
    const title = document.createElement('h2');
    title.textContent = project.name;
    title.setAttribute('data-index', project.id);
    div.appendChild(title);
    container.appendChild(div);
  })

  const btnAdd = document.createElement('button');
  btnAdd.textContent = "+";
  btnAdd.classList.add('addProjectBtn');
  btnAdd.classList.add('visible');
  btnAdd.setAttribute('id', 'addProjectBtn');
  btnAdd.addEventListener('click', showProjectForm, false);
  container.appendChild(btnAdd);
}

export { renderProjects }
