import { addProject } from './projectFactory';
import { addToDo } from './toDoFactory';
import { renderProjects } from './projects';
import { renderToDos } from './toDos';
import { renderToDoForm } from './toDoForm';

const formCleaner = (form) => {
  [...form.children].forEach((child) => {
    if (child.type === 'text') child.value = '';
  });
};

const deleteRendered = (parent, children) => {
  const container = document.getElementById(parent);
  let divs = document.querySelectorAll(children);
  [...divs].forEach((div) => {
    container.removeChild(div);
  });
};

const addAndClean = (e) => {
  e.preventDefault();
  if (e.target.getAttribute('id') === 'projectBtn') {
    addProject();
    formCleaner(document.querySelector('.projectForm'));
    deleteRendered('projects', '#projects > div');
    renderProjects();
    deleteRendered('toDos', '#toDos > form');
    renderToDoForm();
  } else if (e.target.getAttribute('id') === 'toDoBtn') {
    addToDo();
    const form = document.querySelector('.toDoForm');
    const id = +form.project.value;
    formCleaner(form);
    deleteRendered('toDos', '#toDos > div');
    renderToDos(id);
  }
};

const cleanAndRender = (e) => {
  const projectId = e.target.getAttribute('data-index');
  deleteRendered('toDos', '#toDos > div');
  renderToDos(+projectId);
};

export { addAndClean, cleanAndRender };
