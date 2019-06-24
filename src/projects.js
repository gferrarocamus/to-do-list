import { getStorage } from './storage';
import { cleanAndRender } from './addAndClean';
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
}

export { renderProjects }
