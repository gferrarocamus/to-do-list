import { getStorage } from './storage';
import './css/project.css';

const renderProjects = () => {
  const projects = getStorage();
  const container = document.getElementById('projects');
  projects.forEach(project => {
    const div = document.createElement('div');
    div.classList.add('project');
    const title = document.createElement('h2');
    title.textContent = project.name;
    div.appendChild(title);
    container.appendChild(div);
  })
}

export { renderProjects }
